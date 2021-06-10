const app = new Vue({
  el: "#data",
  data: {
    frutas: [
      { nombre: "Banana", cantidad: 10 },
      { nombre: "Manzana", cantidad: 0 },
      { nombre: "Kiwi", cantidad: 15 },
    ],
    nuevaFruta: "",
    total: 0,
  },
  methods: {
    agregarFruta() {
      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: Math.round(Math.random() * 100),
      });
      this.nuevaFruta = "";
    },
  },
  computed: {
    sumarFrutas() {
      (this.total = 0),
        this.frutas.forEach((fruta) => {
          this.total = this.total + fruta.cantidad;
        });
      return this.total;
    },
  },
});
