import { useEffect, useRef } from "react";

type BeforeUnloadHandler = (e: BeforeUnloadEvent) => void;

export function useBeforeunload(handler: BeforeUnloadHandler) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleBeforeUnload: BeforeUnloadHandler = (e) => {
      let returnValue;

      if (typeof handlerRef.current === "function") {
        returnValue = handlerRef.current(e);
      }

      if (e.defaultPrevented) {
        e.returnValue = "";
      }

      if (typeof returnValue === "string") {
        e.returnValue = returnValue;
        return returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
}
