import { base_url } from "../firebase/database";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// define un servicio usando una base URL y los endpoints.

export const shopApi = createApi ({
    reducerPath : "shopApi",
    baseQuery: fetchBaseQuery({baseUrl : base_url}),
    endpoints :(builder) =>({
        // getProducts: builder.query({
        //     query: ()=>'products.json'
        // }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getCategories: builder.query({
            query: ()=>'categories.json'
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        })
    })
});
export const {useGetProductsQuery, useGetProductsByCategoryQuery, useGetCategoriesQuery, usePostOrderMutation} = shopApi;
