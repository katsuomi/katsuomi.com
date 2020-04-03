/**
 *
 * utilsMethods
 *
 */

// 現在のURL末尾の記事IDなどを取得
export const getUrlId = (): string => {
  const currentPath = window.location.pathname;
  const result = currentPath.split("/");
  return result[2];
};

// 文字列をencode
export const encodeToString = (value: string): string => {
  return encodeURIComponent(value);
};

// 文字列をdecode
export const decodeToString = (value: string): string => {
  return decodeURIComponent(value);
};

// ダイアログの表示
export const dialogMessage = (value: string): boolean => {
  return window.confirm(value);
};