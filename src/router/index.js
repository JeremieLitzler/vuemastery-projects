import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventCreate from "../views/EventCreate.vue";
import EventDetails from "../views/EventDetails.vue";

import store from "@/store";
import NProgress from "nprogress";

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
          console.error(err);
          next(false);
        });
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
