/**
 *
 * utilsMethods
 *
 */

// URL末尾の記事IDなどを取得
export const getUrlId = (): string => {
  const currentPath = window.location.pathname;
  const result = currentPath.split("/");
  return result[2];
};
