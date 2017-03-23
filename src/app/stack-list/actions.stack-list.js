const Type = "Stack List"
export const SELECT = `${Type} SELECT`;
export const Select = ( payload ) => {
  return {
    type: SELECT,
    payload
  }
}


