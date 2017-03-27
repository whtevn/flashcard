const Type = "Game"
export const CREATE = `${Type} START`;
export const Create = ( payload ) => {
  return {
    type: CREATE,
    payload
  }
}


