import type { Preview } from "@storybook/react";

import "../src/index.css";
import { theme } from "../src/style/theme.css";

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
