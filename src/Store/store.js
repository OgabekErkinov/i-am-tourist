import { create } from "zustand";

const useStore = create((set) => ({
    light: true,
    menuOpen: false,  
    contactModal: false,
    infoModal: false,
    selectedPlace: null,
    isAlert: false,
    alertMessage: '',
    alertSeverity: '',

    toggleBgColor: () => set((state) => ({ light: !state.light })),
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })), 
    toggleContactModal: () => set((state) => ({ contactModal: !state.contactModal })), 
    toggleInfoModal: () => set((state) => ({ infoModal: !state.infoModal })),
    setSelectedPlace: (payload) => set({ selectedPlace: payload }),

    setAlert: (message, severity) => set({ 
        alertMessage: message, 
        alertSeverity: severity, 
        isAlert: true 
    }),
    toggleAlert: (status) => set({ isAlert: status }),
}));

export default useStore;
