document.addEventListener("DOMContentLoaded", function () {
  const cantidadS = document.querySelector("#cantidad");
  const valorInicialS = document.querySelector("#valor-inicial");
  const totalP = document.querySelector("#total");
  const btnsuma = document.querySelector("#suma");
  const btnresta = document.querySelector("#resta");

  let cantidad = 0;
  const valorInicial = parseFloat(valorInicialS.innerHTML);

  function MostrarTotal() {
    const total = cantidad * valorInicial;
    totalP.innerHTML = total;
  }

  btnsuma.addEventListener("click", function () {
    cantidad++;
    cantidadS.innerHTML = cantidad;
    MostrarTotal();
  });

  btnresta.addEventListener("click", function () {
    if (cantidad > 0) {
      cantidad--;
      cantidadS.innerHTML = cantidad;
      MostrarTotal();
    }
  });
});

