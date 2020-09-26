declare namespace UtilsModuleCssNamespace {
  export interface IUtilsModuleCss {
    borderCircle: string;
    colorInherit: string;
    heading2Xl: string;
    headingLg: string;
    headingMd: string;
    headingXl: string;
    lightText: string;
    list: string;
    listItem: string;
    padding1px: string;
  }
}

declare const UtilsModuleCssModule: UtilsModuleCssNamespace.IUtilsModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: UtilsModuleCssNamespace.IUtilsModuleCss;
};

export = UtilsModuleCssModule;
