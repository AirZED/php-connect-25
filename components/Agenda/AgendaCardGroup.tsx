import { Event } from "@/types";
import AgendaCard from "./AgendaCard";

const AgendaCardGroup = (props: Event) => {
  if (!props.isGroup) return <AgendaCard {...props.meta} time={props.time} />;
  return (
    <div className="flex max-w-md lg:max-w-[1200px] justify-between lg:gap-x-10 gap-x-3 flex-col lg:flex-row my-6 gap-y-1 lg:my-4">
      <div
        className={`w-[280px] flex justify-start ${
          props.isGroup ? "lg:items-start lg:py-6 lg:my-4" : "items-center"
        }`}
      >
        <span className="text-white uppercase">{props.time}</span>
      </div>
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 lg:w-[920px]">
        {props.group?.map(({ title, by, details: location }, idx) => {
          return (
            <div
              key={idx}
              className="rounded lg:px-7 px-2 flex flex-col justify-between gap-y-9 items-start bg-[#040C05] py-4 lg:py-8 "
            >
              <div className="flex flex-col justify-start items-start">
                <span className="max-w-[190px] lg:max-w-[340px] font-sans font-bold text-base lg:text-[24px] lg:leading-8">
                  {title}
                </span>
                {!!by && <span>{by}</span>}
              </div>
              <div className="flex justify-between items-center py-2 lg:py-3 gap-x-2 lg:gap-x-3 px-3 lg:px-5 rounded-full bg-black text-white max-w-[219px]">
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgendaCardGroup;
