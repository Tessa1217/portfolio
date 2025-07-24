import WorkCard from "@/components/experience/work-card";
import type { WorkInformation } from "@/types";

interface WorkCardListProps {
  cards: WorkInformation[];
  selectedWorkId: WorkInformation["id"];
  handleWorkCardClick: (id: number) => void;
}

export default function WorkCardList({
  cards,
  selectedWorkId,
  handleWorkCardClick,
}: WorkCardListProps) {
  return (
    <ul className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-4 pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-gray-600">
      {cards.map((card) => (
        <li key={card.company} className="flex-shrink-0 md:flex-shrink-0">
          <WorkCard
            {...card}
            selected={card.id === selectedWorkId}
            handleWorkCardClick={handleWorkCardClick}
          />
        </li>
      ))}
    </ul>
  );
}
