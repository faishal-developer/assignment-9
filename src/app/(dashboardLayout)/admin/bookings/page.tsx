'use client'
import UMTable from '@/components/ui/CustomTable';
import ReactToastify from '@/components/ui/reactToastify';
import { getDateTimeString } from '@/helpers/commonFunction';
import { useGetUsersQuery } from '@/redux/api/AuthApi';
import { useDeleteBookingMutation, useGetBookingsQuery } from '@/redux/api/bookingApi';
import { useGetServicesQuery } from '@/redux/api/serviceApi';
import { Button } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UsersPage = () => {
    const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(4);

  query["limit"] = size;
  query["page"] = page;

  const { data, isLoading } = useGetBookingsQuery({ ...query });
  const [deleteBookings,result]= useDeleteBookingMutation();

  const myCourses = data;
  const meta = data?.meta; 
 
  const deleteBookingHandler=async(id:string)=>{
    const res:any=await deleteBookings(id);
    if(res?.data){
      toast.success("Booking Deleted successfully");
      // setPage(1)
    }else{
        toast.error("Booking Deleted Failed");
    }
  }
  const columns = [
    {
      title: "serviceId",
      dataIndex: "serviceId",
      render: function (data: any) {
        console.log(data,'name')
        return <>{data}</>;
      },
    },
    {
      title: "userId",
      dataIndex: "userId",
      render: function (data: any) {
        return <>{data}</>;
      },
    },
    {
      title: "StartsTime",
      dataIndex: "timeSlot",
      render: function (data: any) {
        return <>{getDateTimeString(data?.startsTime)}</>;
      },
    },
    {
      title: "endsTime ",
      dataIndex: "timeSlot",
      render: function (data: any) {
        return <>{getDateTimeString(data?.endsTime) }</>;
      },
    },
    {
      title: "Status ",
      dataIndex: "status",
      render: function (data: any) {
        return <>{data }</>;
      },
    },
    {
      title: "Action ",
      dataIndex: "_id",
      render: function (data: any) {
        return <>
            <Link href={`/admin/bookings/${data}`}>Edit</Link>
            <Button
              loading={result?.isLoading}
              disabled={result?.isLoading}
              onClick={()=>deleteBookingHandler(data)}
            >Delete</Button>
        </>;
      },
    },
    
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    
  };

    return (
        <div>
          <ReactToastify/>
            <UMTable
              loading={isLoading}
              columns={columns}
              dataSource={myCourses}
              pageSize={size}
              totalPages={meta?.total}
              showSizeChanger={true}
              onPaginationChange={onPaginationChange}
              onTableChange={onTableChange}
              showPagination={true}
            />
        </div>
    );
};

export default UsersPage;