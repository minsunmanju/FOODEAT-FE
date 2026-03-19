import { useMutation } from "@tanstack/react-query";
import { uploadDiaryImages } from "../../../api/image.api";

export function useUploadImages() {
  return useMutation({
    mutationFn: uploadDiaryImages,
  });
}
