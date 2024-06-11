import express from "express";
import shopController from "./controllers/shop.controller";

const routerAdmin = express.Router();
/* Shop */
routerAdmin.get("/", shopController.goHome);
routerAdmin
  .get("/login", shopController.getLogin)
  .post("/login", shopController.processLogin);
routerAdmin
  .get("/signup", shopController.getSignup)
  .post("/signup", shopController.processSignup);

routerAdmin.get("/check-me", shopController.checkAuthSession);

routerAdmin.get("/logout", shopController.logout);

/* Product */

/* User */

export default routerAdmin;
