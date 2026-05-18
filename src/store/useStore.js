import { create } from 'zustand';

export const useStore = create((set) => ({
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
  soundEnabled: false,
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
}));
