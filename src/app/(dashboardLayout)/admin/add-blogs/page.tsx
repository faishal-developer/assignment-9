"use client";
import { Button, Col, Input, Row, message } from "antd";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
// import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBlogSchema } from "@/schemas/login";
import Link from "next/link";
import style from './addBlogs.module.scss'
import { IBlog } from "@/interfaces/services.interface";
import { useAddBlogMutation } from "@/redux/api/BlogApi";
import { toast } from "react-toastify";
import ReactToastify from "@/components/ui/reactToastify";


const AddBlogPage = () => {
  const [submitBlog,result] = useAddBlogMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<IBlog> = async (data: any) => {
    try {
        data.userId = getUserInfo(null)?._id;
        const res:any = await submitBlog(data);
        console.log(res,"submitted result");
        if(res?.data){
          toast.success("Blog created successfully");
        }else{
          toast.error(res?.error?.error);
        }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className={style.container}>
      <ReactToastify/>
        <div className={style.login}>
            <h2>Create a new Blog</h2>
            <Form submitHandler={onSubmit} resolver={yupResolver(addBlogSchema)}>
            <div>
              <FormInput
                name="title"
                type="text"
                size="large"
                label="Title"
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
            <div>
              <FormInput
                name="image"
                type="text"
                size="large"
                label="Image Url"
                required
              />
            </div>
            <Button loading={result?.isLoading} disabled={result?.isLoading} htmlType="submit">
              Create
            </Button>
          </Form>
        </div>
    </div>
  );
};

export default AddBlogPage;
