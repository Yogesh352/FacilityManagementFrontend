import React from 'react';
import {Stack, Title, Container, Flex, Button, Text, Alert} from '@mantine/core';
import MonthFilter from "../components/SummaryReport/MonthFilter";
import { IconAlertCircle } from '@tabler/icons-react';
import {useState} from 'react';

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

    let validated = true

    function validateValues() {
        if (startYear > endYear) {
            validated = false
        } else if (months[startMonth] > months[endMonth]) {
            validated = false
        }
    }

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
                    <Button color='gray' variant='outline' className="" 
                        onClick={()=> validateValues ? "Invalid": null}>
                        Generate
                    </Button>
                    
                    <Container>
                        <Alert icon={<IconAlertCircle size="1rem" />} title="Bummer!" color="red">
                            Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
                        </Alert>
                    </Container>

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