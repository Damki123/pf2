const navTl = new TimelineMax({paused:true});
const burger = document.querySelector('#burger');
const closeNav = document.querySelector('.close');

navTl
        .fromTo('nav',.9,{width:0, autoAlpha:0},{width:'100%',autoAlpha:1,ease:Power1.easeInOut})
        .fromTo('nav .container',.6,{width:0, autoAlpha:0},{width:'100%',autoAlpha:1,ease:Power1.easeInOut},'-=.2')
        .staggerFrom('nav li',.8,{scale:1.25,rotation:180,x:150,opacity:0,ease:Power3.easeInOut},.1)
        .from('.close',.2,{y:25,autoAlpha:0})


burger.addEventListener('click',()=>{
    navTl.play().timeScale(1);
})
closeNav.addEventListener('click',()=>{
    navTl.reverse().timeScale(2);
})

