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
    total: number
    data: proInfo[]
    fetch: (params?: any) => void
}

const useSearchStore = create<SearchState>()(
    (set) => ({
        data: [],
        total: 0,
        fetch: async (params: any) => {
            await http("/system/productinfo/list", { params }).then(res => {
                const { total, rows } = res.data
                set(() => ({
                    data: rows,
                    total,
                }))
            })
        },
    }),
)
export { useSearchStore }