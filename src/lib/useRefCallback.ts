import { useCallback, useRef } from "react";

export function useRefCallback<Args extends any[], Result>(
  cb: (...args: Args) => Result
): (...args: Args) => Result {
  const _cb = useRef(cb);
  _cb.current = cb;

  return useCallback((...args: Args) => {
    return _cb.current(...args);
  }, []);
}
