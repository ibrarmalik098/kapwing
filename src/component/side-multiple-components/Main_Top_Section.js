import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaChevronCircleLeft, FaChevronLeft } from 'react-icons/fa'

const Main_Top_Section = (props) => {
    const {title} = props
    return (
        <Stack>

            <Stack direction={'row'} alignItems='center' justifyContent={'center'}>
                
                <Stack >
                    <Typography sx={{fontSize:15 , flexWrap: 'bold' }}  >{title}</Typography>
                </Stack>
            </Stack>
            <Stack mt={1}><Divider style={{ border: '1px solid #202020' }} /></Stack>
        </Stack>
    )
}

export default Main_Top_Section