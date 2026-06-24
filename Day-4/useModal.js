import { useState, useCallback } from "react";

export default function useModal() {
  const [modal, setModal] = useState(null);

  const open = useCallback((name) => {
    setModal(name);
  }, []);

  const close = useCallback(() => {
    setModal(null);
  }, []);

  return {
    modal,
    open,
    close,
  };
}