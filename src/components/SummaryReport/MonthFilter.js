import { Select, Flex, Text, Stack } from '@mantine/core';
import {useState} from 'react';


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016']

const MonthFilter = ({title, setMonth, setYear}) => {
    const [mth, setMth] = useState();
    const [yr, setYr] = useState();

    const monthChange = (month) => {
      setMonth(month);
      setMth(month);
    }

    const yearChange = (year) => {
      setYear(year);
      setYr(year);
    }

    return (
      <Flex gap='xs' justify='left' align='left'>
          <Select
          label={title}
          placeholder="Month"
          searchable
          nothingFound="No options"
          data={months}
          value={mth}
          onChange={monthChange}
          style={{width: 100}}
          variant='filled'
        />

        <Select
          label='  '
          placeholder="Year"
          searchable
          nothingFound="No options"
          data={years}
          value={yr}
          onChange={yearChange}
          style={{width: 90}}
          variant='filled'
        />
      </Flex>
      

      
    );

}
export default MonthFilter