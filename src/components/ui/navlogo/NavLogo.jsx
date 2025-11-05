import './navlogo.css'
import Logo from '../../../assets/images/dev-naza-high-resolution-logo-transparent-alt.png'

const NavLogo = () => {
  return (
    <a href="" className="logo"><img src={Logo} alt='Logo' decoding="sync" loading="eager" fetchPriority="high" /></a>
  )
}

export default NavLogo