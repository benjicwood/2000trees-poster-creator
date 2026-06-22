import { createRouter, createWebHashHistory } from "vue-router";

import TreesPoster from "../components/TreesPoster.vue"
import PosterGallery from "../components/PosterGallery/PosterGallery.vue";

const routes = [
  { path: "/", component: TreesPoster },
  { path: "/trees", name: "Trees", component: TreesPoster },
  { path: "/gallery", name: "Gallery", component: PosterGallery },
];

const router = createRouter({
  history: createWebHashHistory(), // 🔹 use hash mode
  routes,
});

export default router;
