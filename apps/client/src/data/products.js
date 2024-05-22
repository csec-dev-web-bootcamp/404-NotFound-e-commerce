import fetcher from './fetcher'

export async function getManyProducts(){
    try {
        const response = await fetcher.get('/products')
        return response.data
        
    } catch (error) {
        return {error}
    }
}