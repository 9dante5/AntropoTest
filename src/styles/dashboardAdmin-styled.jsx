import styled from "styled-components";
import { firtsColor, secondColor, thirdColor } from "../helpers/styledSheet";


export const ContainerDashboardAdmin = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${firtsColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const ContainerUsuarios = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 80px;
`

export const ContainerGestionarUsuarios = styled.div`
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

export const ContainerFormBuscarUsuarios = styled.div`
    width: 100%;
    height: 50px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const BotonCrearUsuario = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${thirdColor};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormBuscarUsuario = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InputBuscarUsuario = styled.input`
    width: 200px;
    height: 30px;
    background-color: ${thirdColor};
    border: 0;
    border-radius: 5px;
    outline: none;
    padding: 0 8px;
`

export const BotonEstadisticas = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${thirdColor};
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
