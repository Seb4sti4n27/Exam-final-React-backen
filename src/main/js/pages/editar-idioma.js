const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');


const EditarIdiomaPage=()=>{

    const [idioma, setIdioma]= useState({})
    let {id}=useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/idiomas/'+id
        }).done((response)=>setIdioma(response.entity))
    },[])

    const handleSubmit=(evento)=>{
          evento.preventDefault();
          client({
            method:'PATCH',
            path: '/api/idiomas/'+id,  
            entity: idioma,
            headers: {'Content-Type': 'application/json'}       
          }).done(()=>{window.location='/'}) 
    }

    return(
        <>
            <h1>Editar Idioma</h1>            
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={idioma.nombre} onChange={(e)=>setIdioma({...idioma, nombre: e.target.value})} /> <br/>
                <label>Estado</label>
                <input type="text" id="estado" name="estado" value={idioma.estado} onChange={(e)=>setIdioma({...idioma, estado: e.target.value})}  /> <br/>
                <label>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={idioma.descripcion} onChange={(e)=>setIdioma({...idioma, descripcion: e.target.value})}  /> <br/>

                <input type="submit" value="Editar Idioma" />
            </form>

        </>
    )

}
module.exports=EditarIdiomaPage