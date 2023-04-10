import { create } from 'zustand'
import http from '../../../http'

export interface ProductInfo {
    productId: string,
    productName: string,
    productType: string,
    firstSortName: string,
    secondSortName: string,
    productNumber: string,
    shopName: string,
    markPrice: string,
    salesPrice: string
}

interface SearchState {
    productInfo: ProductInfo[]
    fetch: () => void
}

const useSearchStore = create<SearchState>()(
    (set) => ({
        productInfo: [],
        fetch: async () => {
            await http("/search", {}).then(res => {
                set({ productInfo: res.data })
            })
        },
    }),
)

export default useSearchStore