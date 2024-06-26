import { AddTaskModal } from "@/components/common/AddTaskModal";
import { Group, Text } from "@mantine/core";

export function ToolBar() {
  return (
    <Group justify="space-between" h="48px">
      <Text>Today Tasks</Text>
      <AddTaskModal />
    </Group>
  );
}
