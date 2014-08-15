(function(){

  var app = angular.module('site', [ ])

  var subjects = [
  {
    index:0,
    title: "about",
    content: "Hi I'm Will! I'm a full stack ruby developer living in the bay area. Aside from coding, I love cooking and drawing. I am currently looking for work. You can find me with these blobs.",
  },
  {
    index:1,
    title: "portfolio",
    content: "My recent projects.",
  

  },
  {
    index:2,
    title: "skills",
    content: "",
  },
  {
    index:3,
    title: "other",
    content: "Here are some works I've created over the years, enjoy!",
  },
  {
    index:4,
    title: "contact",
    content: "You can contact me at willtsay@gmail.com",
  }]

  app.controller('SiteController', function(){
    this.pages = subjects
  })

  app.controller('TabController', function(){
    this.tab = 0
    this.selectTab = function(settab){
      this.tab = settab 
    }
    this.isSelected = function(checktab){
      return this.tab === checktab
    }
  })

  var websites=[
  {
    link:"https://www.facebook.com/willtsay/",
    icon:"images/facelogo.png"
  },
  {
    link:"https://github.com/willtsay/",
    icon:"images/githlogo.png"
  },
  {
    link:"https://twitter.com/willtsay/",
    icon:"images/twitlogo.png"
  },
  {
    link:"https://www.linkedin.com/in/williamtsay",
    icon:"images/linklogo.png"
  },
  ]

  var projects = [
    {
      name: "Little Pooper",
      description: "Tamagotchi" ,
      link: "http://little-pooper.herokuapp.com"
    },
    {
      name: "Number Whack",
      description: "js whackamole game",
      link: "http://dbc-whack.herokuapp.com"
    }
  ]

  app.controller('PortfolioController', function(){
    this.projects = projects
  })

  app.controller('SocialController', function(){
    this.links = websites
  })

  var icons = [
  { location: "images/icons/css3.png"},
  { location: "images/icons/git.png"},
  { location: "images/icons/ruby.png"},
  { location: "images/icons/html5.png"},
  { location: "images/icons/jquery.png"},
  { location: "images/icons/js.png"},
  { location: "images/icons/json.png"},
  { location: "images/icons/postgres.png"},
  { location: "images/icons/python.png"},
  { location: "images/icons/ror.png"},
  ]

  app.controller('SkillController', function(){
    this.icons = icons
  })

  var subs = [
  {
    subCtrlType:

  }

  ]

  app.controller('OverController', function(){
    this.subs = subs
  })



})();