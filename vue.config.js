const baseUrl= process.env.NODE_ENV === 'production' ? './' : '/';
module.exports = {
  baseUrl: baseUrl,
//   pwa: {
//     // configure the workbox plugin
//     workboxPluginMode: 'InjectManifest',
//     workboxOptions: {
//       swSrc: `${baseUrl}service-worker.js`,
//       // swSrc is required in InjectManifest mode.
//       // ...other Workbox options...
//     },
//   },
};
