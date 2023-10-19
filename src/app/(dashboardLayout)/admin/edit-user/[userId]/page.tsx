'use client'
import React, { useState } from 'react';
import style from '../../add-user/addUser.module.scss';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { Button } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserSchema, registrationSchema } from "@/schemas/login";
import { SubmitHandler } from "react-hook-form";
import { useGetSingleUsersQuery, useRegistrationMutation, useUpdateUsersMutation } from '@/redux/api/AuthApi';
import { USER_ROLE, user_role } from '@/constants/role';
import { toast } from 'react-toastify';
import ReactToastify from '@/components/ui/reactToastify';
import { getUserInfo } from '@/services/auth.service';


type FormValues = {
  name: string;
  email: string;
  role?: string;
  phoneNumber: string;
  password: string;
};
const EditUser = ({params}:{params:{userId:string}}) => {
  const {data,isLoading} = useGetSingleUsersQuery(params.userId);
  const [Submitdata,result]=useUpdateUsersMutation();
  const userInfo=getUserInfo(null);
  const [role,setRole]=useState(data?.role||'user');

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log(data);
        data.role=role || user_role.User;
        const res:any = await Submitdata({id:params?.userId,data});
        console.log(res);
        
        if(res?.data){
          toast.success("User edited successfully")
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
            <h1>Edit User</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(editUserSchema)}>
            {isLoading?'Loading...':(
              <>
                <div>
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Name"
                defaultValue={data?.name}
                required
              />
            </div>
            <div>
              <FormInput
                name="phoneNumber"
                type="text"
                size="large"
                label="Phone Number"
                defaultValue={data?.phoneNumber}
                required
              />
            </div>
            <div>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Email"
                defaultValue={data?.email}
                required
              />
            </div>
            {
              userInfo?.role === user_role.SUPER_ADMIN?(
                <select onChange={(e)=>setRole(e.target.value)}>
                  <option value={user_role.ADMIN}>{user_role.ADMIN}</option>
                  <option value={user_role.SUPER_ADMIN}>{user_role.SUPER_ADMIN}</option>
                  <option value={user_role.User}>{user_role.User}</option>
                </select>
              ):''
            }
              </>
            )}
            <Button loading={result?.isLoading} disabled={result?.isLoading} htmlType="submit">
              Edit User
            </Button>
          </Form>
        </div>
    );
};

export default EditUser;