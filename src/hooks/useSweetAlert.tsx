import { useCallback } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useSweetAlert = () => {
  const MySwal = withReactContent(Swal);

  const show = useCallback((options: any) => {
    return MySwal.fire(options);
  }, []);

  return { show };
};

export default useSweetAlert;
