package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "idiomas", path = "idiomas")
public interface IdiomaRepository extends CrudRepository<Idioma, Long> {
    
}
