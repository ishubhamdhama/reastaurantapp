import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/TableBooking.css';
import { useNavigate } from 'react-router-dom';

export default function TableBooking({ closeSidebar }) { // Destructure closeSidebar prop
    const initialValue = {
        date: null,
        timeperiod: "",
        timeslot: "",
        name: "",
        phone: "",
        email: "",
    };
    const navigate = useNavigate();

    const [date, setDate] = useState(null);
    const [time, setTime] = useState("");
    const [selectedTimePeriod, setSelectedTimePeriod] = useState("");
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [booking, setBooking] = useState(initialValue);

    const availableTimeSlots = {
        Afternoon: [
            { time: '12:00 PM', id: 1 },
            { time: '12:30 PM', id: 2 },
            { time: '1:00 PM', id: 3 },
            { time: '1:30 PM', id: 4 },
            { time: '2:00 PM', id: 5 },
            { time: '2:30 PM', id: 6 },
            { time: '3:00 PM', id: 7 },
            { time: '3:30 PM', id: 8 },
            { time: '4:00 PM', id: 9 },
            { time: '4:30 PM', id: 10 },
        ],
        Evening: [
            { time: '5:00 PM', id: 11 },
            { time: '5:30 PM', id: 12 },
            { time: '6:00 PM', id: 13 },
            { time: '6:30 PM', id: 14 },
            { time: '7:00 PM', id: 15 },
            { time: '8:00 PM', id: 16 },
            { time: '8:30 PM', id: 17 },
            { time: '9:00 PM', id: 18 },
            { time: '9:30 PM', id: 19 },
            { time: '10:00 PM', id: 20 },
        ],
    };

    const handleOnChange = (event) => {
        console.log(event);
        setDate(event);
    };

    const handleTimeSlotSelect = (selectedTime) => {
        setTime(selectedTime);
    };

    const handleTimePeriodSelect = (timePeriod) => {
        setSelectedTimePeriod(timePeriod);
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const newBooking = {
            date: date.toISOString(), // Convert date to ISO string format
            timeperiod: selectedTimePeriod,
            timeslot: time,
            name: name,
            phone: mobile,
            email: email,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/slot/table-booking', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBooking)
            });

            const data = await response.json();
            setBooking(data);
            navigate('/formsubmitted');
            closeSidebar(); // Call closeSidebar to close the sidebar
            console.log(booking);
        } catch (error) {
            console.error("Error:", error);
            alert('Failed to book the table. Please try again later.');
        }
    };

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 31);

    return (
        <>
            <div className='table__booking'>
                <Calendar name="date" onChange={handleOnChange} value={date} minDate={new Date()} maxDate={maxDate} />
                <div>
                    <h2 className='text-center mt-12 text-3xl font-bold time-period-heading'>Select Time Period</h2>
                    <ul className="time-period-list">
                        {Object.keys(availableTimeSlots).map((timePeriod) => (
                            <li key={timePeriod}>
                                <button
                                    className={`${selectedTimePeriod === timePeriod ? 'active' : ''} time-period-btn`}
                                    onClick={() => handleTimePeriodSelect(timePeriod)}
                                    name='timeperiod'>
                                    {timePeriod}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedTimePeriod && (
                    <div>
                        <h2>{selectedTimePeriod}</h2>
                        <ul className="time-slot-list">
                            {availableTimeSlots[selectedTimePeriod].map((slot) => (
                                <li key={slot.id}>
                                    <button
                                        className={`time-slot-btn ${time === slot.time ? 'active' : ''}`}
                                        onClick={() => handleTimeSlotSelect(slot.time)}
                                        name='timeslot'>
                                        {slot.time}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <form action="" onSubmit={handleOnSubmit}>
                    {/* Hidden input fields to hold the selected time period and time slot */}
                    <input type="hidden" name="timeperiod" value={selectedTimePeriod} />
                    <input type="hidden" name="timeslot" value={time} />

                    <div>
                        <h2 className='text-center'>Booking Details</h2>
                        <div className='table__booking__input'>
                            <label>Name:</label><br />
                            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='table__booking__input'>
                            <label>Mobile:</label><br />
                            <input type="text" name='phone' value={mobile} onChange={(e) => setMobile(e.target.value)} className='' />
                        </div>
                        <div className='table__booking__input'>
                            <label>Email:</label><br />
                            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='' />
                        </div>
                    </div>
                    <button type="submit" className='px-5 py-2 border-black border mt-4 hover:bg-slate-200 transition'>Submit</button>
                </form>
            </div>
        </>
    );
}
