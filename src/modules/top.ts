const initialState = {
  foo: ''
};

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'TEST':
    return Object.assign({}, state, {
      foo: action.value
    })
    default:
    return state;
  }
}

export const test = (foo: any) => {
  return { type: 'TEST', value: 'bar' };
};

export default reducer;
