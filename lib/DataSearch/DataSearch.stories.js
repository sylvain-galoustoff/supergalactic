import { fn } from "@storybook/test";
import DataSearch from "./DataSearch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Inputs/DataSearch",
  component: DataSearch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: {
      control: "array",
      description: "Dataset in which the input field fetches",
    },
    callback: {
      control: "function",
      description: "Function to handle input value",
    },
    id: {
      control: "text",
      description: "HTML id of the input field",
    },
    containerClass: {
      control: "text",
      description: "CSS class for component container",
    },
    inputClass: {
      control: "text",
      description: "CSS class for HTML <input /> field",
    },
    addonClass: {
      control: "text",
      description: "CSS class for icon container",
    },
    resultClass: {
      control: "text",
      description: "CSS class for search result window",
    },
    placeholder: {
      control: "text",
      description: "Input placeholder",
    },
    showIcon: {
      control: "boolean",
      description: "Show or hide search icon",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    data: [],
    callback: fn(),
    id: "string",
    containerClass: "string",
    inputClass: "string",
    addonClass: "string",
    resultClass: "string",
    placeholder: "string",
    showIcon: "boolean",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    data: ["apple", "banana", "cherry", "date", "elderberry", "fig", "grapefruit", "honeydew", "kiwi", "lemon"],
  },
};
