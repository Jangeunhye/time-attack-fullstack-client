import API from "@/api";
import { UpdateDeal } from "@/api/deal.api.ts/deal.dto";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

function UpdateDealForm({ dealId }: { dealId: string }) {
  const route = useRouter();

  const textareaId = useId();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [location, setLocation] = useState("");

  const handleUpload = async () => {
    try {
      if (!(title && content && price && location)) {
        alert("빠짐없이 작성해주세요.");
      }

      const data: UpdateDeal = { title, content, price, location };
      await API.deal.editDeal(Number(dealId), data);
      route.replace("/");
    } catch (e) {
      console.error(e);
    }
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

export default UpdateDealForm;
