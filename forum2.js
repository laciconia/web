/* const miapp = Vue.createApp({
    //data: function (){}
    //una propiedad llamada data que tiene una funcion como valor
    data() {
      return {
        tasks: [],
        taskText: "", //conectaremos este valor con un elemento del html con una directiva v-
        margin_count: 0,
        margin_left: 3,
      };
    },
    //funciones que se pueden llamar desde el html
    methods: {
      addTask() {
        var task = {text: this.taskText, margin: this.margin_count};
        this.margin_count += 1;
        console.log(this.taskText);
        console.log(task);
        this.tasks.push(task);
        this.taskText = "";
      },
      listItemStyle: function(i) {
        var style = {};
        style.marginLeft = i + 'rem';
        return style;
      }
    },
  });

  miapp.mount("#app"); */

  let comment_tree = {
    name: 'root',
    comment: "Tinc acidesa d'estómac des del tercer mes. Què puc fer?",
    replies: [
      {
        name: 'Josefina ',
        comment: "Catherine Malabou (Sidi Bel Abbès, Algèria, 1 de gener del 1959)[1] és una filòsofa d'origen francès, actualment professora del departament de filosofia del Centre for Research in Modern European Philosophy de la Universitat de Kingston (Londres). Malabou es va graduar a l'École Normale Supérieure de Lettres et Sciences Humaines (a Fontenay-Saint-Cloud), amb una agrégation i doctorat supervisats per Jacques Derrida i Jean-Luc Marion a l'École des hautes études en sciences sociales. La seva tesi esdevingué el llibre L'Avenir de Hegel: Plasticité, Temporalité, Dialectique (1996). ",
        replies: [
          {
            name: 'Paleontòleg 1.1',
            comment:"Pelecanimimus polyodon (\"imitador de pelicà\") és una espècie de dinosaure ornitomimosaure que va viure al Cretaci inferior, fa entre 127 i 121 milions d'anys, en el que actualment és Conca, Espanya. Podia mesurar fins a 2,5 metres de longitud. Aquest dinosaure corredor era carnívor, presentava fins a 200 dents molt petites a les mandíbules, fet que el diferencia de la resta d'ornitomímids. Les restes fòssils trobades indiquen que tenia un petita cresta sobre el cap així com una bossa a la gola similar a la dels pelicans.",
            replies: []
          },
          {
            name: 'User 1.2',
            comment: "hola 1.2",
            replies: [
              {
                name: 'User 1.2.1',
                comment:'hola 1.2.1',
                replies: []
              }
            ]
          }
        ]
      }, 
      {
        name: 'User 2',
        comment: 'Sí 2',
        replies: [] 
      }
    ]
  }
  
  Vue.component('forum', { 
    props: [ 'replies', 'name', 'comment', 'depth' ],
    data() {
       return {
         new_comment: "",
         new_name: "",
         input_active: false,
       }
    },
    methods: {
      addComment() {
        console.log(this.replies);
        var reply = {name: this.new_name, comment: this.new_comment, replies: []};
        this.replies.push(reply);
        new_comment = "";
        new_name = "";
        this.input_active = false;
      },
      toggleInput() {
        this.input_active = !this.input_active;

      }
    },
    computed: {
      nameClasses() {
        return { 'has-children': this.replies.length > 0 }
      },
      indent() {
        //return { transform: `translate(${this.depth * 50}px)` }
        return { margin_left: `(this.depth*2)%` }
      }
    },
    template: '#forum',
  });
  
  new Vue({
    el: '#forum_app',
    data: {
      comment_tree
    }
  })