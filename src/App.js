import logo from './logo.svg';
import './App.css';

import Display from './component/Display';
import Counter from './component/Counter';


function App() {
  return (
    <div className='container'>
   <h1>react redux</h1>
   <Counter/>
   <Display />
    </div>
  );
}

export default App;
