const slider = Vue.createApp({
    data: function () {
        return { setmana: 1};
    },
    methods: {
        changeSlide: function () {
            //console.log(this.setmana); //Això imprimeix el número del slider correctament
            $('#carousel').carousel(Number(this.setmana)-1); //Això funciona
        },
        nextSlider(){
            this.setmana = (this.setmana) % 40 + 1;
            console.log(this.setmana);
            //var x = document.getElementById("setmanaSlider")
        },
        prevSlider(){
            this.setmana -= 1;
            if(this.setmana == 0)
            {
                this.setmana = 40;
            }
            console.log(this.setmana);
        },
    },
    
})

slider.mount("#main_slider");
