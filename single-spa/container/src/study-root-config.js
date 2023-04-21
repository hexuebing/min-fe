import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes } from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

const apps = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
apps.forEach(registerApplication);

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication(
//   "@single-spa/welcome",
//   () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
//   location => location.pathname === '/'
// )

// registerApplication({
//   name: "@study/demojs",
//   app: () => System.import("@study/demojs"),
//   activeWhen: ["/demojs"]
// });

// registerApplication({
//   name: "@study/reactjs",
//   app: () => System.import("@study/reactjs"),
//   activeWhen: ["/reactjs"]
// });

// registerApplication({
//   name: "@study/vuejs",
//   app: () => System.import("@study/vuejs"),
//   activeWhen: ["/vuejs"]
// });

start({
  urlRerouteOnly: true,
});
