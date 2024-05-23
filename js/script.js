const ejercicio = parseInt(
  prompt("Ingrese 1 o 2 para ejecutar el ejercicio:", "")
);

switch (ejercicio) {
  case 1:
    // Ejercicio 1
    const distancia = parseInt(
      prompt("Ingrese la distancia que quiere recorrer:", "")
    );
    if (distancia >= 0 && distancia <= 1000) {
      document.write(
        `Ud deberia ir a pie, ya que recorrera ${distancia} metros`
      );
    } else if (distancia > 1000 && distancia <= 10000) {
      document.write(
        `Ud deberia ir en bicicleta, ya que recorrera ${distancia} metros`
      );
    } else if (distancia > 10000 && distancia <= 30000) {
      document.write(
        `Ud deberia ir en colectivo, ya que recorrera ${distancia} metros`
      );
    } else if (distancia > 30000 && distancia <= 100000) {
      document.write(
        `Ud deberia ir en auto, ya que recorrera ${distancia} metros`
      );
    } else {
      document.write(
        `Ud deberia ir en avion, ya que recorrera ${distancia} metros`
      );
    }
    break;
  case 2:
    let aux;
    let input;
    let cont = [];
    while (input !== "s") {
      input = prompt("ingrese numeros, cuando termine presione s:");
      if (input !== "s") {
        cont.push(Number(input));
      }
    }

    for (let i = 0; i < cont.length; i++) {
      if (i == 0 || cont[i] > aux) {
        aux = cont[i];
      }
    }
    document.write(`El mayor es ${aux}`);

    break;
}
