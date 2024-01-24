import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ModButton } from '../../Button';
import style from './index.module.css'



export default function ModAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' className={style.grid}>
        <Toolbar >
          <ModButton ColorB='inherit' DesingB='text' text='Dashboard'></ModButton>
          <ModButton ColorB='inherit' DesingB='text' text='OLT'></ModButton>
          <ModButton ColorB='inherit' DesingB='text' text='ONT'></ModButton>
          <ModButton ColorB='inherit' DesingB='text' text='Sistema'></ModButton>
          <ModButton ColorB='inherit' DesingB='text' text='Ajustes'></ModButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}