const Type = "Flashcard Viewer"
export const RECORD = `${Type} RECORD`;
export const record = ( payload ) => {
  return {
    type: RECORD,
    payload
  }
}
