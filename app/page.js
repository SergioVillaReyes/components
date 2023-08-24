"use client";
import React, {useState} from "react";
import moment from "moment";
import Select from '@/components/Select';
import DatePicker from "@/components/DatePicker";
import Search from "@/components/Search";
import Input from "@/components/Input";
import Modal from "@/components/Modal";

export default function Home() {
  const [formData, setFormData] = useState({
    quantity: '',
    date: moment().toDate(),
    search: "",
  });
  const [errors, setErrors] = useState('');
  const [showModal, setShowModal] = useState(false);


  const options = [
    {
      label: '1000',
      value: 1000,
    },
    {
      label: '25656',
      value: 25656,
    },
    {
      label: '3900',
      value: 3900,
    },
  ];

  const onChange = (e) => {
    setErrors({});
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const searchFn = (text) => {
    console.log('text', text);
  }

  const submit = () => {
    formData.quantity === '' && setErrors({quantity: "Este campo es obligatorio"})
    console.log('formData', formData);
  };

  return (
    <main>
      <Select
        name="quantity"
        label="Cantidad de registros"
        value={formData.quantity}
        onChange={onChange}
        error={errors.quantity}
        options={options}
        // disabled
        // helpText="No hay productos en este momento"
      />
      <DatePicker
        name="date"
        label="Fecha"
        value={formData.date}
        placeholder="Seleccione una fecha"
        onChange={onChange} 
        error={errors.date}
        // disabled
        // helpText="No hay dfsdfsdf"
      />
      <Input />
      <Search
        name="search"
        search={searchFn}
        onChange={onChange}
      />
      <button className="btn-primary" onClick={() => submit()}>
        Enviar
      </button>
      <br />
      <br />
      <button className="btn-secondary" onClick={() => setShowModal(true)}>
        Mostrart modal
      </button>
      <Modal
       showModal={showModal}
       setShowModal={setShowModal}
       textPrimary="Abonar recarga"
       title={"hola"}
      >
        Contenido del Modal
      </Modal>
    </main>
  )
}
