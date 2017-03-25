const Type = "Game"
export const START = `${Type} START`;
export const Start = ( payload ) => {
  return {
    type: START,
    payload
  }
}


