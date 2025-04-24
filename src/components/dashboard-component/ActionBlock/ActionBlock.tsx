import { JSX } from "react";
import { Card, CardContent } from "../../../UI/card/Card";
import { Separator } from "../../../UI/seperator/Seperator";
import Union from "../../../assets/icon/union2.svg"

interface ActionBlockProps {
  title: string;
  icon: string;
  actionIcon?: string;
  color: string;
}

export const ActionBlock = ({ title, icon, actionIcon, color }: ActionBlockProps): JSX.Element => {
  return (
    <Card className="h-[108px]">
      <CardContent className="flex justify-between items-center p-4">
        <div className="flex flex-col items-center">
          <img
            className="w-[50px] h-[50px]"
            alt={title}
            src={icon}
          />
          <div className="mt-2 font-semibold text-[#191a1f] text-[10.7px]">
            {title}
          </div>
        </div>

        <Separator
          orientation="vertical"
          className="mx-4 rounded-[50px] h-[79px]"
          style={{ backgroundColor: color.replace("bg-", "") }}
        />

        <div
          className={`${color} w-[43px] h-[43px] rounded-[21.5px] flex items-center justify-center`}
        >
          {actionIcon ? (
            <img
              className="w-[26px] h-[26px]"
              alt="Action"
              src={actionIcon}
            />
          ) : (
            <img
              className="w-[26px] h-[26px]"
              alt="Union"
              src={Union}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};