
export const validate= (input)=> {
    const errors = {}

    if (!input.rating) {
      errors.rating = 'El rating es requerido'
    }
    if (input.content.length < 15 ) {
      errors.content = 'Debe contener al menos 15 caracteres'
    }

    return errors;

  }

 