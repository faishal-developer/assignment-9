'use client'
import UMTable from '@/components/ui/CustomTable';
import ReactToastify from '@/components/ui/reactToastify';
import {  useDeleteUsersMutation, useGetUsersQuery } from '@/redux/api/AuthApi';
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

  let { data, isLoading } = useGetUsersQuery({ ...query });
  const [deleteUser,result]=useDeleteUsersMutation();

  const myCourses = data;
  const meta = data?.meta; 

  const deleteUserHandler=async(id:string)=>{
    const res:any=await deleteUser(id);
    if(res?.data){
      toast.success("User Deleted successfully");
      // setPage(1)
    }else{
        toast.error("User Deleted Failed");
    }
  }
 
  useEffect(()=>{console.log("usertable data",data,meta)},[data]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: function (data: any) {
        return <>{data}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      render: function (data: any) {
        return <>{data}</>;
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      render: function (data: any) {
        return <>{data}</>;
      },
    },
    {
      title: "Phone Number ",
      dataIndex: "phoneNumber",
      render: function (data: any) {
        return <>{data }</>;
      },
    },
    {
      title: "Action ",
      dataIndex: "_id",
      render: function (data: any) {        
        return <>
            <Link href={`/admin/edit-user/${data}`}>Edit</Link>
            <Button 
              loading={result?.isLoading} 
              disabled={result?.isLoading}
              onClick={()=>deleteUserHandler(data)}
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