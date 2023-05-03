
import { Stack } from '@mui/material'
import { useState } from 'react'
import StartScreen from '../src/component/mainScreen/StartScreen'
import AppBarScreen from '../src/component/navbar/AppBar'
import AppBar from '../src/component/navbar/AppBar'
import LayoutSideBar from '../src/component/navbar/LayoutSidebar'
import SideDrawer from '../src/component/navbar/SideDrawer'
import Templates_SideBar from '../src/component/navbar/Templates_SideBar'
import Template_Side_Drawer from '../src/component/navbar/Template_Side_Drawer '
import SignUp from '../src/component/signup/SignUp'
import Style from '../styles/navbarStyle.module.css'


export default function Home() {
  const [active_sidebar_index, setactive_sidebar_index,] = useState(null)

  const change_side_menu_handle = (index) => {

    setactive_sidebar_index(index)
    

  }


  return (
    <>
      <Stack sx={{ position: 'relative' }}>
        <Templates_SideBar change_side_menu_handle={change_side_menu_handle} active_sidebar_index={active_sidebar_index} />
      </Stack>

      <Stack className={Style.mainparent} >
        <Template_Side_Drawer change_side_menu_handle={change_side_menu_handle} active_sidebar_index={active_sidebar_index} />
      </Stack>

      





    </>
  )
}
