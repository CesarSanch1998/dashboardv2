import { ModButton } from "../atomic/atoms/Button";
import { ModInput } from "../atomic/atoms/Input";
import ModAppBar from "../atomic/atoms/molecules/Appbard";
import { ModButtonGroup } from "../atomic/atoms/molecules/ButtonGroup";
export function TestViews(): JSX.Element {
    return (
        <>
        <ModAppBar></ModAppBar>
        <ModButtonGroup></ModButtonGroup>
        </>
    );
}