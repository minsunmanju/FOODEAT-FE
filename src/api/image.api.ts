import { axiosInstance } from "./axiosInstance";
import { API } from "./endpoints";

export type UploadDiaryImagesResponse = {
    imageUrls : string[]
}

export async function uploadDiaryImages(files: File[]){
    const formData = new FormData();

    files.forEach((file) => {
        formData.append("files", file)
    })

    const data = await axiosInstance.post<UploadDiaryImagesResponse>(API.IMAGES_UPLOAD, formData,{
        headers:{
            "Content-Type" : "multipart/form-data"
        }
    })
    return data
}