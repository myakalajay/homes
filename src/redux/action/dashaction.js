export const SAVE_DASH_DATA = 'SAVE_DASH_DATA';
  
export const saveDashData = (data) => ({
  type: SAVE_DASH_DATA,
  payload: data,
});