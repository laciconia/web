
const micalculadora = Vue.createApp({
    data: function (){
      return {
        mensaje1: 'Data de l´última menstruació',
        mensaje2: 'Mi primer programa con',
        jsF: 'Vue', url: 'https://vuejs.org',
        date: '',
        mostrarResultat: false,
        setmana: 0,
        infoSetmana: '',
        mesura: 0,
        pes: 0,
        mostrarExtra: false,
        seleccio: 'menstruacio',
      };
    },
    mounted: function() {
        var self = this;
        $('#datepicker').datepicker({
            dateFormat: 'dd-mm-yy',
            onSelect:function(selectedDate, datePicker) {            
                self.date = selectedDate;
            }
        });
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
      },
      computeData(){
         //var data = new Date(this.date);
         //return new Date(this.date) + 7;
         var parts =this.date.split('-');
         // els mesos van amb -1 perk comença del 0
         var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
         return mydate;
      },
      checkValidDate(){
        if(this.date == '')
        {
          return false;
        }
        return true;
      },
      calcular(){
        var x = document.getElementById("alertaData");
        if(!(this.checkValidDate()))
        {
          x.style.display = "inline";
          return;
        }
        else
        {
          x.style.display = "none";
        }
        var avui = new Date();
        var parts =this.date.split('-');
        var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
        var diff =(avui.getTime() - mydate.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        switch(this.seleccio){
          case "menstruacio":
            this.setmana = Math.round(diff) - 2;
            break;
          case "part":
            this.setmana = 40 + Math.round(diff);
            break;
          case "concepcio":
            this.setmana = Math.round(diff);
            break;
        }

        if (this.setmana < 0) {
          x.style.display = "inline";
          return;
        } else {x.style.display = "none";}

        if(this.setmana <= 0)
        {
          this.setmana = 1;
        }
        this.setmana = Math.min(50,this.setmana);

        if(this.setmana <= 0){
          this.pes = 0;
          this.altura = 0;
          this.infoSetmana = 'el bebè encara és molt petit, molts ànims amb l´embaràs, segur que sortirà moníssim :D.'
        } else{
          this.infoSetmana = 'el teu bebè està content :D. Aquesta és una setmana de canvis així que preocupat de tú mateixa i la teva salut mental. Et recomanem que facis una mica de ioga i parlis amb el teb fill, per que comenci a acostumar-se a la teva veu. Bona sort!';
          this.pes = Math.round(Math.exp(this.setmana/10) / 15 * 1000);
          this.mesura = Math.round(5033/40*this.setmana + 100 * Math.random()) / 100;
          if(this.setmana >= 50) {this.infoSetmana = 'el bebè està molt crescut, la veritat és que hauries d´anar al metge perquè això no és normal';}
        }
        this.mostrarResultat = 1;
      },
      updateMessage(){
        switch(this.seleccio){
          case "menstruacio":
            this.mensaje1="Data de l'última menstruació";
            return;
          case "part":
            this.mensaje1="Data del part";
            return;
          case "concepcio":
            this.mensaje1="Data la concepció";
            return;
        }
      }
    },

    computed:{
        calcula: function(){
            if (this.date == '')
            {
                return '';
            }
            else
            {
                var parts = this.date.split('-');
                var new_date = new Date(parts[2], parts[1] - 1, parts[0]);
                new_date.setDate(new_date.getDate() + 7);
                return new_date.toDateString();
            }
        },
        checkError: function(){
        }
    }
});

micalculadora.mount('#calculadorapes');
  
  
  