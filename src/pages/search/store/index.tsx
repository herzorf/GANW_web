import { create } from 'zustand'
import http from '../../../http'

export interface proInfo {
    proId: string,
    proName: string,
    proType: string,
    firstSortName: string,
    secondSortName: string,
    proNum: string,
    shopName: string,
    marketPrice: string,
    salesPrice: string
}



interface SearchState {
    proInfo: proInfo[]
    fetch: () => void
}

const useSearchStore = create<SearchState>()(
    (set) => ({
        proInfo: [],
        fetch: async () => {
            await http("/system/productinfo/list", {}).then(res => {
                set({ proInfo: res.data.rows })
            })
        },
    }),
)

export default useSearchStore