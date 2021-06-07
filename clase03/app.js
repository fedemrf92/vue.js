const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola soy Federico",
    contador: 0,
  },
  computed: {
    cambiarColor() {
      return {
        "bg-warning": this.contador <= 10,
        "bg-primary": this.contador > 10 && this.contador <= 20,
        "bg-dark": this.contador > 20,
      };
    },
  },
});
