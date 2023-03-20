import React from 'react';
import {Stack, Title, Container, Flex, Button, Text, Alert, Modal} from '@mantine/core';
import MonthFilter from "../components/SummaryReport/MonthFilter";
import PdfLists from "../components/SummaryReport/PdfLists";
import {useState, useEffect} from 'react';
import Popup from "../components/SummaryReport/Popup"
import { MdClosedCaption } from 'react-icons/md';

const months = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
}


const SummaryReport = () => {
    const [startMonth, setStartMonth] = useState();
    const [startYear, setStartYear] = useState();

    const [endMonth, setEndMonth] = useState();
    const [endYear, setEndYear] = useState();

    let wrongInput = false
    const [validation, setValidated] = useState();

    const [opened, setOpen] = useState();
    
    // var dict = {
    //     0: [1, 2021],
    //     1: [2, 2021],
    //     2: [3, 2021],
    // }

    const [values, setValues] = useState([]);
    const arr = []

    function validateValues() {
        if (parseInt(startYear) > parseInt(endYear)) {
            setValidated("true");
            setOpen(opened);
        } else if (months[startMonth] > months[endMonth]) {
            setOpen(opened);
        }

        if (parseInt(startYear) == parseInt(endYear)) {
            for (var month = months[startMonth]; month <= months[endMonth]; month++) {
                // dict[index++] = [month, parseInt(startYear)]
                arr.push({month: month, year: parseInt(startYear)})
            }
        }

        

        if (parseInt(startYear) != parseInt(endYear)) {
            for (var month = months[startMonth]; month <= 12; month++) {
                // dict[index++] = [month, parseInt(startYear)]
                arr.push({month: month, year: parseInt(startYear)})
            }

            for (var year = parseInt(startYear)+1; year < parseInt(endYear); year++) {
                for (var month = 1; month <= 12; month++) {
                    // dict[index] = [month, year]
                    // index++
                    arr.push({month: month, year: year})
                }
            }

            for (var month = 0; month <= months[endMonth]; month++) {
                // dict[index++] = [month, parseInt(endYear)]
                arr.push({month: month, year: parseInt(endYear)})
            }
        }
        setValues(arr);

        console.log(arr)
    }

    // function createDict() {
    //     var index = 0

    //     console.log(startMonth)

    //     for (var month = months[startMonth]; month <= 12; month++) {
    //         dict[index++] = [month, parseInt(startYear)]
    //     }

    //     for (var year = parseInt(startYear)+1; year < parseInt(endYear); year++) {
    //         for (var month = 0; month <= 12; month++) {
    //             dict[index] = [month, year]
    //             index++
    //         }
    //     }

    //     for (var month = 0; month <= months[endMonth]; month++) {
    //         dict[index++] = [month, parseInt(endYear)]
    //     }
    // }

    // useEffect( () => {
    //     if (parseInt(startYear) > parseInt(endYear)) {
    //         setValidated("true");
    //         setOpen(opened);
    //     } else if (months[startMonth] > months[endMonth]) {
    //         setValidated("true");
    //         setOpen(opened);
    //     }
    // }, [startMonth, startYear, endMonth, endYear]);

    return (
        <Stack>
            <Title className="text-black m-3 mt-4 font-semibold">
                Summary Reports
            </Title>
            
            <Flex direction='row' justify='left' align='flex-start'>
                <Container fluid='true' className="bg-transparent w-auto p-0 left-0 h-24">
                    <MonthFilter
                        title="From"
                        setMonth={setStartMonth}
                        setYear={setStartYear}
                    />
                </Container>

                <Container fluid='true' className="bg-transparent w-auto pl-5 h-24">
                    <MonthFilter
                        title="To"
                        setMonth={setEndMonth}
                        setYear={setEndYear}
                    />
                </Container>

                <Container className="bg-transparent w-auto h-24 pl-0 pt-6 pr-0">
                    <Button color='gray' variant='outline' className="" onClick={validateValues}
                        >
                        Generate
                    </Button>
                </Container>

                <Container className="bg-transparent w-full h-24 pl-2 pt-6">
                    <Modal opened={opened} title="Invalid Range" className="bg-black">
                    </Modal>
                </Container>
                
                

            </Flex>
                
            <Container className="bg-transparent w-full p-0 m-0 h-full">
                <PdfLists 
                    values={values}
                    />
            </Container>

            <Container className="bg-black">

            </Container>

        </Stack>
    )
}

export default SummaryReport