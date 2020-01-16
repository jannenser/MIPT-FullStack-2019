import React, { Fragment } from 'react';
import Form from './Form';
import Meals from './Meals';
import {Parallax} from "react-parallax";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "rgba(145,79,91,0.46)"
};
const insideStyles = {
    height: 1100,
};

const image1 = require('./wallpaper.jpg');

export default function Dashbord() {
    return (<div>
        <div style={styles}>
            <Parallax src={"http://lookw.ru/1/88/thumbs/1380311126-lesnie-yagodi--58.jpg"}>
                <div></div> 
            </Parallax>
        </div>
        <div style={styles}>
            <Parallax bgImage={image1} strength={500} blur={0}>
                <Form />  
            </Parallax>
        </div>
        <div>
            <Parallax bgImage={image1} strength={500} blur={0}>
                <Meals />  
            </Parallax> 
        </div>
    </div>
    )
}
