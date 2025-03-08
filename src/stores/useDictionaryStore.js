import { create } from "zustand";

export const useDictionaryStore = create((set) => ({
  dictionary: null,
  setDictionary: (dictionary) => set({ dictionary }),
}));
