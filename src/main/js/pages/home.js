const React = require('react');
const client = require('../client');
const {Link } = require('react-router-dom');


class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { idiomas: [], generos: [], editoriales: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/idiomas' }).done(response => {
			this.setState({ idiomas: response.entity._embedded.idiomas });
		});

		client({ method: 'GET', path: '/api/generos' }).done(response => {
			this.setState({ generos: response.entity._embedded.generos });
		});
		client({ method: 'GET', path: '/api/editoriales' }).done(response => {
			this.setState({ editoriales: response.entity._embedded.editoriales });
		});

	}
	render() {
		return (
			<>
				<h1>Examen Final Sobre una Editorial que almacena Libros</h1>

				<div style={{ "width": "100%", "display": "flex" }}>
					<div style={{ "width": "calc(100% / 3)" }}>
						<Titulo entidad="Idiomas" emoji="🏫" />
						<IdiomaList idiomas={this.state.idiomas} />
						<Link to="/nuevo-idioma">Nuevo Idiomas</Link>
					</div>
					<div style={{ "width": "calc(100% / 3)" }}>
						<Titulo entidad="Generos" emoji="📚" />
						<GeneroList generos={this.state.generos} />
						<Link to="/nuevo-genero">Nuevo Generos</Link>
					</div>
					<div style={{ "width": "calc(100% / 3)" }}>
						<Titulo entidad="Editoriales" emoji="📖" />
						<EditorialList editoriales={this.state.editoriales} />
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class IdiomaList extends React.Component {
	render() {
		const idiomas = this.props.idiomas.map(idioma =>
			<Idioma key={idioma._links.self.href} idioma={idioma} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Estado</th>
						<th>Acciones</th>
					</tr>
					{idiomas}
				</tbody>
			</table>
		)
	}
}
class GeneroList extends React.Component {
	render() {
		const generos = this.props.generos.map(genero =>
			<Genero key={genero._links.self.href} genero={genero} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{generos}
				</tbody>
			</table>
		)
	}
}

class EditorialList extends React.Component {
	render() {
		const editoriales = this.props.editoriales.map(editorial =>
			<Editorial key={editorial._links.self.href} editorial={editorial} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{editoriales}
				</tbody>
			</table>
		)
	}
}


class Idioma extends React.Component {
	render() {
		const id = this.props.idioma._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.idioma.nombre}</td>
				<td>{this.props.idioma.estado}</td>
				<td>
					<Link to={"/ver-idioma/" + id}>Ver</Link> |
					<Link to={"/editar-idioma/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Genero extends React.Component {
	render() {
		const id = this.props.genero._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.genero.nombre}</td>
				<td>
					<Link to={"/ver-genero/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

class Editorial extends React.Component {
	render() {
		const id = this.props.editorial._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.editorial.nombre}</td>
				<td>
					<Link to={"/ver-editorial/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
module.exports = HomePage;