import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';

const convertToDefaultEventParam = (name, value) => ({
    target:{
        name, value
    }
})

function DatePicker(props) {

    const {name, label, value, onChange} = props;

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar 
            variant="inline" 
            inputVariant="outlined" 
            label={label} 
            format="MM/dd/yyyy"
            name={name}
            value={value}
            onChange={date => onChange(convertToDefaultEventParam(name, date))}/>
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;