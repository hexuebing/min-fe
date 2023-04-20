import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication( 
  "@single-spa/welcome",
  () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
  location => location.pathname === '/'
)

registerApplication({
  name: "@study/demojs",
  app: () => System.import("@study/demojs"),
  activeWhen: ["/demojs"]
});

start({
  urlRerouteOnly: true,
});
