Vue.component("titulo", {
  template: `
    <div>
<h1>numero {{numero}}</h1>
<hijo></hijo>
    </div>
    `,
  computed: {
    numero() {
      return store.state.numero;
    },
  },
});
