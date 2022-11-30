import { Link } from "react-router-dom"
import "./style.css"

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hello,</p>
                    <p>I am Ashish</p>
                    <p>Full Stack Web Developer</p>
                </h1>
                <Link to="about">
                    <button>MORE INFO</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/Mypic.jpg`}
                    alt="Person pic"
                />

            </div>

        </div>
    )
}

export default Home
