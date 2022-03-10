const jwt = require("jsonwebtoken");
const Response = require("../utils/response");

let ordersKeyValidation = (req, res, next) => {
  let ordersKey = req.headers.orderskey;
  if (!ordersKey) {
    return Response.unauthorized(res, "orders Key no provider");
  } else if (ordersKey !== process.env.ORDERSKEY) {
    return Response.unauthorized(res, "Invalid ordersKey");
  }
  return next();
};
module.exports = {
  ordersKeyValidation,
};
