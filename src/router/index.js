import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "@/views/EventList.vue";
import EventCreate from "@/views/EventCreate.vue";
import EventDetails from "@/views/EventDetails.vue";
import NetworkIssue from "@/views/NetworkIssue.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import ExampleVuelidate from "@/views/ExampleVuelidate.vue";

import store from "@/store";
import NProgress from "nprogress";
import ErrorHandler from "@/helpers/ErrorHandler";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
    props: true,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/event/:id",
    name: "event-details",
    component: EventDetails,
    props: true,
    beforeEnter(to, from, next) {
      store
        .dispatch("event/fetchEvent", to.params.id)
        .then((event) => {
          console.log("item fetched...");
          to.params.event = event;
          next();
        })
        .catch((err) => {
          ErrorHandler.Handle404VsConnectivity(next, err, to);
        });
    },
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
    props: true,
  },
  {
    path: "/page-not-found",
    name: "page-not-found",
    component: PageNotFound,
    props: true,
  },
  {
    path: "/formvalidationshowcase",
    component: ExampleVuelidate,
  },
  {
    path: "*",
    redirect: {
      name: "page-not-found",
      params: { resource: "page", value: "" },
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//run before navigating to the component
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log("router.beforeEach...");

  next();
});

//run right before the component is created (eq. to beforeRouteEnter?)
router.afterEach(() => {
  NProgress.done();
});

export default router;
