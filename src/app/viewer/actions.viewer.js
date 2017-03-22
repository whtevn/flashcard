const Type = "Flashcard Viewer"
export const RECORD = `${Type} RECORD`;
export const Record = ( payload ) => {
  return {
    type: RECORD,
    payload
  }
}
