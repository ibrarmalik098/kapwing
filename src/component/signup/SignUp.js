import { Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Styles from '../../../styles/signup.module.css'
const SignUp = () => {
    return (
        <>
            <Stack className={Styles.main}>

                <Stack className={Styles.child}>

                    <Grid container>
                        <Grid item sm={12} lg={6} xs={12} md={6} className={Styles.signIn} >
                            <Stack>
                                <Stack className={Styles.heading}>Sign in to continue</Stack>
                                <Stack className={Styles.subHeading}>Kapwing works better when you’re signed in. Sign in to save content to a workspace, share with others, and more.</Stack>
                                <Stack>
                                    <button className={Styles.signInButton} >
                                        <Stack className={Styles.Icons}><FcGoogle /></Stack>
                                        Continue with Google
                                    </button>
                                </Stack>
                                <Stack mt={2}>
                                    <button className={Styles.signInButton} >
                                        <Stack className={Styles.Icons}><FaFacebook /></Stack>
                                        Continue with Facebook
                                    </button>
                                </Stack>
                                <Stack color={'#888'} margin='15px 0' textAlign='center' >or</Stack>
                                <Stack>
                                    <input placeholder='Enter Your Email' className={Styles.emailInput} />
                                </Stack>
                                <Stack>
                                    <button className={Styles.emailSiginInBtn}>Continue with Email</button>
                                </Stack>
                                <Stack>
                                    <label className={Styles.termsConditions}>
                                    By using Kapwing, you agree to our <span style={{color:'#0083e2'}}>Terms of Service</span> and <span style={{color:'#0083e2'}}>Privacy Policy</span>.
                                    </label>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item sm={12} lg={6} xs={12} md={6} >
                            <img style={{ maxWidth: '800px', width: '100%' }} src='https://cdn-useast1.kapwing.com/static/7ne-sign-in-illustration.webp' />
                        </Grid>

                    </Grid>
                </Stack>
            </Stack>
        </>
    )
}

export default SignUp