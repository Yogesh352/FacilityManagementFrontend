import React from 'react'
import { Box, Text, Button } from "@mantine/core";
import { CaretRight } from 'tabler-icons-react';
import { useNavigate } from "react-router-dom";
import './RuleCustomizationHome.css'


const CustomizeFacilitiesButton = () => {
    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/facilities-customization`; 
        navigate(path);
    }
    return (
        <Button 
            variant="outline"
            sx={(theme) => ({
                borderWidth: '2px',
                borderColor: '#94C0DB',
                borderRadius: '0.5rem',
                color: 'black',
                '&:not([data-disabled]):hover': {
                    color: '#94C0DB'
                },
                display: 'flex'
            })}
            onClick={routeChange}
        >
            <Box className='parent'>
                <Box className='first-child'><Text>Customize Facilities</Text></Box>
                <Box className='second-child'><CaretRight size={25} strokeWidth={5} color={'#94C0DB'}/></Box>
            </Box>
        </Button>
    )
}

export default CustomizeFacilitiesButton
