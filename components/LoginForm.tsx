"use client";

import { loginAction } from "@/actions/authActions";
import { Form, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type LoginValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: LoginValues) => {
    setLoading(true);
    try {
      await loginAction(values);
      window.location.reload();
      message.success("Login successfully");
    } catch (error) {
      message.error("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <div className="flex flex-col text-black">
        <div>
          <label htmlFor="email" className="mb-2 text-lg inline-block">
            Email
          </label>
          <FormItem name="email" rules={[{ required: true, message: "Please input your email" }]}>
            <input type="text" id="email" className="w-full outline-none p-3 border border-black" />
          </FormItem>
        </div>
        <div>
          <label htmlFor="password" className="mb-2 text-lg inline-block">
            Password
          </label>
          <FormItem name="password" rules={[{ required: true, message: "Please input your password" }]}>
            <input type="password" id="password" className="w-full outline-none p-3 border border-black" />
          </FormItem>
        </div>
        <button disabled={loading} type="submit" className="w-full flex items-center gap-2 justify-center bg-black text-white p-3 hover-effect uppercase">
          Login
          {loading && <Loader color="white" className="animate-spin" size={16} />}
        </button>
        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </Form>
  );
}

export default LoginForm;
