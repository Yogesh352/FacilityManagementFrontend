import { Stack , List, Container} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import { DownloadIcon } from '../Icon/index';
import ReactPDF from '@react-pdf/renderer';
import Report from './Report';
import * as ReactDOM from 'react-dom';
import PdfRender from './PdfRender';


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

    function openWindow(month, year) {

        var viewer = window.open('', '', 'width=300, height=300');
        viewer.document.body.innerHTML = '<div id="report-viewer"></div>';
        // ReactDOM.render(<Report />, viewer.document.getElementById('report-viewer'));
        ReactDOM.render(<PdfRender />, viewer.document.getElementById('report-viewer'));
    }

    return (
        <Stack>
            <Container className="bg-trnasparent w-full p-0">
                {arr.map((item) => (
                    <Link key={item.month} className="block underline pt-5 border-b font-semibold" onClick={() => openWindow(item.month, item.year)}>
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