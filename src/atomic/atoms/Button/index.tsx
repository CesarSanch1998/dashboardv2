import Button from "@mui/material/Button";
import React, { Component } from "react";
import { JsxElement } from "typescript";


interface Props {
DesingB?: 'contained'|'outlined' |'text';
text?:string;
onClick:Component

}

export function ModButton(props: Props): JSX.Element {
    return (
        <>
        <Button onClick ={onClick} variant={props.DesingB || 'contained'}>
            {props.text}
        </Button>
        </>
    );
}