import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <h1>Links</h1>
      <ul>
        <li>
          <Link to='about-me'>About ME</Link>
        </li>
      </ul>
    </>
  )
}

export default App
