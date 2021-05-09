
let root = document.documentElement;
const sliderFont = Vue.createApp({
    data: function (){
      return {
        fontAdd: 10,
        realAdd: 0,
      };
    },
    // no va
    methods:{
      mostrarUrl(){return this.url;},
        updateFont()
        {
            this.realAdd = this.fontAdd - 10;
            console.log(this.realAdd); 
            
            root.style.setProperty('--text-multiplier', (1+this.realAdd/10))


        }
    }
    });

  sliderFont.mount("#font_slider");
  