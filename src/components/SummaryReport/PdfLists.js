import { Stack , List, Container} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import { DownloadIcon } from '../Icon/index';
import ReactPDF from '@react-pdf/renderer';
// import Report from './Report';
// import * as ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
// import PdfRender from './PdfRender';
import pdf from './Report.pdf'


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



const PdfLists = ({values}) => {
    
    console.log(values);
    const [listPdf, setListPdf] = useState(values);

    return (
        <Stack>
            <Container className="bg-trnasparent w-full p-0">
                {values.map((item) => (
                    <a href={pdf} target="_blank" rel="noreferrer" className="block underline pt-5 border-b font-semibold">
                        Summary Report for {months[item.month]} {item.year}
                        <DownloadIcon className="inline float-right"/>
                    </a>
                    )
                )}
            </Container>
        </Stack>
    )

}

export default PdfLists