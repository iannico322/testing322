import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DraggableEvent from '../../../components/dragOnEvent/drag';
import { Event } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

const CalendarSchedulePage = () => {
  const [view, setView] = useState('week');

  const handleViewChange = (view) => {
    setView(view);
  };

  const toolbar = {
    views: ['month', 'week', 'day'],
    label: 'View:',
    onView: handleViewChange,
  };

  {/*Events*/}
  const events = [  
    {
      title: 'Meeting',
      start: new Date(2023,3, 16, 10, 0),
      end: new Date(2023, 3, 16, 11, 0),
      resourceId: 1, // optional
      bgColor: 'green', 
      fgColor: 'white', 
      draggable: true, 
      resizable: true 
    },
    {
      title: 'Meeting Sa  mga Gwapo',
      start: new Date(2023, 3, 20, 9, 0),
      end: new Date(2023, 3, 20, 12, 0),
      resourceId: 1,
      bgColor: 'green',
      fgColor: 'white',
      draggable: true,
      resizable: true
    },
    {
      title: 'Clock-in',
      start: new Date(2023, 2, 21, 8, 0),
      end: new Date(2023, 2, 21, 8, 0),
      resourceId: 2,
      bgColor: 'blue',
      fgColor: 'white',
      draggable: true,
      resizable: true
    },
    {
      title: 'Work with a special project',
      start: new Date(2023, 2, 23, 13, 0),
      end: new Date(2023, 2, 23, 18, 0),
      resourceId: 2,
      bgColor: 'red',
      fgColor: 'white',
      draggable: true,
      resizable: true
    },
    // more events...
  ];

  const dayStart = new Date();
  dayStart.setHours(8, 0, 0);

  const dayEnd = new Date();
  dayEnd.setHours(17, 30, 0);

  const timeSlots = [];
  for (let i = 0; i <= 9; i++) {
  }


  return (
    <div className="flex min-h-[400px]    justify-center w-full  bg-white box-border
    ">

        <div className='flex flex-col gap-10 w-[95%] min-h-[100px] py-5 mx-5 mb-32'>
      
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-8">
          <div></div>
          {timeSlots.map((timeSlot, index) => (
            <div key={index}  className="text-right border-t border-gray-200">
              {moment(timeSlot).format('LT')}
            </div>
          ))}
        </div>
        <Calendar
          localizer={localizer}
          events={events} //note to self no need to add bracket since its already array
          views={['month', 'week', 'day']}
          view={view}
          toolbar={toolbar}
          startAccessor="start"
          endAccessor="end"
          messages={{
            allDay: 'All Day',
            previous: 'Prev',
            next: 'Next',
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            showMore: (total) => `+${total} more`,
          }}
          className="h-screen" // set the calendar's height to fill the screen
          style={{ minWidth: '320px' }} // set the calendar's minimum width to ensure it's visible on small screens
          min={dayStart}
          max={dayEnd}
          timeslots={1}
        />
      </div>
    </div>
    </div>
  );
};

export default CalendarSchedulePage;
