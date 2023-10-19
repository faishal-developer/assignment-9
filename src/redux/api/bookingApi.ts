import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const BookingApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //registration
    addBooking: build.mutation({
      query: (data) => {
        return {
          url: `/booking/create`,
          method: "POST",
          data,
        };
      },
    }),
    // get single room
    singleBooking: build.query({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "GET",
      }),
    }),
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.bookings],
    }),
    updateBooking: build.mutation({
      query: ({ id, data }) => ({
        url: `/booking/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    getBookings: build.query({
      query: (params) => ({
        url: `/booking`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.bookings],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useDeleteBookingMutation,
  useSingleBookingQuery,
  useGetBookingsQuery,
  useUpdateBookingMutation,
} = BookingApi;
