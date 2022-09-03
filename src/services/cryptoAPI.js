import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const headers = {
    'X-RapidAPI-Key': '5212a65a65msh1c901a42edbb544p197b04jsn180460f5d428',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) => ({url: url, headers: headers})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints(build) {
        getCryptos: build.query({
            query: () => createRequest('/exchanges')
        })
    }
})



