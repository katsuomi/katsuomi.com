/**
 *
 * breakPoints
 *
 */

export const smartphoneMaxWidth = 415;
export const iPhone5sMaxWidth = 321;
export const tabletMinWidth = 850;
export const tabletMaxWidth = 1024;
export const currentWidth = window.outerWidth;

export const isSmartPhone = (): boolean => {
  return currentWidth < smartphoneMaxWidth;
};

export const isIPhone5s = (): boolean => {
  return currentWidth < iPhone5sMaxWidth;
};

export const hasWidth800 = (): boolean => {
  return currentWidth >= 800;
};
