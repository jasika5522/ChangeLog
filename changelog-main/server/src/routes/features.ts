import { Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();

// FEATURES
router.get("/", () => {});
router.post(
  "/",
  body("name").exists().isString(),
  body("description").exists().isString(),
  () => {}
);
router.get("/:id", () => {});
router.put(
  "/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.delete("/:id", () => {});
export default router;
