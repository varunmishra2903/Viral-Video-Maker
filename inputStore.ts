import { create } from 'zustand';

type InputState = {
  prompt: string;
  style: string;
  platforms: string[];
  script: string;
  videoUrl: string;

  setPrompt: (prompt: string) => void;
  setStyle: (style: string) => void;
  setPlatforms: (platforms: string[]) => void;
  setScript: (script: string) => void;
  setVideoUrl: (url: string) => void;
};

export const useInputStore = create<InputState>((set) => ({
  prompt: '',
  style: '',
  platforms: [],
  script: '',
  videoUrl: '',

  setPrompt: (prompt) => set({ prompt }),
  setStyle: (style) => set({ style }),
  setPlatforms: (platforms) => set({ platforms }),
  setScript: (script) => set({ script }),
  setVideoUrl: (url) => set({ videoUrl: url }),
}));
