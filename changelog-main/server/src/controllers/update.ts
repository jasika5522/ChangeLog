import prisma from "../db";

export const getOneUpdate = async (req, res) => {
  const { productId } = req.body;
  const { id } = req.params;

  if (!productId || !id) {
    return res.status(400).json({ message: "Missing arguments" });
  }
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    return res.status(404).json({ message: "Product does not exist" });
  }
  const data = await prisma.update.findFirst({
    where: {
      id,
      productId,
    },
  });
  if (!data) {
    return res.status(404).json({ message: "This update doesnot exist." });
  }

  res.json({ data });
};
export const getUpdates = async (req, res) => {
  const productId = req.headers.productid;
  console.log("PRODUCT ID", req.headers);

  if (!productId) {
    return res.status(400).json({ message: "Missing arguments" });
  }
  const updates = await prisma.update.findMany({
    where: {
      productId,
    },
  });

  res.json({ data: updates });
};
export const createUpdate = async (req, res) => {
  const {
    title,
    body,
    version,
    type,
    isPublic,
    feedbackFlag,
    featureImage,
    socialImage,
    productId,
  } = req.body;

  console.log("Data:", type);

  const update = await prisma.update.create({
    data: {
      title,
      body,
      version,
      type,
      feedbackFlag,
      featureImage,
      socialImage,
      isPublic,
      product: { connect: { id: productId } },
    },
  });

  return res.json(update);
};
export const updateUpdate = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    body,
    version,
    type,
    isPublic,
    feedbackFlag,
    featureImage,
    socialImage,
  } = req.body;

  try {
    const update = await prisma.update.findUnique({
      where: { id },
    });

    if (!update) {
      return res.status(404).json({ message: "Update not found." });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }

  try {
    const data = await prisma.update.update({
      where: { id },
      data: {
        title,
        body,
        version,
        type,
        isPublic,
        feedbackFlag,
        featureImage,
        socialImage,
      },
    });

    return res.json({ data });
  } catch (err) {
    console.log("ERROR in updateUpdate", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteUpdate = async (req, res) => {};
