import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import styled from 'styled-components';
import { letterColor, medium, secondColor, thirdColor } from '../helpers/styledSheet';

const ContainerGestionarUsuarios = styled.div`
    width: 95%;
    height: fit-content;
    border: 1px solid ${secondColor};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`

const TituloContainerGestionarUsuarios = styled.h1`
    font-size: 35px;
    font-weight: ${medium};
    color: ${letterColor};
    margin-top: 30px;
`

const ContainerFormBuscarUsuarios = styled.div`
    width: 100%;
    height: 50px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const BotonCrearUsuario = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${thirdColor};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FormBuscarUsuario = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputBuscarUsuario = styled.input`
    width: 200px;
    height: 30px;
    background-color: ${thirdColor};
    border: 0;
    border-radius: 5px;
    outline: none;
    padding: 0 8px;
`

const BotonEstadisticas = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${thirdColor};
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContainerVerUsuarios = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const CardUsuarios = styled.div`
    width: 150px;
    height: 150px;
    background-color: ${secondColor};
    border-radius: 5px;
    margin: 10px;
    display: flex;
`

const GestionarUsuarios = () => {
    return (
        <>
            <ContainerGestionarUsuarios>
                <TituloContainerGestionarUsuarios>Entrenadores</TituloContainerGestionarUsuarios>
                <ContainerFormBuscarUsuarios>
                    <BotonCrearUsuario>
                        <FaPlus style={{ fontSize: "25px" }} />
                    </BotonCrearUsuario>
                    <FormBuscarUsuario>
                        <InputBuscarUsuario />
                    </FormBuscarUsuario>
                    <BotonEstadisticas>
                        <IoStatsChart style={{ fontSize: "25px" }} />
                    </BotonEstadisticas>
                </ContainerFormBuscarUsuarios>

                <ContainerVerUsuarios>

                    <CardUsuarios></CardUsuarios>

                </ContainerVerUsuarios>
            </ContainerGestionarUsuarios>
        </>
    )
}

export default GestionarUsuarios