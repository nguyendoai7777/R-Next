import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { DuiButton } from '@dui/button';

export const Navbar = () => {
  return <>
    <AppBar position="sticky">
      <DuiButton color={'deeppink'}/>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href={{ pathname: '/docs', }}>Docs</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </>;
};
