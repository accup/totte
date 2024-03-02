import type { Meta } from "@storybook/react";

import { colors } from "./styles/color.css";

type Props = {
  color: string;
};

function Ink(props: Props) {
  const { color } = props;

  return (
    <div
      style={{
        blockSize: 64,
        inlineSize: 64,
        borderRadius: 9999,
        border: `2px solid ${colors.border}`,
        backgroundColor: color,
      }}
    />
  );
}

const meta = {
  title: "Design Tokens",
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["color"] },
  },
  render: (args) => <Ink {...args} />,
} satisfies Meta<typeof Ink>;

export default meta;

export const Base = {
  args: {
    color: colors.base,
  },
};

export const Contrast = {
  args: {
    color: colors.contrast,
  },
};

export const Primary = {
  args: {
    color: colors.primary,
  },
};

export const Secondary = {
  args: {
    color: colors.secondary,
  },
};

export const Border = {
  args: {
    color: colors.border,
  },
};

export const Accent = {
  args: {
    color: colors.accent,
  },
};

export const Important = {
  args: {
    color: colors.important,
  },
};

export const Error = {
  args: {
    color: colors.error,
  },
};

export const Info = {
  args: {
    color: colors.info,
  },
};
