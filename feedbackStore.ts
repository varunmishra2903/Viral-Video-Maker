import { create } from 'zustand';

type Metrics = {
  views: number;
  likes: number;
  shares: number;
};

type FeedbackStore = {
  metrics: Metrics;
  setMetrics: (m: Metrics) => void;
};

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  metrics: { views: 0, likes: 0, shares: 0 },
  setMetrics: (m) => set({ metrics: m }),
}));
