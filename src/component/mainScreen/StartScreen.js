import { Stack } from '@mui/material'
import React from 'react'
import Styles from '../../../styles/firstscreen.module.css'
import { FiUpload } from 'react-icons/fi'
import { AiOutlineRight } from 'react-icons/ai'

const StartScreen = () => {
    return (
        <>
            <Stack>
                {/* ===========  first Section Start =============  */}
                <Stack className={Styles.parent}>
                    <Stack classname={Styles.main}>
                        <Stack className={Styles.header} >
                            <h1 className={Styles.heading}>
                                The collaborative video editor for modern teams
                            </h1>
                            <h2 className={Styles.subHeading}>
                                Kapwing empowers everyone in the content creation process so teams can make better videos faster.
                            </h2>
                            <Stack>

                                <div>
                                    <button className={Styles.button}> <FiUpload size={24} style={{ marginRight: '15px' }} /> Get More <AiOutlineRight size={17} style={{ marginLeft: '15px' }} /> </button>
                                </div>
                            </Stack>
                            <Stack mt={7}>
                                <video className={Styles.video}  src='https://cdn-useast1.kapwing.com/static/9i6-homepage-hero_1.mp4'></video>
                            </Stack>
                        </Stack>
                        <Stack>

                        </Stack>

                    </Stack>
                </Stack>
                {/* ===========  first Section End =============  */}


            </Stack>


        </>
    )
}

export default StartScreen