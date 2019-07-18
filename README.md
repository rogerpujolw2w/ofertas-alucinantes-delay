# Ofertas Alucinantes!

Ofertas Alucinantes es un proyecto realizado en Angular 8.0.4 (https://github.com/angular/angular-cli), el cual nos permite poder enviar ofertas interesantes que irán clasificandose según los votos que proporcionen los usuarios.

El proyecto se encuentra en la siguiente dirección: https://github.com/jaumeizquierdo/ofertas-alucinantes

Para ver una **demo funcional**	 puede verse en: 

- https://jaumeizquierdo.github.io/ofertas-alucinantes/ (Publicado en GitHub)
- https://jaumeizquierdo.com/angular/ (Publicdo en un servidor linux)
- http://ofertasalucinantes.com.mialias.net/ (Publicado en CDMON, usuario: oferta265 y clave: 8YGVmSpP , versión experimental)

La API que gestiona la información de ejemplo está disponible en:

-  https://ofertas-rest.herokuapp.com/ (Publicado en heroku)

En el estado actual la app tiene los siguientes módulos:

## Módulo User

En el módulo user tenemos un CRUD en el cual podemos crear un nuevo usuario, listarlos y ver el detalle del mismo.
Los componentes utilizados son:

- **LOGIN**: formulario de login
- **REGISTER**: formulario de registro
- **USER LIST**: vista del listado de usuarios. Desde el card de cada una de las ofertas podemos emitir un voto positivo o negativo. También podemos editarla o eliminarla.
- **USER**: vista del detalle de usuario

## Módulo Ofertas

El módulo de ofertas tenemos otro CRUD que nos permite visualizar las ofertas enviadas por los usuarios.

- **OFFER**: vista principal de la app con el listado de ofertas. Tiene un paginado de 9 elementos por página.
- **OFFER ADD**: formulario de envío de oferta. En la vista se puede obtener una vista previa de la oferta que estamos generando.
- **OFFER EDIT**: formulario de edición de la oferta.

## Módulo Commons

- **HOME**: Redirige a Ofertas
- **NAVBAR**: Barra de navegación
- **FOOTER**: Pie de la web
- **NOTFOUND**: 404 error

## SHARED

En la carpeta 'shared' encontramos los servicios utilizados, las clases y el auth-guard

- **CLASES**: Se han utilizado dos clases: Offer y User
- **GUARDS**: Bloquea el acceso a 'nueva-oferta' si no hemos hecho login
- **SERVICIOS**: Api.Service gestiona el CRUD de 'Ofertas' y Auth.Service el de 'Usuarios'

 ## API

 La API utilizada en la versión de producción puede encontrarse en https://ofertas-rest.herokuapp.com/

## DEPENDENCIAS UTILIZADAS

- **Angular Material** (https://material.angular.io/)
- **Material Icons** (https://material.angular.io/)
- **Jquery** (https://www.npmjs.com/package/jquery)
- **Paginado de ofertas** (https://material.angular.io/components/paginator/overview)
- **NGX Spinner** (https://napster2210.github.io/ngx-spinner/)
- **Material colors** (https://www.npmjs.com/package/material-colors)
- **Moment.js** (https://www.npmjs.com/package/moment)
- **ng2-truncate** (https://www.npmjs.com/package/ng2-truncate)
- **ngx-pipes** (https://www.npmjs.com/package/ngx-pipes)

## WIREFRAMES

### Módulo ofertas

- Componente lista de ofertas:

<img src="https://i.imgur.com/BLuPXAI.png" data-canonical-src="https://i.imgur.com/BLuPXAI.png" />

- Componente vista de la oferta:

<img src="https://i.imgur.com/WKB4jDi.png" data-canonical-src="https://i.imgur.com/WKB4jDi.png" />

- Componente edición de la oferta:

<img src="https://i.imgur.com/60chHnO.png" data-canonical-src="https://i.imgur.com/60chHnO.png" />

- Versión mobile:

<img src="https://i.imgur.com/UuTBd9m.png" data-canonical-src="https://i.imgur.com/UuTBd9m.png" />

## SPRINT

El flujo de trabajo ha sido dividido en diferentes 'users histories gestionadas' mediante Trello. Adjuntamos captura del sprint con algunas tareas realizadas y otras pendientes:

<img src="https://i.imgur.com/UIIyIiF.png" data-canonical-src="https://i.imgur.com/UIIyIiF.png" />

<img src="https://i.imgur.com/aDEtWP7.png" data-canonical-src="https://i.imgur.com/aDEtWP7.png" />

## COMMITS

Adjuntamos dos capturas con el número de commits realizados y agunos de los commits enviados:

<img src="https://i.imgur.com/4Mwf4NK.png" data-canonical-src="https://i.imgur.com/4Mwf4NK.png" />
<img src="https://i.imgur.com/1VvDT5v.png" data-canonical-src="https://i.imgur.com/1VvDT5v.png" />

## RETO A SUPERAR (1)

Uno de los retos que nos aparecio a medida que avanzabamos el proyecto fue que en el Json que utilizamos de base de datos, faltava el compo de voto, y cuando queriamos guardar este campo nos devolvia un valor NaN.

Esto provocaba que el valor correcto no apareciese hasta que se actualizaba la pantalla.

Así que modificamos el código añadiendo un condicional con la función isNaN() para solventar este problema. (Ver imagen)

<img src="https://i.imgur.com/2tepsUY.png" data-canonical-src="https://i.imgur.com/2tepsUY.png" />


## RETO A SUPERAR (2)

Otro reto fue el de poder actualizar en tiempo real el contador de likes de la oferta.

La forma que teniamos de hacerlo con los conocimientos actuales, era añadir un temporizador para que fuese recargando el offer-list.

Técnicamente fue facil, solo tubimos que añadir un temporizador en el mgOnInit con el metodo interval.

Probamos el siguiente código, pero no nos dejaba aplicar un inteval sobre un observable:

	this.getOffers$ = Observable.interval(1000).startWith(0).switchMap(() => this.getOffers());

Al final lo resolvimos de la siguiente forma:

    this.getOffers();
    interval(500).subscribe(x => {
      this.getOffers();
    });

Se puede observar que hay dos this.getOffers , esto es porque hizimos la prueba con 4 segundo y nos dimos cuenta de que hasta que no pasaban los 4 segundos no se construia el offer-list, así que añadimos uno en el ngOnInit y otro dentro del interval, que es el que se va repitiendo.

La solución parecia bastante buena hasta que la probamos y vimos que no era eficiente, sobre todo para el usuario ya que pierde control sobre el offer-list porque se esta recargando constantemente.

Si vais a la url de CDMON (indicada al inicio del documento), hay el ejemplo experimental donde podeis ver el problema que hemos detectado.

Así que tenemos un nuevo futurible, que sería arreglar esta funcionalidad mediante Sockets.



## FUTURIBLES

En un futuro la app tendrá una división mediante tabs, que irá filtrando las ofertas del siguiente modo:

- **Ofertas nuevas** -> Ofertas recién enviadas
- **Ofertas populares** -> Más de 50 votos
- **Ofertas destacadas** -> Más de 100 votos

Otras mejoras a realizar son:

- Solo podrá tener un voto por usuario
- La app tendrá que recibir notificaciones en tiempo real para mostrar el número de votos
- Sistema de comentarios en las ofertas para usuarios registrados
- Sistema de referidos en los enlaces. Tendría que modificarse la url introducida por el usuario para añadir los enlaces de referidos de diferentes plataformas
