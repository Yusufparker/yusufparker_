

const Header = () => {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
    return (
        <div className="header position-relative overflow-hidden" id="header">
            <div className="container p-3 d-flex justify-content-center align-items-center">
                <div className="text-center text-white position-relative" style={{width:"600px", zIndex:2}}>
                    <img src="/img/emoji wajah.png" alt="yusuf" />
                    <h3>Work Alongside a Coder Who Values Your Input</h3>
                    <p className="fs-18 mt-3 text-center text-inconsolata">A content creator and a fourth-year with a degree in Informatics Engineering. Skilled in programming, data analysis, and editing.</p>
                    <button className="border-0 mt-4" onClick={() => scrollTo("contact")}>Contact Me <i className="bi bi-arrow-up-right ms-2"></i></button>
                </div>
            </div>
            <img src="/img/yellow grad.png"  alt="yellow grad muhammad yusuf" className="position-absolute yellow-grad" />
            
        </div>
    )
}

export default Header
