export default {
  Handle404VsConnectivity(next, err, routeTo) {
    console.error(err);
    if (err.response && err.response.status === 404) {
      next({
        name: "page-not-found",
        params: { resource: "event", value: routeTo.params.id },
      });
    } else {
      next({
        name: "network-issue",
      });
    }
  },
};
