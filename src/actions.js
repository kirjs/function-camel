export const UPDATE_CODE = 'UPDATE_CODE';

export function updateCode(code) {
  return {
    type: UPDATE_CODE,
    code
  };
}