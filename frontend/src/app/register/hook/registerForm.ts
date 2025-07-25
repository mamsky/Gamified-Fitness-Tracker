import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { registerDTO, registerSchemaDTO } from "../DTO/registerDTO";

type RegisterResponse = {
  message: string;
  response: {
    data: {
      message: string;
    };
  };
};

export const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(registerDTO),
  });

  const { mutateAsync, isPending } = useMutation<
    RegisterResponse,
    Error,
    registerSchemaDTO
  >({
    mutationKey: ["Auth-Login"],
    mutationFn: async (data: registerSchemaDTO) => {
      const res = await api.post("/auth/register", data);
      return res.data;
    },
    onSuccess: (res) => {
      toast.success(res.message);
      redirect("/login");
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    },
  });

  const onSubmit = async (data: registerSchemaDTO) => {
    await mutateAsync(data);
  };
  return { handleSubmit, onSubmit, register, errors, isPending };
};
