import { useState, useEffect } from "react"

const Navbar = () => {

    const [scroll, setScroll]  = useState(false)
    const [toggleNav, setToggleNav] =useState(false)

    const changeNavbarColor = () => {
        if (window.scrollY >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        console.log(element);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }


    return (
        <nav className={`fixed-top ${scroll ? 'scrolled' : '' } ${toggleNav ? 'active' : ''} `}>
            <div className="container p-3 d-flex justify-content-between align-items-center">
                <a onClick={() => scrollTo("header")} className="text-decoration-none text-white">
                    <h1 className="fs-3 fw-bold">Muhammad Yusuf</h1>
                    <p className="fs-14">Fullstack Web Developer</p>
                </a>
                <button className="toggle" onClick={() =>setToggleNav(!toggleNav)}><i className={`bi  ${toggleNav ? 'bi-x' : 'bi-list   '} `}></i></button>
                <ul className=" mt-3 d-flex align-items-center ">
                    <li className="list-inline-item">
                        <a onClick={() => scrollTo('services')}>Services</a>
                    </li>
                    <li className="list-inline-item">
                        <a onClick={() => scrollTo('about')}>About Me</a>
                    </li>
                    <li className="list-inline-item">
                        <a onClick={() => scrollTo('portfolio')}>Portfolio</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
