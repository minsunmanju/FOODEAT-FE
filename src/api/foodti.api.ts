import type { FoodtiResponse, SubmitFoodtiPayload } from "../types/foodti.type";
import { axiosInstance } from "./axiosInstance";
import { API } from "./endpoints";

export const SubmitFoodti = async (payload: SubmitFoodtiPayload) =>{
    const {data} = await axiosInstance.post<FoodtiResponse>(API.FOODTI.SUBMIT_FOODTI, payload)
    return data
}