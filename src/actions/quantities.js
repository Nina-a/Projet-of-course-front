export const FETCH_QUANTITIES_SUCCESS = 'FETCH_QUANTITIES_SUCCESS';
export const FETCH_QUANTITIES = 'FETCH_QUANTITIES';

export const fetchQuantities= () => ({
  type: FETCH_QUANTITIES,
});

export const fetchQuantitiesSuccess = (quantities) => ({
  type: FETCH_QUANTITIES_SUCCESS,
  payload: quantities,
});
