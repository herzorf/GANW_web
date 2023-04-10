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
    markPrice: string,
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
            await http("/system/proinfo/list", {}).then(res => {
                console.log(res)
                set({ proInfo: res.data })
            })
        },
    }),
)

export default useSearchStore