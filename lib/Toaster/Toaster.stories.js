import Toaster from "./Toaster";
import * as TaostStories from "./Toast.stories";

export default {
  component: Toaster,
  title: "Notifications/Toaster",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    animation: {
      options: ["fromLeft", "fromRight", "fromBottom", "fromTop"],
      control: { type: "inline-radio" },
    },
    autoDelete: {
      control: "boolean",
    },
  },
};

export const Default = {
  args: {
    toastsList: [
      {
        ...TaostStories.Default.args.toast,
        id: "1",
        type: "success",
        message: "Action has been done without any problem.",
      },
      {
        ...TaostStories.Default.args.toast,
        id: "2",
        type: "warning",
        message: "You should pay attention.",
      },
      {
        ...TaostStories.Default.args.toast,
        id: "3",
        type: "danger",
        message: "The world is about to explode !",
      },
    ],
    toasterId: "my-toaster-id",
  },
};
