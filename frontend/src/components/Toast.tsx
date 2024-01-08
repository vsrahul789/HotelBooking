import { useEffect } from "react";

type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastMessage) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [onClose]);

  const styles = `
    z-50
    top-4
    right-4
    p-4
    max-w-md
    fixed
    bg-white
    rounded-md
    shadow-md
    text-center
    ${type === "SUCCESS" ? "bg-green-500" : "bg-red-500"}
  `;
  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
