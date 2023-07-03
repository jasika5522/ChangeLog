import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputError } from "../middlewares.ts";
// Handlers
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductByDomainName,
} from "../controllers/product";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/public/:domainName", getProductByDomainName);
router.post(
  "/",

  createProduct
);
router.put(
  "/:id",
  body("name", "name must be 1 or more character.")
    .optional()
    .isString()
    .isLength({ min: 1 }),
  body("domainName", "domain name does not exist")
    .optional()
    .isString()
    .isLength({ min: 1 }),
  handleInputError,
  updateProduct
);
router.delete("/:id", deleteProduct);

export default router;
