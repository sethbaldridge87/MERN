import React from "react";

export function BookList({children}) {
    return <div class="container">{children}</div>
}

export function BookListItem(props) {
    return  <div class="row">
                <div class="col l3">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div class="col l9">
                    <h4>{props.title}</h4>
                    <h5>{(props.authors || []).join(", ")}</h5>
                    <p>{props.description}</p>
                    <p><a href={props.link}>Learn More</a></p><hr />
                </div><br />       
            </div>
            
}