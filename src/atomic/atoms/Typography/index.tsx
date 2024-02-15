import Typography from "@mui/material/Typography";

interface Props {
Size:"small"|"medium"|"large";
children: string | JSX.Element|JSX.Element[]

}
export function ModText(props: Props): JSX.Element {

    const GetTypeText = (Size:string)=>{
        switch (Size) {
            case "small":
                return "subtitle1"
                break;
            case "medium":
                return "h6"
                break;
            case "large":
                return "h4"
                break;
            default:
                return "subtitle1"
                break;
        }
    }
    
    return (
        <>
            <Typography variant={GetTypeText(props.Size)} gutterBottom>
                {props.children}
            </Typography>
        </>
    );
}