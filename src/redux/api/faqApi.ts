import { baseApi } from "./baseApi";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //registration
    getSingleFaq: build.query({
      query: (id: string) => {
        return {
          url: `/faq/${id}`,
          method: "GET",
        };
      },
    }),
    // get single room
    deleteFaq: build.mutation({
      query: (id) => ({
        url: `/faq/${id}`,
        method: "GET",
      }),
    }),
    updateFaq: build.mutation({
      query: ({ id, data }) => ({
        url: `/faq/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    getFaqs: build.query({
      query: (params) => ({
        url: `/faq`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useDeleteFaqMutation,
  useGetFaqsQuery,
  useGetSingleFaqQuery,
  useUpdateFaqMutation,
} = faqApi;
