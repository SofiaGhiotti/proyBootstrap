let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

console.log("El usuario es: " + nombre + apellido);

alert("El usuario es: " + nombre + apellido);

let productos = [
    ["Palta", 400, 0],
    ["Patita", 350, 0],
    ["Mascotas", 400, 0],
];

function agregarElementoAlCarrito(i) {
    productos[i][2]++;

    alert(`Seleccionó: 
                   - ${productos[0][0]}  $${productos[0][1]}  cantidad ${productos[0][2]}  total ${productos[0][1] * productos[0][2]}
                   - ${productos[1][0]}  $${productos[1][1]}  cantidad ${productos[1][2]}  total ${productos[1][1] * productos[1][2]}
                   - ${productos[2][0]}  $${productos[2][1]}  cantidad ${productos[2][2]}  total ${productos[2][1] * productos[2][2]}
                    `);
}

function mediosDePago(monto) {
    let montoTotal;
    let medioDePago = parseInt(prompt(`1.Cuota 2.transferencia `));

    if (medioDePago === 1) {
        let cuota = parseInt(promtp(`Cuantas cuotas desea 3, 6 o 12`));

        if (cuota === 3) {
            montoTotal = monto / 3;
        } else if (cuota === 6) {
            montoTotal = monto / 6;
        } else if (cuota === 12) {
            montoTotal = monto / 12;
        }

        return montoTotal;
    } else if (medioDePago === 2) {
        return (montoTotal = monto);
    }
}
