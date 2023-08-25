package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final IdiomaRepository repositoryI;
	private final GeneroRepository repositoryG;
	private final EditorialRepository repositoryE;
	private final LibroRepository repositoryL;

	@Autowired
	public DatabaseLoader(
		IdiomaRepository repositoryI, 
		GeneroRepository repositoryG,
		EditorialRepository repositoryE,
		LibroRepository repositoryL) {
		this.repositoryI = repositoryI;
		this.repositoryG = repositoryG;
		this.repositoryE = repositoryE;
		this.repositoryL = repositoryL;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Idioma aymara = new Idioma("Aymara","Extinto",".");
		this.repositoryI.save(aymara);
		Idioma kechua = new Idioma("Kechua","Extinto", ".");
		this.repositoryI.save(kechua);
		Genero terror = new Genero("Terror");
		this.repositoryG.save(terror);
		this.repositoryG.save(new Genero("Suspenso"));
		Genero suspenso = new Genero("Suspenso");
		this.repositoryG.save(suspenso);

		Editorial mirahadas = new Editorial("Editorial Mirahadas");
		this.repositoryE.save(mirahadas);

		this.repositoryL.save(new Libro(mirahadas, terror, aymara));
		
	}
}