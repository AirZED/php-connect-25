
import { Event } from "@/types";
import AgendaCardGroup from "./AgendaCardGroup";

export interface IEventContainer {
  event: Event[];
}
const Agenda = (props: IEventContainer) => {
  return (
    <div className="lg:w-full">
      {props.event.map(({ meta, group, time, isGroup }, idx) => (
        <AgendaCardGroup
          key={idx}
          meta={meta}
          group={group}
          time={time}
          isGroup={isGroup}
        />
      ))}
    </div>
  );
};

export default Agenda;
