const slider = Vue.createApp({
    data: function(){
        return{ setmana: 1};
    },
    methods: {
        changeSlide: function() {
            console.log(this.setmana); //Això imprimeix el número del slider correctament
            $('#carousel').carousel(2); //Això funciona
            //$('#carousel').carousel(this.setmana); //PERÒ PER ALGUN MOTIU AIXÒ NO
        }
    },
  })

slider.mount("#count_slider");
