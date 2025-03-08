import React, { useState, useEffect } from 'react';
import './Calendar.css';

function Calendar() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== today.getDate()) {
        setToday(now);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [today]);

  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, today.getMonth(), 1).getDay();

  const daysHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div id="calendar">
      <div id="calendar-header">
        {month} {year}
      </div>
      <div id="calendar-body">
        {daysHeadings.map(day => (
          <div key={day} className="calendar-day-heading">
            {day}
          </div>
        ))}
        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}
        {days.map(day => (
          <div key={day} className={`calendar-day ${day === today.getDate() ? 'today' : ''}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
