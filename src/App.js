import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div style={{alignItems:"center",
      display:"flex",
      flexDirection:"column"
    }}><h2>React Calculator</h2>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
