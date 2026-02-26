export function assertUrl(path) {
  if (!path) return '';
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
