Vue.component("hijo", {
  template: `
  <div class="bg-dark p-5 text-white">
  <h3>Componente Hijo: {{numero}}</h3>
  <h4>Nombre:{{nombre}}</h4>
  
  </div>
  `,
  props: ["numero"],
  data() {
    return {
      nombre: "Federico",
    };
  },
  mounted() {
    this.$emit("nombreHijo", this.nombre);
  },
});
