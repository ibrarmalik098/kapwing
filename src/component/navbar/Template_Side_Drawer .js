import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Style from '../../../styles/templateStyle.module.css'
import useTheme from '../../hooks/theme'


const Template_Side_Drawer = ({ active_sidebar_index, change_side_menu_handle }) => {
    const themes = useTheme()

    const [sm_screen_menu, setSm_screen_menu] = useState(false)
    const [displayBar, setDisplayBar] = useState(true)


    // useEffect(() => {
    //     if (active_sidebar_index) {
    //         setDisplayBar(true)
    //     } else {
    //         setDisplayBar(false)
    //     }
    // }, [active_sidebar_index])


    return (

        <>
            {/* <Stack sx={{ backgroundColor: '#ffff', zIndex: 2, width: '500px' }}>
                <Template_Topbar nav_open_handle={() => setSm_screen_menu(!sm_screen_menu)} />
            </Stack> */}

            {/* <div style={{ backgroundColor: themes.bg_color, color: themes.text_color }} className={Style.positionClass}></div> */}
            <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color,  }} className={Style.body}>
                
                <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color, marginTop: '55px', }}>

                    <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color }} className={Style.contrastbg}>
                        <h1>Sidebar Navigation</h1>


                    </div>
                    <p>A CSS-Only Sidebar menu for websites.</p>

                    <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color }} className={Style.container}>

                        <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color }} className={Style.contrastbg}>

                            <p >Hover over the menu-icon in the right upper corner to open the sidebar-menu</p>

                        </div>

                    </div>

                </div>
            </div>


            {/* {displayBar === true ?
                <Stack sx={{ display: { sm: 'none', md: 'block', xs: 'none' } }}>
                    <nav style={{ backgroundColor: themes.bg_color, color: themes.text_color }} className={Style.nav}>

                        {templates[active_sidebar_index].component}
                        <Stack sx={{ cursor: 'pointer', position: 'absolute', top: 50, right: 0, zIndex: 10 }}  ><FaChevronLeft onClick={() => setDisplayBar(false)} style={{ zIndex: 10 }} cursor='pointer' size={20} /></Stack>

                    </nav>



                </Stack> : null} */}



        </>
    )
}

export default Template_Side_Drawer 