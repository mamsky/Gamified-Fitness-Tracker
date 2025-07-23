import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerDTO, registerSchemaDTO } from "../DTO/registerDTO";

export const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(registerDTO),
  });

  const onSubmit = (data: registerSchemaDTO) => {
    console.log(data);
  };

  return { handleSubmit, onSubmit, register, errors };
};
