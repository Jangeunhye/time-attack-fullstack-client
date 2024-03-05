import { Deal } from "@/api/deal.api.ts/deal.dto";
import formatPrice from "@/utils/formattingPrice";
import Image from "next/image";
import Link from "next/link";

function DealCard({ deal }: { deal: Deal }) {
  return (
    <Link
      href={`/deals/${deal.id}`}
      className="relative flex flex-col group hover:scale-105 transition-transform	w-[230px]"
    >
      <section className="font-['Happiness-Sans-Bold'] w-[230px] text-center">
        <div className="relative overflow-hidden rounded-xl w-[230px] h-[230px] font-light shadow-xl">
          <Image
            src={`https://port-0-time-attack-fullstack-server-am952nltdolbtm.sel5.cloudtype.app/images/${deal.imageUrl}`}
            alt="dealImage"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="  mt-3 mb-2 text-[16px]  ">{deal.title}</div>
        <div className=" text-[18px]  ">{formatPrice(deal.price)}</div>
        <div className="text-[14px] mt-2  mb-1 text-[#1c1c1cec] font-['Happiness-Sans-Regular'] font-bold">
          {deal.location}
        </div>
        <div className="text-[#1c1c1cec] text-[10px] font-['Happiness-Sans-Regular']">
          <span>좋아요 {deal.likedDeals ? deal.likedDeals.length : 0}</span> |
          <span> 조회 {deal.view}</span>
        </div>
      </section>
    </Link>
  );
}

export default DealCard;
