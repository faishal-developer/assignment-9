// components/ProfileUpdatePage.js
'use client'
import React, { ReactEventHandler, useEffect, useState } from 'react';
import style from './profile.module.scss';
import Form from "@/components/Forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileUpdateschema } from "@/schemas/login";
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';
import { Button } from 'antd';
import { useGetProfileQuery, useUpdateProfileMutation } from '@/redux/api/AuthApi';
import { toast } from 'react-toastify';
import ReactToastify from '@/components/ui/reactToastify';


type FormValues = {
  name: string;
  phoneNumber: string;
};
const ProfileUpdatePage = () => {
  const {data,isLoading}=useGetProfileQuery(null);
  const [updateProfile,result] = useUpdateProfileMutation();

const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        const res:any = await updateProfile(data);
        console.log(res);
        if(res?.data){
          toast.success('updated successfully')
        }else{
          toast.error("Failed to update");
        }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  useEffect(()=>{console.log("getmy profile",result)},[result])
  return (
    <div className={style.profile_update_page}>
      <ReactToastify/>
      <h1 className={style.profile_update_page_title}>Update Your Profile</h1>
      {
        isLoading? 'Loading...':(
          <Form submitHandler={onSubmit} resolver={yupResolver(profileUpdateschema)}>
          <div className={style.profile_update_page_form}>
              <p className={style["profile-update-page-label"]}>Name:</p>
              <FormInput
                name="name"
                type="text"
                size="large"
                defaultValue={data?.name}
                // label="Name"
                // required
              />
            <p className={style['profile-update-page-label']}>Email:</p>
            <div className={style.profile_update_page_email}>{data?.email}</div>
              <p className={style['profile-update-page-label']}>Phone Number:</p>
              <FormInput
                name="phoneNumber"
                type="text"
                size="large"
                defaultValue={data?.phoneNumber}
                // label="Phone Number"
                // required
              />
          </div>
          <Button loading={result?.isLoading} disabled={result?.isLoading} htmlType="submit">
                  Submit
          </Button>
          </Form>
        )
      }
    </div>
  );
};

export default ProfileUpdatePage;
