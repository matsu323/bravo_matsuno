import React, { useState} from "react";
import { Button, Container, Typography, TextField } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Addschedule = () => {
    const [title, setTitle] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [tags, setTags] = useState("")

    const add = (e: React.FormEvent<HTMLFormElement>) => {
        setTags("[0]")
        e.preventDefault()
        axios.post('/addschedule', {
            title: title,
            start: start,
            end: end,
            tags: tags
        }).then(() => {
            console.log("ok")
        })
    }
    
    const [svalue, setSvalue] = React.useState<Dayjs>(
        dayjs('2023-01-01T00:00:00.000Z'),
    );
    const [evalue, setEvalue] = React.useState<Dayjs>(
        dayjs('2023-01-01T00:00:00.000Z'),
    );
    const handleStart = (value: Dayjs | null) => {
        if (value == null) {
            return console.log("Error")
        }
        setSvalue(value);
        setStart(value.toDate().toJSON());
    }
    const handleEnd = (value: Dayjs | null) => {
        if (value == null) {
            return console.log("Error")
        }
        setEvalue(value);
        setEnd(value.toDate().toJSON());
    }
    return (<>
        <Container className="sched">
            <Typography variant="h3">スケジュール作成</Typography>
            <Box sx={{ height: 60 }} />
            <form onSubmit={add}>
                <div>
                    <TextField required label="タイトル" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <Box sx={{ height: 20 }} />
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={2}>
                            <DateTimePicker
                                label="開始する日時"
                                value={svalue}
                                onChange={handleStart}                     
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DateTimePicker
                                label="終了する日時"
                                value={evalue}
                                onChange={handleEnd}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                </div>
                <Box sx={{ height: 30 }} />
                <div>
                    <Button variant="contained" type="submit">スケジュール作成</Button>
                </div>
            </form>
        </Container>
    </>)
}
export default Addschedule