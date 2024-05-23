import Logo from '../../images/Abstract Chef Cooking Restaurant Free Logo.png';
import './Footer.css'
function Footer() {
    return (


        <footer className="footer">
            <div className='flex items-center justify-evenly'>
            <p className="footer__title items-center font-bold"><i className="ri-cake-3-line" style={{fontSize:"3rem"}}></i>FlavourFusion Cafe</p>
            <div className="footer__social">
                <a href="#" className="footer__icon ml-6"><i className='bx bxl-facebook' ></i></a>
                <a href="#" className="footer__icon ml-6"><i className='bx bxl-instagram' ></i></a>
                <a href="#" className="footer__icon ml-6"><i className='bx bxl-twitter' ></i></a>
            </div>
            </div>
            <div className='footer__copy mt-10'>
            <hr className='w-[80%] ml-[8rem]'/>
            <p className="mt-12">&#169; FlavourFusion. All rigths reserved</p>
            </div>
        </footer>

    )
}

export default Footer