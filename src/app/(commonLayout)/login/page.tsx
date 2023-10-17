"use client";
import { Button, Col, Input, Row, message } from "antd";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
// import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/login";
import style from './login.module.scss'
import Link from "next/link";


type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
//   const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        console.log(data);
        
    //   const res = await userLogin({ ...data }).unwrap();
    //   // console.log(res);
    //   if (res?.accessToken) {
    //     router.push("/profile");
    //     message.success("User logged in successfully!");
    //   }
    //   storeUserInfo({ accessToken: res?.accessToken });
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className={style.container}>
        <div className={style.login}>
            <h2>Please Login</h2>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                required
              />
            </div>
            <Button htmlType="submit">
              Login
            </Button>
          </Form>
          <Link href={'/registration'}>If you not registered yet? Please Register</Link>
        </div>
    </div>
  );
};

export default LoginPage;
