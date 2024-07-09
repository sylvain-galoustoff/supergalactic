import { fn } from "@storybook/test";
import DataTable from "./DataTable";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "DataTable",
  component: DataTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: {
      description: "Dataset to display in table",
    },
    ignore: {
      description: "Array of object keys that should not be displayed in the table",
    },
    containerId: {
      description: "Custom html id for the container that wraps tools and table",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    data: [],
    ignore: [],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    data: [
      {
        type: "success",
        message: "Congratulations",
        date: "25/05/2016",
        priority: "low",
      },
      {
        type: "danger",
        message: "Ouch !",
        date: "02/08/2012",
        priority: "medium",
      },
      {
        type: "warning",
        message: "Pay attention",
        date: "06/01/2021",
        priority: "high",
      },
    ],
    containerId: "my-table-id",
  },
};
