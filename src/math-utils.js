/*
Arrayen som skapas av getInitialState
initialState: [
  { id: 1, color: 'blue', isSelected: false, isLocked: false },
  { id: 2, color: 'yellow', isSelected: false, isLocked: false },
  { id: 3, color: 'blue', isSelected: false, isLocked: false },
  { id: 4, color: 'yellow', isSelected: false, isLocked: false },
  { id: 5, color: 'green', isSelected: false, isLocked: false },
  { id: 6, color: 'red', isSelected: false, isLocked: false },
  { id: 7, color: 'green', isSelected: false, isLocked: false },
  { id: 8, color: 'red', isSelected: false, isLocked: false },
  { id: 9, color: 'purple', isSelected: false, isLocked: false },
  { id: 10, color: 'black', isSelected: false, isLocked: false },
  { id: 11, color: 'purple', isSelected: false, isLocked: false },
  { id: 12, color: 'black', isSelected: false, isLocked: false },
  { id: 13, color: 'orange', isSelected: false, isLocked: false },
  { id: 14, color: 'turquoise', isSelected: false, isLocked: false },
  { id: 15, color: 'orange', isSelected: false, isLocked: false },
  { id: 16, color: 'turquoise', isSelected: false, isLocked: false },
],
*/


//Function that returns initial state with shuffled values.
const getInitialState = () => {

  const coloravail = [
    'blue',
    'yellow',
    'blue',
    'yellow',
    'green',
    'red',
    'green',
    'red',
    'purple',
    'black',
    'purple',
    'black',
    'orange',
    'turquoise',
    'orange',
    'turquoise',
  ];

  const max = 16;
  const shuffled = coloravail.sort(() => Math.random() - 0.5);
  const initialState = [];

  for (let i = 1; i <= max; i++) {
    const obj = { id: i, color: shuffled.pop(), isSelected: false, isLocked: false };

    initialState.push(obj);
  }

  return initialState;

};

export default getInitialState;