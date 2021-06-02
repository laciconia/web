let threads = [{
  name: 'Helena Vic',
  comment: "Tinc acidesa d'estómac des del tercer mes. Què puc fer?",
  score: 34,
  replies: [
    {
      name: 'Josefina ',
      comment: "Et recomano que miris aquesta web: remediosparalaacidez.com a mí em va anar perfecte.",
      score: 19,
      replies: [
        {
          name: 'Estrella Delfín Mamento',
          comment:"Super buena web esa! A mí me ha salvado de más de un apuro y además son todo remedios naturales, es buenisima!",
          score: 4,
          replies: []
        },
        {
          name: 'Josefina',
          comment: "Me alegro cariño, de verdad que en este foro sois todas majísimas!",
          score: 12,
          replies: [
            {
              name: 'Helena Vic',
              comment:'Muchas gràcias a ambas! Ahora mismo lo probaré. Besos!',
              score: 0,
              replies: []
            }
          ]
        }
      ]
    }, 
    {
      name: 'Miquel',
      comment: 'La acidez te viene de comer tanta fabada, esto con una copita de whiskey se te pasa',
      score: 0,
      replies: [] 
    }
  ]
}, 

{name: 'Juana Maria', comment: "Ei chicas algún consejo para abortar ràpido?", score: 0, replies: []},

{
  name: 'Estrella Debarriga',
  comment: 'Hola, yo y mi marido Francisco Fuertes estabamos pensando ponerle a nuestra hija de nombre Dolores pero no nos acaba de convencer, alguna idea para poner nombres?',
  score: 12,
  replies: [
    {
    name: 'Los del grupo 4',
    comment: 'A nosotras la verdad es que nos encanta el nombre de Inmaculada, es muy bonito y tiene mucha fuerza!',
    score: 1234,
    replies: [] 
  }, {
    name: 'Ana Boueles',
    comment: 'Por favor, pensad esto bien, no hagáis como mis padres ;_;',
    score: 312,
    replies: [] 
  }, {
    name: 'Miquel',
    comment: 'Ponle Miqueleta',
    score: 0,
    replies: [] 
  }
] 
},

{
  name: 'Lucia',
  comment: "Hola a totes, soc una noia de Barcelona i soc lesbiana. Fa un temps la meva chicota i jo vam decidir tenir un fill, el problema és que cada cop que vaig a la consulta els doctors fan miradetes i comentaris i estic FARTA. Algú coneix alguna clínica amb gent més inclusiva? Estic cansada d'haver de soportat aquestes coses.",
  score: 37,
  replies: [
    {
    name: 'Jaime',
    comment: "Ostres quant t'entenc. Jo soc un home trans i ja pots imaginar-te la de problemes que he tingut amb aquest tema, per desgràcia la societat no està preparada per nosaltres. Per sort, hi ha una clínica al Gayxample que porten això súper bé.",
    score: 14,
    replies: []
    },
    {
      name: 'Concepción',
      comment: "Hacen bien, Dios no querria esto. Aún estás a tiempo de arrepentirte por tus pecados y aceptar a Dios en tu vida.",
      score: -3,
      replies: [
        {
          name: 'Lidia',
          comment: "Señora ahórrese su propaganda por favor, que aquí venimos a hablar de cosas serias, no de fantasias.",
          score: 23,
          replies: []
          }
      ]
      },
      {
        name: 'Miquel',
        comment: "Nenas si quereis yo le echo un vistazo a esos chochitos ricos jeje",
        score: 0,
        replies: [
          {
            name: 'Lucia la bollera',
            comment: "Ni en tus sueños salido de mierda",
            score: 3,
            replies: [
              {
                name: 'Miquel',
                comment: "Tampoco estás tan buena put",
                score: -3,
                replies: []
                }
            ]
            }
        ]
        }
  ]
},

{
  name: 'La Loly',
  comment: "Noies tota la meva roba és de badbitch i ja no entro en els meus skinny jeans per la panxa, quina roba us poseu vosaltres??",
  score: 29,
  replies: [
    {
      name: 'Estelita',
      comment: "T'entenc perfectament, jo ja estic a l'últim mes de l'embaràs i ja estic acostumada però han sigut uns mesos complicats. No t'enganyaré si et dic que al principi em va generar una mica de complexe però amb el temps he après a estilar la meva roba amb la panxa i m'he sentit super agust. Tot és trobar el que t'agrada! <3",
      score: 22,
      replies: []
    }, 
    {
      name: 'Inés',
      comment: "Jo fa molt que vaig estar embarassada i no estic molt al dia amb les modes però no et preocupis maca, que ara no es moment de preocupar-te d'aquestes coses! Lo més important és que estiguis cómoda i el bebè es desenvolupi adecuadament, jo et recomano qualsevol vestit ample i estaràs com una rosa",
      score: 72,
      replies: [
        {
          name: 'Miquel',
          comment:"Que dices vieja, una mujer tiene que estar siempre guapa para su marido. Anda vete a fregar",
          score: -86,
          replies: []
        },
        {
          name: 'Maria',
          comment: "Inés querida yo estoy igual, que tiempos aquellos cuando nos preocupabamos por lucir lo más despampanante possible. Ahora lo único que quiero és ir comoda y ponerme mis zapatillas de rayo McQueen! jajaja",
          score: 24,
          replies: []
        }
      ]
    }
  ]
}

];


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
        //threads.push(new_comment_tree);
        threads.unshift(new_comment_tree);
        this.new_name = "";
        this.new_comment = "";
      },
    },
  })