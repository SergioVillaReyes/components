import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const DatePickerContainer = styled.div`
    width: 100%;
    position: relative;
    font-size: 14px;
    margin: 18px 0px;`;

const Label = styled.label`
    cursor: pointer;
`;

const DatePickerGroup = styled.div`
    border: 1px solid #9966FC;
    background-color: ${(props) => props.disabled ? '#e6e6e6' : 'white'};
    padding: 8px 5px;
    border-radius: 5px;
    margin-top: 5px;
    &:focus-within {
    box-shadow: 0px 0px 3px #9966FC;
    }
    .react-datepicker__current-month {
        color: white;
        text-transform: capitalize;
    }
    .react-datepicker-popper[data-placement^=bottom]
    .react-datepicker__triangle::before, 
    .react-datepicker-popper[data-placement^=bottom]
    .react-datepicker__triangle::after  {
        border: none;
    }
    .react-datepicker__header {
        padding: 5px 15px;
        background-color: #9966FC;
        color: white;
        border-bottom: none;
    }
    .react-datepicker__day-name {
        color: white;
        font-weight: bold;
    }
    .react-datepicker__navigation--previous,
    .react-datepicker__navigation--next {
        padding: 7px;
        color: white;
        width: 10px;
        height: 10px;
        margin: 5px;
    }
    .react-datepicker__day--selected {
        background-color: #7A43E5;
        border-radius: 50%;
        color: white;
        font-weight: bold;
    }
`;

const DatePickerWrapper = styled.div`
    width: 100%;
    .react-datepicker-wrapper {
        width: 100%;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ErrorMesagge = styled.span`
    width: 100%;
    display: flex;
    padding: 3px 0px;
    color: red;
    font-size: 10px;
    z-index: 0;
`;

const HelpText = styled.span`
    color: #999999;
    font-size: 10px;
    z-index: 0;
    right: 0;
`;

export {
    DatePickerContainer,
    Label,
    DatePickerGroup,
    DatePickerWrapper,
    StyledDatePicker,
    ErrorMesagge,
    HelpText,
}
