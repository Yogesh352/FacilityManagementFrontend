import React from 'react';
import {Stack, Title, Text, Grid} from '@mantine/core';

const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

const SummaryReport = () => {
    return (
        // <Stack>
        //     <Title className="text-black m-3 mt-4 font-semibold">
        //         Summary Reports
        //     </Title>
            
        //     <Grid>
        //         <Grid.Col span={4}>
        //             Filter
        //         </Grid.Col>
                
        //         <Grid.Col span={2} offset={5}>
        //             Button
        //         </Grid.Col>
        //     </Grid>

        // </Stack>
        
        <div>
            summary
        </div>
    )
}

export default SummaryReport