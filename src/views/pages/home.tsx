import "./style.css"
import HomeComponent from "../../component/home";
import { FC } from 'react'
const Home:FC = () => {
    return (
        <div className="container">
            <HomeComponent />
        </div>
    );
}

export default Home;