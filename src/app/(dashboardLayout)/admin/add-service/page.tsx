'use client'
import React, { useState } from 'react';
import style from './addService.module.scss';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { Button, DatePickerProps } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import { serviceSchema } from "@/schemas/login";
import { SubmitHandler } from "react-hook-form";
import { IServices } from '@/interfaces/services.interface';
import { DatePicker, Space } from 'antd';
import type { Dayjs } from 'dayjs';
import type {  RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import { DeleteOutlined } from '@ant-design/icons';
import { timeStamps } from '@/helpers/commonFunction';
import { useAddServiceMutation } from '@/redux/api/serviceApi';
import { toast } from 'react-toastify';
import ReactToastify from '@/components/ui/reactToastify';

const { RangePicker } = DatePicker;
type FormValues = IServices;
const AddUser = () => {
  const [timeRange,setTimeRange]=useState<(string[][])>([]);
  const [submitService,result] = useAddServiceMutation();
  const onRangeChange = (
    value: RangePickerProps['value'],
    dateString: [string, string],
  ) => {
    setTimeRange([...timeRange,dateString]);
    
  };

  const onOk = (value: RangePickerProps['value']) => {
    console.log('onOk: ', value);
  };

  const deleteFromTimeRange=(i:number)=>{
    let newTimeRange=timeRange.filter((item,index)=>index!==i);
    setTimeRange(newTimeRange);
  }

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        let newTimeRange=timeRange.map((time)=>{
          return {startsTime:timeStamps(time[0]),endsTime:timeStamps(time[1])}
        })
        data.price=Number(data.price);
        data.availableTimeSlots=newTimeRange;
        const res:any= await submitService(data);
        if(res.data){
          toast.success("Service added successfully")
          setTimeRange([]);
        }else{
          toast.error(res?.error?.error);
        }
    } catch (err: any) {
      console.error(err.message);
    }
  };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
    };
    return (
        <div className={style.addUser}>
          <ReactToastify/>
            <h1>Add a new service</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
            <div>
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Title"
                required
              />
            </div>
            <div>
              <FormInput
                name="price"
                type="text"
                size="large"
                label="Price"
                required
              />
            </div>
            <div>
              <FormInput
                name="description"
                type="text"
                size="large"
                label="Description"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="image"
                type="text"
                size="large"
                label="Image url"
                required
              />
            </div>
            <div>

              <span>Add available time slots</span>
              {timeRange.map((item,i)=>(
                <p key={i}>
                  {item[0]} TO {item[1]} 
                  <span style={{color:'red',cursor:'pointer',marginLeft:'10px'}} 
                    onClick={()=>deleteFromTimeRange(i)}
                  > 
                    <DeleteOutlined />
                  </span>
                </p>
              ))}
              <RangePicker 
                allowClear 
                onChange={onRangeChange} 
                format="YYYY-MM-DD HH:mm"
                value={null}
                showTime 
                onOk={onOk}
              />
            </div>
            <Button loading={result?.isLoading} disabled={result?.isLoading} style={{margin:'19px 0'}} htmlType="submit">
              Add New Service
            </Button>
          </Form>
        </div>
    );
};

export default AddUser;