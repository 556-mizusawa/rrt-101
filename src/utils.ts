export const timeCurrentIso8601: () => string = () => {
  return new Date(Date.now() + 1000 * 60 * 60 * 9)
    .toISOString()
    .replace(/-/g, '/')
    .replace('T', ' ')
    .slice(0, 'YYYY/MM/DD hh:mm'.length);
};
