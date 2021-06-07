Vue.component("padre", {
  template: `
  <div class="bg-primary text-white p-5">
  <h2>Componente Padre: {{numeroVacio}}</h2>
  <hijo :numero="numeroVacio"></hijo>
  <button class="btn btn-dark" v-on:click="numeroVacio++">+</button>
  </div>

  `,
  data() {
    return {
      numeroVacio: 0,
    };
  },
});
