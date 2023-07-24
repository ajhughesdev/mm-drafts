import { useState } from "react"
import Horizontal from "./Horizontal"
import Vertical from "./Vertical"


const App = () => {
  // Initialize state variables
  const [isHorizontalDisplayed, setIsHorizontalDisplayed] = useState(true);
  const [isVerticalDisplayed, setIsVerticalDisplayed] = useState(false);

  // Event handler for horizontal click
  const handleHorizontalClick = () => {
    setIsHorizontalDisplayed(true);
    setIsVerticalDisplayed(false);
  };

  // Event handler for vertical click
  const handleVerticalClick = () => {
    setIsHorizontalDisplayed(false);
    setIsVerticalDisplayed(true);
  };

  // Render the App component
  return (
    <div className="app">
      <h1>Madison Marathon <br />2023 tee design drafts</h1>
      <div className='nav'>
        <button onClick={handleHorizontalClick}><span style={{ textDecoration: isHorizontalDisplayed ? 'underline' : 'none' }}>Horizontal</span></button>
        <button onClick={handleVerticalClick}><span style={{ textDecoration: isVerticalDisplayed ? 'underline' : 'none' }}>Vertical</span></button>
      </div>

      {isHorizontalDisplayed && <Horizontal />}
      {isVerticalDisplayed && <Vertical />}
    </div >
  );
};

export default App