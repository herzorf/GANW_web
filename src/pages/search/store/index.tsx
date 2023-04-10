import { create } from 'zustand'
import http from '../../../http'

interface SearchState {
    bears: any
    increase: (by: number) => void
    fetch: () => void
}

const useSearchStore = create<SearchState>()(
    (set) => ({
        bears: [],
        fetch: async () => {
            await http("/search", {}).then(res => {
                set({ bears: res.data })
            })
        },
        increase: (by) => set({ bears: by + 1 }),
    }),
)

export default useSearchStore