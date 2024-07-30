/** @type { import('@storybook/react').Preview } */
import "./story.scss";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Data",
          ["DataTable", "DataSearch"],
          "Notifications",
          ["Toast", "Toaster", "Toaster screen test"],
        ],
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
