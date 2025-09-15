RELACIONES:

1:1 = Users y profile. Un user puede pertenecer a un profile y un profile puede pertenecer a un user.
1:M = Director y Movies. Un director puede pertenecer a varias películas pero una película sólo puede pertenecer a un director.
M:M = movies y users (por entre watchlist). Un usuario puede tener muchas películas en su watchlist y muchas películas pueden pertenecer a la watchlist de varios usuarios.

Embebidos y referenciados:
Movie: contiene embebido para poder incorporar detalles técnicos como un objeto aparte sin estar en otro modelo.
Users, watchlist, etc: contienen referenciados para poder vincularlos con la id de otros modelos con los que están relacionados.

INVESTIGACIÓN:
- POPULATE sólo se puede usar cuando hay una propiedad referenciada. EJ: mongose.schema.types.objectId, ref: "User". No  es posible aplicarla en ningún otro caso.

- ELIMINACIÓN LÓGICA: la eliminación lógica no está incorporada de por sí en mongoose, se debe hacer de forma manual, agregando un campo llamado "IsDeleted" o similar que tenga un valor booleano por defecto "false" a los modelos y luego, al momento de eliminar el campo, se debe actualizar de "false" a "true". Luego, aplicar filtros en los controladores para que no aparezcan los campos que tienen "isdeleted: true".
- ELIMINACIÓN EN CASCADA: La eliminación en cascada se debe de aplicar en el modelo, en el que, al momento de eliminar un campo, se elimine el otro. Esto, con la eliminación lógica, se debe hacer de modo que el campo relacionado cambie a isdeleted:true al igual que el campo principal borrado.

- ENDPOINT MUCHOS A MUCHOS: Este endpoint se aplica de forma que se agreguen entre sí. En mi caso, movies a users, agrega películas a users mediante la id de movies y la id de users. Esto hace que se vinculen.


