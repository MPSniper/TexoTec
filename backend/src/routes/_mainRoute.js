import express from "express";
import buildingRoute from "./buildingRoute.js";
import electronicsRoute from "./electronicsRoute.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/building",
    route: buildingRoute,
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
