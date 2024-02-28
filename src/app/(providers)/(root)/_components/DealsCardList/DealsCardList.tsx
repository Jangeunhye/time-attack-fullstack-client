import { Deal } from "@/api/deal.api.ts/deal.dto";
import DealCard from "../DealCard/DealCard";

function DealsCardList({ deals }: { deals: Deal[] }) {
  return (
    <section>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12">
        {deals.map((deal) => (
          <li key={deal.id}>
            <DealCard deal={deal} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DealsCardList;
