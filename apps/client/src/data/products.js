"use server"
import fetcher from './fetcher'

export async function getManyProducts(){
    try {
        const response = await fetcher.get('/products')
        return response.data
        
    } catch (error) {
        return {error}
    }
}


export async function createProduct(data) {
    try {
      const response = await fetcher.post('/products', data); // Ensure correct endpoint and payload
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error.response?.data || error.message); // Improved error logging
      throw error; // Re-throw the error for further handling
    }
  }

  
export async function getProduct(id) {
  try {
    const response = await fetcher.get(`/products/${id}`); // Ensure correct endpoint and payload
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error.response?.data || error.message); // Improved error logging
    throw error; // Re-throw the error for further handling
  }
}