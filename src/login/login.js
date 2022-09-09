import React, { Fragment } from "react";
import Button from '@mui/material/Button';
import { Alert, Box, FormControl, Grid, Input, Snackbar, TextField, Typography } from "@mui/material";
import myStyles from "../css";
import { Loading } from "../LoadingSpinner/loading";



export const LoginContainer = (props) => {

    const myClases = myStyles();

    const {
        values,
        handleOnChange,

        handleOnclick,
        //Modal
        openLoading,
        //Snackbar
        openF,
        handleCloseF,
        //Campo contrasena
        onKeyDown
    } = props;

    return (
        <Fragment
            id="Fragment principal"
        >
            <Grid container id="Contenedor_Login"
                sx={myClases.Login_GridPrincipal}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid container id="Contenedor_Login_Box"
                    xs={12} sm={7} md={6} lg={4} xl={4}
                    direction="column"
                    alignItems="center"
                    justifyContent="space-evenly"
                    sx={myClases.Login_GridPrincipal_Box}
                >
                    <Grid item id="LogIn"
                        sx={myClases.GridItem}
                    >
                        <Typography
                            variant="h4"
                            alignItems="center"
                            sx={myClases.Login_GridPrincipal_Letras}
                        >Log in
                        </Typography>
                    </Grid>

                    <Grid item id="Usuario"
                        sx={myClases.GridItem}
                        xs={12} sm={12} md={12} lg={12} xl={12}
                    >
                        <TextField
                            autoFocus
                            id="Usuario"
                            placeholder="Usuario"
                            variant="standard"
                            value={values.Usuario}
                            onCut={(e) => {
                                e.preventDefault()
                                return false;
                            }}
                            onCopy={(e) => {
                                e.preventDefault()
                                return false;
                            }}
                            onPaste={(e) => {
                                e.preventDefault()
                                return false;
                            }}
                            onChange={handleOnChange('Usuario')}
                            sx={myClases.textfieldLogin}


                        // size="small"
                        />

                    </Grid>

                    <Grid item id="Contraseña"
                        sx={myClases.GridItem}
                        xs={6} sm={12} md={12} lg={12} xl={12}
                    >
                        <FormControl
                            sx={myClases.textfieldLogin}
                        // variant="filled"
                        >
                            {/* <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel> */}

                            <Input
                                id="Contraseña"
                                placeholder="Contraseña"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.Contraseña}
                                onChange={handleOnChange('Pass')}
                                onKeyDown={onKeyDown}
                                onCut={(e) => {
                                    e.preventDefault()
                                    return false;
                                }}
                                onCopy={(e) => {
                                    e.preventDefault()
                                    return false;
                                }}
                                onPaste={(e) => {
                                    e.preventDefault()
                                    return false;
                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item id="Boton"
                        sx={myClases.GridItem}
                    >
                        <Button id="Entrar"
                            sx={myClases.botonLogin}
                            variant="contained"
                            onClick={() => handleOnclick(values)}
                        >
                            Entrar
                        </Button>
                    </Grid>

                    <Grid item id="Loading"
                        sx={myClases.GridItem}
                    >
                        <Loading
                            openLoading={openLoading}
                        />

                    </Grid>

                    <Grid item id="Barra error">
                        <Snackbar open={openF} autoHideDuration={5000} onClose={handleCloseF}>
                            <Alert
                                onClose={handleCloseF}
                                severity="error"
                                sx={{ width: '100%' }}
                                variant="filled"
                            >
                                El usuario o la contraseña no son validos
                            </Alert>
                        </Snackbar>
                    </Grid>

                </Grid>
            </Grid>
        </Fragment>
    )
}


