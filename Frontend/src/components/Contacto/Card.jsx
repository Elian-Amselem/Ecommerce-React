import React from "react";

const card = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="container3" key={index}>
                    <div className="card">
                        <img src={value.img} alt={value.title} />
                        <h4>{value.title}</h4>
                        <p>{value.subtitulo}</p>
                        <div className="redes">{value.social}</div>
                    </div>
                </div>
            ))}

        </>
    );
};

export default card