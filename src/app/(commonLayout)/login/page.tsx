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


// export const metadata: Metadata = {
//   title: "Login | IT Doctor",
// };
type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
//   const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

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
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                label="User Id"
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
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
    </div>
  );
};

export default LoginPage;
