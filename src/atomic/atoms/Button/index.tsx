import Button from "@mui/material/Button";
import React from "react";


interface Props {
DesingB?: 'contained'|'outlined' |'text';
ColorB?:'inherit'|'error'|'success'|'warning';
text?:string;

}

export function ModButton(props: Props): JSX.Element {
    return (
        <>
        <Button  variant={props.DesingB || 'contained'} color={props.ColorB || "primary"}>
            {props.text}
        </Button>
        </>
    );
}