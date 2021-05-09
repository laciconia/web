const slider = Vue.createApp({
    data: function () {
        return { setmana: 1};
    },
    methods: {
        changeSlide: function () {
            console.log(this.setmana); //Això imprimeix el número del slider correctament
            $('#carousel').carousel(Number(this.setmana)-1); //Això funciona
        }
    },
})

slider.mount("#count_slider");
