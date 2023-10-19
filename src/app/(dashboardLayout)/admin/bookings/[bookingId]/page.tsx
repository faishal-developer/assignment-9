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
import { user_role } from '@/constants/role';
import { toast } from 'react-toastify';
import ReactToastify from '@/components/ui/reactToastify';
import { getUserInfo } from '@/services/auth.service';
import { useUpdateBookingMutation } from '@/redux/api/bookingApi';


const EditUser = ({params}:{params:{bookingId:string}}) => {
  const [Submitdata,result]=useUpdateBookingMutation();
  const [status,setStatus]=useState('pending');

    const onSubmit = async () => {
    try {
      
        const res:any = await Submitdata({id:params?.bookingId,data:{status}});
        console.log(res);
        
        if(res?.data){
          toast.success("Bookin updated successfully")
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
            <h1>Edit Bookings</h1>
                <select onChange={(e)=>setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="success">success</option>
                    <option value="cancelled">cancelled</option>
                </select>
            <Button onClick={()=>onSubmit()} loading={result?.isLoading} disabled={result?.isLoading} htmlType="submit">
              Edit Bookings
            </Button>
        </div>
    );
};

export default EditUser;