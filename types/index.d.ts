export type NavLinkProps = {
  link: string;
  href: string;
};

export type FooterNavLinksProp = {
  id: number;
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}[];
