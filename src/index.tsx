import React, {FC} from "react";
import ReactDOM from "react-dom";
import Img from './images/abstract-technology.jpg';
import "./styles.scss"

const App: FC = () => {

    console.log('hahahah')
    return (
        <div>
            <p>Hello</p>
            <img src={Img} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))