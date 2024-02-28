import { Deal } from "@/api/deal.api.ts/deal.dto";
import Link from "next/link";

function DealCard({ deal }: { deal: Deal }) {
  return (
    <Link href={`/deals/${deal.id}`} className="relative flex flex-col group">
      <div>
        <img src={`http://localhost:5050/images/${deal.imageUrl}`} />
        <div>{deal.title}</div>
        <div>{deal.price}</div>
        <div>{deal.location}</div>
        <div>{deal.view}</div>
      </div>
    </Link>
  );
}

export default DealCard;
