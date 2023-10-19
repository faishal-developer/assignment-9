import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
});

export const profileUpdateschema = yup.object().shape({
  name: yup.string().min(3).max(30).required("Name is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
});

export const registrationSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required("Name is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
});
export const editUserSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required("Name is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  email: yup.string().email().required("Email is required"),
});

export const serviceSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required("Name is required"),
  price: yup.string().required("Phone Number is required"),
  description: yup.string().required("Email is required"),
  image: yup.string().url().required(),
});

export const feedbackSchema = yup.object().shape({
  question: yup.string().min(5).max(250).required("feedback is required"),
});

export const addBlogSchema = yup.object().shape({
  title: yup.string().min(5).max(100).required("title is required"),
  description: yup.string().min(5).max(1000).required("title is required"),
  image: yup.string().url().required("title is required"),
});
