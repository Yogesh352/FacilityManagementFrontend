import { Alert , Text} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import {useState} from 'react';

const Popup = () => {
    // if (wrongInput == true) {
    //     return (
    //         <Text>
    //             True
    //         </Text>

    //         // <Alert icon={<IconAlertCircle size="1rem" />} title="Invalid Selection!" color="red" className="h-8 pt-1 w-48 pl-1 font-thin">
    //         // </Alert>
    //     );
    // } else {
    //     return null;
    // }

    return (
        <Alert icon={<IconAlertCircle size="1rem" />} title="Invalid Selection!" color="red" className="h-8 pt-1 w-48 pl-1 font-thin">
        </Alert>
    )
    
}

export default Popup