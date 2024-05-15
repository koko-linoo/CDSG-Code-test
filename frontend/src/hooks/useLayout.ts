import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function useLayout() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const isDesktop = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

  return { isMobile, isTablet, isDesktop };
}
