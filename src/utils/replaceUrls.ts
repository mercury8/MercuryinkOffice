export const replaceUrls = (
  content: string,
  replacementUrl: string
): string => {
  return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl);
};
