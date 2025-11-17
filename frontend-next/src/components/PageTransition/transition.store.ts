import { create } from 'zustand'

interface TransitionState {
  isAnimating: boolean
  afterFisrtAppLoading: boolean
  start: () => void
  finish: () => void
  setFirstAppLoading: () => void
}

export const useTransitionStore = create<TransitionState>((set) => ({
  isAnimating: false,
  afterFisrtAppLoading: false,

  start: () =>
    set({ isAnimating: true }),

  finish: () =>
    set({ isAnimating: false }),

  setFirstAppLoading: () =>
    set({ afterFisrtAppLoading: true }),
}))
