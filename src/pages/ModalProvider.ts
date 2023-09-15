import React, { useState, useEffect } from "react";
import { createContext } from "react";

interface ModalsProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const ModalsDispatchContext = createContext<{
  open: (Component: React.ReactElement, props: { [key: string]: any }) => void;
  close: (Component: React.ReactElement) => void;
}>({
  open: () => {
    return;
  },
  close: () => {
    return;
  },
});

export const ModalsStateContext = createContext<any[]>([]);

const ModalsProvider = ({ children }: ModalsProviderProps) => {
  const [openedModals, setOpenedModals] = useState<any[]>([]);

  const open = (
    Component: React.ReactElement,
    props: { [key: string]: any }
  ) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: React.ReactElement) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = { open, close };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
