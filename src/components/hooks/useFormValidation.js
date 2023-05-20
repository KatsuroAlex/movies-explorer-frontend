import React, { useState } from 'react';

export function useFormValidation() {
  
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: input.validationMessage});
    setIsValid(input.closest('form').checkValidity());
  };

  function validateEmail(email) {
    const emailPattern = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  }

  function validateForm() {
    const newErrors = {};
    let formIsValid = true;

    if (!values.email || !validateEmail(values.email)) {
      newErrors.email = 'Поле должно содержать email в формате "email@email.ru"';
      formIsValid = false;
    }

    setErrors(newErrors);
    setIsValid(formIsValid);
  }

  return { values, errors, isValid, handleChange, validateForm, setValues, setIsValid, setErrors};
};
