package com.example.demo;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {


	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/editoriales/{id}/formacion")
	public @ResponseBody List<Map <String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT libro.id as ID, genero.nombre as GENERO, idioma.nombre as IDIOMA FROM libro JOIN genero ON libro.id_genero=genero.id JOIN idioma ON libro.id_idioma=idioma.id WHERE libro.id_editorial = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;


	}
}