package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Idioma {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String estado;
	private String descripcion;

	private Idioma() {}

	public Idioma(String nombre, String estado, String descripcion) {
		this.nombre = nombre;
		this.estado = estado;
		this.descripcion = descripcion;
	}

	

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Idioma idioma = (Idioma) o;
		return Objects.equals(id, idioma.id) &&
			Objects.equals(nombre, idioma.nombre) &&
			Objects.equals(estado, idioma.estado) &&
			Objects.equals(descripcion, idioma.descripcion);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, estado, descripcion);
	}


	@Override
	public String toString() {
		return "Idioma{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", estado='" + estado + '\'' +
			", descripcion='" + descripcion + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}