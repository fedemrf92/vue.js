Vue.component("hijo", {
  template: `
  <div class="p-5 bg-warning text-white">
  <h4>Componente Hijo</h4>
  <h5>{{numero}}</h5>
  
  </div>
  
  `,
  props: ["numero"],
});
