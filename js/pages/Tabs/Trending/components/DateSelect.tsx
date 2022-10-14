import dayjs from 'dayjs';
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';

function DateSelect() {
  const [date, setDate] = useState(new Date());
  const [datePickerShow, setDatePickerShow] = useState(false);

  const handleOpenDatePicker = () => {
    setDatePickerShow(true);
  };
  const handleDatePickerConfirm = (res: any) => {
    console.log(res);
    setDatePickerShow(false);
    setDate(res);
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpenDatePicker}>
        <Text>DatePicker</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode={'date'}
        open={datePickerShow}
        date={date}
        onConfirm={handleDatePickerConfirm}
        onCancel={() => {
          setDatePickerShow(false);
        }}
      />
      <Text>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</Text>
    </>
  );
}

export default DateSelect;
