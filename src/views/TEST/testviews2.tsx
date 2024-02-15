
import { Box } from "@mui/material";
import ModAppBar from "../../atomic/molecules/Appbard";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { ModCard } from "../../atomic/atoms/Card";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';

export function TestViews(): JSX.Element {
  const [ms_status, setms_status] = useState([]);

  fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(json => setms_status(json))

    
  return (
    <>
      <ModAppBar></ModAppBar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={9}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <ModCard TypeCard={"Auto"}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      <ModCard TypeCard={"Graph"}>{'Hello'}</ModCard>
                      <ModCard TypeCard={"Graph"}>{'Hello'}</ModCard>
                      <ModCard TypeCard={"Graph"}>{'Hello'}</ModCard>
                      <ModCard TypeCard={"Graph"}>{'Hello'}</ModCard>
                    </div>
                  </ModCard>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={3}>
            <ModCard TypeCard={"Auto"}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
                
                {ms_status.map((value,i) => {
                  return (
                    <ModCard TypeCard={"MS"}>
                      {value['name']}
                      <div style={{display:'flex',justifyContent:'center'}}>
                        {value['status'] ? <VerifiedUserIcon/>:<GppBadIcon/>}
                      </div>
                    </ModCard>
                  )
                })}
              </div>
            </ModCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}