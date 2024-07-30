import Toaster from "./Toaster";
import { useToast, useToastsList } from "./hooks";

function TestScreen({ toastType, toastMessage }) {
  const { toastList, removeToast } = useToastsList();
  const sendToast = useToast();

  const handleToast = () => {
    sendToast(toastType, toastMessage);
  };

  return (
    <div id="screen">
      <Toaster
        toastsList={toastList}
        onRemoveToast={removeToast}
        toasterId="toast-screen-test"
      />
      <button type="button" onClick={handleToast}>
        Send toast
      </button>
    </div>
  );
}

export default TestScreen;
