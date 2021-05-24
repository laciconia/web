   let comment_tree = {
    name: 'Teresa',
    comment: "Tinc acidesa d'estómac des del tercer mes. Què puc fer?",
    score: 34,
    replies: [
      {
        name: 'Miquel',
        comment: "Se t'hauria de passar bebent un got de rom amb llimona.",
        score: -5,
        replies: [
          {
            name: 'Laura',
            comment:"No estic gaire segura que la idea que proposa en Miquel funcioni... Prova de prendre infucions de camamilla després dels àpats.",
            score: 23,
            replies: []
          },
        ]
      }
    ]
  }
  
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
        var reply = {name: this.new_name, comment: this.new_comment, replies: []};
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
    el: '#post_app',
    data: {
      comment_tree
    }
  });