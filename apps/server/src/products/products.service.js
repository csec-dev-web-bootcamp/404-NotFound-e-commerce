import prisma from "../config/prisma-client";

export async function createProduct(data) {
  console.log({ data });

  const product = await prisma.product.create({
    data: data,
  });
  return product;
}

export async function getManyProducts(category, search) {
  console.log({ category });
  const products = await prisma.product.findMany({
    where: {
      category: category,
      OR: [
        { description: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
        { category: { contains: search, mode: "insensitive" } },
      ],
    },
  });
  return products;
}

export async function getOneProduct(id) {
  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      category: true,
    },
  });
  return product;
}

export async function updateProduct(id, data) {
  const product = await prisma.product.update({
    where: { id },
    data: data,
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await prisma.product.delete({
    where: { id },
  });
  return product;
}
