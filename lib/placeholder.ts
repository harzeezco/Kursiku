import { FooterNavLinksProp, NavLinkProps } from '@/types';

export const NAVLINKS: NavLinkProps[] = [
  {
    link: 'Home',
    href: '/',
  },
  {
    link: 'Pricing',
    href: '/pricing',
  },
  {
    link: 'Service',
    href: '/service',
  },
  {
    link: 'Blogs',
    href: '/blog',
  },
];

export const FOOTER_LINKS: FooterNavLinksProp = [
  {
    id: 0,
    title: 'Product',
    links: [
      {
        label: 'Features',
        href: '',
      },
      {
        label: 'Integration',
        href: '',
      },
      {
        label: 'Pricing',
        href: '',
      },
    ],
  },
  {
    id: 1,
    title: 'Company',
    links: [
      {
        label: 'About us',
        href: '',
      },
      {
        label: 'Careers',
        href: '',
      },
      {
        label: 'Testimonials',
        href: '',
      },
      {
        label: 'FAQs',
        href: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Resources',
    links: [
      {
        label: 'Blogs',
        href: '',
      },
      {
        label: 'Case Studies',
        href: '',
      },
      {
        label: 'Videos',
        href: '',
      },
      {
        label: 'Sitemap',
        href: '',
      },
    ],
  },
];
