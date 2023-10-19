import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IServices } from "@/interfaces/services.interface";

export const serviceApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //registration
    addService: build.mutation({
      query: (data: IServices) => {
        return {
          url: `/service/create`,
          method: "POST",
          data,
        };
      },
    }),
    // get single room
    singleService: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.services],
    }),
    updateService: build.mutation({
      query: ({ id, data }) => ({
        url: `/service/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    getServices: build.query({
      query: (params) => ({
        url: `/service`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.services],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useDeleteServiceMutation,
  useSingleServiceQuery,
  useGetServicesQuery,
  useUpdateServiceMutation,
} = serviceApi;
