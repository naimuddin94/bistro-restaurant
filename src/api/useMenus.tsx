import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenus = () => {
  const result = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axios.get(`/menus`);
      return res.data;
    },
  });
  return result;
};

export default useMenus;
