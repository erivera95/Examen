import React, { Fragment, useContext, useState } from "react";
import { LoginContainer } from "./login";
import { useNavigate } from "react-router-dom";
import { Auth } from "../context/context"

const Login = (props) => {
    

    let navigate = useNavigate();

    const { sesion, setSesion } = useContext(Auth);

    //Modal
    const [openLoading, setopenLoading] = React.useState(false);

    //SnackBar
    const [openError, setOpenError] = useState(false);
    const handleCloseF = () => setOpenError(false);


    const [values, setValues] = useState({});

    const handleOnChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const onKeyUp = (event) => {
        if (event.keyCode === 13) {
            handleOnclick(values);
        }
    };


    const handleOnclick = async (data) => {
        // setopenLoading(true);
        console.log(sesion);
        if (data.Usuario === 'Eduardo' && data.Pass === '102030') {
            navigate('/EMPLOYEES');
            setSesion(true)
            setopenLoading(false);
        }
        else {
            setOpenError(true);
        };
    }


    return (
        <Fragment>
            <LoginContainer
                id="ContenedorLogin"
                values={values}
                handleOnChange={handleOnChange}
                handleOnclick={handleOnclick}

                //ModalLogin
                openLoading={openLoading}

                //Snackbar
                openF={openError}
                handleCloseF={handleCloseF}

                //Campo contrasena
                onKeyDown={onKeyUp}


            />
        </Fragment>
    )

}
export default Login;