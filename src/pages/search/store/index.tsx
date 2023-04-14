import { create, useStore } from 'zustand'
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
    logoImg: string
}


interface SearchType {
    pageNum?: number
    shopName?: string
    proNum?: string
    secondSortName?: string
    proType?: string
    proName: string
    pageSize: number
}
interface SearchState {
    searchInfo: SearchType
    total: number
    data: proInfo[]
    initSearchInfo: () => void
    fetch: (params?: any) => void
}
const init = {
    pageNum: 1,
    pageSize: 12,
    shopName: "",
    proNum: "",
    secondSortName: "",
    proType: "",
    proName: "",
}
const useSearchStore = create<SearchState>()(
    (set) => ({
        searchInfo: {
            ...init,
        },
        initSearchInfo: () => {
            set({ searchInfo: init })
        },
        data: [],
        total: 0,
        fetch: async (params: any) => {
            await http("/system/productinfo/list", { params }).then(res => {
                const { total, rows, pageNum, pageSize } = res.data
                set((state) => ({
                    data: rows,
                    total,
                    searchInfo: { ...params, pageNum, pageSize }
                }))
            })
        },
    }),
)
export { useSearchStore, init }