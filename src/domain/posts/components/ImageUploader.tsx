import React, { useState } from "react";
import { useUploadImages } from "../hooks/useUploadImages";

type ImageUploaderProps = {
  onUploaded: (imageUrls: string[]) => void;
};

const ImageUploader = ({ onUploaded }: ImageUploaderProps) => {
  const uploadImages = useUploadImages();
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);

    const localPreviewUrls = fileList.map((file) => URL.createObjectURL(file));
    setPreviewUrls(localPreviewUrls);

    uploadImages.mutate(fileList, {
      onSuccess: (res) => {
        onUploaded(res.data.imageUrls);
      },
      onError: () => {
        alert("이미지 업로드에 실패했어요.");
      },
    });
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChangeFile}
      />

      {uploadImages.isPending && <div>업로드 중...</div>}

      {previewUrls.length > 0 && (
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {previewUrls.map((url, index) => (
            <img
              key={`${url} - ${index}`}
              src={url}
              alt={`preview-${index}`}
              className="w-16 h-16 rounded object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
