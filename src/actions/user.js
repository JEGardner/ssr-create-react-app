const prefix = 'USER/'

export const SET = prefix + 'SET'
export const RESET = prefix + 'RESET'

export function set(payload){
  return {
    type: SET,
	payload
  }
}

export function reset(){
  return {
    type: RESET
  }
}
