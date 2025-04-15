// "use client"

// import React, { useState } from 'react';
// import { format, addMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isAfter, isBefore } from 'date-fns';

// type DateRange = {
//   startDate: Date | null;
//   endDate: Date | null;
// };

// const DateRangePicker: React.FC = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
//   const [range, setRange] = useState<DateRange>({ startDate: null, endDate: null });

//   const handleDateClick = (day: Date) => {
//     if (!range.startDate || (range.startDate && range.endDate)) {
//       setRange({ startDate: day, endDate: null });
//     } else if (range.startDate && !range.endDate) {
//       if (isBefore(day, range.startDate)) {
//         setRange({ startDate: day, endDate: range.startDate });
//       } else {
//         setRange({ ...range, endDate: day });
//       }
//     }
//   };

//   const renderDays = () => {
//     const monthStart = startOfMonth(currentMonth);
//     const monthEnd = endOfMonth(monthStart);
//     const startDate = startOfWeek(monthStart);
//     const endDate = endOfWeek(monthEnd);

//     const rows = [];
//     let days = [];
//     let day = startDate;

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         const isInRange =
//           range.startDate &&
//           !range.endDate &&
//           hoveredDate &&
//           ((isAfter(day, range.startDate) && isBefore(day, hoveredDate)) ||
//             isSameDay(day, hoveredDate));

//         const isSelected =
//           (range.startDate && isSameDay(day, range.startDate)) ||
//           (range.endDate && isSameDay(day, range.endDate));

//         const isInFinalRange =
//           range.startDate &&
//           range.endDate &&
//           (isSameDay(day, range.startDate) ||
//             isSameDay(day, range.endDate) ||
//             (isAfter(day, range.startDate) && isBefore(day, range.endDate)));

//         days.push(
//           <div
//             key={day.toString()}
//             className={`flex items-center justify-center h-10 w-10 rounded-full cursor-pointer 
//               ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''}
//               ${isSelected ? 'bg-blue-500 text-white' : ''}
//               ${isInFinalRange || isInRange ? 'bg-blue-100 text-blue-800' : ''}
//               hover:bg-blue-200`}
//             onClick={() => handleDateClick(day)}
//             onMouseEnter={() => setHoveredDate(day)}
//           >
//             {format(day, 'd')}
//           </div>
//         );
//         day = addDays(day, 1);
//       }

//       rows.push(
//         <div className="flex justify-between" key={day.toString()}>
//           {days}
//         </div>
//       );
//       days = [];
//     }

//     return <div className="space-y-1">{rows}</div>;
//   };

//   return (
//     <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-4">
//         <button
//           onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
//           className="text-gray-600 hover:text-black"
//         >
//           &#8592;
//         </button>
//         <h2 className="text-lg font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
//         <button
//           onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
//           className="text-gray-600 hover:text-black"
//         >
//           &#8594;
//         </button>
//       </div>
//       <div className="grid grid-cols-7 mb-2 text-center text-sm font-medium text-gray-700">
//         {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
//           <div key={day}>{day}</div>
//         ))}
//       </div>
//       {renderDays()}
//       <div className="mt-4 text-sm text-center text-gray-700">
//         {range.startDate && range.endDate
//           ? `Selected: ${format(range.startDate, 'MM/dd/yyyy')} - ${format(range.endDate, 'MM/dd/yyyy')}`
//           : range.startDate
//           ? `Start: ${format(range.startDate, 'MM/dd/yyyy')}`
//           : 'Select a start date'}
//       </div>
//     </div>
//   );
// };

// export default DateRangePicker;

"use client"

import React, { useState, useRef } from 'react';
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isAfter,
  isBefore,
} from 'date-fns';
import { CalendarDays } from 'lucide-react';

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

const DateRangePicker: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [range, setRange] = useState<DateRange>({ startDate: null, endDate: null });
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarRef = useRef<HTMLDivElement | null>(null);

  const handleDateClick = (day: Date) => {
    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({ startDate: day, endDate: null });
    } else if (range.startDate && !range.endDate) {
      if (isBefore(day, range.startDate)) {
        setRange({ startDate: day, endDate: range.startDate });
      } else {
        setRange({ ...range, endDate: day });
      }
      setShowCalendar(false);
    }
  };

  const renderDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isInRange =
          range.startDate &&
          !range.endDate &&
          hoveredDate &&
          ((isAfter(day, range.startDate) && isBefore(day, hoveredDate)) || isSameDay(day, hoveredDate));

        const isSelected =
          (range.startDate && isSameDay(day, range.startDate)) ||
          (range.endDate && isSameDay(day, range.endDate));

        const isInFinalRange =
          range.startDate &&
          range.endDate &&
          (isSameDay(day, range.startDate) ||
            isSameDay(day, range.endDate) ||
            (isAfter(day, range.startDate) && isBefore(day, range.endDate)));

        days.push(
          <div
            key={day.toString()}
            className={`flex items-center justify-center h-10 w-10 rounded-full cursor-pointer
              ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''}
              ${isSelected ? 'bg-blue-500 text-white' : ''}
              ${isInFinalRange || isInRange ? 'bg-blue-100 text-blue-800' : ''}
              hover:bg-blue-200`}
            onClick={() => handleDateClick(day)}
            onMouseEnter={() => setHoveredDate(day)}
          >
            {format(day, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex justify-between" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <div className="relative w-fit">
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex items-center gap-2 bg-[#e1edeb] px-4 py- rounded-full text-sm font-medium text-[#365553] cursor-pointer select-none"
      >
        <CalendarDays size={16} />
        <span>
          {range.startDate && range.endDate
            ? `${format(range.startDate, 'dd MMM yyyy')} - ${format(range.endDate, 'dd MMM yyyy')}`
            : range.startDate
            ? `${format(range.startDate, 'dd MMM yyyy')}`
            : 'Pick date'}
        </span>
      </div>

      {showCalendar && (
        <div ref={calendarRef} className="absolute z-50 mt-2 bg-white p-4 rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
              className="text-gray-600 hover:text-black"
            >
              &#8592;
            </button>
            <h2 className="text-lg font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="text-gray-600 hover:text-black"
            >
              &#8594;
            </button>
          </div>

          <div className="grid grid-cols-7 mb-2 text-center text-sm font-medium text-gray-700">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {renderDays()}
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;

