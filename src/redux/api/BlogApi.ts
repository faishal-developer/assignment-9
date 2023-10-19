import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IBlog } from "@/types";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //registration
    addBlog: build.mutation({
      query: (data: IBlog) => {
        return {
          url: `/blog/create`,
          method: "POST",
          data,
        };
      },
    }),
    // get single room
    singleBlog: build.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
    }),
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blogs],
    }),
    updateBlog: build.mutation({
      query: ({ id, data }) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    getBlogs: build.query({
      query: (params) => ({
        url: `/blog`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.blogs],
    }),
  }),
});

export const {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useSingleBlogQuery,
  useUpdateBlogMutation,
} = blogApi;
