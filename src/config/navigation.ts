import { NAV, FOOTER_LINKS } from "../consts";

export const MAIN_NAV = NAV;
export { FOOTER_LINKS };

export type NavigationConfig = {
  main: typeof MAIN_NAV;
  footer: typeof FOOTER_LINKS;
};
