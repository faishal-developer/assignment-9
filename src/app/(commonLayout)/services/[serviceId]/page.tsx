'use client'
import { useGetSingleFaqQuery } from '@/redux/api/faqApi';
import style from '../services.module.scss';
import { useEffect, useState } from 'react';
import { useSingleServiceQuery } from '@/redux/api/serviceApi';
import { getDateTimeString } from '@/helpers/commonFunction';
import { getUserInfo, setServiceToCart } from '@/services/auth.service';
import ReactToastify from '@/components/ui/reactToastify';
import { toast } from 'react-toastify';
import { useAddBookingMutation } from '@/redux/api/bookingApi';
import { Button } from 'antd';
type IProps={
    params: { serviceId: string }
}

export default function SingleProductPage({ params }:IProps) {  
    const [submitBooking,result] = useAddBookingMutation();
    const [error,setError]= useState('');  
    const [timeSlot,setTimeSlot]=useState<{startsTime?:number,endsTime?:number}>({})
    const {data:service,isLoading} = useSingleServiceQuery(params.serviceId);
    const handleCart=async()=>{
      if(!timeSlot?.startsTime){
        setError("Please Select a timeslot")
      }else{
        const res=await submitBooking([{userId:getUserInfo(null)?._id,serviceId:service._id,timeSlot,status:'pending'}])
        if(res?.data){
          toast.success("Service booked")
        }else{
          toast.error(res?.error?.error);
        }
      }
    }
  return (
    <div className={style.single_service}>
      <ReactToastify/>
        <div className={style.service_page}>
          <div className={style.service_image}>
            <img src={service?.image} alt={service?.title} />
          </div>
          <div className={style.service_details}>
            <h1>{service?.name}</h1>
            <p>{service?.description}</p>
            <h2>Available Time Slots</h2>
            <ul className={style.time_slots}>
              {service?.availableTimeSlots.map((slot:any, index:number) => (
                <li 
                  key={style.index}
                  onClick={()=>{setTimeSlot(slot);setError('')}}
                  style={{
                    cursor:'pointer',
                    color:slot==timeSlot?'green':'black'
                  }}
                >
                  {getDateTimeString(slot.startsTime)} To {getDateTimeString(slot.endsTime)}
                </li>
              ))}
              {<p style={{color:'red'}}>{error?error:''}</p>}
            </ul>
            <Button loading={result?.isLoading} disabled={result?.isLoading} onClick={handleCart}>Book Service</Button>
          </div>
        </div>
    </div>
  )
}