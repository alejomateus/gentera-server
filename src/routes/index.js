const authRoutes = require("./auth");

const { ordersKeyValidation } = require("./../middlewares/auth");

const routes = (app) => {
  app.use("", [ordersKeyValidation], authRoutes);
};
module.exports = routes;
