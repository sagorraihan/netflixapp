import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card";
import "./components/style.css";
import Sdata from "./components/Sdata";

ReactDOM.render(

<>

<h1  className="heading_style">List of 5 Netflix series in 2022</h1>

  {
      Sdata.map((val, index) => {

          const {imgsrc, title, sname, link} = val;
    
    return(
        <Card key={index}
        imgsrc = {imgsrc}
        title = {title}
        sname = {sname}
        link = {link}
        />

    );

  }

  )
  
}

</>,

    document.getElementById("root")
);
