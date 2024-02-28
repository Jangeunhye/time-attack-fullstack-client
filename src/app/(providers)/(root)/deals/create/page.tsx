"use client";
import { client } from "@/api";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useId, useState } from "react";
import UploadImage from "../../_components/UploadImage";

function DealsCreate() {
  const textareaId = useId();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<any>([]);

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      for (const image of images) {
        formData.append("files", image);
      }
      formData.append(
        "post",
        JSON.stringify({
          title,
          content,
          price,
          location,
        })
      );

      await client.post<Response>("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("업로드 성공");
    } catch (e) {
      console.error("업로드 실패", e);
    }
  };
  return (
    <Page>
      <Heading>판매글 작성하기</Heading>
      <UploadImage images={images} setImages={setImages} />

      <section className=" flex flex-col gap-y-6">
        <Input
          label="글 제목"
          type="text"
          height="createInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex flex-col items-center ">
          <label htmlFor={textareaId} className="self-start">
            글 내용
          </label>
          <textarea
            id={textareaId}
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-32 mt-1.5 w-full border rounded px-6 py-3"
          ></textarea>
        </div>

        <Input
          label="price"
          type="number"
          height="createInput"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <Input
          label="location"
          type="text"
          height="createInput"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button onClick={handleUpload}>완료</Button>
      </section>
    </Page>
  );
}

export default DealsCreate;
