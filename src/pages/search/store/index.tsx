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
    pageNum: number
    pageSize: number
    total: number
    fetch: (params?: any) => void
}

const useSearchStore = create<SearchState>()(
    (set) => ({
        total: 0,
        pageNum: 1,
        pageSize: 10,
        proInfo: [],
        fetch: async (params: any) => {
            await http("/system/productinfo/list", { params }).then(res => {
                const { total, rows } = res.data
                set({ proInfo: rows, total })
            })
        },
    }),
)

export default useSearchStore