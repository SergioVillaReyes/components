import React from "react";
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { 
    DatePickerContainer, 
    DatePickerGroup, 
    DatePickerWrapper, 
    ErrorMesagge, 
    HelpText, 
    Label, 
    StyledDatePicker
 } from "./styledDatePicker";
import moment from "moment";

registerLocale('es', es); 

const DatePicker = ({ 
    label = '',
    name = '',
    helpText = '',
    error = '',
    placeholder,
    value,
    onChange = () => {},
    disabled = false,
}) => {
    return (
        <DatePickerContainer>
            <Label htmlFor={name}>{label}</Label>
                <DatePickerGroup disabled={disabled}>          
                    <DatePickerWrapper>
                        <StyledDatePicker
                            disabled={disabled}
                            locale="es"
                            dateFormat="dd/MM/yyyy"
                            placeholderText={placeholder}
                            selected={value}
                            filterDate={(date) => moment() > date}
                            onChange={(date) => onChange({ target: { name, value: date } })}
                        />
                    </DatePickerWrapper>
                </DatePickerGroup>
            {error && <ErrorMesagge>{error}</ErrorMesagge>}
            {helpText && <HelpText>{helpText}</HelpText>}
        </DatePickerContainer>
    );
  };
  
  export default DatePicker;