import { createContext, useContext, useState, useEffect } from "react";
import { useOverlay, useOverlayUpdate } from "./OverlayContext";

const ModalContext = createContext();
const ModalUpdateContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function useModalUpdate() {
  return useContext(ModalUpdateContext);
}

export function ModalProvider({ children }) {
  const ModalTypes = {
    NONE: -1,
    ADD_PROJECT: 0,
    ADD_TASK: 1,
    TASK: 2,
    SHARE: 3,
  };
  Object.freeze(ModalTypes);

  const [modal, setModal] = useState(ModalTypes.NONE);
  const OverlayTypes = useOverlay();
  const { overlay, setOverlay } = useOverlayUpdate();

  function handleActiveModal(modalTypes) {
    switch (modalTypes) {
      case ModalTypes.NONE:
        setOverlay(OverlayTypes.NONE);
        setModal(ModalTypes.NONE);
        break;
      default:
        setOverlay(OverlayTypes.MODAL);
        setModal(modalTypes);
        break;
    }
  }

  useEffect(() => {
    switch (overlay) {
      case OverlayTypes.NONE:
        setModal(ModalTypes.NONE);
        break;
    }
  }, [overlay]);

  return (
    <ModalContext.Provider value={{ ModalTypes, modal }}>
      <ModalUpdateContext.Provider value={handleActiveModal}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  );
}
