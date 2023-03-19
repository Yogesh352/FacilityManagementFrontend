import React from 'react'
import { Grid, Box, Stack, Title } from "@mantine/core";
import CustomizeFacilitiesButton from '../components/RuleCustomization/CustomizeFacilitiesButton';
import BookingRules from '../components/RuleCustomization/BookingRules';
import SmartControls from '../components/RuleCustomization/SmartControls';

const RuleCustomisation = () => {
    return (
        <Stack spacing={4} className="h-[100%]">
            <Grid className="w-full h-[200px]">
                <Grid.Col span={12} className="h-fit">
                    <Box className="bg-white w-full h-full rounded-md p-4">
                        <Stack className="h-full w-full" spacing={30}>
                            <Title order={2}>Rule Customization</Title>
                        </Stack>
                        <br/>
                        <Stack>
                            <CustomizeFacilitiesButton/>
                            <BookingRules/>
                            <SmartControls/>
                        </Stack>
                    </Box>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default RuleCustomisation
