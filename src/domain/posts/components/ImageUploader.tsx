import React, { useState } from "react";

function ImageUploader() {
  const [imageSrc, setImageSrc] = useState<string | null>(null); // 미리보기 URL
  const [file, setFile] = useState<File | null>(null); // 서버 전송용 파일 객체

  const encodeFileToBase64 = (fileBlob: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);

      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setImageSrc(result); // 미리보기 URL 설정
          resolve(result);
        } else {
          reject(new Error("Failed to read file as data URL."));
        }
      };

      reader.onerror = () => reject(reader.error ?? new Error("FileReader error"));
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;

    if (selectedFile) {
      setFile(selectedFile); // 1. 파일 상태 저장
      void encodeFileToBase64(selectedFile); // 2. 미리보기 생성
    } else {
      setFile(null);
      setImageSrc(null);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {imageSrc && (
        <img
          src={imageSrc}
          alt="Preview"
          style={{ maxWidth: "300px" }}
        />
      )}
    </div>
  );
}

export default ImageUploader;