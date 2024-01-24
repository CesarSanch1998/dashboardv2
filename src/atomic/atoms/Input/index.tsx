import TextField from "@mui/material/TextField";

interface Props {
Label:string
DesingB?: 'outlined'|'filled'|'standard'
TypeB?:'password'|'number'|'text'|'search'
}
export function ModInput(props: Props): JSX.Element {
    return (
        <>
        <TextField id="outlined-basic" label={props.Label} variant={props.DesingB || 'outlined'} type="password" size="small"/>
        </>
    );
}