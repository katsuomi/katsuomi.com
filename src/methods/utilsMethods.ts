/**
 *
 * utilsMethods
 *
 */

// 現在のURL末尾の記事IDなどを取得
export const getUrlId = (): string => {
  const currentPath = window.location.pathname;
  const result = currentPath.split("/");
  if(result.length > 3) {
    return result[2];
  } else {
    return result[result.length - 1];
  }
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

// 現在日時の取得
export const getCurrentDate = (): Date => {
  return new Date();
};

// 翌日の日時の取得
export const getTommorowDate = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
};
