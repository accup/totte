import type { Meta, StoryObj } from "@storybook/react";

import { AutoComplete } from "./AutoComplete";

const meta = {
  component: AutoComplete,
} as Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base = {
  args: {},
} satisfies Story;
