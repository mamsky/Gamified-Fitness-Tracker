import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { ProfileDTO } from "../DTO/profileDTO";

export const useFetchProfile = () => {
  const { data, isPending } = useQuery<ProfileDTO>({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await api.get("/profile");
      return response.data;
    },
  });
  return { data, isPending };
};
