import React from "react";
import axios from "axios";
import { TLogin } from "../types/typeLogin";
import { useNavigate } from "react-router-dom";
import { AuthContextType, AuthContext } from "../store/userContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext) as AuthContextType;
  const [form, setForm] = React.useState<TLogin>({
    email: "",
    password: "",
  });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const { data } = await axios.get(
        "https://api.npoint.io/c306034c5317cb0e610e"
      );

      const userFilter = data.filter((user: any) => user.email === form.email);
      if (form.password === userFilter[0].password) {
        login(userFilter);
        navigate("/");
      } else {
        navigate("/auth/login");
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    handleChanges,
    handleSubmit,
  };
};
