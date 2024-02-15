import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ModButton } from '../../atoms/Button';
import styles from './index.module.css'



export default function ModAppBar() {

  return (
    <Box>
      <AppBar  position='static' className={styles.order}>
        <Toolbar sx={{Height:'10vh'}}>
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