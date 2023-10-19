'use client'
import UMTable from '@/components/ui/CustomTable';
import ReactToastify from '@/components/ui/reactToastify';
import { useGetUsersQuery } from '@/redux/api/AuthApi';
import { useDeleteBlogMutation, useGetBlogsQuery } from '@/redux/api/BlogApi';
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

  const { data, isLoading } = useGetBlogsQuery({ ...query });
  const [deleteBlog,result] =useDeleteBlogMutation();

  const deleteBlogHandler=async(id:string)=>{
    const res:any=await deleteBlog(id);
    if(res?.data){
      toast.success("Blog Deleted successfully");
      // setPage(1)
    }else{
        toast.error("Blog Deleted Failed");
    }
  }

  const myCourses = data;
  const meta = data?.meta; 
 
  useEffect(()=>{console.log("usertable data",data,meta)},[data]);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: function (data: any) {
        return <>{data}</>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      render: function (data: any) {
        return <>{data}</>;
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      render: function (data: any) {
        return <>{data}</>;
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
              onClick={()=>deleteBlogHandler(data)}
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