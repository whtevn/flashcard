const Type = "Game"
export const START = `${Type} START`;
export const Start = ( payload ) => {
  return {
    type: START,
    payload
  }
}

export const QUIT = `${Type} QUIT`;
export const Quit = ( payload ) => {
  return {
    type: QUIT,
    payload
  }
}


