import React, { useState } from 'react'
import { BotonFromCrearUsuario, ContainerAgregarUsuarios, ContainerDashboardAdmin, ContainerFormCrearUsuario, ContainerUsuarios, FormCrearUsuario, InputFormCrearUsuario, LabelFormCrearUsuario, OptionsSelectFormCrearUsuario, SelectFormCrearUsuario, TituloContainerAgregarUsuarios, TituloContainerFormCrearUsuario } from '../styles/dashboardAdmin-styled'
import NavbartDashboard from '../components/NavbartDashboard'
import { FaPlus } from "react-icons/fa";
import { firtsColor, letterColor, secondColor, thirdColor } from '../helpers/styledSheet';
import { Box, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '0',
};

const DashboardAdmin = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ContainerDashboardAdmin>
                <NavbartDashboard />

                <ContainerUsuarios>
                    <ContainerAgregarUsuarios onClick={handleOpen}>
                        <FaPlus style={{ fontSize: "20px", color: `${letterColor}` }} />
                        <TituloContainerAgregarUsuarios>Crear usuario</TituloContainerAgregarUsuarios>
                    </ContainerAgregarUsuarios>


                </ContainerUsuarios>

            </ContainerDashboardAdmin>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ContainerFormCrearUsuario>
                        <TituloContainerFormCrearUsuario>Crear Usuario</TituloContainerFormCrearUsuario>

                        <FormCrearUsuario>
                            <LabelFormCrearUsuario> Primer nombre
                                <InputFormCrearUsuario
                                    type='text'
                                />
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Segundo nombre
                                <InputFormCrearUsuario
                                    type='text'
                                />
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Primer apellido
                                <InputFormCrearUsuario
                                    type='text'
                                />
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Segundo apellido
                                <InputFormCrearUsuario
                                    type='text'
                                />
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Correo electronico
                                <InputFormCrearUsuario
                                    type='email'
                                />
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Fecha de nacimiento
                                <InputFormCrearUsuario
                                    type='date'
                                />
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Sexo
                                <SelectFormCrearUsuario>
                                    <OptionsSelectFormCrearUsuario>...</OptionsSelectFormCrearUsuario>
                                    <OptionsSelectFormCrearUsuario>Femenino</OptionsSelectFormCrearUsuario>
                                    <OptionsSelectFormCrearUsuario>Masculino</OptionsSelectFormCrearUsuario>
                                </SelectFormCrearUsuario>
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Rol
                                <SelectFormCrearUsuario>
                                    <OptionsSelectFormCrearUsuario>...</OptionsSelectFormCrearUsuario>
                                    <OptionsSelectFormCrearUsuario>Entrenador</OptionsSelectFormCrearUsuario>
                                    <OptionsSelectFormCrearUsuario>Usuario</OptionsSelectFormCrearUsuario>
                                </SelectFormCrearUsuario>
                            </LabelFormCrearUsuario>

                            <LabelFormCrearUsuario> Contraseña
                                <InputFormCrearUsuario
                                    type='password'
                                />
                            </LabelFormCrearUsuario>

                            <BotonFromCrearUsuario> Crear </BotonFromCrearUsuario>
                        </FormCrearUsuario>
                    </ContainerFormCrearUsuario>
                </Box>
            </Modal>
        </>
    )
}

export default DashboardAdmin
