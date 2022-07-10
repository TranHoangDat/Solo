import { createContext, useContext, useState } from "react";

const OverlayContext = createContext();
const OverlayUpdateContext = createContext();

export function useOverlay() {
  return useContext(OverlayContext);
}

export function useOverlayUpdate() {
  return useContext(OverlayUpdateContext);
}

export function OverlayProvider({ children }) {
  const OverlayTypes = {
    NONE: -1,
    MODAL: 0,
  };
  Object.freeze(OverlayTypes);

  const [overlay, setOverlay] = useState(OverlayTypes.NONE);

  return (
    <OverlayContext.Provider value={OverlayTypes}>
      <OverlayUpdateContext.Provider value={{ overlay, setOverlay }}>
        {children}
      </OverlayUpdateContext.Provider>
    </OverlayContext.Provider>
  );
}
