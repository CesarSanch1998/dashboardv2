import ButtonGroup from "@mui/material/ButtonGroup";
import { ModButton } from "../../atoms/Button";
import {G_Button} from "../../../definitions/TextArrays";



export function ModButtonGroup(): JSX.Element {

    //Necesario para pasar el color del array al boton ya que sin esto daba error aunque si mostraba
    function isColorValid(color: string): color is 'inherit' | 'error' | 'success' | 'warning' {
        return ['inherit', 'error', 'success', 'warning'].includes(color);
      }

    return (
        <>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {G_Button.map((value) => 
            <ModButton ColorB={isColorValid(value.color) ? value.color : 'inherit'} text={value.color}></ModButton>
            
            )}
        </ButtonGroup>
        </>
    );
}