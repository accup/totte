import type { Preview } from "@storybook/react";

import { theme } from "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
  decorators: [
    (Story) => (
      <div className={theme}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
