import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from './index.module.css'

interface Props {
    TypeCard: "MS" | "MS_Container" | "Graph"|"Login"|"Auto";
    children: string | JSX.Element|JSX.Element[]
}


export function ModCard(props: Props): JSX.Element {

    return (
        <>
            <Card className={styles[props.TypeCard]}>
                <CardContent sx={{ textAlign: 'center' }}>
                    {props.children}
                </CardContent>
            </Card>
        </>
    );
}
