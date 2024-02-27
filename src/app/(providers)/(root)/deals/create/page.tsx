import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useId } from "react";
import UploadImage from "../../_components/UploadImage";

function DealsCreate() {
  const textareaId = useId();
  const fileId = useId();
  return (
    <Page>
      <Heading>판매글 작성하기</Heading>
      <section className=" flex flex-col gap-y-6">
        <Input label="글 제목" type="text" height="createInput" />
        <UploadImage />
        <div className="flex flex-col items-center ">
          <label htmlFor={textareaId} className="self-start">
            글 내용
          </label>
          <textarea
            id={textareaId}
            name="content"
            className="h-32 mt-1.5 w-full border rounded px-6 py-3"
          ></textarea>
        </div>

        <Input label="price" type="number" height="createInput" />

        <Input label="location" type="text" height="createInput" />
        <Button>완료</Button>
      </section>
    </Page>
  );
}

// 판매글 작성시에는 판매 상품 이미지, 제목, 내용, 가격, 위치의 다섯 가지 정보가 입력되어야 합니다.
export default DealsCreate;
