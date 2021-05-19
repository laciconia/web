let threads = [{
  name: 'root',
  comment: "Tinc acidesa d'estómac des del tercer mes. Què puc fer?",
  score: 34,
  replies: [
    {
      name: 'Josefina ',
      comment: "Catherine Malabou (Sidi Bel Abbès, Algèria, 1 de gener del 1959)[1] és una filòsofa d'origen francès, actualment professora del departament de filosofia del Centre for Research in Modern European Philosophy de la Universitat de Kingston (Londres). Malabou es va graduar a l'École Normale Supérieure de Lettres et Sciences Humaines (a Fontenay-Saint-Cloud), amb una agrégation i doctorat supervisats per Jacques Derrida i Jean-Luc Marion a l'École des hautes études en sciences sociales. La seva tesi esdevingué el llibre L'Avenir de Hegel: Plasticité, Temporalité, Dialectique (1996). ",
      score: -5,
      replies: [
        {
          name: 'Paleontòleg 1.1',
          comment:"Pelecanimimus polyodon (\"imitador de pelicà\") és una espècie de dinosaure ornitomimosaure que va viure al Cretaci inferior, fa entre 127 i 121 milions d'anys, en el que actualment és Conca, Espanya. Podia mesurar fins a 2,5 metres de longitud. Aquest dinosaure corredor era carnívor, presentava fins a 200 dents molt petites a les mandíbules, fet que el diferencia de la resta d'ornitomímids. Les restes fòssils trobades indiquen que tenia un petita cresta sobre el cap així com una bossa a la gola similar a la dels pelicans.",
          score: 23,
          replies: []
        },
        {
          name: 'User 1.2',
          comment: "hola 1.2",
          score: 71,
          replies: [
            {
              name: 'User 1.2.1',
              comment:'hola 1.2.1',
              score: 0,
              replies: []
            }
          ]
        }
      ]
    }, 
    {
      name: 'User 2',
      comment: 'Sí 2',
      score: 0,
      replies: [] 
    }
  ]
}, {name: 'hola', comment: "aa", score: 0, replies: []}];


Vue.component('post', { 
  props: [ 'replies', 'name', 'comment', 'depth', 'score' ],
  data() {
      return {
        new_comment: "",
        new_name: "",
        input_active: false,
        liked: false,
        disliked: false,
      }
  },
  methods: {
    addComment() {
      console.log(this.replies);
      var reply = {name: this.new_name, comment: this.new_comment, score: 0, replies: []};
      this.replies.push(reply);
      new_comment = "";
      new_name = "";
      this.input_active = false;

    },
    toggleInput() {
      this.input_active = !this.input_active;

    },
    addLike() {
      if(this.liked)
      {
        this.liked = false;
        this.score -= 1;
      }
      else if(this.disliked)
      {
        this.liked = true;
        this.disliked = false;
        this.score += 2;
      }
      else
      {
        this.liked = true;
        this.score += 1;
      }
      
    },
    addDislike() {
      if(this.disliked)
      {
        this.disliked = false;
        this.score += 1;
      }
      else if(this.liked)
      {
        this.liked = false;
        this.disliked = true;
        this.score -= 2;
      }
      else
      {
        this.disliked = true;
        this.score -=1;
      }
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
  template: '#post',
});
  

new Vue({
    el: '#forum_app_global',
    data: {
      threads,
      new_name: "",
      new_comment: "",
    },
    methods: {
      new_thread() {
        var new_comment_tree = {name: this.new_name, comment: this.new_comment, score: 0, replies: []};
        threads.push(new_comment_tree);
      },
    },
  })