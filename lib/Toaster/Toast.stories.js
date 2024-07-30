import Toast from "./Toast";

export default {
  component: Toast,
  title: "Notifications/Toast",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    data: {
      control: "object",
      description:
        "Type parameter is CSS class to customize the appearance of the toast according to its importance. It can only be 'success', 'warning', or 'danger'. Message parameter defines the message to be displayed in the toast",
    },
  },
  args: {},
};

export const Default = {
  args: {
    data: {
      type: "default",
      message: "This is default message.",
    },
  },
};

export const Success = {
  args: {
    data: {
      type: "success",
      message: "Action has been done without any problem.",
    },
  },
};

export const Warning = {
  args: {
    data: {
      type: "warning",
      message: "You should pay attenntion.",
    },
  },
};

export const Danger = {
  args: {
    data: {
      type: "danger",
      message: "The world is about to explode !",
    },
  },
};
