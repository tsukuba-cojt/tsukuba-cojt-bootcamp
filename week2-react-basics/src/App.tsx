import { useState } from 'react';
import './index.css';
<<<<<<< HEAD
import Message from "./Message";
=======
>>>>>>> template/main

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React カウンター</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増やす！
      </button>
      <button onClick={() => setCount(count - 1)}>
        減らす！
      </button>
      {count === 5 && <p>5回クリックしたよ！</p>}
      <Message text="Hello"/>
      <Message name="長野由依"/>
    </div>
  );
}

export default App;