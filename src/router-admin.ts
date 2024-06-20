import express from "express";
import shopController from "./controllers/shop.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

const routerAdmin = express.Router();
/* Shop */
routerAdmin.get("/", shopController.goHome);

routerAdmin
  .get("/login", shopController.getLogin)
  .post("/login", shopController.processLogin);
routerAdmin.get("/signup", shopController.getSignup).post(
  "/signup",
  makeUploader("members").single("memberImage"),
  // makeUploader("members").array("memberImages", 5),
  shopController.processSignup
);

routerAdmin.get("/check-me", shopController.checkAuthSession);

routerAdmin.get("/logout", shopController.logout);

/* Product */
routerAdmin.get(
  "/product/all",
  shopController.verifyShop,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  shopController.verifyShop,
  // uploadProductImage.single("productImage"),
  makeUploader("products").single("productImage"),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  shopController.verifyShop,
  productController.updateChosenProduct
);

/* User */

export default routerAdmin;
