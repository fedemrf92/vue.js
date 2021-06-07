Vue.component("hijo", {
  template: `
    <div>
    
    
    <button @click="$store.commit('aumentar')">+</button>
    <h1>numero {{$store.state.numero}}</h1>
    </div>
    
    
    
    `,
});
