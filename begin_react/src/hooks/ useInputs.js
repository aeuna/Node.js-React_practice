// import { useState, useCallback } from 'react';

// function useInputs(initialForm) {
//   const [form, setForm] = useState(initialForm);
//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setForm((form) => ({ ...form, [name]: value }));
//   }, []);
//   const reset = useCallback(() => setForm(initialForm), [initialForm]);
//   return [form, onChange, reset];
// }

// export default useInputs;

import { useReducer, useCallback } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'RESET_INPUT':
      return {
        username: '',
        email: '',
      };
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_INPUT', name, value });
  }, []);
  const reset = useCallback(() => {
    dispatch({ type: 'RESET_INPUT' });
  }, []);
  return [form, onChange, reset];
}

export default useInputs;
