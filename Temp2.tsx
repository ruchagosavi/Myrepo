import React, { useState } from 'react';
import { Calendar, momentLocalizer, EventProps, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.css';
import Modal from 'react-modal';

const localizer = momentLocalizer(moment);

const initialEvents: EventProps[] = [
  {
    title: 'Meeting',
    start: new Date(2024, 7, 10, 10, 0), // August 10, 2024 10:00 AM
    end: new Date(2024, 7, 10, 12, 0),   // August 10, 2024 12:00 PM
  },
  {
    title: 'Lunch Break',
    start: new Date(2024, 7, 12, 13, 0), // August 12, 2024 1:00 PM
    end: new Date(2024, 7, 12, 14, 0),   // August 12, 2024 2:00 PM
  },
];

Modal.setAppElement('#root');

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<EventProps[]>(initialEvents);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    console.log('Slot selected:', slotInfo); // Debugging
    setStart(slotInfo.start);
    setEnd(slotInfo.end);
    setModalIsOpen(true);
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (start && end) {
      const newEvent: EventProps = {
        title,
        start,
        end,
      };
      console.log('Adding event:', newEvent); // Debugging
      setEvents([...events, newEvent]);
      setTitle('');
      setStart(null);
      setEnd(null);
      setModalIsOpen(false);
    } else {
      console.log('Start or end date is null'); // Debugging
    }
  };

  const closeModal = () => {
    setTitle('');
    setStart(null);
    setEnd(null);
    setModalIsOpen(false);
  };

  return (
    <div className={styles.calendarContainer}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Add Event</h2>
        <form onSubmit={handleAddEvent} className={styles.eventForm}>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit">Add Event</button>
        </form>
      </Modal>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '70vh', width: '100%' }}
        selectable
        onSelectSlot={handleSelectSlot}
        className={styles.myCustomCalendar}
      />
    </div>
  );
};

export default MyCalendar;


/* Calendar.module.css */

.calendarContainer {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eventForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.eventForm input, .eventForm button {
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.eventForm button {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.eventForm button:hover {
  background-color: #0056b3;
}

.myCustomCalendar {
  width: 100%;
  max-width: 1200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;
}

.rbc-toolbar {
  background-color: #007bff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rbc-toolbar button {
  color: #fff;
  background-color: #007bff;
  border: none;
}

.rbc-event {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
}
