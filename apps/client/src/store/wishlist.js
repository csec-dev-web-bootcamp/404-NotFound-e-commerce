import { create } from "zustand";

export const useWishlist = create((set) => ({
  wishlistProducts: [],

  addToWishlist: (product) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));
      currentState.wishlistProducts.push({
        ...product,
      });

      return currentState;
    }),

  removeFromWishlist: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.wishlistProducts = currentState.wishlistProducts.filter(
        (product) => product.id !== id
      );

      return currentState;
    }),


}));