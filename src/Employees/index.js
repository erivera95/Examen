import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Empleados, PostEmpleados } from '../services/axios';
import { EmployeesContainer } from './employes';
import dayjs from 'dayjs';


const Employees = () => {
    let navigate = useNavigate();

    const [datosTabla, setDatosTabla] = React.useState([]);
    const [openLoading, setOpenLoading] = React.useState(false);
    const [ID, setID] = React.useState('');
    const [name, setName] = React.useState(null);
    const [last_name, setLast_name] = React.useState(null);
    const [value, setValue] = React.useState();
    useEffect(() => {
        const consumoWS = async () => {
            const ws = await Empleados();
            setDatosTabla(ws.data.data.employees);
            console.log(ws.data.data.employees)
        }
        consumoWS();
    }, []);

    try {

        const columns =
            [
                { title: 'ID', field: 'id' },
                { title: 'Nombre', field: 'name' },
                { title: 'Apellido', field: 'last_name' },
                { title: 'Cumpleaños', field: 'birthday' },
            ]


        const handleChangeFecha = (newValue) => {
            setValue(newValue.$y + '/' + newValue.$D + '/' + newValue.$W);
            console.log(newValue.$y + '/' + newValue.$D + '/' + newValue.$W);
        };
        const handleChangeNombre = (event) => {
            setName(event.target.value)
        };
        const handleChangeApellido = (event) => {
            setLast_name(event.target.value)
        };
        const handleOnclickGuardar = async () => {

            console.log(datosTabla[datosTabla.length - 1].id)
            if (last_name === null) {
                alert('Falta un campo por llenar')
                if (name === null) {
                    alert('Falta un campo por llenar')
                }
            }

            let newData = ({
                id: datosTabla[datosTabla.length - 1].id + 1,
                name: name,
                last_name: last_name,
                birthday: value
            })
            const getProduccion = await PostEmpleados({
                name: name,
                last_name: last_name,
                birthday: value
            })
            setDatosTabla([...datosTabla, newData]);
            alert('Empleado enviado correctamente')
        };
        const handleOnclickClose = () => {
            navigate('/');
        }
        const handleOnclickBack = () => {
            navigate('/');
        }

        return (

            <Fragment>
                <EmployeesContainer
                    handleOnclickBack={handleOnclickBack}
                    handleOnclickClose={handleOnclickClose}
                    handleOnclickGuardar={handleOnclickGuardar}

                    //Date
                    value={value}
                    handleChangeFecha={handleChangeFecha}
                    handleChangeApellido={handleChangeApellido}
                    handleChangeNombre={handleChangeNombre}

                    columns={columns}
                    data={datosTabla}
                    openLoading={openLoading}


                />

            </Fragment>
        )
    }
    catch {
        console.log('error');
    }

}

export default Employees;