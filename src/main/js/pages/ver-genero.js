const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState,useEffect} = require('react');
const client = require('../client');

const VerGeneroPage = () => {

    let { id } = useParams();
    const [genero, setGenero] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/generos/' + id
        }).done(response=>setGenero(response.entity))
    }, [])
    
    

    return (
        <>
            <h1>Ver Genero</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{genero.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerGeneroPage;