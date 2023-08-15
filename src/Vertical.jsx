import VerticalImg from './assets/vertical.png'
// import VerticalImg1 from './assets/vertical-edit-1.png'
// import VerticalImg2 from './assets/vertical-edit-2.png'
// import VerticalImg3 from './assets/vertical-edit-3.png'
// import VerticalImg4 from './assets/vertical-edit-4.png'

const Vertical = () => {
    return (
        <div className='content'>
            <img src={VerticalImg} alt='Vertical Draft design for Madison Marathon tee-shirts' className='vertical' />
        {/* <img src={VerticalImg1} alt='Vertical Draft design for Madison Marathon tee-shirts' className='vertical' height='600px' />
            <img src={VerticalImg2} alt='Vertical Draft design for Madison Marathon tee-shirts' className='vertical' height='600px' />
            <img src={VerticalImg3} alt='Vertical Draft design for Madison Marathon tee-shirts' className='vertical' height='600px' />
            <img src={VerticalImg4} alt='Vertical Draft design for Madison Marathon tee-shirts' className='vertical' height='600px' /> */}
        </div>
    )
}

export default Vertical