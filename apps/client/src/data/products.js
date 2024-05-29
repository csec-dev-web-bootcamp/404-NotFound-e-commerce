"use server";
import fetcher from "./fetcher";

export async function getManyProducts(query) {
  try {
    console.log({ query });
    const response = await fetcher.get(`/products?${query}`);
    return response.data;
  } catch (error) {
    return { error };
  }
}

export async function createProduct(data) {
  try {
    const response = await fetcher.post("/products", data); // Ensure correct endpoint and payload
    return response.data;
  } catch (error) {
    console.error(
      "Error creating product:",
      error.response?.data || error.message
    ); // Improved error logging
    throw error; // Re-throw the error for further handling
  }
}

export async function updateProduct(id, data) {
  try {
    const response = await fetcher.put(`/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating product:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function getProduct(id) {
  try {
    const response = await fetcher.get(`/products/${id}`); // Ensure correct endpoint and payload
    return response.data;
  } catch (error) {
    console.error(
      "Error creating product:",
      error.response?.data || error.message
    ); // Improved error logging
    throw error; // Re-throw the error for further handling
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetcher.delete(`/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    throw error;
  }
}
