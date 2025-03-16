import { create } from "zustand";

const useStore = create((set) => ({ 

    // overall colors

    light: true,
    themeColors: {
        bg: "#F97316", 
        text: "#1F2937",
        loadingBg : "#1F2937",
        loadingText : "#F97316"
    },

    toggleBgColor: () => set((state) => {
        const newLight = !state.light;
        return {
            light: newLight,
            themeColors: {
                bg: newLight ? "#F97316" : "#1F2937",
                text: newLight ? "#1F2937" : "#F97316",
            }
        };
    }),

    // menu
    menuOpen: false, 
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })), 

    // alert store
    isAlert: false,
    alertMessage: '',
    alertSeverity: '',

    setAlert: (message, severity) => set({ 
        alertMessage: message, 
        alertSeverity: severity, 
        isAlert: true 
    }),
    toggleAlert: (status) => set({ isAlert: status }),

    // contact modal store

    contactModal: false,
    toggleContactModal: () => set((state) => ({ contactModal: !state.contactModal })), 

    // info modal store
    infoModal: false,
    selectedPlace: null,
    toggleInfoModal: () => set((state) => ({ infoModal: !state.infoModal })),
    setSelectedPlace: (payload) => set({ selectedPlace: payload }),  
}));

export default useStore;
