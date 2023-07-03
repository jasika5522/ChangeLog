import prisma from "../db";
import { createJWT, hashPassword, comparePasswords } from "../module/user";
import jwt from "jsonwebtoken";

export const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await hashPassword(password);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  console.log("USer", user);
  if (user) {
    return res
      .status(403)
      .json({ message: "User already exist. Try loging in insteed!" });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });
    const token = await createJWT(user);
    res.json({ token });
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return res.status(401).json({ message: "This email does not exist" });
  }

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = createJWT(user);
  console.log(token);

  res.json({ token, user });
};

export const verify = async (req, res) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.json({ status: false, user: null });
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    console.log("here");
    return res.json({ status: false, user: null });
  }

  try {
    let payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
      include: {
        products: true,
      },
    });
    if (!user) {
      return res.status(404).json({ status: false, user: null });
    }
    payload = user;
    console.log("payload", payload);

    return res.json({ status: true, user: payload });
  } catch (e) {
    console.error(e);
    return res.json({ status: false, user: null });
  }
};

export const updateCurrentProduct = async (req, res) => {
  const { currentProduct } = req.body;

  console.log("USER", req.user.id, "currentProduct", currentProduct);

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        currentProduct,
      },
    });
    console.log("currentProduct updated", res.data);
    return res.json({ updatedUser });
  } catch (err) {
    console.log(err);
  }
};
