import { useMediaQuery } from "react-responsive";

export function useDarkMode() {
  return useMediaQuery({ query: "(prefers-color-scheme: dark)" });
}
