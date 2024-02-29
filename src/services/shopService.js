// import { base_url } from "../firebase/database";
// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// // define un servicio usando una base URL y los endpoints.

// export const shopApi = createApi ((
//     reducerPath : "shopApi",
//     baseQuery: fetchBaseQuery({baseUrl : base_url}),
//     endpoints :(builder) =>({
//         getProducts: builder.query({
//             query: ()=>'products.json'
//         }),
//         getProductsByCategories: builder.query({
//             query: (category) `productos.json?orderBy="category"&equalTo=${category}`
//         })
//         getCategories: builder.query({
//             query: ()=>'categories.json'
//         }),
//     }
//     )
// ))
// export const {useGetProductsQuery, useGetProductsByCategoryQuery, useGetCategoriesQuery} = shopApi