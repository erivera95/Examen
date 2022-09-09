import { AppBar, Autocomplete, Button, Grid, IconButton, Switch, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { Fragment } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@material-ui/core';
import myStyles from '../css';
import { Tabla } from '../Tabla/tabla';
// import myStylesMobile from '../../../css/mobile';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Loading } from '../LoadingSpinner/loading';




export const EmployeesContainer = (props) => {

    const myClases = myStyles();

    const {
        handleOnclickBack,
        handleOnclickGuardar,
        handleChangeNombre,
        handleChangeApellido,
        handleChangeFecha,

        value,
        //textfields
        Nombre,
        Apellido,
        Fecha,
        openLoading,

        //Tabla
        title,
        data,
        actions,
        columns,
    } = props;
    return (
        <Fragment>
            <Grid container id="Menu_GridPrincipal"
                sx={{
                    // background: 'green',
                    margin: '0 !important',
                    width: '100% !important',
                }}
                direction="column"
                alignItems="center"
            >
                <Grid item id="AppBar"
                    sx={myClases.Menu_GridItem}
                >
                    <AppBar component="nav"
                        position="static"
                        sx={myClases.AppBar}
                    >
                        <Toolbar
                            sx={{ justifyContent: 'center !important' }}
                        >
                            <Box>
                                <IconButton id="Produccion"
                                    sx={myClases.Back_Logo}
                                    variant="contained"
                                    onClick={handleOnclickBack}
                                >
                                    <ArrowBackIosIcon
                                        sx={myClases.Back_Logo}
                                    />
                                </IconButton>
                            </Box>
                            <Typography sx={myClases.Titulos} component="div">
                                Employees
                            </Typography>

                        </Toolbar>
                    </AppBar>

                </Grid>
                <Grid container id="Contenedor_Menu_Botones"
                    // direction='column'
                    sx={{
                        backgroundColor: '#E7F6F2',
                        margin: '5px 0 0 0 !important',
                        width: '100% !important',
                        justifyContent: "space-around"
                    }}
                    spacing={0.5}
                >

                    <Grid item xs={4} sm={4} lg={2} sx={myClases.Produccion_GridItem} key="Nombre">
                        <TextField
                            autoFocus={true}
                            required
                            label="Nombre"
                            value={Nombre}
                            onChange={handleChangeNombre}
                            inputProps={{ maxLength: 30 }}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={4} sm={3} lg={2} sx={myClases.Produccion_GridItem} id="Apellido">
                        <TextField
                            inputProps={{ maxLength: 30 }}
                            required
                            label="Apellido"
                            value={Nombre}
                            onChange={handleChangeApellido}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={4} sm={3} lg={2} sx={myClases.Produccion_GridItem} id="Fecha">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Fecha de nacimiento"
                                inputFormat="YYYY/MM/DD"
                                value={value}
                                onChange={handleChangeFecha}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={3} sm={3} lg={2} sx={myClases.Produccion_GridItem} id="Boton limpiar">
                        <Button id="Entrar"
                            sx={myClases.botonProduccion}
                            variant="Filled"
                            onClick={() => handleOnclickGuardar()}
                            fullWidth
                        >
                            Guardar
                        </Button>
                    </Grid>

                </Grid>
                <Grid item xs={8} sm={8} lg={8} sx={myClases.Produccion_GridItem} id="Tabla">
                    <Tabla
                        title={title}
                        columns={columns}
                        data={data}
                        actions={actions}
                    />
                </Grid>

                <Grid item id="Loading"
                    sx={myClases.GridItem}
                >
                    <Loading
                        openLoading={openLoading}
                    />

                </Grid>


            </Grid>
        </Fragment >
    )
}
