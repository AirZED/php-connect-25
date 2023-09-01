import { Event } from "@/types";
import React from "react";

type EventScheduleCardProps = Event["meta"] & {
  time?: string;
};
function AgendaCard(props: EventScheduleCardProps) {
  return (
    <div className="flex max-w-md lg:max-w-[1200px] justify-between lg:gap-x-10 gap-x-3 flex-col lg:flex-row my-6 gap-y-1 lg:my-4">
      <div className="w-[280px] flex justify-start items-center">
        <span className="text-white uppercase font-heading lg:text-2xl">{props.time}</span>
      </div>
      <div className="rounded lg:px-7 px-2 flex flex-col bg-[#040C05] py-4 lg:py-8  lg:w-[920px]">
        <div className="flex flex-col items-start justify-start">
          <span className="max-w-[190px] lg:max-w-[490px] font-sans font-bold text-base lg:text-[32px] lg:leading-8">
            {props.title}
          </span>
          {!!props.by && <span>{props.by}</span>}
        </div>
        <div className="flex items-center justify-between py-2 text-[#E9F7FF] lg:py-3  ">
          <span className="text-base lg:text-xl font-light ">{props.details}</span>
        </div>
      </div>
    </div>
  );
}

export default AgendaCard;
