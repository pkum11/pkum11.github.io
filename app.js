new Vue({
  el: '#vue-app',
  data: {
    name: 'Test App',
    job: 'Testing',
    website: 'http://google.com',
    websiteTag: '<a href="http://google.com"> Google tag</a>',
    age: 25,
    x: 0,
    y: 0,
    username: '',
    available: false,
    nearby: false
  },
  methods: {
    greet: function(time){
      return 'Greetings ' + time + ' : ' + this.name;
    },
    updateXY: function(event){
      console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clicked: function(){
      alert('You clicked me')
    },
    logUsername: function(){
      console.log('User name entered')
      // this.username = ''
    }
  },
  computed: {
    newAge: function(){
      console.log("New age = " + this.age)
      return this.age
    },
    compClass: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
