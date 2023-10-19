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
import { registrationSchema } from "@/schemas/login";
import style from '../login/login.module.scss'
import Link from "next/link";
import { useRegistrationMutation } from "@/redux/api/AuthApi";
import { user_role } from "@/constants/role";
import ReactToastify from "@/components/ui/reactToastify";
import { toast } from "react-toastify";
import { useEffect } from "react";


type FormValues = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

const RegistrationPage = () => {
  const [userLogin,result] = useRegistrationMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        data.role=user_role.User;
        console.log(data);
        
        
      const res:any = await userLogin({ ...data });
      console.log(res);
      
      if(res?.data){
        toast.success("Registration completed successfully");
        router.push('/login');
      }else{
        toast.error(res?.error?.error);
      }
    
    } catch (err: any) {
      console.error(err.message);
      toast.error("Failed to register");
    }
  };

  return (
    <div className={style.container}>
      <ReactToastify/>
        <div className={style.login}>
            <h2>Please Register</h2>
            <Form submitHandler={onSubmit} resolver={yupResolver(registrationSchema)}>
            <div>
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Name"
                required
              />
            </div>
            <div>
              <FormInput
                name="phoneNumber"
                type="text"
                size="large"
                label="Phone Number"
                required
              />
            </div>
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
              Registration
            </Button>
          </Form>
          <Link href={'/login'}>If you not registered already? Please login</Link>
        </div>
    </div>
  );
};

export default RegistrationPage;
