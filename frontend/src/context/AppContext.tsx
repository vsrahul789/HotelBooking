import React, { useState } from "react";
import Toast from "../components/Toast";

type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
};

const AppContext = React.createContext<AppContext>({} as AppContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
      }}
    >
      {toast && (
        <Toast
          message={toast?.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
          // * here the toast is set to undefined which makes the "toast &&" false so it will come out of this element
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  return context as AppContext;
};
