'use client';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "@/schemas/login";
import { SubmitHandler } from "react-hook-form";
import style from './feedback.module.scss';
import { Button } from "antd";
import { useSubmitFeedbackMutation } from "@/redux/api/AuthApi";
import { getUserInfo } from "@/services/auth.service";
import ReactToastify from "@/components/ui/reactToastify";
import { toast } from "react-toastify";

type FormValues = {
  question:string
};

const FeddbackPage = () => {
  const [submit,result] = useSubmitFeedbackMutation();

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      data.userId=getUserInfo(null)?._id as string;
        
      const res:any = await submit(data);
      console.log(res);
      if(res?.data){
        toast.success("Your feedback submitted successlully");
      }else{
        toast.error("Faild to submit");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

    return (
        <div className={style.feedback}>
          <ReactToastify/>
            <h1>Give a feedback about our service</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(feedbackSchema)}>
                <FormInput
                  name="question"
                  type="text"
                  size="large"
                />
                <Button htmlType="submit" loading={result?.isLoading} disabled={result?.isLoading}>
                  Submit
                </Button>
            </Form>
        </div>
    );
};

export default FeddbackPage;