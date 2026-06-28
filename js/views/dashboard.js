function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

export function renderDashboard() {
    const main = document.querySelector(".main");

    const banner = createElement("div", "banner");
    const toolbar = createElement("div", "toolbar");
    const table = createElement("div", "table");


    banner.innerHTML = `
        <img src="assets/images/2d.png" alt="">
    `;

    toolbar.innerHTML = `

            <label for="search" hidden>Ingresa el producto a buscar</label>
            <input type="search" id="search" placeholder="Buscar Productos">

            <div class="toolbar-actions">
                <label for="file" hidden>Importar lista</label>
                <input type="file" id="file" placeholder="Importar lista">
                <button>Agregar Producto</button>
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
            <td>2</td>
            <td>kg</td>
            <td>₡1 250</td>
            <td>0%</td>
            <td>₡2 825</td>
            <td>
              <button class="btn-edit" aria-label="Editar">✏️</button>
              <button class="btn-delete" aria-label="Eliminar">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Arroz</td>
            <td>Granos</td>
            <td>Tío pelón</td>
            <td>2</td>
            <td>kg</td>
            <td>₡1 250</td>
            <td>0%</td>
            <td>₡2 825</td>
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

