import React, { useState } from "react";
import LeftIcon from "../../../../assets/When/Left.svg";
import RightIcon from "../../../../assets/When/Right.svg";
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (value) => {
    setSelectedMonth((prevMonth) => {
      const newMonth = prevMonth + value;
      if (newMonth < 0) {
        setSelectedYear((prevYear) => prevYear - 1);
        return 11;
      } else if (newMonth > 11) {
        setSelectedYear((prevYear) => prevYear + 1);
        return 0;
      } else {
        return newMonth;
      }
    });
  };

  const handleYearChange = (value) => {
    setSelectedYear((prevYear) => prevYear + value);
  };

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const weeksInMonth = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

    const calendar = [];

    calendar.push(
      <div className="flex flex-col  w-full h-[94px]  items-between  font-poppins  text-center">
        <div className="flex  justify-center gap-10 w-full items-end h-full pt-4 ">
          <div className="flex items-center justify-between px-[8px] border-[1px] rounded-[3px] border-[#DFDFDF] w-[118px] h-[25px]">
            <button className="" onClick={() => handleYearChange(-1)}>
              <img src={LeftIcon} alt="" />
            </button>
            <div className="text-[12px] text-[#909090]">{selectedYear}</div>
            <button className="" onClick={() => handleYearChange(1)}>
              <img src={RightIcon} alt="" />
            </button>
          </div>
          <div className="flex items-center justify-between px-[8px]  border-[1px] rounded-[3px] border-[#DFDFDF] w-[118px] h-[25px]">
            <button className="" onClick={() => handleMonthChange(-1)}>
              <img src={LeftIcon} alt="" className="" />
            </button>
            <div className="text-[12px] text-[#909090]">
              {new Date(selectedYear, selectedMonth).toLocaleDateString(
                "en-US",
                { month: "long" }
              )}
            </div>
            <button className="" onClick={() => handleMonthChange(1)}>
              <img src={RightIcon} alt="" />
            </button>
          </div>
        </div>

        <div
          key="week-headers"
          className="grid grid-cols-7 font-mont text-[12px] uppercase text-[#909090]  w-full h-full items-end pb-[5px] "
        >
          <div className="font-bold">Sun</div>
          <div className="font-bold">Mon</div>
          <div className="font-bold">Tue</div>
          <div className="font-bold">Wed</div>
          <div className="font-bold">Thu</div>
          <div className="font-bold">Fri</div>
          <div className="font-bold">Sat</div>
        </div>
      </div>
    );

    let day = 1 - firstDayOfMonth;

    for (let week = 0; week < weeksInMonth; week++) {
      const weekCells = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date(selectedYear, selectedMonth, day);

        const cellClasses = `h-[75px] w-[111px] border-gray-100 text-[12px]  flex justify-start pl-[10px] pt-[10px] font-mont text-center cursor-pointer ${
          selectedDate && selectedDate.getTime() === date.getTime() ? "" : ""
        }`;

        let formattedDay =
          day > 0 && day <= daysInMonth ? day.toString().padStart(2, "0") : "";

        let borderStyles = "border-b-[2px]  border-r-[2px]";
        if (week === 0) {
          borderStyles += " border-t-[2px]";
        }

        if (week === weeksInMonth - 1) {
          borderStyles += " border-b-[2px]";
        }
        if (i === 6) {
          borderStyles += " border-r-[0px]";
        }

        weekCells.push(
          <div
            key={day}
            className={`${borderStyles} ${cellClasses} text-[#909090]`}
            onClick={() => handleDateClick(date)}
            
          >
            {formattedDay}
          </div>
        );

        day++;
      }

      calendar.push(
        <div key={`week-${week}`} className="grid grid-cols-7">
          {weekCells}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="w-[773px] bg-[#FFFFFF] shadow-md  rounded-[9px] ">
      <div className="">{generateCalendar()}</div>
    </div>
  );
};

export default Calendar;
