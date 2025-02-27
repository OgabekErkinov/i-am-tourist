import { create } from "zustand";

const useStore = create((set) => ({
    light: true,
    menuOpen: false,  
    
    toggleBgColor: () => set((state) => ({ light: !state.light })),
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })), 
    closeMenu: () => set({ menuOpen: false }), 
}));

export default useStore;
