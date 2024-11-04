import { questions } from './data';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [id, setId] = useState(0);

  return (
    <div className="flashcards">
      {questions.map((que) => (
        <div
          className={id === que.id ? 'selected' : ''}
          key={que.id}
          onClick={() => {
            setId(que.id);
          }}
        >
          <Card question={que} clicked={id}/>
        </div>
      ))}
    </div>
  );
}

export default App;
