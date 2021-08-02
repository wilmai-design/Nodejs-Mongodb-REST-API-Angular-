var express = require('express');
var app = express();
var mogoose = require('mongoose');

mogoose.connect('mongodb://localhost:27017/lista-angular');

var lista = mogoose.model( 'Lista' , {
    texto: String
});

app.configure( function(){
    app.use( express.static(__dirname + '/publico'));
    app.use( express.bodyParser() );
})

app.post('/api/lista' , function(peticion, respuesta){
    lista.create({
        texto: peticion.body.texto
    } , function( error, lista){
        if(error){
            respuesta.send(error);
        }

        Lista.find( function(error, lista){
            if(error) {
                respuesta.send(error);
            }

            respuesta.json(lista);
        })
    })
})

app.get('/api/lista' , function(peticion, respuesta){
    // recursos.sendFile('./publico/index.html');
    Lista.find( function(error, lista){
        if(error) {
            respuesta.send(error);
        }
        respuesta.json(lista);

    } )
})


app.listen( 8080 , function(){
    console.log("servidor a prueba de nascar");
})

