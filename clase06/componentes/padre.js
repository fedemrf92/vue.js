Vue.component("padre", {
  template: `
  <div class="bg-warning p-5 text-white">
  <h1>Componente Padre:{{numeroVacio}}</h1>
  <hijo :numero="numeroVacio" @nombreHijo="nombrePadre = $event"></hijo>
  {{nombrePadre}}
  <button @click="numeroVacio++">+</button>
  </div>


  `,
  data() {
    return {
      numeroVacio: 0,
      nombrePadre: "",
    };
  },
});
