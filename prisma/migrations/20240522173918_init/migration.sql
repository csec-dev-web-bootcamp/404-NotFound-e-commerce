-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'CANCELED', 'NOTPAID', 'PAID');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'customer');

-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(36) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'admin',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "imgUrl" TEXT NOT NULL DEFAULT 'https://static.vecteezy.com/system/resources/previews/022/205/612/non_2x/shopping-cart-logo-icon-design-template-isolated-vector.jpg',
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "stockQuantity" INTEGER NOT NULL,
    "categoryId" VARCHAR(36),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" VARCHAR(36) NOT NULL,
    "userId" VARCHAR(36) NOT NULL,
    "productId" VARCHAR(36) NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" VARCHAR(36) NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,
    "userId" VARCHAR(36) NOT NULL,
    "productId" VARCHAR(36) NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" VARCHAR(36) NOT NULL,
    "paymentRef" VARCHAR(255),
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "userId" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItems" (
    "id" VARCHAR(36) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "totalPrice" DOUBLE PRECISION DEFAULT 0,
    "orderId" VARCHAR(36),
    "productId" VARCHAR(36) NOT NULL,

    CONSTRAINT "orderItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToWishlist" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToWishlist_AB_unique" ON "_ProductToWishlist"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToWishlist_B_index" ON "_ProductToWishlist"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToWishlist" ADD CONSTRAINT "_ProductToWishlist_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToWishlist" ADD CONSTRAINT "_ProductToWishlist_B_fkey" FOREIGN KEY ("B") REFERENCES "Wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
