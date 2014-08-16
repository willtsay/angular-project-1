
  var app = angular.module('site', [ ])

  // app.controller('SiteController', function(){
  //   this.pages = subjects
  // })

  app.controller('SiteController', ['$scope', SiteController])
  app.controller('TabController', ['$scope', TabController])
  app.controller('PortfolioController', ['$scope', PortfolioController])
  app.controller('SocialController', ['$scope', SocialController])
  app.controller('SkillController', ['$scope', SkillController])
  
  function SiteController($scope){
    $scope.pages = pages
  }
  function TabController($scope){
    $scope.tab = 0
    $scope.selectTab = function(settab){
      $scope.tab = settab
    }
    $scope.isSelected = function(checktab){
      return this.tab === checktab
    }
  }
  function PortfolioController($scope){
    $scope.projects = projects
  }
  function SocialController($scope){
    $scope.links = links
  }
  function SkillController($scope){
    $scope.icons = icons
  }

  var pages = [
  {
    index:0,
    title: "about",
    content: "Hi I'm Will! I'm a full stack ruby developer living in the bay area. Aside from coding, I love cooking and drawing. I am currently looking for work. You can find me with these blobs.",
    sub: {
      controller: SocialController,
      klass: "centered",
    }
  },
  {
    index:1,
    title: "portfolio",
    content: "My recent projects.",
    sub: {
      controller: SocialController,
      klass: "centered",
    }
  },
  {
    index:2,
    title: "skills",
    content: "",
    sub: {
      controller: SocialController,
      klass: "centered",
    }
  },
  {
    index:3,
    title: "other",
    content: "Here are some works I've created over the years, enjoy!",
    sub: {
      controller: SocialController,
      klass: "centered",
    }
  },
  {
    index:4,
    title: "contact",
    content: "You can contact me at willtsay@gmail.com",
    sub: {
      controller: SocialController,
      klass: "centered",
    }
  }]

  var links=[
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
  }
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
