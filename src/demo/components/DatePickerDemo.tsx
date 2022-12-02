import dayjs from 'dayjs';
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import GlobalStyle from '../../styles/GlobalStyle';

function DatePickerDemo() {
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
        <Text style={GlobalStyle.ButtonText}>DatePicker</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode={'date'}
        open={datePickerShow}
        date={date}
        locale="zh-Hans"
        onConfirm={handleDatePickerConfirm}
        onCancel={() => {
          setDatePickerShow(false);
        }}
      />
      <Text>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</Text>
    </>
  );
}

export default DatePickerDemo;
