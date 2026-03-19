import type { RouletteResponse } from "../domain/roulette/types/roulette.type"
import { axiosInstance } from "./axiosInstance"
import { API } from "./endpoints"

export const SpinRoulette = async () =>{
    const {data} = await axiosInstance.post<RouletteResponse>(API.ROULETTE)
    return data
}