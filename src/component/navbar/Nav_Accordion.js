import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';
import useTheme from '../../hooks/theme';


let menu_items = [
    'Workspace',
    'Tools',
    'Templates',
    'Pricing',
    'Resources',
    'Terms'
]


 const Nav_Accordion = ({close_nav_handle}) => {
    const theme = useTheme()



  return (
    <Stack sx={{bgcolor:theme.bg_color_nav, width:'100%'}}>
        {menu_items.map((e,i)=>{
            return <Stack key={i}  onClick={close_nav_handle} px={2} py={2} sx={{borderTop:'0.1px solid lightgray',cursor:'pointer'}}>
            <Typography fontWeight='bold' color={theme.text_color} >
                {e}
            </Typography>
        </Stack>
        })}
    </Stack>
   
  )
}
export default Nav_Accordion
