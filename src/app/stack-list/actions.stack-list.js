const Type = "Stack List"
export const SELECT = `${Type} SELECT`;
export const Select = ( payload ) => {
  return {
    type: SELECT,
    payload
  }
}

export const CREATE = `${Type} CREATE`;
export const Create = ( payload ) => {
  return {
    type: CREATE,
    payload
  }
}

export const UPDATE = `${Type} UPDATE`;
export const Update = ( payload ) => {
  return {
    type: UPDATE,
    payload
  }
}
