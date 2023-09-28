let llista1 = ["Paris", "Londres", "Roma", "Berlin", "Copenhaguen", "Viena", "Lisboa", "WashingtonDC", "Otawa", "L'Havana", "Santiago", "Lima", "Montevideo", "Canberra", "Wellington", "Monròvia", "Abuja", "Dakar", "Tunis", "Tokyo", "Seül", "Beijing", "Taipei"];
let llista2 = ["França", "UK", "Itàlia", "Alemanya", "Dinamarca", "Àustria", "Portugal", "USA", "Canada", "Cuba", "Xile", "Perú", "Uruguay", "Austràlia", "Nova Zelanda", "Libèria", "Nigèria", "Senegal", "Tunísia", "Japó", "Corea_Sud", "Xina", "Taiwan"];
let llista3 = ["Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Oceania", "Oceania", "Àfrica", "Àfrica", "Àfrica", "Àfrica", "Àsia", "Àsia", "Àsia"];

function random() {
    let ran1 = llista1[Math.floor(Math.random() * llista1.length)];
    let ran2 = llista2[Math.floor(Math.random() * llista2.length)];
    let ran3 = llista3[Math.floor(Math.random() * llista3.length)];

    return [ran1, ran2, ran3];
}

function creaTabla() {
    let cantidadPaises = document.getElementById("cantidad");
    let cantidad = (cantidadPaises.value)*1;
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = '<tr><th>Capital</th><th>País</th><th>Continente</th></tr>';

    for (let i = 0; i < cantidad; i++) {
        let data = random();
        let row = tabla.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.textContent = data[0];
        cell2.textContent = data[1];
        cell3.textContent = data[2];
    }
}

function esborra() {
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = '<tr><th>Capital</th><th>País</th><th>Continente</th></tr>';
}