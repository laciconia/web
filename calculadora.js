
const micalculadora = Vue.createApp({
    data: function (){
      return {
        mensaje1: 'Hello world',
        mensaje2: 'Mi primer programa con',
        jsF: 'Vue', url: 'https://vuejs.org',
        date: '',
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
         var parts =date.split('-');
         // els mesos van amb -1 perk comença del 0
         var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
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
  
  
  