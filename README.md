# SKILL FACTORY 2022 by AVALITH
# FAKE STORE API

## Instalación

Para instalar las dependencias, ejecuta:
``` bash
npm install
```

## Ejecutar el servidor local

``` bash
npm start
```

## Descripción

Para simular la base de datos en su lugar vamos a utilizar la API
https://fakestoreapi.com/ para que nos proporcione la
funcionalidad de nuestros modelos, es imperativo que seamos
capaces de usar las funcionalidades básicas de la API a través de
nuestra API.


## Documentación

*Todos los endpoints básicos de la API de Fakestore se deben poder acceder a través de nuestra API, ej: /products, /products/:id, y sus análogos para Categorías, carritos y usuarios.*

*GET /products/categories debe devolver un array de objetos que tenga el nombre de la categoria y un array con todos los productos pertenecientes a la categoria*

*GET /users/firsts debe devolver los primeros 3 usuarios ordenados por ID*

*GET /prices debe devolver una lista de objetos que tengan id, titulo y precio de cada producto y que se pueda ordenar por precio y se pueda elegir si en orden ascendiente o descendiente a traves de un query “order”*

*GET /expensive debe devolver todos los productos que sean los más caros de su categoria*

*GET /bigcarts debe devolver todos los carritos que tengan mas de 2 productos y que diga el nombre del usuario que ordeno ese carrito*

## Rutas

* /products/categories/expensive
* /products/
* /products/categories
* /products/prices
* /products/:id
* /carts/bigcarts
* /carts
* /users
* /users/firsts
* /
