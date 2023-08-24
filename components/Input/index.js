"use client";

import React from "react";
import { InputStyled } from "./styledInput";

const Input = () => {
  return (
     <>
        <h4>Organizar por</h4>
        <InputStyled placeholder="Dumb text" $size="1em" />
    </>
    );
};

export default Input;