import React from "react";
import "./Cards.css"
const card = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="container1" key={index}>
                    <div className="cards">
                        <img src={value.img} />
                        <h4 >{value.title}</h4>
                        <p>{value.subtitulo}</p>
                        <div className="redes">
                            {value.social}
                        </div>
                    </div>
                </div>
            ))};
        </>
    );
};

export default card