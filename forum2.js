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
    comment: 'Hola 0',
    replies: [
      {
        name: 'item1',
        comment: 'hola 1',
        replies: [
          {
            name: 'item1.1',
            comment:'hola 1.1',
            replies: []
          },
          {
            name: 'item1.2',
            comment: "hola 1.2",
            replies: [
              {
                name: 'item1.2.1',
                comment:'hola 1.2.1',
                replies: []
              }
            ]
          }
        ]
      }, 
      {
        name: 'item2',
        comment: 'hola 2',
        replies: [] 
      }
    ]
  }
  
  Vue.component('forum', { 
    props: [ 'replies', 'name', 'comment', 'depth' ],
    data() {
       return {
         new_comment: "",
       }
    },
    methods: {
      addComment() {
        console.log(this.replies);
        var reply = {name: this.name, comment: this.new_comment, replies: []};
        this.replies.push(reply);
        new_comment = "";
      }
    },
    computed: {
      nameClasses() {
        return { 'has-children': this.replies }
      },
      indent() {
        return { transform: `translate(${this.depth * 50}px)` }
      }
    },
    template: '#forum',
  });
  
  new Vue({
    el: '#app',
    data: {
      comment_tree
    }
  })