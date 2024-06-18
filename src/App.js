import './index.css'
import Content from './Content';
import ColorChange from './ColorChange';
import TextColor from './TextColor';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('')
  const [textColor, setTextColor] = useState('black')

  return (
    <div className="App">
      <header className="App-header">
        <Content
        color={color}
        textColor={textColor}
        />
        <ColorChange 
        color={color}
        setColor={setColor}
        />
        <TextColor
        textColor={textColor}
        setTextColor={setTextColor}
        />
      </header>
    </div>
  );
}

export default App;
