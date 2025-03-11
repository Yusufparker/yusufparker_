import axios from "axios";
import { useState, useEffect, lazy, Suspense } from "react";
const CardProject  = lazy(() => import("@components/CardProject"))



const api = "https://dev-api.yusufparker.com/api/project";

function Spinner() {
    return (
        <div className="text-center mt-5 mb-5 pt-5 pb-5">
        <div
            className="spinner-border text-white"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    );
}


const Portfolio = () => {
    const [projects, setProjects] =useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(4)
    

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(api)
                setProjects(response.data.data.reverse())
            } catch (error) {
                console.log(error);
            }finally {
                setLoading(false)
            }
        }

        fetchProjects()
    },[])

    // console.log(projects);

    return (
        <div className="portfolio mt-5 mb-5 pb-5 pt-5 text-white" id="portfolio">
            <h3 className="text-center fw-bold fs-1">Recent Projects</h3>
            <p className="text-center">Web Development Highlight</p>
            <div className="container mt-5 pt-md-5">
                    <Suspense fallback={<Spinner />}>
                        <div className="row">
                            {loading ? (
                                <>
                                    <Spinner/>
                                </>
                            ) : (
                                    projects.slice(0,count).map( project => (
                                        <CardProject  project={project}  key={project.id}/>
                                    ))
                            )}
                        </div>
                    </Suspense>
                </div>
                {
                    count < projects.length ? (
                        <button onClick={ () => setCount(projects.length)}  className="m-auto d-block btn-see-more mt-5 d-flex flex-column justify-content-center">See More <i className="bi bi-caret-down-fill d-block m-auto"></i></button>
                    ) 
                        :
                    (
                            
                        <button onClick={ () => setCount(4)}  className="m-auto d-block btn-see-more mt-5 d-flex flex-column justify-content-center"><i className="bi bi-caret-up-fill d-block m-auto"></i> Minimize</button>
                    )
                }
        </div>
    )
}

export default Portfolio
