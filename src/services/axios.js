import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const URL = "http://192.168.0.246:1687"; //Pinelli VPN Servidor
// const URL = "https://e427-189-232-157-237.ngrok.io"; //Pinelli ngrok Servidor
//const URLD = "http://localhost:1862"; //Prueba login local


export const Empleados = async () => {
    try {
        const response = await axios(
            {
                url: 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:Eduardo_Rivera',
                method: 'GET',
            }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export const PostEmpleados = async (data) => {
    try {
        const response = await axios(
            {
                url: "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:Eduardo_Rivera ",
                method: 'POST',
                data: data
            }
        );
        return response;
    } catch (error) {
        return error;
    }

}
