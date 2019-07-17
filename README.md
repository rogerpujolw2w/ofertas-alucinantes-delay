# Ofertas Alucinantes!

Ofertas Alucinantes es un proyecto realizado en Angular 8.0.4 (https://github.com/angular/angular-cli), el cual nos permite poder enviar ofertas interesantes que irán clasificandose según los votos que proporcionen los usuarios.

El proyecto se encuentra en la siguiente dirección: https://github.com/jaumeizquierdo/ofertas-alucinantes

Para ver una **demo funcional** puede verse en: https://jaumeizquierdo.github.io/ofertas-alucinantes/ o en https://jaumeizquierdo.com/angular/

La API que gestiona la información de ejemplo está disponible en https://ofertas-rest.herokuapp.com/

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

## RETO A SUPERAR

---

<img src="https://i.imgur.com/2tepsUY.png" data-canonical-src="https://i.imgur.com/2tepsUY.png" />

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
