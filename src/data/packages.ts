// Open-source UPM packages shown on /open-source/.
//
// Published packages are pulled LIVE from the GitHub API at build time, so every
// `kidzdev-*` repo you push appears automatically on the next deploy. If GitHub is
// unreachable during a build, we fall back to the committed snapshot so the build
// never breaks. Planned (not-yet-published) packages are listed manually below.

import snapshot from './packages-snapshot.json';

const GH_USER = 'knabsiraphop';
const REPO_PREFIX = 'kidzdev-'; // only these repos are treated as packages

export interface Package {
  repo: string; // github repo name
  name: string; // displayName (package.json) or derived from repo
  upm: string; // com.kidzdev.unity.<x>
  version: string;
  unity: string;
  description: string;
  category: string;
  stars: number;
  updated: string; // YYYY-MM-DD
  url: string; // github repo url
  git: string; // UPM "Add package from git URL" target
  status: 'published';
}

export interface PlannedPackage {
  name: string;
  description: string;
  category?: string;
  status: 'planned';
}

// ⬇️ Not-yet-published packages from your stock. Add { name, description, category }.
// They render as dimmed "Planned" cards. Leave empty to hide the Planned section.
export const plannedPackages: PlannedPackage[] = [];

// Map a repo name to a coarse category for the filter chip.
function categoryFor(repo: string): string {
  const r = repo.toLowerCase();
  if (/(scroll|responsive|safe-area|popup|navigator|snap|ui)/.test(r)) return 'UI';
  if (/audio/.test(r)) return 'Audio';
  if (/local/.test(r)) return 'Localization';
  if (/(sheet|importer|editor)/.test(r)) return 'Editor';
  return 'Core';
}

// "kidzdev-unity-scroll-snap" -> "KidzDev Unity Scroll Snap"
function titleFromRepo(repo: string): string {
  return repo
    .split('-')
    .map((w) => (w === 'kidzdev' ? 'KidzDev' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

function ghHeaders(): Record<string, string> {
  const h: Record<string, string> = { Accept: 'application/vnd.github+json' };
  const token = process.env.GITHUB_TOKEN; // provided by GitHub Actions; optional locally
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function fetchPackageJson(repo: string): Promise<any | null> {
  for (const branch of ['main', 'master']) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${GH_USER}/${repo}/${branch}/package.json`);
      if (res.ok) return JSON.parse(await res.text());
    } catch {
      /* try next branch */
    }
  }
  return null;
}

function snapshotPackages(): Package[] {
  return (snapshot as any[]).map((p) => ({
    ...p,
    status: 'published' as const,
    url: `https://github.com/${GH_USER}/${p.repo}`,
    git: `https://github.com/${GH_USER}/${p.repo}.git`,
  }));
}

/** Fetch published packages live from GitHub; fall back to the committed snapshot. */
export async function fetchPublishedPackages(): Promise<Package[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&type=owner`, {
      headers: ghHeaders(),
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos = (await res.json()) as any[];
    const pkgRepos = repos.filter((r) => r.name.startsWith(REPO_PREFIX) && !r.fork && !r.archived);
    if (pkgRepos.length === 0) throw new Error('no package repos found');

    const packages = await Promise.all(
      pkgRepos.map(async (r): Promise<Package> => {
        const pj = await fetchPackageJson(r.name);
        return {
          repo: r.name,
          name: pj?.displayName || titleFromRepo(r.name),
          upm: pj?.name || '',
          version: pj?.version || '',
          unity: pj?.unity || '',
          description: pj?.description || r.description || '',
          category: categoryFor(r.name),
          stars: r.stargazers_count ?? 0,
          updated: (r.pushed_at || r.updated_at || '').slice(0, 10),
          url: r.html_url,
          git: `${r.html_url}.git`,
          status: 'published' as const,
        };
      })
    );
    return sortPackages(packages);
  } catch (err) {
    console.warn(`[packages] live fetch failed, using snapshot: ${(err as Error).message}`);
    return sortPackages(snapshotPackages());
  }
}

function sortPackages(list: Package[]): Package[] {
  return list.sort((a, b) => b.stars - a.stars || b.updated.localeCompare(a.updated) || a.name.localeCompare(b.name));
}
