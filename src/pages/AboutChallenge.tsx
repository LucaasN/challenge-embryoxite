import { Grid2 } from "@mui/material";
export const AboutChallenge: React.FC = () => {
  return (
    <Grid2 container spacing={2} offset={{ md: 2 }}>
      <Grid2 size={8} offset={{ md: 2 }}>
        <h1 className="text-center">Desafío React - Embryoxite</h1>
        <p>
          Construir una aplicación en React y, preferiblemente, TypeScript que
          permita mostrar un árbol con datos almacenados en localStorage.
          También debe permitir agregar y eliminar elementos del árbol en
          cualquier nodo.
        </p>

        <label>Para esto crear:</label>
        <ul>
          <li>
            Un componente Tree que reciba una propiedad title con el nombre del
            árbol, otra value con un JSON con la definición del árbol, otra
            propiedad onChange a la que se invoque con el nuevo JSON en caso de
            que se agregue o elimine un nodo del árbol y una más editable que
            indique si el componente está en modo edición o en modo vista. En
            modo vista (editable = false), este componente debe mostrar los
            datos en forma de árbol (puede ser usando elementos ul y li). El
            valor de title se debe mostrar como raíz del árbol. En modo edición,
            por cada nodo, debe mostrar un botón para agregarle un hijo y otro
            para eliminar ese nodo. En la raíz del árbol se debe mostrar solo el
            botón para agregar hijos. Al apretar el botón de agregar un hijo se
            debe desplegar un pequeño formulario debajo de ese nodo con un campo
            de texto, un botón para aceptar y otro de cancelar. Este formulario
            debe validar que el campo de texto no quede vacío. Se pueden usar
            componentes de Material UI (mui) para el campo de texto y los
            botones (los botones íconos quedan lindos)
          </li>
          <li>
            Un servicio que se encargue de consultar y actualizar los datos en
            localStorage.
          </li>
          <li>
            Una página donde aparezca el árbol y que se encargue de pasarle las
            propiedades de title, value, onChange y editable. El valor de
            editable se debe controlar con un componente tipo switch desde esa
            misma página.
          </li>
        </ul>

        <label>Entrega</label>
        <ul>
          <li>
            Armar un repositorio en GitHub y darme acceso con el usuario
            mscovotti@gmail.com o directamente dejarlo público.
          </li>
          <li>
            Escribir un README con las instrucciones para la instalación, uso y
            cualquier otra documentación necesaria.
          </li>
          <li>
            (Totalmente opcional) Si estás con ganas podés desplegar la
            aplicación en servicios como Vercel, Netlify o similar para verla
            funcionando.
          </li>
        </ul>

        <label>Algunas ideas de cómo resolver el desafío:</label>
        <ul>
          <li>
            La forma natural de armar un árbol es usando recursividad. Me
            imagino que el componente Tree debería armar una lista ul para la
            raíz del árbol donde a cada hijo le corresponda su elemento li y
            cada uno de estos tenga, a su vez otra ul para sus propios hijos (si
            los hubiera) y así sucesivamente.
          </li>
          <li>
            Creo que cada li (con su respectiva ul de hijos) debería manejarse
            en un componente Tree.Node o algo por el estilo.
          </li>
          <li>
            El componente raíz debería tener las funciones para manejar la
            creación y eliminación de los nodos. Para hacer que los nodos
            anidados a cualquier nivel tengan acceso a esas funciones, se podría
            usar un ContextProvider en el componente Tree. Supongo que una
            optimización que se puede hacer es memoizar las funciones que se
            agregen al ContextProvider para que el contexto no cambie
            modificación del árbol (ver si esto tiene sentido).
          </li>
          <li>
            El árbol debería guardarse en localStorage en formato JSON con una
            estructura algo así como:
          </li>
          <img src="/arbol-json.png" alt="arbol json" />
          <li>
            Éstas recomendaciones son las que se me ocurrieron en un primer
            análisis. Si te parece que hay mejores soluciones, dale para
            adelante.
          </li>
          <li>
            Si no se entiende algo del enunciado, mandame un mail y lo vemos.
          </li>
          <li>
            Si tenés alguna duda de cómo resolver algo, en principio tratá de
            usar tu criterio para elegir la mejor solución y luego tratá de
            documentar la decisión de diseño que hayas tomado.
          </li>
        </ul>

        <label>Requerimientos opcionales</label>
        <p>
          Por si te quedaste manija y estás con ganas de seguir agregando cosas,
          podés implementar algo de esta lista
        </p>
        <ul>
          <li>
            Agregar notificaciones con Snackbar confirmando cuando se agrega o
            elimina un nodo.
          </li>
          <li>
            Que cada nodo del árbol pueda ser colapsable. Para esto agregar un
            nuevo ícono antes del texto en cada nodo que muestre un botón ícono
            “+” para desplegar el contenido (si está colapsado) o un “-” para
            colapsarlo (si está desplegado). El primer nivel del árbol (los
            hijos de la raíz) no se colapsan
          </li>
          <li>
            Agregar un desplegar/colapsar todo que básicamente despliegue o
            colapse cada uno de los hijos de la raíz y todos sus nodos anidados.
          </li>
          <li>
            Cualquier otra cosa que quieras agregar que te parezca importante
            para el componente Tree
          </li>
          <li>
            Usar React Router de manera que la app tenga un layout con un
            pequeño menú donde una opción sea la página con el árbol y la otra
            muestre solo una página estática con texto de ejemplo (Lorem Ipsum)
          </li>
          <li>Agregar pruebas E2E con Cypress.</li>
          <li>Mostrar el componente Tree en Storybook.</li>
        </ul>
      </Grid2>
    </Grid2>
  );
};
