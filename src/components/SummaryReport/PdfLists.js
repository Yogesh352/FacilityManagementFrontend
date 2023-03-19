import { Stack , List, Container, Text} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import { DownloadIcon } from '../Icon/index';


const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
}

// const arr = [
//     {
//       month: 2,
//       year: 2021,
//     },
//     {
//       month: 3,
//       year: 2021,
//     }
//   ];

const PdfLists = ({arr}) => {
    
    console.log(arr);

    function handleClick() {

    }

    return (
        <Stack>
            <Container className="bg-trnasparent w-full p-0">
                {arr.map((item) => (
                    <Link key={item.month} className="block underline pt-5 border-b font-semibold">
                        Summary Report for {months[item.month]} {item.year}
                        <DownloadIcon className="inline float-right"/>
                    </Link>
                    )
                )}
            
            </Container>
        </Stack>
    )
    
}

export default PdfLists