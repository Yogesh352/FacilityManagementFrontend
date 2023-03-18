import React from 'react';
import {Stack, Title, Container, Flex, Button, Text} from '@mantine/core';
import MonthFilter from "../components/SummaryReport/MonthFilter";
import {useState} from 'react';

// const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

const SummaryReport = () => {
    const [startMonth, setStartMonth] = useState();
    const [startYear, setStartYear] = useState();

    const [endMonth, setEndMonth] = useState();
    const [endYear, setEndYear] = useState();

    // function setStart(month, year) {
    //     setStartMonth(month);
    //     setStartYear(year);
    // }

    // function setEnd(month, year) {
    //     setEndMonth(month);
    //     setEndYear(year);
    // }

    return (
        <Stack>
            <Title className="text-black m-3 mt-4 font-semibold">
                Summary Reports
            </Title>
            
            <Flex direction='row' gap = 'xs' justify='left' align='flex-start'>
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

                <Container className="bg-transparent w-full h-24 pl-0 pt-6">
                    <Button color='gray' variant='outline' className="">
                        Generate
                    </Button>
                </Container>
            </Flex>
                
            
            <Text>
                {startMonth}
                {startYear}
            </Text>

            <Text>
                {endMonth}
                {endYear}
            </Text>

        </Stack>
        
        // <div>
        //     summary
        // </div>
    )
}

export default SummaryReport