import { Deal } from "@/api/deal.api.ts/deal.dto";
import formatPrice from "@/utils/formattingPrice";
import Image from "next/image";

function DetailDealCard({ deal }: { deal: Deal }) {
  return (
    <section className=" mx-auto w-[750px]">
      <div className="relative overflow-hidden rounded-xl w-[750px] h-[750px] mx-auto font-light shadow-xl">
        <Image
          src={`http://localhost:5050/images/${deal.imageUrl}`}
          alt="dealImage"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="userInfo border-b-2">
        <div className="flex mt-7 items-center">
          <div className="relative overflow-hidden rounded-[50%] w-[40px] h-[40px]  ">
            <Image
              src={`/userIcon.png`}
              alt="dealImage"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="my-4 ml-3 text-[18px] font-['Happiness-Sans-Regular']">
            {deal.user.email}
          </div>
        </div>

        <div className="mb-3 ">
          <span className=" text-[#2b1e8e]">{deal.location}</span> 거래를
          원해요!
        </div>
      </div>

      <div className="my-3 text-[22px] ">{deal.title}</div>
      <div className="mb-4 text-[20px]">{formatPrice(deal.price)}</div>

      <div className="my-6 text-[#1c1c1cec] font-['Happiness-Sans-Regular']">
        {deal.content}
      </div>
      <div className="text-[#1c1c1cec] mb-4 text-[13px] font-['Happiness-Sans-Regular']">
        <span>{`좋아요 ${deal.likedDeals ? deal.likedDeals.length : 0} `}</span>
        |<span> 조회 {deal.view}</span>
      </div>
    </section>
  );
}

export default DetailDealCard;
