'use client';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "@/schemas/login";
import { SubmitHandler } from "react-hook-form";
import style from './feedback.module.scss';
import { Button } from "antd";

type FormValues = {
  question:string
};

const FeddbackPage = () => {
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
        console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };

    return (
        <div className={style.feedback}>
            <h1>Give a feedback about our service</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(feedbackSchema)}>
                <FormInput
                  name="question"
                  type="text"
                  size="large"
                />
                <Button htmlType="submit" loading={false} disabled={false}>
                  Submit
                </Button>
            </Form>
        </div>
    );
};

export default FeddbackPage;