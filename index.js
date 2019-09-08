new Vue({
    el: '#app',
    data: {
      message: 'Greeting from our team',
      name: 'user',
      score: 0,
      website: 'www.google.com'
    },
    methods:{
        greet: function(time){
            return 'Good ' + time + ' ' + this.name
        },
        dec : function(){
            this.score--
        },
        dblten : function(){
                this.score += 10
        },
        minten : function(){
                this.score -= 10

        }
    }
  });