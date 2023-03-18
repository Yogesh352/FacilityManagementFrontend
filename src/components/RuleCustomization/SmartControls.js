import React from 'react'
import { Stack, Box, Text, Title, Card, Image, Badge, Button, Group, Input } from "@mantine/core";
import NumberSelection from './NumberSelection'
import './RuleCustomizationHome.css'

const SmartControls = () => {
    return (
        <Card 
            padding="lg" 
            radius="md" 
            sx={(theme) => ({
                borderWidth: '2px',
                borderColor: '#94C0DB',
            })}
        >
            <Title order={4}>Smart Controls</Title>
            
            <Group mt="md" mb="xs">
                <Text>Trigger lights off when unoccupied for (min)</Text>
                <NumberSelection defaultValue={15}/>
            </Group>

            <Group mt="md" mb="xs">
                <Text>Trigger aircon off when unoccupied for (min)</Text>
                <NumberSelection defaultValue={15}/>
            </Group>
        </Card>
    )
}

export default SmartControls
