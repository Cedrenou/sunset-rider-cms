import api from '@/services/api.js'

class ProductService {
    async getProducts() {
        const url = '/products'
        const response = await api.get(url)
        return response.data
    }

    async postProduct(data) {
        const url = '/products'
        const response = await api.post(url, data)
        return response.data
    }

    async getBrands() {
        const url = '/brand'
        const response = await api.get(url)
        return response.data
    }
}

export default new ProductService()