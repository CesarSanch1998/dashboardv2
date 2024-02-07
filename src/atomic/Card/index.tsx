import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';

interface Props {
    TypeCard: "MS" | "Null" | "Graph";
    StatusActive: boolean;
    Text?: string;


}
const TypeHandle = (propSs: Props) =>{
    if (propSs.TypeCard=="MS"){
        return CardMS(propSs)
    }
}
export function ModCard(props: Props): JSX.Element {
    
    return (
        <>
            {TypeHandle(props)}
        </>
    );
}

function CardMS({Text,StatusActive})  {
    <Card sx={{ maxWidth: 100, maxHeight: 100, margin: '5px' }}>
        <CardContent sx={{ textAlign: 'center' }}>
            {Text || 'Vacio'}
            {StatusActive ? <VerifiedUserIcon color="success" fontSize="large" /> : <GppBadIcon color="error" fontSize="large" />}
        </CardContent>
    </Card>
}

function CardGraph(props: Props) {
    <Card sx={{ maxWidth: 100, maxHeight: 100, margin: '5px' }}>

        <CardContent sx={{ textAlign: 'center' }}>
            {props?.Text || 'Vacio'}
            {props.StatusActive ? <VerifiedUserIcon color="success" fontSize="large" /> : <GppBadIcon color="error" fontSize="large" />}
        </CardContent>
    </Card>
}