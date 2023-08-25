const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerIdiomaPage = () => {

    let { id } = useParams();
    const [idioma, setIdioma] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/idiomas/' + id
        }).done(response=>setIdioma(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Idiomas</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{idioma.nombre}</td>
                </tr>
                <tr>
                    <th>Estado</th>
                    <td>{idioma.estado}</td>
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>{idioma.descripcion}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerIdiomaPage;