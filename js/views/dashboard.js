import { createElement } from "../utils/createElement.js";

export function renderDashboard() {

  const main = document.querySelector(".main");

  const banner = createElement("div", {
    className: "banner",
  });

  const toolbar = createElement("div", {
    className: "toolbar",
  });

  const table = createElement("div", {
    className: "table",
  });



  banner.innerHTML = `
        <img src="assets/images/banner.png" alt="Image with items from a supermarket">
        `;

  toolbar.innerHTML = `

    <label for="search" hidden>Ingresa el producto a buscar</label>
    <input type="search" id="search" placeholder="Buscar Productos">

    <div class="toolbar-actions">
        <label for="file" hidden>Importar lista</label>
        <input type="file" id="file" placeholder="Importar lista">
        <button id="openModal" popovertarget="myModal">Agregar Producto</button>

        <dialog id="myModal" popover>

          <header class="modal-header">
            <h2>Agregar Producto</h2>
            <button id="closeModal" type="button" popovertarget="myModal" popovertargetaction="hide">&times;</button>
          </header>

          <form class="modal-form">

            <section class="modal-section">

              <h3>Información General</h3>

              <div class="field-row">

                <input id="nombre" type="text" placeholder="Nombre del producto">

                <input id="marca" type="text" placeholder="Marca">

              </div>

              <div class="field-row">

                <select id="categoria" name="categoria" required>
                  <option value="" selected disabled>Seleccione una categoría</option>
                  <option value="granos">Granos</option>
                  <option value="lacteos">Lácteos</option>
                  <option value="carnes">Carnes</option>
                  <option value="embutidos">Embutidos</option>
                  <option value="frutas">Frutas</option>
                  <option value="vegetales">Vegetales</option>
                  <option value="panaderia">Panadería</option>
                  <option value="bebidas">Bebidas</option>
                  <option value="congelados">Congelados</option>
                  <option value="limpieza">Limpieza</option>
                  <option value="higiene">Higiene Personal</option>
                  <option value="mascotas">Mascotas</option>
                  <option value="otros">Otros</option>
                </select>


                <select id="unidad" name="unidad" required>
                  <option value="" selected disabled>Seleccione una unidad</option>

                    <optgroup label="Peso">
                      <option value="g">Gramos (g)</option>
                      <option value="kg">Kilogramos (kg)</option>
                    </optgroup>

                    <optgroup label="Volumen">
                      <option value="ml">Mililitros (ml)</option>
                      <option value="l">Litros (L)</option>
                    </optgroup>

                    <optgroup label="Cantidad">
                      <option value="unidad">Unidad (und)</option>
                      <option value="paq">Paquete</option>
                      <option value="caja">Caja</option>
                      <option value="bolsa">Bolsa</option>
                      <option value="botella">Botella</option>
                      <option value="lata">Lata</option>
                      <option value="frasco">Frasco</option>
                      <option value="docena">Docena</option>
                    </optgroup>
                  </select>

              </div>

            </section>

            <section class="modal-section">

              <h3>Inventario</h3>

              <div class="field-row inventario-inputs">

                <input id="cantidad" type="number" placeholder="Cantidad">

                <input id="precio" type="number" placeholder="Precio">

                <input id="impuesto" type="number" placeholder="IVA %">

              </div>

            </section>

            <section class="modal-summary">

              <span>Total estimado</span>

              <strong>₡0.00</strong>

            </section>

            <footer class="modal-footer">

              <button type="button" popovertarget="myModal" popovertargetaction="hide">

                Cancelar

              </button>

              <button type="submit">

                Agregar Producto

              </button>

            </footer>

          </form>

        </dialog>
    </div>
    `;

  table.innerHTML = `
      <section class="inventory-table">
        <h2>Lista de productos</h2>

        <table class="table-cells">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Unidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Impuesto</th>
                    <th scope="col">Total</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody id="inventory-body">
                <tr>
                    <td>0</td>
                    <td>Arroz</td>
                    <td>Granos</td>
                    <td>Tío pelón</td>
                    <td>5</td>
                    <td>kg</td>
                    <td>₡1 250</td>
                    <td>0%</td>
                    <td>₡6 250</td>
                    <td>
                        <button class="btn-edit" aria-label="Editar">✏️</button>
                        <button class="btn-delete" aria-label="Eliminar">🗑️</button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tomate</td>
                    <td>Frutas y Verduras</td>
                    <td>N/A</td>
                    <td>2</td>
                    <td>kg</td>
                    <td>₡800</td>
                    <td>0%</td>
                    <td>₡1 600</td>
                    <td>
                        <button class="btn-edit" aria-label="Editar">✏️</button>
                        <button class="btn-delete" aria-label="Eliminar">🗑️</button>
                    </td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="7"><strong>Total Inventario</strong></td>
                    <td id="grand-total">₡0</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
      </section>
        `;

  main.append(banner, toolbar, table);
}


