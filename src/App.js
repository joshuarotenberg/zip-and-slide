import './App.css';
import Slider from './components/Slider';
import Images from './services/Data';

function App() {
  
  return (
     <Slider images={Images} />
  );
}

export default App;
