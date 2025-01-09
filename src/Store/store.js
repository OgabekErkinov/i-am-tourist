import { create } from "zustand";

const useStore = create((set) => ({
    light : true,
    toggleBgColor : () => set((state) => ({light : !state.light})),   
}))

export default useStore