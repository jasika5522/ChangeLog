import prisma from "../db";

// Get All products

export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

// Get Product by Id

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await prisma.product.findFirst({
    where: {
      id,
      userId: req.user.id,
    },
  });

  res.json({ data: product });
};

export const getProductByDomainName = async (req, res) => {
  try {
    const domainName = req.params.domainName;
    // const id = req.params.id;
    const product = await prisma.product.findFirst({
      where: {
        domainName,
        userId: req.user.id,
      },
      include: { updates: true },
    });

    res.json({ data: product });
  } catch (err) {
    console.log(err);
  }
};

// Create Product

export const createProduct = async (req, res) => {
  const { name, domainName, description, logo } = req.body;
  const product = {
    name,
    domainName,
    description,
    logo,
    userId: req.user.id,
  };

  const createdProduct = await prisma.product.create({
    data: product,
  });

  res.json({ data: createdProduct });
};

// Updatee Product

export const updateProduct = async (req, res) => {
  console.log(req.body.name);
  const { id } = req.params;
  const { name } = req.body;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    res.json({ message: "Product doesnt exist" });
  }
  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    res.json({ data: updatedProduct });
  } catch (err) {
    console.log(err);
    res.json({ message: "Something went wrong while updating" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  if (product.userId != req.user.id) {
    return res
      .status(401)
      .json({ message: "Product doesnt belong to the user" });
  }

  await prisma.product.delete({
    where: { id },
  });

  res.json({ message: "Product deleted" });
};
