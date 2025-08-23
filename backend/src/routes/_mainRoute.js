import express from "express";
import projectRoute from "./projectRoute.js";
import electronicsRoute from "./electronicsRoute.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/project",
    route: projectRoute,
  },
  {
    path: "/electronics",
    route: electronicsRoute,
  },
  // Add more routes here as needed
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
