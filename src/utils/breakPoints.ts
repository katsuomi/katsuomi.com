export const smartphoneMaxWidth = 415;
export const iPhone5sMaxWidth = 321;
export const tabletMinWidth = 850;
export const tabletMaxWidth = 1024;
export const currentWidth = window.outerWidth;

export const isSmartPhone = (): boolean => {
  if (currentWidth < smartphoneMaxWidth) {
    return true;
  }
  return false;
};

export const isIPhone5s = (): boolean => {
  if (currentWidth < iPhone5sMaxWidth) {
    return true;
  }
  return false;
};

export const hasWidth800 = (): boolean => {
  if (currentWidth >= 800) {
    return true;
  }
  return false;
};
