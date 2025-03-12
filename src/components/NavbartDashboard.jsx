import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Box, Drawer } from '@mui/material'
import { logoutAdmin } from '../redux/slices/adminSlice'
import { useNavigate } from 'react-router-dom'
import { black, letterColor, secondColor, semiBold, thirdColor } from '../helpers/styledSheet'

const ContainerNavbar = styled.div`
width: 100%;
height: 90px;
background-color: transparent;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const ContainerInfoUSer = styled.div`
width: fit-content;
height: 60px;
background-color: ${secondColor};
border-radius: 100px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-left: 35px;
cursor: pointer;
`

const ImgUser = styled.img`
width: 50px;
height: 50px;
border-radius: 100%;
background-color: ${thirdColor};
margin: 0 7px 0 5px;
`

const Saludo = styled.h4`
font-size: 16px;
font-weight: ${black};
color: ${letterColor};
margin: 0 15px 0 7px;
`

const TituloAppNavbart = styled.h2`
font-size: 25px;
font-weight: ${black};
color: ${letterColor};
margin-right: 35px;
cursor: default;

&&:hover {
 text-shadow:
 0 0 10px #fff,
 0 0 20px #fff,
 0 0 40px #fff,
 0 0 80px #fff;
}
`
const InfoUser = styled.div`
width: 100%;
height: 100vh;
background-color: ${secondColor};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ImgInfoUser = styled.img`
width: 120px;
height: 120px;
border-radius: 100%;
background-color: ${thirdColor};
margin-bottom: 30px;
`

const DatosInfoUSer = styled.h3`
width: 250px;
height: 40px;
background-color: ${thirdColor};
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 20px;
font-weight: ${black};
color: ${letterColor};
margin-bottom: 10px;
`

const BotonCerrarSesion = styled.button`
width: 250px;
height: 40px;
background-color: #a71111;
border-radius: 10px;
outline: none;
border: none;
font-size: 18px;
color: ${letterColor};
font-weight: ${semiBold};
margin-top: 30px;
cursor: pointer;
`

const NavbartDashboard = () => {
    const admin = useSelector((store) => store.admin)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const CerrarSesion = () => {
        if (admin.rol != null) {
            dispatch(logoutAdmin())
            navigate('/')
        }
    }

    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
            <InfoUser>
                {admin.PhotoURL != null ?
                    <ImgInfoUser src={admin.PhotoURL} alt='foto usuario' /> :
                    <ImgInfoUser src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt='foto usuario' />
                }
                <DatosInfoUSer>{admin.displayName}</DatosInfoUSer>
                <DatosInfoUSer>{admin.email}</DatosInfoUSer>
                {/* <DatosInfoUSer>{admin.rol}</DatosInfoUSer> */}
                <BotonCerrarSesion onClick={() => CerrarSesion()}>Cerrar sesion</BotonCerrarSesion>
            </InfoUser>
        </Box>
    );

    return (
        <>
            <ContainerNavbar>
                <ContainerInfoUSer onClick={toggleDrawer(true)}>
                    {admin.PhotoURL != null ?
                        <ImgUser src={admin.PhotoURL} alt='foto usuario' /> :
                        <ImgUser src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt='foto usuario' />}
                    <Saludo>Hola, {admin.displayName}</Saludo>
                </ContainerInfoUSer>
                <TituloAppNavbart>AntropoTest</TituloAppNavbart>
            </ContainerNavbar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default NavbartDashboard
