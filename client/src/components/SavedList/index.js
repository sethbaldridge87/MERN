import React from "react";
import API from "../../utils/API";

export function SavedList({children}) {
    return <div className="container">{children}</div>
}

function deleteBook(props){
    const selection = {
        key: props.id
    }
    // console.log(selection);
    API.deleteBook({selection})
        .then(window.location.reload())
        .catch(err => console.log(err));
}

export function SavedListItem(props) {
    return <div className="row" data-id={props.id}>
                <div className="col l3">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="col l9">
                    <h4>{props.title}</h4>
                    <h5>{(props.authors || []).join(", ")}</h5>
                    <p>{props.description}</p>
                    <p><a href={props.link}>Learn More</a></p>
                    <button onClick={() => deleteBook(props)}>Delete Book</button>
                    <hr />
                </div><br /> 
           </div>
}