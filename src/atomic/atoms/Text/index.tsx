import Typography from "@mui/material/Typography";

interface Props {
    text: string
}
export function ModText(props: Props): JSX.Element {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                {props.text}
            </Typography>
        </>
    );
}