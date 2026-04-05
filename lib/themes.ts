export type Theme = {
  bg: string;
  border: string;
  title: string;
  text: string;
  current: string;
  longest: string;
  total?: string;     // optional overrides  
  date?: string;      // optional date subtext override
};

export const themes: Record<string, Theme> = {
  default: {
    bg: "#09090b", // zinc-950
    border: "#27272a", // zinc-800
    title: "#fafafa", // zinc-50
    text: "#a1a1aa", // zinc-400
    current: "#22c55e", // green-500
    longest: "#eab308", // yellow-500
    total: "#fafafa" 
  },
  github: {
    bg: "#ffffff",
    border: "#e1e4e8",
    title: "#24292e",
    text: "#586069",
    current: "#28a745",
    longest: "#dbab09",
    total: "#24292e"
  },
  radical: {
    bg: "#141321",
    border: "#e4e2e2",
    title: "#fe428e",
    text: "#a9fef7",
    current: "#fe428e",
    longest: "#f8d847",
    total: "#a9fef7"
  },
  tokyonight: {
    bg: "#1a1b26",
    border: "#27a1b9",
    title: "#70a5fd",
    text: "#38bdae",
    current: "#bf91f3",
    longest: "#c0caf5",
    total: "#70a5fd"
  },
  dracula: {
    bg: "#282a36",
    border: "#6272a4",
    title: "#ff79c6",
    text: "#f8f8f2",
    current: "#50fa7b",
    longest: "#f1fa8c",
    total: "#bd93f9"
  },
  react: {
    bg: "#222222",
    border: "#333333",
    title: "#61dafb",
    text: "#ffffff",
    current: "#61dafb",
    longest: "#ffffff",
    total: "#61dafb"
  }
};
