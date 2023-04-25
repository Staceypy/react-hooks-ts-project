import React from 'react';
import TodoList from './components/TodoList';
import MyCheckbox from './components/MyCheckbox';
import MyButton from './components/MyButton';
function App() {

  const doChange = (e) => {
    console.log(e)
  }

  const doClick = () => {
    console.log('click');
  }

  return (
    <div className="App">
        <TodoList></TodoList>
    </div>
    <div>
    <MyCheckbox 
      checked={true}
      onChange={doChange}></MyCheckbox>
    <MyButton type="success" onClick = {doClick}>按钮</MyButton>

    </div>

    
  );
}

export default App;
