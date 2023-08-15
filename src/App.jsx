import { useState } from "react"
import Horizontal from "./Horizontal"
import Vertical from "./Vertical"
import Bonus from "./Bonus"

const App = () => {
  // Initialize state variables
  const [isHorizontalDisplayed, setIsHorizontalDisplayed] = useState(true)
  const [isVerticalDisplayed, setIsVerticalDisplayed] = useState(false)
  const [isBonus, setIsBonus] = useState(false)

  // Event handler for horizontal click
  const handleHorizontalClick = () => {
    setIsBonus(false)
    setIsHorizontalDisplayed(true)
    setIsVerticalDisplayed(false)
  }

  // Event handler for vertical click
  const handleVerticalClick = () => {
    setIsBonus(false)
    setIsHorizontalDisplayed(false)
    setIsVerticalDisplayed(true)
  }

  const handleBonus = () => {
    setIsBonus(!isBonus)
    setIsHorizontalDisplayed(false)
    setIsVerticalDisplayed(false)
  }

  // Render the App component
  return (
    <div className="app">
      <div className='container'>
        <h1>Madison Marathon <br />2023 tee design drafts</h1>
        <div className='nav'>
          <button onClick={handleHorizontalClick}><span style={{ textDecoration: isHorizontalDisplayed ? 'underline' : 'none' }}>Horizontal</span></button>
          <button onClick={handleVerticalClick}><span style={{ textDecoration: isVerticalDisplayed ? 'underline' : 'none' }}>Vertical</span></button>
          <button onClick={handleBonus}><span style={{ textDecoration: isBonus ? 'underline' : 'none' }}>Bonus</span></button>
        </div>
        {isHorizontalDisplayed && <Horizontal />}
        {isVerticalDisplayed && <Vertical />}
        {isBonus && <Bonus />}
      </div>
      <div className='footer'>Designs by <a href='https://ajhughes.dev' target='_blank' rel='noreferrer'>Andrew J Hughes</a></div>
    </div >
  )
}

export default App