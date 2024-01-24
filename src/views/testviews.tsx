import { ModButton } from "../atomic/atoms/Button";
import { ModInput } from "../atomic/atoms/Input";
import ModAppBar from "../atomic/atoms/molecules/Appbard";
export function TestViews(): JSX.Element {
    return (
        <>
        <ModAppBar></ModAppBar>
        <ModButton text="Iniciar" ></ModButton>
        <ModInput Label={"Nombre"}></ModInput>
        </>
    );
}