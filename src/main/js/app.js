const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const VerIdiomaPage = require('./pages/ver-idioma');
const VerGeneroPage = require('./pages/ver-genero');
const NuevoGeneroPage = require('./pages/nuevo-genero');
const NuevoIdiomaPage = require('./pages/nuevo-idioma');
const EditarIdiomaPage = require('./pages/editar-idioma');
const VerEditorialPage = require('./pages/ver-editorial');
const NuevoLibroPage = require('./pages/nuevo-libro');



const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-idioma/:id', element: <VerIdiomaPage /> },
	{ path: '/nuevo-idioma', element: <NuevoIdiomaPage /> },
	{ path: '/ver-genero/:id', element: <VerGeneroPage /> },
	{ path: '/nuevo-genero', element: <NuevoGeneroPage /> },
	{ path: '/editar-idioma/:id', element: <EditarIdiomaPage /> },
	{ path: '/ver-editorial/:id', element: <VerEditorialPage /> },
	{ path: '/ver-editorial/:id/nuevo-libro', element: <NuevoLibroPage /> }
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
