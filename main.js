/**
 Abrir la consola antes de ejecutar el codigo / sino en la segunda prueba se mostrara la ejecucion del codigo.
 Cree un archivo JS de nombre stock.js donde estan los objetos con sus respectivas propiedades que en este codigo se estan ejecutando.
 */

const reservas = []

alert("Bienvenido a: Home Recreation CAME HOUSE 🏡 \n Haz Click! en Aceptar para hacer su reserva 😇")

const mostrarHabitaciones = () => {

    const listado = habitaciones.map(habitacion => {
        return `- ${habitacion.tipo} - $ ${habitacion.precio} por noche. ✨`
    })
    crearReservaHabitacion(listado)
}

const crearReservaHabitacion = (listado) => {
    let nombre
    let apellido
    let habitacionTipo
    let nochesReserva
    let otraReserva

    do {
        nombre = prompt("Ingrese su Nombre:")
        apellido = prompt("Ingrese su Apellido:")

        while (nombre == "" || apellido == "" || !Number.isNaN(+nombre) || !Number.isNaN(+apellido)) {
            alert("Incorrecto:❌-> Necesitas completar el Nombre y el Apellido")
            nombre = prompt("Ingrese su nombre:")
            apellido = prompt("Ingrese su apellido:")
        }

        habitacionTipo = prompt("Bienvenido " + nombre + " " + apellido + " a: Home Recreation CAME HOUSE 🏡 " + " \n\n" + listado.join('\n') + "\n\n" +
            "Ingrese el nombre de la habitacion 🏡 a reservar:"
        )

        nochesReserva = parseInt(prompt("¿cuantas noches ✨ quiere reservar?"))

        const habitacion = habitaciones.find((habitacion) => {
            return habitacion.tipo.toLowerCase() === habitacionTipo.toLowerCase()
        })

        if (habitacion) {
            agregarReserva(habitacion, nochesReserva)
        } else {
            alert("La habitacion no se encuentra desponible ❌")
        }

        otraReserva = confirm("¿Desesa hacer otra reserva? 🏡")

    } while (otraReserva)

    finalizarReserva(reservas)
}

const agregarReserva = (habitacion, nochesReserva) => {
    if (nochesReserva === 1) {

        const codigoReserva = generarCodigoReserva()

        const nuevaReserva = {
            ...habitacion,
            codigoReserva: codigoReserva
        }
        reservas.push(nuevaReserva)
    } else {
        habitacion.noches = nochesReserva
        habitacion.precio = nochesReserva * habitacion.precio
        const codigoReserva = generarCodigoReserva()
        const nuevaReserva = {
            ...habitacion,
            codigoReserva: codigoReserva
        }
        reservas.push(nuevaReserva)
    }
    console.log(reservas)
}

const generarCodigoReserva = () => {
    let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
    let contrasenia = "";
    for (i = 0; i < 5; i++) contrasenia += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return contrasenia
}

const eliminarReserva = (codigoReserva) => {
    const index = reservas.findIndex(reserva => reserva.codigoReserva === codigoReserva)
    reservas.splice(index, 1)
    console.log(reservas)

    finalizarReserva(reservas)
}

const finalizarReserva = (reservas) => {
    console.table(reservas)
    const estaConfirmado = confirm("Para confirmar la reserva precione aceptar. ✔ \n Para eliminar una reserva precione cancelar. ❌")
    if (estaConfirmado) {
        alert("Su reserva fue realizado con exito! \n Gracias por visitar Come House 🏡😎")
    } else {
        /* En la consola se mostrara una tabla donde estara el codigo de reserva que se creo, con el cual el usuario podra eliminar la reserva que el queira. */  
        const codigoReserva = prompt("Ingrese el codigo de la reserva a eliminar.❌ \n Si no ingresa nada se eliminara la ultima reserva que hizo ⚠")
        eliminarReserva(codigoReserva)
    }
}

mostrarHabitaciones()