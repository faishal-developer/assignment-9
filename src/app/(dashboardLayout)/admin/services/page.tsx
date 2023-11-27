'use client'
import UMTable from '@/components/ui/CustomTable';
import { useGetUsersQuery } from '@/redux/api/AuthApi';
import { useDeleteServiceMutation, useGetServicesQuery } from '@/redux/api/serviceApi';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UsersPage = () => {
    const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(4);

  query["limit"] = size;
  query["page"] = page;

  const { data, isLoading } = useGetServicesQuery({ ...query });
  const [deleteService,result]=useDeleteServiceMutation()
  const myCourses = data;
  const meta = data?.meta; 
 
  const deleteServiceHandler=async(id:string)=>{
    const res:any=await deleteService(id);
    if(res?.data){
      toast.success("Service Deleted successfully");
      // setPage(1)
    }else{
        toast.error("Service Deleted Failed");
    }
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: function (data: any) {
        console.log(data,'name')
        return <>{data}</>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      render: function (data: any) {
        return <span style={{minWidth:'200px'}}>{data.slice(0,100)}...</span>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      render: function (data: any) {
        return <>{data}</>;
      },
    },
    {
      title: "Image ",
      dataIndex: "image",
      render: function (data: any) {
        return <><Image width={40} height={40} src={data} alt="product"/></>;
      },
    },
    {
      title: "Action ",
      dataIndex: "_id",
      render: function (data: any) {
        return <>
            <Button
              loading={result?.isLoading}
              disabled={result?.isLoading}
              onClick={()=>deleteServiceHandler(data)}
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