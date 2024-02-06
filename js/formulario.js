const obtenerDatosDelForm = (form) => {
    const formData = new FormData(form);
    const dataForm = {};
    for (const [key, value] of formData.entries()) {
      dataForm[key] = value;
    }
  
    return dataForm;
  };
  
  const validateDataForm = (dataForm) => {
    let emptyFields = [];
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    for (const key in dataForm) {
      if (dataForm[key].trim() == "") {
        emptyFields.push(key);
      }
    }
  
    if (!dataForm.talla) {
      emptyFields.push("talla");
    }
  
    if (dataForm.nombre.length <= 3) {
      alert("El nombre debe contener más de 3 caracteres");
      emptyFields.push('nombre');
    }
  
    if (!emailRegex.test(dataForm.email)) {
      alert("El email ingresado no es valido");
      emptyFields.push("email");
    }
  
    return emptyFields.length > 0 ? emptyFields : false;
  };