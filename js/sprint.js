function trello(){

	var input = document.createElement('input');
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Titulo de lista tarea");
	input.classList.add("class", "form-group");
	input.value;

	var boton = document.createElement('button');
	var texto = document.createTextNode("Guardar")
	boton.setAttribute("type", "button");
	//boton.setAttribute("placeholder", "Guardar");
	boton.classList.add("btn", "btn-success");

	
	cont_boton.appendChild(input);
	cont_boton.appendChild(boton);
	boton.appendChild(texto);

	document.getElementsByClassName("form-group")[0].focus();

	boton.addEventListener("click", function(){
		var tarea = document.getElementsByClassName('form-group')[0].value;
		document.getElementsByClassName('form-group')[0].value="";
		//crear nuevo div contenedor que sea padre de enlace
		var container_lista = document.createElement('contenido');
		container_lista.classList.add('col-md-3', 'col-sm-3', 'col-xs-3', 'fondo_lista');
		
		var div_tarea = document.createElement('div');
		div_tarea.classList.add('fondo_tareas');
		var div_titulo = document.createElement('h3')
		var titulo_text = document.createTextNode(tarea);
		var enlace = document.createElement('a');
		var text_enlace = document.createTextNode('Añade una tarjeta....');
		var boton = document.createElement('button');
		var texto = document.createTextNode("Guardar")
		boton.setAttribute("type", "button");
		//boton.setAttribute("placeholder", "Guardar");
		boton.classList.add("btn", "btn-success");

		tareas.appendChild(container_lista);
		container_lista.appendChild(div_tarea);
		div_tarea.appendChild(div_titulo);
		div_titulo.appendChild(titulo_text);
		enlace.appendChild(text_enlace);
		container_lista.appendChild(enlace);
		container_lista.appendChild(boton);
		boton.appendChild(texto);


		enlace.addEventListener("click", function(){
			var texarea = document.createElement('textarea');
			texarea.classList.add("form-control");
			texarea.setAttribute("placeholder", "Nueva tarea")

			div_tarea.appendChild(texarea);

		});

	

		/*var div_texarea = document.createElement('div');
		var titulo = document.createTextNode('strong');
		var texarea = document.createElement('texarea');
		var text_texarea = document.createTextNode('a');*/


	});
	

}	