import Box from "@mui/material/Box";

interface Props {

}
export function ModBox(props: Props): JSX.Element {
    return (
        <>
        <Box sx={{bgcolor: 'primary.main',width: 100,height: 100}} ></Box>
        </>
    );
}