export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterItem {
  label: string;
  href?: string;
}

export interface DateFormat {
  locale: string;
  options: Intl.DateTimeFormatOptions;
  template: string;
}

// Site-wide configuration.
export const SITE_TITLE = "役に立たないブログ";
export const SITE_DESCRIPTION = "";
export const SITE_URL = "https://localhost:4321";
export const SITE_LANG = "ja";

export const DATE_FORMAT: DateFormat = {
  locale: "ja-JP",
  options: { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Tokyo" },
  template: "{year}-{month}-{day}",
};

export const SITE_FAVICON = "/favicon.svg";
// Optional stylesheet in public/, e.g. "/custom.css".
export const CUSTOM_STYLESHEET: string | undefined = undefined;

// Add navigation and footer links here without editing components.
export const NAV_ITEMS: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];
export const FOOTER_ITEMS: FooterItem[] = [];
  