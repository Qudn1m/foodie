import React from "react";
import Toggle from "react-toggle";
import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
const useColorSchemeState = createPersistedState("colorScheme");

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDark, setIsDark] = useColorSchemeState();
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();
    return (
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
    );
  };
  