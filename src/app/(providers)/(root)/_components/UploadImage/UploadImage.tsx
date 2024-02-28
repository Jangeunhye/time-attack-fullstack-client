"use client";
import { client } from "@/api";

function UploadImage({ images, setImages }) {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = [...images];

    for (let i = 0; i < event.target.files!.length; i++) {
      const file = event.target.files![i];
      // 이미지 파일 3개로 제한
      if (newImages.length < 3) {
        // 이벤트객체의 파일을 newImages에 담기

        newImages.push(file);
      }
    }
    setImages(newImages);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      for (const image of images) {
        formData.append("file", String(image));
      }

      formData.append("post", images);

      await client.post<Response>("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("파일 업로드 성공");
    } catch (e) {
      console.error("파일 업로드 실패", e);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <button onClick={handleUpload}> 업로드</button>
    </div>
  );
}

export default UploadImage;
