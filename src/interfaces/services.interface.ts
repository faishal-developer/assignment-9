type ITimeSlots = {
  startsTime: number;
  endsTime: number;
};

type IreviewRatings = {
  userId: string;
  review: string;
  rating: number;
};
export type IServices = {
  name: string;
  price: number;
  description: string;
  image: string;
  availableTimeSlots?: ITimeSlots[];
  reviewRatings?: IreviewRatings[];
};

export type IBlog = {
  title: string;
  description: string;
  image: string;
};

export type Irole = "user" | "admin" | "super-admin";
export type IUser = {
  email: string;
  phoneNumber: string;
  role: Irole;
  password?: string;
  name: string;
};
