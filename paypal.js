// Paypal-JS
paypal
  .Buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: document.getElementById("txtMonto").value,
            },
          },
        ],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        const nombre = document.getElementById("txtNombre").value;
        alert(
          "Pago completado por " + nombre + "!" // details.payer.name.given_name | nombre
        );
        console.log(details);
      });
    },

    onCancel: function (data, actions) {
      const nombre = document.getElementById("txtNombre").value;
      alert("Acabas de cancelar el pago, gracias por visitarnos " + nombre);
      console.log(data);
    },
  })
  .render("#paypal-button-container");
