import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginDTO, LoginSchemaDTO } from "../DTO/loginDTO";
import { redirect } from "next/navigation";

type LoginResponse = {
  message: string;
  response: {
    token: string;
  };
};

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(LoginDTO),
  });

  const { mutateAsync, isPending } = useMutation<
    LoginResponse,
    Error,
    LoginSchemaDTO
  >({
    mutationKey: ["Auth-Login"],
    mutationFn: async (data: LoginSchemaDTO) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },
    onSuccess: (res) => {
      toast.success(res.message);
      Cookies.set("token", res.response.token);
      redirect("/dashboard");
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    },
  });

  const onSubmit = async (data: LoginSchemaDTO) => {
    await mutateAsync(data);
  };

  return { handleSubmit, onSubmit, register, errors, isPending };
};
