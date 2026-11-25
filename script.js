const INVENTARIO = [
  {
    id: 1,
    nombre: "Valvoline 15W-40 Mineral",
    marca: "Valvoline",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Mineral",
    precio: 9.50,
    imagen: "assets/img/aceite-valvoline-15w40-mineral.jpg"
  },
  {
    id: 2,
    nombre: "Valvoline 15W-40 Semisintético",
    marca: "Valvoline",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Semisintético",
    precio: 12.00,
    imagen: "assets/img/aceite-valvoline-15w40-semi.jpg"
  },
  {
    id: 3,
    nombre: "Valvoline 20W-50 Mineral",
    marca: "Valvoline",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Mineral",
    precio: 9.50,
    imagen: "assets/img/aceite-valvoline-20w50-mineral.jpg"
  },
  {
    id: 4,
    nombre: "Valvoline 20W-50 Semisintético",
    marca: "Valvoline",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Semisintético",
    precio: 12.50,
    imagen: "assets/img/aceite-valvoline-20w50-semi.jpg"
  },
  {
    id: 5,
    nombre: "Shell Helix Ultra 5W-40 Sintético",
    marca: "Shell",
    categoria: "aceite",
    viscosidad: "5W-40",
    tipo: "Sintético",
    precio: 16.00,
    imagen: "assets/img/aceite-shell-5w40-sintetico.jpg"
  },
  {
    id: 6,
    nombre: "Shell Helix Ultra 5W-30 Sintético",
    marca: "Shell",
    categoria: "aceite",
    viscosidad: "5W-30",
    tipo: "Sintético",
    precio: 15.50,
    imagen: "assets/img/aceite-shell-5w30-sintetico.jpg"
  },
  {
    id: 7,
    nombre: "Shell Helix HX7 10W-30 Semisintético",
    marca: "Shell",
    categoria: "aceite",
    viscosidad: "10W-30",
    tipo: "Semisintético",
    precio: 13.00,
    imagen: "assets/img/aceite-shell-10w30-semi.jpg"
  },
  {
    id: 8,
    nombre: "Shell Helix HX7 15W-50 Semisintético",
    marca: "Shell",
    categoria: "aceite",
    viscosidad: "15W-50",
    tipo: "Semisintético",
    precio: 13.50,
    imagen: "assets/img/aceite-shell-15w50-semi.jpg"
  },
  {
    id: 9,
    nombre: "Shell Helix HX5 15W-40 Mineral",
    marca: "Shell",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Mineral",
    precio: 10.00,
    imagen: "assets/img/aceite-shell-15w40-mineral.jpg"
  },
  {
    id: 10,
    nombre: "Shell Helix HX5 20W-50 Mineral",
    marca: "Shell",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Mineral",
    precio: 10.50,
    imagen: "assets/img/aceite-shell-20w50-mineral.jpg"
  },
  {
    id: 11,
    nombre: "ACDelco 20W-50 Mineral",
    marca: "ACDelco",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Mineral",
    precio: 9.00,
    imagen: "assets/img/aceite-acdelco-20w50-mineral.jpg"
  },
  {
    id: 12,
    nombre: "ACDelco 15W-40 Semisintético",
    marca: "ACDelco",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Semisintético",
    precio: 11.50,
    imagen: "assets/img/aceite-acdelco-15w40-semi.jpg"
  },
  {
    id: 13,
    nombre: "ACDelco 10W-30 Semisintético",
    marca: "ACDelco",
    categoria: "aceite",
    viscosidad: "10W-30",
    tipo: "Semisintético",
    precio: 12.00,
    imagen: "assets/img/aceite-acdelco-10w30-semi.jpg"
  },
  {
    id: 14,
    nombre: "LMV Opal 20W-50 Mineral",
    marca: "LMV",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Mineral",
    precio: 8.50,
    imagen: "assets/img/aceite-lmv-20w50-mineral.jpg"
  },
  {
    id: 15,
    nombre: "LMV Opal 15W-40 Mineral",
    marca: "LMV",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Mineral",
    precio: 8.50,
    imagen: "assets/img/aceite-lmv-15w40-mineral.jpg"
  },
  {
    id: 16,
    nombre: "LMV Diamond 20W-50 Semisintético",
    marca: "LMV",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Semisintético",
    precio: 10.50,
    imagen: "assets/img/aceite-lmv-20w50-semi.jpg"
  },
  {
    id: 17,
    nombre: "LMV Diamond 15W-40 Semisintético",
    marca: "LMV",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Semisintético",
    precio: 10.50,
    imagen: "assets/img/aceite-lmv-15w40-semi.jpg"
  },
  {
    id: 18,
    nombre: "Mobil Super 20W-50 Mineral",
    marca: "Mobil",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Mineral",
    precio: 10.50,
    imagen: "assets/img/aceite-mobil-20w50-mineral.jpg"
  },
  {
    id: 19,
    nombre: "Mobil Special 15W-40 Semisintético",
    marca: "Mobil",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Semisintético",
    precio: 12.50,
    imagen: "assets/img/aceite-mobil-15w40-semi.jpg"
  },
  {
    id: 20,
    nombre: "Mobil Super 10W-40 Semisintético",
    marca: "Mobil",
    categoria: "aceite",
    viscosidad: "10W-40",
    tipo: "Semisintético",
    precio: 13.00,
    imagen: "assets/img/aceite-mobil-10w40-semi.jpg"
  },
  {
    id: 21,
    nombre: "Inca 15W-40 Mineral",
    marca: "Inca",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Mineral",
    precio: 8.00,
    imagen: "assets/img/aceite-inca-15w40-mineral.jpg"
  },
  {
    id: 22,
    nombre: "Inca 20W-50 Mineral",
    marca: "Inca",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Mineral",
    precio: 8.00,
    imagen: "assets/img/aceite-inca-20w50-mineral.jpg"
  },
  {
    id: 23,
    nombre: "Inca 15W-40 Semisintético",
    marca: "Inca",
    categoria: "aceite",
    viscosidad: "15W-40",
    tipo: "Semisintético",
    precio: 9.50,
    imagen: "assets/img/aceite-inca-15w40-semi.jpg"
  },
  {
    id: 24,
    nombre: "Inca 20W-50 Semisintético",
    marca: "Inca",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Semisintético",
    precio: 9.50,
    imagen: "assets/img/aceite-inca-20w50-semi.jpg"
  },
  {
    id: 25,
    nombre: "Castrol GTX 20W-50 Mineral",
    marca: "Castrol",
    categoria: "aceite",
    viscosidad: "20W-50",
    tipo: "Mineral",
    precio: 11.00,
    imagen: "assets/img/aceite-castrol-20w50-mineral.jpg"
  },
  {
    id: 26,
    nombre: "Castrol Magnatec 10W-40 Semisintético",
    marca: "Castrol",
    categoria: "aceite",
    viscosidad: "10W-40",
    tipo: "Semisintético",
    precio: 14.00,
    imagen: "assets/img/aceite-castrol-10w40-semi.jpg"
  },
  {
    id: 27,
    nombre: "Castrol Magnatec 10W-30 Semisintético",
    marca: "Castrol",
    categoria: "aceite",
    viscosidad: "10W-30",
    tipo: "Semisintético",
    precio: 14.00,
    imagen: "assets/img/aceite-castrol-10w30-semi.jpg"
  },
  {
    id: 28,
    nombre: "Filtro A1 Filters AL-3593",
    marca: "A1 Filters",
    categoria: "filtro",
    viscosidad: "Estándar Asiático",
    tipo: "Línea Nissan / Honda / Kia",
    precio: 6.50,
    imagen: "assets/img/filtro-a1-al3593.jpg"
  },
  {
    id: 29,
    nombre: "Filtro MHW 51040 Rosca M18x1.5",
    marca: "MHW",
    categoria: "filtro",
    viscosidad: "Rosca M18x1.5",
    tipo: "Chevrolet Corsa / Aveo / Spark",
    precio: 5.50,
    imagen: "assets/img/filtro-mhw-51040.jpg"
  },
  {
    id: 30,
    nombre: "Filtro WIX 51348 Alto Rendimiento",
    marca: "Wix",
    categoria: "filtro",
    viscosidad: "Válvula Antidrenaje",
    tipo: "Toyota / Ford / Hyundai",
    precio: 7.50,
    imagen: "assets/img/filtro-wix-51348.jpg"
  }
];

const CLAVE_CARRITO = "relufil_carrito";
const CLAVE_USUARIO = "relufil_usuario_actual";
const CLAVE_USUARIOS_REGISTRADOS = "relufil_usuarios_registrados";
const NUMERO_WHATSAPP = "584247012239";

function obtenerCarrito() {
  const guardado = localStorage.getItem(CLAVE_CARRITO);
  return guardado ? JSON.parse(guardado) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
  actualizarContadorCarrito();
}

function obtenerUsuarioActual() {
  const guardado = localStorage.getItem(CLAVE_USUARIO);
  return guardado ? JSON.parse(guardado) : null;
}

function guardarUsuarioActual(usuario) {
  if (usuario) {
    localStorage.setItem(CLAVE_USUARIO, JSON.stringify(usuario));
  } else {
    localStorage.removeItem(CLAVE_USUARIO);
  }
  actualizarEstadoUsuarioNav();
}

function obtenerUsuariosRegistrados() {
  const guardado = localStorage.getItem(CLAVE_USUARIOS_REGISTRADOS);
  return guardado ? JSON.parse(guardado) : [];
}

function guardarUsuariosRegistrados(lista) {
  localStorage.setItem(CLAVE_USUARIOS_REGISTRADOS, JSON.stringify(lista));
}

function mostrarAviso(mensaje, tipo = "exito") {
  let aviso = document.getElementById("aviso-flotante");
  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "aviso-flotante";
    aviso.className = "aviso-flotante";
    document.body.appendChild(aviso);
  }
  aviso.textContent = mensaje;
  aviso.className = `aviso-flotante aviso-flotante--visible aviso-flotante--${tipo}`;
  setTimeout(() => {
    aviso.className = "aviso-flotante";
  }, 2800);
}

function actualizarContadorCarrito() {
  const contadores = document.querySelectorAll(".navegacion__contador-carrito");
  const carrito = obtenerCarrito();
  const totalArticulos = carrito.reduce((suma, item) => suma + item.cantidad, 0);
  contadores.forEach(c => {
    c.textContent = totalArticulos;
  });
}

function actualizarEstadoUsuarioNav() {
  const contenedor = document.getElementById("indicador-usuario-nav");
  if (!contenedor) return;
  const usuario = obtenerUsuarioActual();
  if (usuario) {
    contenedor.innerHTML = `
      <div class="navegacion__usuario">
        <span>Hola, <strong class="navegacion__usuario-nombre">${usuario.nombre}</strong></span>
        <button type="button" class="navegacion__usuario-salir" onclick="cerrarSesion()">Salir</button>
      </div>
    `;
  } else {
    contenedor.innerHTML = `
      <a href="cuenta.html" class="boton boton--secundario boton--pequeno">Ingresar</a>
    `;
  }
}

function cerrarSesion() {
  guardarUsuarioActual(null);
  mostrarAviso("Has cerrado sesión correctamente", "peligro");
  setTimeout(() => {
    window.location.reload();
  }, 800);
}

function agregarAlCarrito(idProducto) {
  const producto = INVENTARIO.find(p => p.id === idProducto);
  if (!producto) return;
  const carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === idProducto);
  if (index > -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      marca: producto.marca,
      viscosidad: producto.viscosidad,
      tipo: producto.tipo,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }
  guardarCarrito(carrito);
  mostrarAviso(`"${producto.nombre}" agregado al carrito`, "exito");
}

function modificarCantidad(idProducto, cambio) {
  let carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === idProducto);
  if (index > -1) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1);
    }
    guardarCarrito(carrito);
    renderizarCarrito();
  }
}

function eliminarDelCarrito(idProducto) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== idProducto);
  guardarCarrito(carrito);
  renderizarCarrito();
  mostrarAviso("Producto eliminado del carrito", "peligro");
}

function renderizarCatalogo(filtro = "todos") {
  const rejilla = document.getElementById("catalogo-rejilla");
  if (!rejilla) return;
  const productosFiltrados = INVENTARIO.filter(p => {
    if (filtro === "todos") return true;
    if (filtro === "aceites") return p.categoria === "aceite";
    if (filtro === "filtros") return p.categoria === "filtro";
    return p.marca.toLowerCase() === filtro.toLowerCase();
  });

  rejilla.innerHTML = productosFiltrados.map(p => `
    <article class="tarjeta-producto">
      <div class="tarjeta-producto__visual">
        <span class="tarjeta-producto__insignia ${p.categoria === 'filtro' ? 'tarjeta-producto__insignia--filtro' : ''}">
          ${p.viscosidad}
        </span>
        <img src="${p.imagen}" alt="${p.nombre}" class="tarjeta-producto__imagen" loading="lazy" onerror="this.onerror=null;this.src='assets/img/aceite-valvoline.jpg';">
      </div>
      <div class="tarjeta-producto__cuerpo">
        <span class="tarjeta-producto__marca">${p.marca}</span>
        <h3 class="tarjeta-producto__titulo">${p.nombre}</h3>
        <p class="tarjeta-producto__especificacion">${p.tipo}</p>
        <div class="tarjeta-producto__pie">
          <span class="tarjeta-producto__precio">$${p.precio.toFixed(2)}</span>
          <button type="button" class="boton boton--primario boton--pequeno" onclick="agregarAlCarrito(${p.id})">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderizarCarrito() {
  const contenedor = document.getElementById("contenedor-carrito");
  if (!contenedor) return;
  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="carrito-vacio">
        <h2 class="carrito-vacio__titulo">Tu carrito está vacío</h2>
        <p class="carrito-vacio__texto">Explora nuestro catálogo para añadir aceites y filtros para tu motor.</p>
        <a href="productos.html" class="boton boton--primario">Ir al Catálogo</a>
      </div>
    `;
    return;
  }

  const subtotal = carrito.reduce((suma, item) => suma + (item.precio * item.cantidad), 0);
  const impuesto = subtotal * 0.16;
  const total = subtotal + impuesto;

  contenedor.innerHTML = `
    <div class="carrito-bloque">
      <div class="carrito-tabla-contenedor">
        <table class="carrito-tabla">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            ${carrito.map(item => `
              <tr>
                <td>
                  <div class="carrito-articulo__titulo">${item.nombre}</div>
                  <div class="carrito-articulo__especificacion">${item.marca} - ${item.viscosidad}</div>
                </td>
                <td>$${item.precio.toFixed(2)}</td>
                <td>
                  <div class="carrito-control-cantidad">
                    <button type="button" class="carrito-control-cantidad__boton" onclick="modificarCantidad(${item.id}, -1)">-</button>
                    <span class="carrito-control-cantidad__valor">${item.cantidad}</span>
                    <button type="button" class="carrito-control-cantidad__boton" onclick="modificarCantidad(${item.id}, 1)">+</button>
                  </div>
                </td>
                <td><strong>$${(item.precio * item.cantidad).toFixed(2)}</strong></td>
                <td>
                  <button type="button" class="boton boton--peligro" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <aside class="carrito-resumen">
        <h2 class="carrito-resumen__titulo">Resumen del Pedido</h2>
        <div class="carrito-resumen__fila">
          <span>Subtotal:</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="carrito-resumen__fila">
          <span>IVA simulado (16%):</span>
          <span>$${impuesto.toFixed(2)}</span>
        </div>
        <div class="carrito-resumen__fila carrito-resumen__fila--total">
          <span>Total a Pagar:</span>
          <span>$${total.toFixed(2)}</span>
        </div>

        <button type="button" class="boton boton--whatsapp boton--ancho-completo boton--grande carrito-resumen__boton-whatsapp" onclick="procesarPedidoWhatsApp()">
          Confirmar y Enviar Pedido a WhatsApp
        </button>
      </aside>
    </div>
  `;
}

function procesarPedidoWhatsApp() {
  const usuario = obtenerUsuarioActual();
  if (!usuario) {
    mostrarAviso("Debes iniciar sesión para confirmar tu pedido", "peligro");
    setTimeout(() => {
      window.location.href = "cuenta.html";
    }, 1200);
    return;
  }

  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    mostrarAviso("Tu carrito está vacío", "peligro");
    return;
  }

  const subtotal = carrito.reduce((suma, item) => suma + (item.precio * item.cantidad), 0);
  const impuesto = subtotal * 0.16;
  const total = subtotal + impuesto;

  let textoMensaje = `¡Hola RELUFIL C.A.! Mi nombre es *${usuario.nombre}* (${usuario.correo}).\n\n`;
  textoMensaje += `Deseo confirmar el siguiente pedido desde el sitio web:\n`;
  carrito.forEach((item, index) => {
    textoMensaje += `${index + 1}. *${item.nombre}* x ${item.cantidad} und. ($${(item.precio * item.cantidad).toFixed(2)})\n`;
  });
  textoMensaje += `\n*Subtotal:* $${subtotal.toFixed(2)}`;
  textoMensaje += `\n*IVA (16%):* $${impuesto.toFixed(2)}`;
  textoMensaje += `\n*Total a pagar:* $${total.toFixed(2)}`;
  textoMensaje += `\n\nQuedo atento a la confirmación de disponibilidad y métodos de pago.`;

  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(textoMensaje)}`;
  window.open(urlWhatsApp, "_blank");
}

function inicializarPestanasAutenticacion() {
  const pestanaIngreso = document.getElementById("pestana-ingreso");
  const pestanaRegistro = document.getElementById("pestana-registro");
  const formularioIngreso = document.getElementById("formulario-ingreso");
  const formularioRegistro = document.getElementById("formulario-registro");

  if (!pestanaIngreso || !pestanaRegistro) return;

  pestanaIngreso.addEventListener("click", () => {
    pestanaIngreso.classList.add("autenticacion__pestana--activa");
    pestanaRegistro.classList.remove("autenticacion__pestana--activa");
    formularioIngreso.classList.add("autenticacion__formulario--activo");
    formularioRegistro.classList.remove("autenticacion__formulario--activo");
  });

  pestanaRegistro.addEventListener("click", () => {
    pestanaRegistro.classList.add("autenticacion__pestana--activa");
    pestanaIngreso.classList.remove("autenticacion__pestana--activa");
    formularioRegistro.classList.add("autenticacion__formulario--activo");
    formularioIngreso.classList.remove("autenticacion__formulario--activo");
  });

  if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("registro-nombre").value.trim();
      const correo = document.getElementById("registro-correo").value.trim().toLowerCase();
      const clave = document.getElementById("registro-clave").value;

      if (!nombre || !correo || !clave) {
        mostrarAviso("Por favor completa todos los campos", "peligro");
        return;
      }

      const usuarios = obtenerUsuariosRegistrados();
      const existe = usuarios.find(u => u.correo === correo);
      if (existe) {
        mostrarAviso("Este correo ya se encuentra registrado", "peligro");
        return;
      }

      const nuevoUsuario = { nombre, correo, clave };
      usuarios.push(nuevoUsuario);
      guardarUsuariosRegistrados(usuarios);
      guardarUsuarioActual({ nombre, correo });
      mostrarAviso(`¡Registro exitoso! Bienvenido ${nombre}`, "exito");
      setTimeout(() => {
        window.location.href = "productos.html";
      }, 1000);
    });
  }

  if (formularioIngreso) {
    formularioIngreso.addEventListener("submit", (e) => {
      e.preventDefault();
      const correo = document.getElementById("ingreso-correo").value.trim().toLowerCase();
      const clave = document.getElementById("ingreso-clave").value;

      const usuarios = obtenerUsuariosRegistrados();
      const coincidencia = usuarios.find(u => u.correo === correo && u.clave === clave);

      if (coincidencia) {
        guardarUsuarioActual({ nombre: coincidencia.nombre, correo: coincidencia.correo });
        mostrarAviso(`Bienvenido de nuevo, ${coincidencia.nombre}`, "exito");
        setTimeout(() => {
          const carrito = obtenerCarrito();
          if (carrito.length > 0) {
            window.location.href = "carrito.html";
          } else {
            window.location.href = "productos.html";
          }
        }, 1000);
      } else {
        mostrarAviso("Correo o contraseña incorrectos", "peligro");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContadorCarrito();
  actualizarEstadoUsuarioNav();

  if (document.getElementById("catalogo-rejilla")) {
    renderizarCatalogo("todos");

    const botonesFiltro = document.querySelectorAll(".catalogo__filtro-boton");
    botonesFiltro.forEach(boton => {
      boton.addEventListener("click", () => {
        botonesFiltro.forEach(b => b.classList.remove("catalogo__filtro-boton--activo"));
        boton.classList.add("catalogo__filtro-boton--activo");
        const filtro = boton.getAttribute("data-filtro");
        renderizarCatalogo(filtro);
      });
    });
  }

  if (document.getElementById("contenedor-carrito")) {
    renderizarCarrito();
  }

  if (document.getElementById("pestana-ingreso")) {
    inicializarPestanasAutenticacion();
  }
});
