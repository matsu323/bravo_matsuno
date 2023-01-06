import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { Button, Container, Typography, Box } from "@mui/material";

const Mycallendar = () => {
    const handleDateClick = (arg: DateClickArg) => {
        alert(arg.dateStr);
        
    };
    return (
        <div>
            <div>
                <Button href="/user/addschedule">スケジュールを追加する</Button>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: "event 1", date: `2023-01-01` },
                    { title: "event 2", date: `2023-01-02` },
                ]}
                dateClick={handleDateClick}
            />
        </div>
    );
}
export default Mycallendar