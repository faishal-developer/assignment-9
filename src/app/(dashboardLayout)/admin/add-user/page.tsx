'use client'
import React from 'react';
import style from './addUser.module.scss';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { Button } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@/schemas/login";
import { SubmitHandler } from "react-hook-form";
import { useRegistrationMutation } from '@/redux/api/AuthApi';
import { user_role } from '@/constants/role';
import { toast } from 'react-toastify';
import ReactToastify from '@/components/ui/reactToastify';


type FormValues = {
  name: string;
  email: string;
  role?: string;
  phoneNumber: string;
  password: string;
};
const AddUser = () => {
  const [registerUser,result] = useRegistrationMutation();

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        data.role=user_role.User;
        const res:any = await registerUser(data);
        if(res?.data){
          toast.success("User added successfully")
        }else{
          toast.error(res?.error?.error)
        }
    } catch (err: any) {
      console.error(err.message);
    }
  };
    return (
        <div className={style.addUser}>
          <ReactToastify/>
            <h1>Add a new User</h1>
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
              Add User
            </Button>
          </Form>
        </div>
    );
};

export default AddUser;