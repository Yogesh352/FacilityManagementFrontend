import React from 'react'
import { Box, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import './RuleCustomizationHome.css'


const CustomizeFacilitiesButton = () => {
    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/facilitiesCustomization`; 
        navigate(path);
    }
    return (
        <Button 
            variant="outline"
            sx={(theme) => ({
                borderWidth: '2px',
                borderColor: '#94C0DB',
                color: 'black',
                '&:not([data-disabled]):hover': {
                    color: '#94C0DB'
                },
                display: 'flex'
            })}
            onClick={routeChange}
            rightIcon={<Text >(insert icon here)</Text>}
        >
            <Box className='alignLeft'><Text>Customize Facilities</Text></Box>
        </Button>
    )
}

export default CustomizeFacilitiesButton
