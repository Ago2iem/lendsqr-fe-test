import './navbar.scss'
import Logo from '../../../assets/icons/Logo'
import Input from '../../atoms/input/Input'
import Search from '../../../assets/icons/search-icon.svg'
import Ring from '../../../assets/icons/ring.svg'
import Image from '../../../assets/images/profile-image.png'
import Arrow from '../../../assets/icons/arrow-down.svg'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className='inner-nav'>
                <div className='left'>
                    <Logo />
                    <div className='search-bar'>
                        <Input type="text" name="search" id="search" placeholder="Search for anything" search={true} />
                        <div className='search-btn'>
                            <img src={Search} alt="" />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <p className='docs'>Docs</p>
                    <div className='user'>
                        <img src={Ring} alt="" />

                        <div className='img-div'>
                            <img className='img' src={Image} alt="" />
                        </div>
                        <div className='use'>
                            <span className='text'>
                                Adedeji
                            </span>
                            <div className='arrow'>
                                <img src={Arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar