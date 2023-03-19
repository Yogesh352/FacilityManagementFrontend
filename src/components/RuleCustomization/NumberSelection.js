import { useState } from 'react';
import { NumberInput, Group, ActionIcon, NumberInputHandlers, rem } from '@mantine/core';
import './RuleCustomizationHome.css'


const NumberSelection = ({defaultValue}) => {
  const [value, setValue] = useState(defaultValue);
  const increment = (event) => {
    let newValue = value + 5;
    setValue(newValue);
  };
  const decrement = (event) => {
    let newValue = value - 5;
    if (newValue < 0){
        newValue = 0
    }
    setValue(newValue);
  };

  return (
    <Group spacing={5}>
      <ActionIcon size={42} variant="transparent" onClick={decrement}>
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        step={5}
        variant="filled"
        styles={{ input: { width: rem(54), textAlign: 'center'} }}
      />

      <ActionIcon size={42} variant="transparent" onClick={increment}>
        +
      </ActionIcon>
    </Group>
  );
}

export default NumberSelection;