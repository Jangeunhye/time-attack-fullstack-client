"use client";
import { client } from "@/api";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { Response } from "@/types/Response.type";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useId, useState } from "react";

function DealsCreate() {
  const route = useRouter();

  const textareaId = useId();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState<number>();
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<any>();

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      formData.append(
        "deal",
        JSON.stringify({
          title,
          content,
          price,
          location,
        })
      );

      formData.append("image", image);

      const response = await client.post<Response>("/deals/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.data.success) {
        throw new Error("업로드실패");
      }
      route.replace("/");
    } catch (e) {
      console.error(e);
    }
  };
  const handleImageChange: ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const image = event.target.files![0];

    setImage(image);
  };
  return (
    <Page>
      <Heading>판매글 작성하기</Heading>
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
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
