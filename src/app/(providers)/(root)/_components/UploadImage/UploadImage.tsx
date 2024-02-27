"use client";
import { client } from "@/api";
import { useState } from "react";

function UploadImage() {
  const [image, setImage] = useState<any>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const imageList = event.target.files;
    // let imageUrlList = [...images];
    const selectedImage = event.target!.files![0];

    setImage(selectedImage);

    // for (let i = 0; i < imageList!.length; i++) {
    //   const currentImageUrl = URL.createObjectURL(imageList![i]);
    //   imageUrlList.push(currentImageUrl);
    // }
    // if (imageUrlList.length > 3) {
    //   imageUrlList = imageUrlList.slice(0, 3);
    // }
    // setImages(imageUrlList);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      //   for (const image of images) {
      //     formData.append("file", String(image));
      //   }

      formData.append("file", image);

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
