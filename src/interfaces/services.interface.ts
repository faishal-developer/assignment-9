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
  availableTimeSlots: ITimeSlots[];
  reviewRatings?: IreviewRatings[];
};
