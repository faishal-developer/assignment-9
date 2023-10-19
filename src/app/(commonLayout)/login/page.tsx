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
import { useLoginMutation } from "@/redux/api/AuthApi";
import ReactToastify from "@/components/ui/reactToastify";
import { toast } from "react-toastify";
import { withRouter } from "next/router";
import { useAppDispatch } from "@/redux/reduxHooks";
import { setData } from "@/redux/slices/loginSlice";


type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin,result] = useLoginMutation();
  const router:any = useRouter();
  // const searchParams = new URLSearchParams(window.location.search);
  const targetRoute = '/home'; 
  const dispatch = useAppDispatch();
  
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        
      const res:any = await userLogin({ ...data });
      if (res?.data?.accessToken) {
        router.push(targetRoute);

        toast.success("User logged in successfully!");
      }else{
        toast.error(res?.error?.error)
      }
      dispatch(setData(res?.data?.accessToken))
      // storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className={style.container}>
      <ReactToastify/>
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
            <Button loading={result?.isLoading} disabled={result?.isLoading} htmlType="submit">
              Login
            </Button>
          </Form>
          <Link href={'/registration'}>If you not registered yet? Please Register</Link><br/>
          <span>
            note: admin-login  {`->`} admin@gmail.com pass{`->`}123456<br/>
          note: super-admin-login  {`->`} superadmin@gmail.com pass{`->`}123456
          </span>
        </div>
    </div>
  );
};

export default LoginPage;
