import { NbMenuItem } from '@nebular/theme';
import { icon } from 'leaflet';

export const MENU_ITEMS: NbMenuItem[] = [
  /*{
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },*/
  {
    title: 'OPÇÕES',
    group: true,
  },
  {
    title: 'Plantação',
    icon: 'nb-sunny',
    link: '/pages/garden',
    children: [
      {
        title: 'Canteiro #1',
        link: '/pages/garden/station1',
      },
      {
        title: 'Canteiro #2',
        link: '/pages/garden/station2',
      },
      {
        title: 'Canteiro #3',
        link: '/pages/garden/station3',
      },
      /*
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
      */
    ],
  },
  /*
  {
    title: 'Graph',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },*//*
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },*/
  {
    title: 'Mapa',
    icon: 'nb-location',
    link: '/pages/maps/leaflet',/*
    children: [
      {
        title: 'Search Maps',
        link: '/pages/maps/leaflet',
      },*//*
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],*/
  },
  /*
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  */
  /*{
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },*//*
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
  {
    title: "Cultivo",
    icon: "nb-partlysunny",
    link: '/pages/cultivo'
  },
  {
    title: "Projeto",
    icon:"nb-lightbulb",
    link: "/pages/projeto"
  },
  {
    title: "Contate-nos",
    icon: "nb-email"
  }
];
