import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IUser } from "@/interfaces/services.interface";
import { IMeta } from "@/types";

const authUrl = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //registration
    registration: build.mutation({
      query: (data: IUser) => {
        return {
          url: authUrl + "/signup",
          method: "POST",
          data,
        };
      },
    }),
    // get single room
    login: build.mutation({
      query: (loginData) => ({
        url: `${authUrl}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateProfile: build.mutation({
      query: (userData) => ({
        url: `/users/my-profile`,
        method: "PATCH",
        data: userData,
      }),
    }),
    getProfile: build.query({
      query: () => ({
        url: `/users/my-profile`,
        method: "GET",
      }),
    }),
    getUsers: build.query({
      query: (params) => ({
        url: `/users`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.user],
    }),
    getSingleUsers: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    deleteUsers: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUsers: build.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    submitFeedback: build.mutation({
      query: (data) => ({
        url: `/faq/create`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useUpdateUsersMutation,
  useGetSingleUsersQuery,
  useDeleteUsersMutation,
  useLoginMutation,
  useRegistrationMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetUsersQuery,
  useSubmitFeedbackMutation,
} = authApi;
