
const Footer = () => {
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
        <div className="footer mt-5 pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="fs-18 fw-bold">Muhammad Yusuf</h1>
                        <p>Web Developer</p>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-inline">
                            <li><a onClick={()=> scrollTo('header')}>Home</a></li>
                            <li><a onClick={()=> scrollTo('services')}>Services</a></li>
                            <li><a onClick={()=> scrollTo('about')}>About Me</a></li>
                            <li><a onClick={()=> scrollTo('portfolio')}>Portfolio</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-5 mb-md-0">
                        Connect with me and explore more about my projects. I'm always open to new collaborations and development opportunities. Feel free to reach out to me for further discussions or inquiries.
                    </div>
                </div>
                <div className=" d-flex sosmed">
                    <a href="https://www.linkedin.com/in/muhammad-yusuf-957651240/" target="_blank"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/Yusufparker" target="_blank"><i className="bi bi-github"></i></a>
                    <a href="https://www.instagram.com/yusuf_parker/" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.tiktok.com/@yusufparker_" target="_blank"><i className="bi bi-tiktok"></i></a>
                </div>
                <p className="mt-4 fs-14">© {new Date().getFullYear()} Muhammad Yusuf. All right reserved.</p>
            </div>            
        </div>
    )
}

export default Footer
