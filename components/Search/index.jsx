"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ContainerSearch,
  StyledInput,
  StyledIcon,
  StyledForm,
  StyledButton,
  StyledHelpText
} from "./styledSearch";
const Search = ({
  name,
  type = "text",
  placeholder = "Buscar...",
  readOnly = false,
  helpText = null,
  maxLength = 256,
  searchOnPressKey = false,
  className = "",
  innerIcon = false,
  hideButton = false,
  setErrorHelpText,
  errorHelpText,
  search = () => {},
  focusSearch = false,
  icon = '/img/search-blue.svg',
  onClick,
  boxValue,
  onChange,
  alt = false
}) => {
  const searchInput = useRef(null);
  const [value, setValue] = useState('');

  const handleChange = (valueText) => {
    setValue(valueText);
    if (valueText.trim().length === 0) {
      search('');
      console.log("texto vacio")
      return;
    }
    if (searchOnPressKey) {
      search(valueText);
      console.log('Busqueda por tecla presionada')
      return;
    }
    if (setErrorHelpText) {
      setErrorHelpText();
    }
  };

  useEffect(() => {
    if (focusSearch) {
      searchInput.current.focus();
      console.log('Foco apuntando a buscadora')
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    search(value);
    console.log("Busqueda al dar click en el icono o precionar enter");
  };

  return (
    <ContainerSearch>
      <StyledForm onSubmit={submit}>
      {innerIcon && <i className="fa fa-search" aria-hidden="true" />}
        <StyledInput
          ref={searchInput}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={boxValue || value}
          className={className} 
          readOnly={readOnly}
          maxLength={maxLength}
          onChange={alt ? onChange : (e) => handleChange(e.target.value)}
        />

        {!hideButton && (
          <StyledButton 
            type={onClick ? 'button' : 'submit'}
            data-tip="Buscar"  
            onClick={onClick}
          >
            <StyledIcon src={icon} />
          </StyledButton>
        )}
        {helpText && (
          <StyledHelpText $errorHelpText={errorHelpText}>
            {value.length < 4 ? helpText : ''}
          </StyledHelpText>
        )}
      </StyledForm>
    </ContainerSearch>
  );
};

export default Search;