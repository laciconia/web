
const app = Vue.createApp({
  data: function (){
    return {
      mensaje1: 'Hello world',
      mensaje2: 'Mi primer programa con',
      jsF: 'Vue', url: 'https://vuejs.org'
    };
  },
  // no va
  methods:{
    mostrarUrl(){return this.url;},
    textoRandom(){
      var number = Math.floor(Math.random()*3)
      switch(number){
      case 0: return this.mensaje1;
      case 1: return this.mensaje2;
      case 2: return this.jsF;
      }
    }
  }
  });
app.mount("#app");


