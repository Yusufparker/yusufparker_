

const CardProject = ({project}) => {
    return (
        <div className="col-md-6 card-project mb-4" data-aos="flip-left" data-aos-duration="1500">
            <div className="bg-white position-relative">
                <div className="img overflow-hidden">
                    <img src={project.image1} alt="" className="img-fluid" />
                </div>
                <div className="mt-1 p-4  pb-5 text-grey">
                    <h4 className="text-primary fw-bold">{project.title}</h4>
                    <p className="desc mt-1 mb-3 pt-3 fs-18">
                        {project.desc}
                    </p>
                    <div className="tags mt-2">
                        {
                            project.tags.map(tag => (
                                
                                <span key={tag.id}> #{tag.tag}</span>
                                
                            ))
                        }


                    </div>
                </div>
                <a href={project.url} target="_blank" className="position-absolute  d-flex align-items-center">View it Live <i className="bi bi-link-45deg ms-2"></i></a>
            </div>
        </div>
    )
}

export default CardProject
