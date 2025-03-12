import React from 'react'
import { BotonCrearUsuario, BotonEstadisticas, ContainerDashboardAdmin, ContainerFormBuscarUsuarios, ContainerGestionarUsuarios, ContainerUsuarios, FormBuscarUsuario, InputBuscarUsuario } from '../styles/dashboardAdmin-styled'
import NavbartDashboard from '../components/NavbartDashboard'
import { FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardAdmin = () => {
    return (
        <>
            <ContainerDashboardAdmin>
                <NavbartDashboard />

                <ContainerUsuarios>

                    <ContainerGestionarUsuarios>
                        <ContainerFormBuscarUsuarios>
                            <BotonCrearUsuario>
                                <FaPlus style={{ fontSize: "25px" }} />
                            </BotonCrearUsuario>
                            <FormBuscarUsuario>
                                <InputBuscarUsuario />
                            </FormBuscarUsuario>
                            <BotonEstadisticas>
                                <GiHamburgerMenu style={{ fontSize: "25px" }} />
                            </BotonEstadisticas>
                        </ContainerFormBuscarUsuarios>
                    </ContainerGestionarUsuarios>

                    <ContainerGestionarUsuarios>
                        <ContainerFormBuscarUsuarios>
                            <BotonCrearUsuario>
                                <FaPlus style={{ fontSize: "25px" }} />
                            </BotonCrearUsuario>
                            <FormBuscarUsuario>
                                <InputBuscarUsuario />
                            </FormBuscarUsuario>
                            <BotonEstadisticas>
                                <GiHamburgerMenu style={{ fontSize: "25px" }} />
                            </BotonEstadisticas>
                        </ContainerFormBuscarUsuarios>
                    </ContainerGestionarUsuarios>

                </ContainerUsuarios>

            </ContainerDashboardAdmin>
        </>
    )
}

export default DashboardAdmin
