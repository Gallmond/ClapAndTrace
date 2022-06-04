import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import SquareButton from './SquareButton';

const CoolDatePicker = (props) => {

  const { onDateSet, maxDate } = props;  

  const [date, setDate] = useState(maxDate ?? new Date())
  const [open, setOpen] = useState(false)

  const _maxDate = maxDate ?? new Date()

  return (
    <>
      <SquareButton title={(date).toISOString().split('T')[0]} onPress={() => setOpen(true)} />
      <DatePicker
        textColor='#fff'
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          onDateSet && onDateSet( date )
        }}
        onCancel={() => {
          setOpen(false)
        }}
        maximumDate={_maxDate}
      />
    </>
  )

}

export default CoolDatePicker;