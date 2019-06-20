import { ITheme } from '../type';
import { Storage } from './storage';
import { isBrowser } from './is-browser';

export const preferredTheme = (): ITheme['theme'] => {
  const isLightModeSystem =
    isBrowser() && matchMedia('(prefers-color-scheme: light)').matches;
  const hasPreviousPreference = Storage.getTheme();

  if (hasPreviousPreference) {
    return hasPreviousPreference;
  }
  if (isLightModeSystem) {
    return 'light';
  }

  return 'dark';
};
