"use client";
import React, {useState} from "react";
import Select from '@/components/Select';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [errors, setErrors] = useState('');
  const options = [
    {
      label: '1000',
      value: 1,
    },
    {
      label: '25656',
      value: 2,
    },
    {
      label: '3900',
      value: 3,
    },
  ];

  const onChange = (e) => {
    setErrors('');
    setSelectedOption(e.target.value);
  }

  const submit = () => {
    if (selectedOption === '') {
      setErrors('Este campo es obligatorio')
    }
  };

  return (
    <main>
      <Select 
        label="Cantidad de registros"
        onChange={onChange}
        value={selectedOption}
        error={errors}
        options={options} />
      <Select 
        label="Stock" 
        placeholder="0"
        helpText="No hay productos en este momento"
        disabled={true}/>
      <button onClick={() => submit()}>
        Enviar
      </button>
    </main>
  )
}
