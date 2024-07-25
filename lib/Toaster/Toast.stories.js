import { fn } from "@storybook/test";
import Toast from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Notifications/Toast",
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: {
      control: "object",
      description:
        "Type is CSS class to customize the appearance of the toast according to its importance. It can only be 'success', 'warning', or 'danger'. Message parameter defines the message to be displayed in the toast",
    },
    animation: {
      options: ["fromLeft", "fromRight", "fromTop", "fromBottom"],
      control: {
        type: "select",
      },
      description: "Choose among 4 available animations",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    data: {
      type: "success",
      message: "This is the message.",
    },
    animation: "fromLeft",
  },
};
