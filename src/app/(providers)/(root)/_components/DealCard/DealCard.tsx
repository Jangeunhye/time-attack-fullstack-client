import { Deal } from "@/api/deal.api.ts/deal.dto";
import Image from "next/image";
import Link from "next/link";

// const notoSans = Noto_Sans({
//   weight: ["500"],

// });

function DealCard({ deal }: { deal: Deal }) {
  return (
    <Link
      href={`/deals/${deal.id}`}
      className="relative flex flex-col group w-[180px] 	"
    >
      <section>
        <div className="relative overflow-hidden rounded-xl w-[100] h-[180px] font-light shadow-xl">
          <Image
            src={`http://localhost:5050/images/${deal.imageUrl}`}
            alt="dealImage"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="py-3 ">{deal.title}</div>
        <div className="font-bold font-['GmarketSansMedium'] ">
          {deal.price}
        </div>
        <div>{deal.location}</div>
        <div>{deal.view}</div>
      </section>
    </Link>
  );
}

export default DealCard;
