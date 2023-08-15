import HorizontalBonus from './assets/horizontal-bonus.png'
import VerticalBonus from './assets/vertical-bonus.png'

const Bonus = () => {
  return (
    <div className='content'>
      <img src={HorizontalBonus} alt='Horizontal Draft design for Madison Marathon tee-shirts' className='horizontal' />
      <img src={VerticalBonus} alt='Vertical Draft design for Madison Marathon tee-shirts' className='vertical' />
    </div>
  )
}

export default Bonus