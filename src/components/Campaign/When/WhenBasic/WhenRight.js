import React, { useState } from "react";
import LeftIcon from "../../../../assets/When/Left.svg";
import RightIcon from "../../../../assets/When/Right.svg";

function WhenRight() {
  //calendar
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDatetrigger, setStartdatetrigger] = useState(false);
  const [endDatetrigger, setEnddatetrigger] = useState(false);
  const [endDate, setEnddate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [time, setTime] = useState("");
  console.log(time)
  const [StartTime, setStartTime] = useState("");
  console.log(StartTime)

  const handleStartTimeInputChange = (event) => {
    const { value } = event.target;
    setStartTime(formatTime(value));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTime(formatTime(value));
  };

  const formatTime = (input) => {
    const cleanInput = input.replace(/\D/g, "");
    const formattedTime = cleanInput.replace(
      /^(\d{0,2})(\d{0,2})(\d{0,2}).*/,
      (match, p1, p2, p3) => {
        const hour = p1.padStart(2, "0");
        const minute = p2.padStart(2, "0");
        const second = p3.padStart(2, "0");
        return `${hour}:${minute}:${second}`;
      }
    );

    return formattedTime;
  };

  const handleChangeStartDate = () => {
    setStartdatetrigger(true);
    setEnddatetrigger(false);
  };

  const handleChangeEndDate = () => {
    setEnddatetrigger(true);
    setStartdatetrigger(false);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log("Start date is ", date);
  };
  const handleEndDateClick = (date) => {
    setEnddate(date);
    console.log("End date is ", date);
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
      <div className="flex flex-col gap-4 font-poppins  text-center">
        <div className="flex  gap-8 w-full items-end h-full  ">
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
          className="grid grid-cols-7 font-mont text-[12px] uppercase text-[#909090] pb-[10px] w-full h-full   "
        >
          <div className="font-bold">Su</div>
          <div className="font-bold">Mo</div>
          <div className="font-bold">Tu</div>
          <div className="font-bold">We</div>
          <div className="font-bold">Th</div>
          <div className="font-bold">Fr</div>
          <div className="font-bold">Sa</div>
        </div>
      </div>
    );

    let day = 1 - firstDayOfMonth;

    for (let week = 0; week < weeksInMonth; week++) {
      const weekCells = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date(selectedYear, selectedMonth, day);

        const cellClasses = `text-[12px] w-[40px] h-[40px] font-mont flex justify-center items-center cursor-pointer ${
          selectedDate && selectedDate.getTime() === date.getTime()
            ? "bg-[#e0ecfc] rounded-full"
            : ""
        }`;

        let formattedDay =
          day > 0 && day <= daysInMonth ? day.toString().padStart(2, "0") : "";

        weekCells.push(
          <div
            key={day}
            className={` ${cellClasses} text-[#909090] `}
            onClick={() => handleDateClick(date)}
          >
            {formattedDay}
          </div>
        );

        day++;
      }

      calendar.push(
        <div key={`week-${week}`} className="grid grid-cols-7 ">
          {weekCells}
        </div>
      );
    }

    return calendar;
  };

  const generateEndCalendar = () => {
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const weeksInMonth = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

    const calendar = [];

    calendar.push(
      <div className="flex flex-col gap-4 font-poppins  text-center">
        <div className="flex  gap-8 w-full items-end h-full  ">
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
          className="grid grid-cols-7 font-mont text-[12px] uppercase text-[#909090] pb-[10px] w-full h-full   "
        >
          <div className="font-bold">Su</div>
          <div className="font-bold">Mo</div>
          <div className="font-bold">Tu</div>
          <div className="font-bold">We</div>
          <div className="font-bold">Th</div>
          <div className="font-bold">Fr</div>
          <div className="font-bold">Sa</div>
        </div>
      </div>
    );

    let day = 1 - firstDayOfMonth;

    for (let week = 0; week < weeksInMonth; week++) {
      const weekCells = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date(selectedYear, selectedMonth, day);

        const cellClasses = `text-[12px] w-[40px] h-[40px] font-mont flex justify-center items-center cursor-pointer ${
          endDate && endDate.getTime() === date.getTime()
            ? "bg-[#e0ecfc] rounded-full"
            : ""
        }`;

        let formattedDay =
          day > 0 && day <= daysInMonth ? day.toString().padStart(2, "0") : "";

        weekCells.push(
          <div
            key={day}
            className={` ${cellClasses} text-[#909090] `}
            onClick={() => handleEndDateClick(date)}
          >
            {formattedDay}
          </div>
        );

        day++;
      }

      calendar.push(
        <div key={`week-${week}`} className="grid grid-cols-7 ">
          {weekCells}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="font-poppins flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-[#676767]">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-[12px] ">
            <label className="w-[80px]">Start Date</label>
            <span
              className="bg-[white] shadow-md h-[24px] w-[97px] cursor-pointer flex justify-center items-center"
              onClick={handleChangeStartDate}
            >
              {selectedDate
                ? selectedDate
                    .toLocaleString("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
                : ""}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[12px]">
            <label className="w-[65px]">Start Time</label>
            <input
              type="text"
              onChange={handleStartTimeInputChange}
              className="bg-[white]   h-[24px] w-[97px] px-1 border border-gray-300 rounded focus:outline-none"
              placeholder="HH:MM:SS"
            />
          </div>
        </div>
        <div className="flex justify-between  ">
          <div className="flex items-center  gap-3 text-[12px]">
            <label className="w-[80px]">End Date</label>
            <span
              className="bg-[white] shadow-md h-[24px] w-[97px] cursor-pointer flex justify-center items-center"
              onClick={handleChangeEndDate}
            >
              {endDate
                ? endDate
                    .toLocaleString("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
                : ""}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[12px]">
            <label className="w-[65px]">End Time</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="bg-[white] h-[24px] w-[97px] px-1 border border-gray-300 rounded focus:outline-none"
              placeholder="HH:MM:SS"
            />
          </div>
        </div>
      </div>
      {startDatetrigger || endDatetrigger ? (
        ""
      ) : (
        <div className="w-[390px] h-full shadow-md text-[#909090] bg-white flex flex-col gap-2 pt-4 px-4">
          <div>{generateCalendar()}</div>
        </div>
      )}
      {startDatetrigger && (
        <div className="w-[390px] h-full shadow-md text-[#909090] bg-white flex flex-col gap-2 pt-4 px-4">
          <span className="text-[15px]">Start Date</span>
          <div>{generateCalendar()}</div>
        </div>
      )}
      {endDatetrigger && (
        <div className="w-[390px] h-full shadow-md text-[#909090] bg-white flex flex-col gap-2 pt-4 px-4">
          <span className="text-[15px]">End Date</span>
          <div>{generateEndCalendar()}</div>
        </div>
      )}
    </div>
  );
}

export default WhenRight;
