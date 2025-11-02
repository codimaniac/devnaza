import './hamburger.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Hamburger = ({ isOpen, toggleNav }) => {
  return (
    <div className="hamburger" onClick={toggleNav}>
        {isOpen ? <RiCloseLine size={24} className='fa-times' /> : <RiMenu3Line size={24} className='fa-bars' />}
    </div>
  )
}

export default Hamburger