import { menu } from "@/configs/menus";
import { Box, Flex, Paper, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export function Layout() {
  return (
    <Flex p="16px" miw="100vw" gap="16px">
      <Paper w="300px" p="16px" h="calc(100vh - 32px)" shadow="md">
        <Stack>
          {menu.map((x) => (
            <MenuItem key={x.to} {...x} />
          ))}
        </Stack>
      </Paper>
      <Box flex="1">
        <Box p="md" h="calc(100vh - 32px)">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}