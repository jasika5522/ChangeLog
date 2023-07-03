import { Router } from "express";
import { body, check, oneOf, validationResult } from "express-validator";
import {
  getUpdates,
  getOneUpdate,
  createUpdate,
  updateUpdate,
  deleteUpdate,
} from "../controllers/update";
import { handleInputError } from "../middlewares.ts";
const router = Router();

// const updateValidator = [
//   body("title").optional().isString().notEmpty(),
//   body("body").optional().isString().notEmpty(),
//   body("version").optional().isString(),
//   body("featureImage").optional().isString(),
//   body("socialImage").optional().isString(),
//   body("productId").isString().notEmpty(),
// ];
// const postValidator = [
//   body("title").notEmpty().isString().withMessage("Title is required"),
//   body("body").notEmpty().isString().withMessage("Body is required"),
//   body("version").optional().isString(),
//   body("type")
//     .isIn(["FEATURE", "BUGFIX", "SECURITY", "PERFORMANCE"])
//     .withMessage("Invalid type"),
//   body("isPublic").optional().isBoolean(),
//   body("feedbackFlag").optional().isBoolean(),
//   body("featureImage").optional().isString(),
//   body("socialImage").optional().isString(),
//   body("productId").notEmpty().withMessage("Product ID is required"),
// ];

router.get("/", getUpdates);
router.get("/:id", getOneUpdate);
router.post("/", createUpdate);
router.put("/:id", updateUpdate);
router.delete("/:id", deleteUpdate);

export default router;
