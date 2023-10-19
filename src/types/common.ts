export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode?: number;
  error: string;
  errorMessages?: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type loginPayload = {
  email?: string;
  _id?: string;
  role?: string;
};

export type IBlog = {
  userId?: string;
  title: string;
  description: string;
  image: string;
};

export type IFaq = {
  userId: string;
  question: string;
  ans?: string;
};

export type Icart = {
  productId: string;
  timeSlot: {
    startsTime: number;
    endsTime: number;
  };
};
