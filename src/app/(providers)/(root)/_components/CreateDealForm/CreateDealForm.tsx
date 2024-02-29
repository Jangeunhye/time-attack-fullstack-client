import { client } from "@/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Response } from "@/types/Response.type";
import { useRouter } from "next/navigation";

import { ChangeEventHandler, useId, useState } from "react";

function CreateDealForm() {
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

      if (!(title && content && price && location && image)) {
        alert("빠짐없이 작성해주세요.");
      }

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

      const response = await client.post<Response>(`/deals/create`, formData, {
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
    <section className=" flex flex-col gap-y-6">
      <Input
        label="글 제목"
        type="text"
        height="createInput"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <label
          htmlFor="fileId"
          className="inline-block px-2 py-2 hover:cursor-pointer  hover:opacity-70  bg-[#2b1e8e] text-white rounded-md"
        >
          파일 찾기
        </label>
        <input
          type="file"
          id="fileId"
          accept="image/*"
          className="w-0 h-0 p-0 hidden border-0"
          onChange={handleImageChange}
        />
        {image ? (
          <div className="inline-block px-3 font-['Happiness-Sans-Regular']">
            {image.name}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center ">
        <label htmlFor={textareaId} className="self-start text-lg">
          글 내용
        </label>
        <textarea
          id={textareaId}
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="h-32 mt-1.5 w-full border rounded px-6 py-3 font-['Happiness-Sans-Regular']"
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
  );
}

export default CreateDealForm;
