import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Styles from '../../../styles/navbarStyle.module.css'
import { BiBell } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import useTheme from '../../hooks/theme';


export default function Topbar({nav_open_handle}) {
  const themes = useTheme()
  return (
    <div >

      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={1} sx={{ backgroundColor: themes.bg_color, color: themes.text_color, }} className={Styles.topBarBox} position="fixed" >
          <Toolbar sx={{ alignItems: 'center' }} >



            <Stack direction={'row'} alignItems='center' sx={{ display: { md: 'none', xs: 'flex', } }}>
              <Stack>
                {/* <img style={{ maxWidth: 36, height: 20 }} src='https://cdn-useast1.kapwing.com/static/gdu-kapwing-logo-transparent.webp' /> */}

              </Stack>
              <Stack>

                <IconButton
                  size="medium"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                // sx={{ mr: 2,}}
                onClick={nav_open_handle}


                >
                  <GiHamburgerMenu width={36} height={20} color='gray' />
                </IconButton>
              </Stack>
            </Stack>
            <Stack direction={'row'} alignItems='center' sx={{ display: { md: 'flex', sm: 'none',xs:'none' } }}>
              <Stack>
                <Avatar variant='rounded'>H</Avatar>
              </Stack>
              <Stack fontWeight={'bold'} ml={2}>
                My Workspace
              </Stack>
            </Stack>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            </Typography>
            <Stack direction={'row'} spacing={1} alignItems='center' >
              <Stack>
                <BiBell size={20} color='gray' />
              </Stack>
              <Stack>
                <Avatar sx={{}} variant="rounded">
                  N
                </Avatar>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}