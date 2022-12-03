import './App.css';
import Portfolio from './components/Portfolio';
import { data } from './components/data'

function App() {
  return (
    <Portfolio
      projects={data}
    />
  );
}

export default App;
