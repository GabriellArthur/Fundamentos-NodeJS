const express = require('express')

const app = express()

app.use(express.json());

/**
 * GET | POST | PUT | PATCH | DELETE
 * 
 * Tipos de parâmetros
 * Route Params => Idedntificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção/alteração (JSON)
*/

app.get('/courses',(request,response)=>{
   const query = request.query;
   console.log(query)
   return response.json(["Curso1","Curso2","Curso3"])
})

app.post('/courses',(request,response)=>{
   const body = request.body;
   console.log(body);
   return response.json(["Curso1","Curso2","Curso3","Curso4"])
})

app.put('/courses/:id',(request,response)=>{
   const {id} = request.params;
   console.log(id)
   return response.json(["Curso6","Curso2","Curso3","Curso4"])
})

app.patch('/courses/:id',(request,response)=>{
   return response.json(["Curso6","Curso7","Curso3","Curso4"])
})

app.delete('/courses/:id',(request,response)=>{
   return response.json(["Curso6","Curso7","Curso4"])
})

app.listen(3333)