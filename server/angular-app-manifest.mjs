
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 786, hash: '99a34c9ff5ccd18f9d086df8aa0821069d468632f8f2cc219b956aff1b236aa0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1030, hash: 'a1a1a88af5628718aea3470afcffddfec724f37205ae209520e2758add3e7d0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Y2YEOW7A.css': {size: 148, hash: 'z2IynBqbXrk', text: () => import('./assets-chunks/styles-Y2YEOW7A_css.mjs').then(m => m.default)}
  },
};
