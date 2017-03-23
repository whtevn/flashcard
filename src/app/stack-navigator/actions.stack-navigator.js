const Type = "Stack Navigator"
export const SELECT = `${Type} SELECT`;
export const Select = ( payload ) => {
  return {
    type: SELECT,
    payload
  }
}

