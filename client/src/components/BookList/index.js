import React from "react";
import API from "../../utils/API";

export function BookList({children}) {
    return <div className="container">{children}</div>
}

function submitBook(props){
    const entry = {
        title: props.title,
        author: props.authors,
        description: props.description,
        link: props.link,
        image: props.image
    }
    console.log(entry);
    API.saveBook({entry})
        .then(console.log(entry))
        .catch(err => console.log(err));
}

export function BookListItem(props) {
    return  <div className="row">
                <div className="col l3">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="col l9">
                    <h4>{props.title}</h4>
                    <h5>{(props.authors || []).join(", ")}</h5>
                    <p>{props.description}</p>
                    <p><a href={props.link}>Learn More</a></p>
                    <button onClick={() => submitBook(props)}>Save to my books</button>
                    <hr />
                </div><br />       
            </div>
            
}