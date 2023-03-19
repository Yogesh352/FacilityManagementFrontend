import React from 'react'
import { Stack, Box, Text, Title, Card, Image, Badge, Button, Group, Input } from "@mantine/core";
import NumberSelection from './NumberSelection'
import './RuleCustomizationHome.css'

const BookingRules = () => {
    return (
        <Card 
            padding="lg" 
            radius="md" 
            sx={(theme) => ({
                borderWidth: '2px',
                borderColor: '#94C0DB',
            })}
        >
            <Title order={4}>Booking Rules</Title>
            
            <Group mt="md" mb="xs">
                <Text>Booking Credits for Users (per month)</Text>
                <Input
                    variant="filled"
                    value='1000'
                    sx={(theme) => ({
                        width: '70px'
                    })}
                />
            </Group>

            <Group mt="md" mb="xs">
                <Text>Automatic Booking Cancellation (min)</Text>
                <NumberSelection defaultValue={15}/>
            </Group>
            
            <Group mt="md" mb="xs">
                <Text>Number of no-show before ban</Text>
                <NumberSelection defaultValue={5}/>
            </Group>
        </Card>
    )
}

export default BookingRules
