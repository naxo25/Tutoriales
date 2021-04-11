const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/JavaScript', (req, res) => {

	let arr = [

      { linea: "Obtener el alto de un contenedor", tipo:'titulo' },
      { linea: "document.querySelector('#header').clientHeight" },
	  { 
	  	linea: 'Obtengo los valores de un objecto', 
	  	tipo:'titulo1' 
	  },
	  { linea: 'Object.values(arr)' },
	  { linea: 'Ejemplo de uso de api developers.giphy.com', tipo:'titulo' },
	  { linea: 'api: https://developers.giphy.com/docs/resource#code-examples' },
	  { tipo: 'Gif' },
	  { linea: 'style: display: flex; flex-wrap: wrap; pointer-events: none;' },
	  
      { linea: "Cambias los colores con js", tipo:'titulo' },
      { linea: "let x = document.querySelector('.menu-li');for (var i = 0; i < x.length; i++) { x[i].style.color = color }" },
	  { linea: 'Formato rut chileno', tipo:'titulo' },
	  { tipo: 'Rut' },
	  { linea: 'Comunicación frontend con backend', tipo:'titulo' },
	  { linea: 'Fronted', tipo:'titulo1' },
	  { linea: 'cdn: https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js' },
	  { linea: "axios.get(Ej: http:/localhost, url api o url backend).then(resultado => { console.log(resultado) })" },
	  { linea: 'Backend Ej nodeJs', tipo:'titulo1' },
	  { linea: "const app  = require('express')(); const cors = require('cors'); const http = require('http').Server(app);" },
	  { linea: "const bodyParser = require('body-parser'); app.use(bodyParser.json()); app.use(cors());" },
	  { linea: "listar -> app.get('/moves', async (req, res) => { await res.send(moves); })" },
	  { linea: "agregar-> .post('/moves', async (req, res) => { await res.send(moves); }) " },
	  { linea: "editar -> .put('/moves/:id', async (req, res) => { var move = req.body; var id = req.params.id; moves[id] = move; await res.send(move); })" },
	  { linea: "borrar -> .delete('/moves/:id', async (req, res) => { moves.splice(req.params.id, 1); await res.send(); }); " },
	  { linea: 'Virtual scroll', tipo:'titulo' },
	  { linea: 'let limit = {}; Object.keys(arreglo).slice(0,cantidad).forEach(key => { limit[key] = arreglo[key] }) return limit;' },
	  { linea: 'window.onscroll => { determino el alto del documento, alto del scroll scroll.scrollHeight y posición window.scrollY }' },
	  { linea: 'Filtrar elemento', tipo:'titulo' },
	  { linea: 'Object.keys(arreglo).find(item => item == ElementoFiltrado ? item : null )' },
	  { linea: 'Reverse', tipo:'titulo' },
	  { linea: 'Object.values(arr[key]).reverse()' },

	  { linea: "const dessert = { type: 'pie'}", tipo:'titulo' },
	  { linea: "dessert.type = 'pudding'" },
	  { linea: "console.log(dessert.type)" },
	  { linea: "if (3 == '3') {", tipo:'titulo' },
	  { linea: "  console.log(1)" },
	  { linea: "}" },
	  { linea: "function logThis() {", tipo:'titulo' },
	  { linea: "  this.desc = 'logger'" },
	  { linea: "  console.log(this)" },
	  { linea: "}" },
	  { linea: "new logThis();" },
	  { linea: "const x = 6 % 2;", tipo:'titulo' },
	  { linea: "const y = x ? true: false" },
	  { linea: "console.log(y)" },
	  { linea: "console.log(typeof(42))" },
	  { linea: "let roadTypes=['1','2','3','4']", tipo:'titulo' },
	  { linea: "console.log(roadTypes[2])" },
	  { linea: "let a = 5", tipo:'titulo' },
	  { linea: "console.log(++a)" },
	  { linea: "const obj = {", tipo:'titulo' },
	  { linea: " a:1, b:2, c:3," },
	  { linea: "};" },
	  { linea: "const obj2 = {" },
	  { linea: "  ...obj, a:0," },
	  { linea: "};" },
	  { linea: "console.log(obj2.a, obj2.b)" },
	]
	res.send(arr)

})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})