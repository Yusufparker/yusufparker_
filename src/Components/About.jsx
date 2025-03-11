

const About = () => {
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
        <div className="about mt-5 mb-5 pt-5 pb-5" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5" data-aos="flip-left" data-aos-duration="1300">
                        <img src="/img/muhammad yusuf.jpeg" className="w-100" alt="" />
                    </div>
                    <div className="col-md-7 ps-md-5 d-flex align-items-center overflow-hidden">
                        <div data-aos="fade-left" data-aos-duration="1300">
                            <h3 className="fs-1">About Me</h3>
                            <p className="fs-18">Discover the mind behind the code. As a passionate web developer, I bring creativity and precision to every project. With a dedication to crafting seamless user experiences and a knack for problem-solving, I strive to transform ideas into digital realities. Let's embark on a journey where innovation meets expertise, and together, we'll build the web of tomorrow.</p>
                            <button className="border-0 mt-2" onClick={()=> scrollTo('contact')}><i className="bi bi-wechat me-3"></i> Get In Touch</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About
