import {useState} from "react";
import {FaAngleDoubleRight} from "react-icons/fa";
import Loader from "../../components/Loader";
import UseFetch from "../../components/UseFetch";

const url = "https://course-api.com/react-tabs-project";

const FetchJobs = () => {
    const {loading, data} = UseFetch(url, "fetch_jobs");
    const [value, setValue] = useState(0);

    if (loading) return <Loader/>;
    else {
        // Destructure elements
        const {title, dates, duties, company} = data[value];

        const companies = data.map((company, index) => (
            <li className="nav-item" key={company.id}>
                <a
                    className={`nav-link text-capitalize ${index === value ? "active" : ""}`}
                    data-bs-toggle="pill"
                    href="#home"
                    onClick={()=> setValue(index)}
                >
                    {company.company}
                </a>
            </li>
        ));
        return (
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <ul className="nav nav-pills mb-5">{companies}</ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane container active" id="home">
                            <h1>{title}</h1>
                            <h4 className="text-muted">{company} <small className="badge bg-secondary">{dates}</small>
                            </h4>
                            <div className="list-group my-4">
                                {duties.map((item, index) => (
                                    <button className="list-group-item list-group-item-action p-3"
                                       key={index}>
                                        <div className="row">
                                            <div className="col-md-1">{<FaAngleDoubleRight className="text-primary"/>}</div>
                                            <div className="col-md-11">{item}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default FetchJobs;
