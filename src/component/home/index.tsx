import "./style.css"
import { FC } from "react"
const HomeComponent: FC = () => {

    return (
        <div className="c-HeadreHome">
            <div className="im-HeadreHome" />
            <h4 className="t-HeadreHome">#React js base Model To Build a complex app</h4>
            <div className="d-HeadreHome">
                in this tutorial you will find what you need to start your big application with React js and typescript.<br />
                <br />Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.<br />
                <div className="de-HeadreHome">
                    -Reactjs<br />
                    -Typescript<br />
                    -Redux toolkit<br />
                    -React Router V6<br />
                    -css
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;