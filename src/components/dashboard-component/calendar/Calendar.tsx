import { FC, useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./Calendar.css"

type CalendarProps = {
  currentMonth: Date | undefined;
  setcurrentMonth: (value: Date | undefined) => void;
}
const Calendar:FC<CalendarProps> = ({currentMonth, setcurrentMonth}) => { 

  return (
    <DayPicker
      animate
      mode="single"
      selected={currentMonth}
      onSelect={(date) => setcurrentMonth(date)}
      footer={
        currentMonth
          ? <p>Tanlangan sana: {currentMonth.toLocaleDateString()}</p>
          : <p>Sana tanlang</p>
      }
      defaultMonth={new Date()}
      className="my-calendar rdp-root"
    />
  );
}

export default Calendar