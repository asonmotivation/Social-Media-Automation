import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import DayGridPlugin from '@fullcalendar/daygrid';
import TimeGridPlugin from '@fullcalendar/timegrid';
import DragAndDropPlugin from '@fullcalendar/interaction';

const Calendar = () => {
      const [events, setEvents] = useState([]);
      const [draggedEvent, setDraggedEvent] = useState(null);

      const handleEventDragStart = (event) => {
            setDraggedEvent(event);
      };

      const handleEventDragStop = (event) => {
            setDraggedEvent(null);
      };

      const handleEventDrop = (event) => {
            const updatedEvent = {
                  ...event,
                  start: event.start.toJSON(),
                  end: event.end.toJSON(),
            };
            setEvents((prevEvents) => [...prevEvents, updatedEvent]);
      };

      return (
            <FullCalendar
                  plugins={[
                        DayGridPlugin,
                        TimeGridPlugin,
                        DragAndDropPlugin,
                  ]}
                  headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                  }}
                  events={events}
                  onEventDragStart={handleEventDragStart}
                  onEventDragStop={handleEventDragStop}
                  onEventDrop={handleEventDrop}
            />
      );
};

export default Calendar;