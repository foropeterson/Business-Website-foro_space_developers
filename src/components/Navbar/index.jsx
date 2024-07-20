import { Navbar, Button } from 'flowbite-react';
import Logo from '../../assets/img/navbar/Logo (1).svg';
import "./styles.css";

const Nav = () => {
    return (
        // START NAVBAR
        <div className='container mx-auto my-0 fixed top-0 left-0 right-0 z-50 bg-white'>
            <Navbar fluid rounded>
                {/* START WEBSITE LOGO */}
                <Navbar.Brand href="#">
                    <img src={Logo} className="mr-3 h-7 sm:h-9" alt="Website Logo" />
                </Navbar.Brand>
                {/* END WEBSITE LOGO */}

                {/* START LOGIN BTN */}
                <div className="flex md:order-2">
                    <Button className='text-4xl bg-[#124F48] p-2 px-6 rounded-[31.5px]'>Login</Button>
                    <Navbar.Toggle />
                </div>
                {/* END LOGIN BTN */}

                {/* nav list */}
                <Navbar.Collapse>
                    <div className='md:flex gap-12'>
                        <Navbar.Link className='text-[#0B041B] text-lg' href="#" active>
                            About <span className='border-b-2 border-[#FF7715] hover:border-none duration-75 hover:duration-75'>amid</span>
                        </Navbar.Link>
                        <Navbar.Link href="#" className='hover-a text-lg'>Features</Navbar.Link>
                        <Navbar.Link href="#" className='hover-a text-lg'>Portfolio</Navbar.Link>
                        <Navbar.Link href="#" className='hover-a text-lg'>Reviews</Navbar.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        // END NAVBAR
    );
}

export default Nav;
