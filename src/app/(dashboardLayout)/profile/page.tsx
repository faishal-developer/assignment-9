// components/ProfileUpdatePage.js
'use client'
import React, { ReactEventHandler, useState } from 'react';
import style from './profile.module.scss';
import Form from "@/components/Forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileUpdateschema } from "@/schemas/login";
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';
import { Button } from 'antd';


type FormValues = {
  name: string;
  phoneNumber: string;
};
const ProfileUpdatePage = () => {
  const [name, setName] = useState("John Doe");
  const [phoneNumber, setPhoneNumber] = useState("+1-123-456-7890");

const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className={style.profile_update_page}>
      <h1 className={style.profile_update_page_title}>Update Your Profile</h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(profileUpdateschema)}>
      <div className={style.profile_update_page_form}>
          <p className={style["profile-update-page-label"]}>Name:</p>
          <FormInput
            name="name"
            type="text"
            size="large"
            // label="Name"
            // required
          />
        <p className={style['profile-update-page-label']}>Email:</p>
        <div className={style.profile_update_page_email}>user@example.com</div>
          <p className={style['profile-update-page-label']}>Phone Number:</p>
          <FormInput
            name="phoneNumber"
            type="text"
            size="large"
            // label="Phone Number"
            // required
          />
      </div>
      <Button htmlType="submit">
              Submit
    </Button>
      </Form>
    </div>
  );
};

export default ProfileUpdatePage;
