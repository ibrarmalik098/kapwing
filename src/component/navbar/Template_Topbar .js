import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Styles from '../../../styles/templateStyle.module.css'
import { BiBell } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import useTheme from '../../hooks/theme';
import { BsUpload } from 'react-icons/bs';
import { MdSubtitles } from 'react-icons/md';


export default function Template_Topbar({ nav_open_handle }) {
  const themes = useTheme()
  return (
    <div >

      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={1} sx={{ backgroundColor: themes.bg_color, color: themes.text_color, height: 36, }} position="fixed" >
          <Toolbar sx={{ alignItems: 'flex-start', marginTop: 1 }} >



            

            <Stack direction={'row'} alignItems='center' spacing={2} sx={{ display: { md: 'flex', sm: 'flex', xs: 'flex' }, alignItems: 'center' }}>
              <Stack>
                <img style={{ maxWidth: 36, height: 20,  }} src='https://cdn-useast1.kapwing.com/static/gdu-kapwing-logo-transparent.webp' />

              </Stack>
              <Stack sx={{ display: { md: 'block', sm: 'none', xs: 'none' }, color: 'white', fontWeight: 600, fontSize: 13 }}>
                New Folder
              </Stack>
              <Stack sx={{ display: {  }, color: 'white', fontWeight: 600, fontSize: 13, }}>
                Studio Project
              </Stack>
              <Stack sx={{ display: {  }, color: 'white',fontWeight:'bold', }}>
                <BsUpload height={18} width={19} />
              </Stack>
              <Stack sx={{ display: {  }, color: 'white',fontWeight:'bold', }}>
                <MdSubtitles height={18} width={19} />
              </Stack>
            </Stack>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            </Typography>

            <Stack direction={'row'} spacing={1} alignItems='center' >

            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}