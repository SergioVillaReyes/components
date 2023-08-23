import React, {useState, useEffect} from "react";
import { 
    Icon, 
    Option, 
    OptionsContainer, 
    SelectContainer, 
    SelectGroup, 
    SelectHeader,
    ErrorMesagge,
    HelpText,
} from "./styledSelect";

const Select = ({
    label = '',
    placeholder = 'Selecciona una opción',
    error = '',
    helpText = '',
    value,
    options = [],
    onChange = () => {},
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOption = (option) => {
        onChange({target: {label: option.label, value: option.value}});
        setIsOpen(false);
    };

    useEffect(() => {
        if (value) {
            const r = options.filter((opt) => opt.value === value);
            setSelectedOption(r[0].label);
        }
    }, [value])
    

    return (
        <SelectContainer>
            <span>{label}</span>
            <SelectGroup disabled={disabled}>
                <SelectHeader onClick={() => !disabled && setIsOpen(!isOpen)}>
                    <span>{value ? selectedOption : placeholder}</span>
                    <Icon $isOpen={isOpen} />
                </SelectHeader>
                <OptionsContainer $isOpen={isOpen}>
                    {options.map((option) => (
                        <Option key={option.value} onClick={() => handleOption(option)}>
                            {option.label}
                        </Option>
                    ))}
                </OptionsContainer>
            </SelectGroup>
            {error && !isOpen && <ErrorMesagge>{error}</ErrorMesagge>}
            {helpText && !isOpen && <HelpText>{helpText}</HelpText>}
        </SelectContainer>
    )
}

export default Select;