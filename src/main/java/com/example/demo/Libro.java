package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Libro {
    

     private @Id @GeneratedValue Long id;


    @ManyToOne()
    @JoinColumn(name = "id_editorial")
    private Editorial editorial;

    @ManyToOne()
    @JoinColumn(name = "id_genero")
    private Genero genero;

    @ManyToOne()
    @JoinColumn(name = "id_idioma")
    private Idioma idioma;

    public Libro() {}
    
    public Libro(Editorial editorial, Genero genero, Idioma idioma) {
        this.editorial = editorial;
        this.genero = genero;
        this.idioma = idioma;
    }
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Editorial GetEditorial() {
		return editorial;
	}

	public void setEditorial(Editorial editorial) {
		this.editorial = editorial;
	}

	public Genero getGenero() {
		return genero;
	}

	public void setGenero(Genero genero) {
		this.genero = genero;
	}

	public Idioma getIdioma() {
		return idioma;
	}

	public void setIdioma(Idioma idioma) {
		this.idioma = idioma;
	}

}
