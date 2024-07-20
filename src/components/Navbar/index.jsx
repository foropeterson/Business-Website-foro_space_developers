import { Button, Navbar } from 'flowbite-react'
import Logo from '../../assets/Logo (1).svg'
import "./styles.css"

const Nav = () => {
    return (
        <div className='container mx-auto my-0'>
            <Navbar fluid rounded>
                <Navbar.Brand href="#">
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Website Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='text-4xl bg-[#124F48] p-2 px-6 rounded-[31.5px]'>Login</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link className='text-[#0B041B] text-lg' href="#" active>
                        About <span className='border-b-2 border-[#FF7715] hover:border-none duration-75 hover:duration-75'>amid</span>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='hover-a text-lg'>About</Navbar.Link>
                    <Navbar.Link href="#" className='hover-a text-lg'>Services</Navbar.Link>
                    <Navbar.Link href="#" className='hover-a text-lg'>Pricing</Navbar.Link>
                    <Navbar.Link href="#" className='hover-a text-lg'>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Nav