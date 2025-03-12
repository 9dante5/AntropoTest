import React from 'react'
import { ContainerIniciarSesion, ContainerLandingPage, ContainerTitleLandingPage, NavbartLandingPage, TitleLandingPage } from '../styles/landingPage-styled'
import { FaUser } from "react-icons/fa";
import { letterColor } from '../helpers/styledSheet';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <ContainerLandingPage>
                <NavbartLandingPage>
                    <ContainerTitleLandingPage>
                        <TitleLandingPage>AntropoTest</TitleLandingPage>
                    </ContainerTitleLandingPage>
                    <ContainerIniciarSesion onClick={() => {navigate("/iniciarSesion")}}>
                        <FaUser style={{color: `${letterColor}`, fontSize: '22px' }} />
                    </ContainerIniciarSesion>
                </NavbartLandingPage>

            </ContainerLandingPage>
        </>
    )
}

export default LandingPage