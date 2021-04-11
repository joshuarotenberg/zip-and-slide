import './App.css';
import Slider from './Slider';

function App() {

  const images = [
    { url: "/images/coffee-777612_640.jpg"},
    { url: "/images/coins-1523383_1920.jpg"},
    { url: "/images/posing-999199_1920.jpg"},
    { url: "/images/raspberries-1426859_1920.jpg"}
  ]

  return (
     <Slider images={images} />
  );
}

export default App;
