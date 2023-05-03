import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Style from '../../../styles/navbarStyle.module.css'
import { HiUsers, HiOutlineLightBulb } from 'react-icons/hi'
import { MdOutlineDateRange } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import { FaFolderPlus } from 'react-icons/fa'
import { CiFolderOn } from 'react-icons/ci'
import { BiUserPlus } from 'react-icons/bi'
import Divider from "@mui/material/Divider";
import { BsImage, BsPlusLg } from 'react-icons/bs'
import { AiOutlineTool, AiOutlineStar, AiOutlineSearch } from 'react-icons/ai'






import Topbar from './Topbar'
import Link from 'next/link'
import  Nav_Accordion  from './Nav_Accordion'
import useTheme from '../../hooks/theme'

const SideDrawer = () => {
    const themes = useTheme()

    const [sm_screen_menu, setSm_screen_menu] = useState(false)

    const close_nav_handle = () => {
        setSm_screen_menu(false)
    }

    useEffect(() => {
        close_nav_handle()
    }, [])
    


    return (

        <>
            <Stack sx={{ backgroundColor: '#ffff', zIndex: 2, width: '500px' }}>
                <Topbar nav_open_handle={() => setSm_screen_menu(!sm_screen_menu)} />
            </Stack>
            <div style={{ backgroundColor: themes.bg_color, color: themes.text_color }} className={Style.positionClass}></div>
            <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color, marginTop: '55px' }} className={Style.body}>
                <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color }}>

                    <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color }} className={Style.contrastbg}>
                        <h1>Sidebar Navigation</h1>
                        <p>A CSS-Only Sidebar menu for websites.</p>
                    </div>

                    <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color }} className={Style.container}>

                        <div style={{ backgroundColor: themes.bg_color_main_content, color: themes.text_color }} className={Style.contrastbg}>

                            <p>Hover over the menu-icon in the right upper corner to open the sidebar-menu.</p>

                        </div>

                    </div>

                </div>
            </div>

            <Stack sx={{ display: { sm: 'none', md: 'block',xs:'none' } }}>
                <nav style={{ backgroundColor: themes.bg_color_nav, color: themes.text_color }} className={Style.nav}>

                    <ul className={Style.ul} >
                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><HiUsers style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Members
                                    </Stack>
                                </Stack>


                            </Link>
                        </li>
                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><MdOutlineDateRange style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Brand Kit
                                    </Stack>
                                </Stack>
                            </Link>
                        </li>
                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><IoMdSettings style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Settings
                                    </Stack>
                                </Stack>

                            </Link>

                        </li>

                        {/* // ========== Section 2 Start ============== // */}


                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.section12} href="#">

                                <Stack mt={2} direction={'row'} alignItems='center' justifyContent={'space-between'} spacing={0.5}>

                                    <Stack>
                                        TEAM FOLDERS
                                    </Stack>
                                    <Stack><FaFolderPlus style={{ marginRight: 5, fontWeight: 'bold' }} size={20} color={themes.text_color} /></Stack>
                                </Stack>
                            </Link>
                        </li>


                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><CiFolderOn style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        New Folder
                                    </Stack>
                                </Stack>


                            </Link>

                        </li>
                        {/* // ========== Section 3 Start ============== // */}


                        <li className={Style.li}>
                            <Link className={Style.section12} href="#">

                                <Stack mt={2} direction={'row'} alignItems='center' justifyContent={'space-between'} spacing={0.5}>

                                    <Stack>
                                        PRIVATE FOLDERS
                                    </Stack>
                                    <Stack><FaFolderPlus style={{ marginRight: 5, fontWeight: 'bold' }} size={20} color={themes.text_color} /></Stack>
                                </Stack>
                            </Link>
                        </li>


                        <li className={Style.li}>
                            <Link className={Style.subSection} href="#">

                                Create your own private folder with projects only accessible to you unless you share them.

                            </Link>

                        </li>


                        {/* // ========== Section 4 Start ============== // */}

                        <li style={{ marginTop: 20 }} className={Style.li}>
                            <Divider sx={{ borderColor: themes.bg_text_divider }} />
                            <Link className={Style.section4} href="#">

                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack>< BiUserPlus style={{ marginRight: 5, fontWeight: 'bold' }} size={20} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Shared with Me
                                    </Stack>
                                </Stack>
                            </Link>
                        </li>


                        <li className={Style.li}>
                            <Link className={Style.section4Sub} href="#">

                                More

                            </Link>

                        </li>


                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><BsImage style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Templates
                                    </Stack>
                                </Stack>


                            </Link>
                        </li>
                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><AiOutlineTool style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Tools
                                    </Stack>
                                </Stack>
                            </Link>
                        </li>
                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><AiOutlineStar style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Pricing
                                    </Stack>
                                </Stack>

                            </Link>

                        </li>
                        <li className={Style.li}>
                            <Link style={{ color: themes.text_color, }} className={Style.a} href="#">
                                <Stack direction={'row'} alignItems='center' spacing={0.5}>

                                    <Stack><HiOutlineLightBulb style={{ marginRight: 5 }} size={18} color={themes.text_color} /></Stack>
                                    <Stack>
                                        Resources
                                    </Stack>
                                </Stack>

                            </Link>

                        </li>


                    </ul>

                </nav>



            </Stack>
            <Stack sx={{display:{ sm: 'block', md: 'none', }}}>
            <Stack sx={{ position: 'absolute', zIndex: 10001, top: '64px', right: 0, left: 0, display: sm_screen_menu ? 'block' : 'none' }}>
                <Nav_Accordion close_nav_handle={close_nav_handle} />
            </Stack>
            </Stack>

        </>
    )
}

export default SideDrawer