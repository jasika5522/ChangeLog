import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  createNewUser,
  signin,
  verify,
  updateCurrentProduct,
} from "../controllers/user";
import { protect } from "../module/user";
const user = Router();

//* SIGNUP
user.post("/signup", createNewUser);

//* LOGIN
user.post("/login", signin);
user.post("/verify", verify);
user.post("/update-current-product", protect, updateCurrentProduct);
export default user;
