# Ejercicio Velazquez

Hemos realizado un ejercicio de la asignatura de **Desarrollo de Aplicaciones Web** en el 
que hemos tenido que crear una página web que contenga una serie de imágenes de Velázquez y 
que al hacer click en cada una de ellas se muestre una descripción de la misma.

## Descripción

El ejercicio consiste en crear una página web que contenga una serie de imágenes de Velázquez y
que al hacer click en cada una de ellas se muestre una descripción de la misma. Para ello, se
ha utilizado el lenguaje de programación **JavaScript**.

## Desarrollo del ejercicio

En primer lugar, se ha creado un repositorio en GitHub para alojar el proyecto. A continuación,
se debe crear el archivo **index.html** que contendrá la estructura de la página web. En este
creamos la estructura básica de una página web, con el título, el encabezado y el cuerpo.


### HTML

En el cuerpo de la página web, dividimos la página en 4 partes principales: la cabecera, el menú
de imagenes, la imagen principal y la descripción de la imagen.

```html
<div class="general">
    <div id="img_pequeña">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </div>
    <div class="img_grande">
        <img src="" alt="">
    </div>
    <div class="contendido_derecha">
        <h1></h1>
        <h3></h3>
        <h2></h2>
        <p></p
        <botton></botton>
        <p></p>
    </div>
</div
```
### CSS

Para darle estilo a la página web, se ha utilizado el lenguaje de estilos **CSS**. En este
archivo se ha creado una clase para cada una de las partes de la página web, y se ha dado
estilo a cada una de ellas.

```css
.general{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
````

### JavaScript

Para darle funcionalidad a la página web, se ha utilizado el lenguaje de programación **JavaScript**.
En este archivo se ha creado 3 variables, una para cada una de las partes de la página web (el div del menu, el div de 
la imagen en grande y el div de descripcion de cada imagen).
En la primera parte del codigo de JavaScript llamamos a las variables que hemos creado anteriormente y creamos un array 

```javascript
const img =  document.querySelectorAll(".img_pequeñas");
const bloque = document.querySelectorAll(".img_grande");
const bloque2 = document.querySelectorAll(".contenido_derecha");


img.forEach( ( cadaimg , i )=>{

    img[i].addEventListener('click',()=>{

        img.forEach( ( cadaimg , i )=>{
            bloque[i].classList.remove('activo');
            bloque2[i].classList.remove('activo');
        });

        img[i].classList.add('activo');
        bloque[i].classList.add('activo')
        bloque2[i].classList.add('activo');

    })
})
````
