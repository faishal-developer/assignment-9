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

export const feedbackSchema = yup.object().shape({
  question: yup.string().min(5).max(250).required("feedback is required"),
});
