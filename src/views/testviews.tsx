import { ModButton } from "../atomic/atoms/Button";
import { ModInput } from "../atomic/atoms/Input";
import ModAppBar from "../atomic/atoms/molecules/Appbard";
import ModSideBard from "../atomic/atoms/molecules/Sidebard";
export function TestViews(): JSX.Element {
    return (
        <>
        <ModSideBard></ModSideBard>
        <ModAppBar></ModAppBar>
        <ModButton text="Iniciar"></ModButton>
        <ModInput Label={"Nombre"}></ModInput>
        </>
    );
}