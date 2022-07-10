import React from "react";
import { useOverlay, useOverlayUpdate } from "@contexts/OverlayContext";

const AppOverlay = () => {
  const OverlayTypes = useOverlay();
  const { overlay, setOverlay } = useOverlayUpdate();

  function overlayStyles(overlay) {
    if (overlay === OverlayTypes.MODAL) {
      return "modal__overlay active";
    }

    return "";
  }

  function handleOnClick() {
    if (overlay === OverlayTypes.HIGHER_MENU) {
      setOverlay(OverlayTypes.MENU);
    } else {
      setOverlay(OverlayTypes.NONE);
    }
  }

  return (
    <div
      className={"app__overlay " + overlayStyles(overlay)}
      onClick={() => handleOnClick()}
    ></div>
  );
};

export default AppOverlay;
