import TestScreen from "./TestScreen";

export default {
  component: TestScreen,
  title: "Notifications/Toaster screen test",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    toastType: {
      options: ["success", "warning", "danger"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = {
  args: {
    toastType: "default",
    toastMessage: "This is default Message",
  },
};
