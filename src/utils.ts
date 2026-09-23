/** Turn a path relative to public/ into a URL that respects Astro's `base` setting. */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** 2025-03-14 -> "Mar 2025" */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
