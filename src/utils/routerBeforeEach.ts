import router from "@/router";
// import { useUserStore } from "@/store/user";

router.beforeEach(async (to, from, next) => {
  const userStore = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
  if (userStore.token) {
    next();
  } else {
    if (to.path === '/login') {
      next();
    } else {
        next({path: '/login'});
    }
  }
});
