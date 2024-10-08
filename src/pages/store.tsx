import { create } from 'zustand'

interface useStore {
	query: string
	setQuery: (queryNew: string) => void
}

const useStoreE = create<useStore>(set => ({
	query: 'bitcoin',
	setQuery: query => set({ query: query }),
}))

export default useStoreE