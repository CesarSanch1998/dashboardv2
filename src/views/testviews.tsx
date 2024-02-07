
import Card from "@mui/material/Card";
import ModAppBar from "../atomic/atoms/molecules/Appbard";
import Typography from "@mui/material/Typography";
import { Button, Input, TextField } from "@mui/material";
import { ModInput } from "../atomic/atoms/Input";
import { useState } from "react";
import { ModButton } from "../atomic/atoms/Button";
import { ModCard } from "../atomic/Card";
export function TestViews(): JSX.Element {

  const [input,setinput] = useState("")
  
    return (
        <>
        <ModAppBar></ModAppBar>
        <Card sx={{ maxWidth: '100%',height:'43vw', margin:'5px' , bgcolor:"white",display:'flex', justifyItems:'center'}} variant="outlined">

      <ModCard TypeCard="MS" Text={"DB-API"} StatusActive={true}></ModCard>
      <ModCard TypeCard="MS" Text={"MS-OPS"} StatusActive={false}></ModCard>
      <ModCard TypeCard="MS" Text={"MS-SCH"} StatusActive={false}></ModCard>
      <ModCard TypeCard="MS" StatusActive={true}></ModCard>
      <ModCard TypeCard="MS" Text={"MS-MON"} StatusActive={true}></ModCard>
      <ModCard TypeCard="MS" Text={"db api"} StatusActive={true}></ModCard>
      <ModCard TypeCard="MS" StatusActive={false}></ModCard>

      </Card>
        </>
    );
}