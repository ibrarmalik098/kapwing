import Avatar from '@mui/material/Avatar';
import styles from '../../../styles/templateStyle.module.css'
import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { sideData, templates } from '../../hooks/templates_Arry';




export default function Templates_SideBar({ change_side_menu_handle, active_sidebar_index }) {



  return (


    <>

      <div style={{ backgroundColor: 'black' }} className={styles.main}>

      <Stack display={ {md: 'none', sm: 'none', xs: 'none', lg: 'flex'}} py={3} justifyContent={'center'} alignItems={'center'}>
        <img style={{ maxWidth: 160, height: 100,width:'100%' }} src='https://res.cloudinary.com/dyjz7vksj/image/upload/v1680684307/logo_esavyy.png' />
      </Stack>
        {sideData.map((e, i) => {
          const { icon, name } = e
          return (
            <>
              <Stack onClick={() => change_side_menu_handle(i)} sx={

                {
                  ':hover': {

                    backgroundColor: '#514e4e'
                  },
                  backgroundColor: i === active_sidebar_index && '#303030'
                }
              } className={styles.iconsList}>
                <div className={styles.contentparent} >

                  <Box className={styles.iconsbtn}>{icon}</Box>
                  <Box sx={{ fontSize: '17px', color: 'white', display: { md: 'none', sm: 'none', xs: 'none', lg: 'block' } }}>{name}</Box>
                </div>
              </Stack>
            </>
          )
        })}



      </div>
      <div>




      </div>

    </>
  );
}