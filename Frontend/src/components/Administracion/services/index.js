import axios from 'axios';

// const baseUrl = import.meta.env.REACT_APP_BASE_URL;

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getJuegos(){
    try{
        const response = await axios({
            url: `${baseUrl}/juegos`,
            method: "GET",
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function saveJuegos(juegosData){
    const formData = new FormData();
    formData.append("nombre", juegosData.nombre )
    formData.append("imagen", juegosData.imagen )
    formData.append("descripcion", juegosData.descripcion )
    formData.append("lanzamiento", juegosData.lanzamiento )
    formData.append("plataformas", juegosData.plataformas )
    try{
        const response = await axios({
            url: `${baseUrl}/juegos`,
            method: "POST",
            data: formData
        })
        return response
    }
    catch(e){
        console.log(e);
    }

}

export async function updateJuegos(_id, datosNuevo){
    try{
        const response = await axios({
            url: `${baseUrl}/juegos/${_id}`,
            method: "PUT",
            data: datosNuevo
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function deleteJuegos(_id){
    try{
        const response = await axios({
            url: `${baseUrl}/juegos/${_id}`,
            method: "DELETE"
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}