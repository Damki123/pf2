const navTl = new TimelineMax({paused:true});
const burger = document.querySelector('#burger');
const closeNav = document.querySelector('.close');
const links = document.querySelectorAll('nav li a');

navTl
        .fromTo('nav',.9,{width:0, autoAlpha:0},{width:'100%',autoAlpha:1,ease:Power1.easeInOut})
        .fromTo('nav .container',.6,{width:0, autoAlpha:0},{width:'100%',autoAlpha:1,ease:Power1.easeInOut},'-=.2')
        .staggerFrom('nav li',.6,{scale:1.25,autoAlpha:0,ease:Power3.easeInOut},.1)
        .from('.close',.2,{y:25,autoAlpha:0})


burger.addEventListener('click',()=>{
    navTl.play().timeScale(1);
})
closeNav.addEventListener('click',()=>{
    navTl.reverse().timeScale(1.5);
})
links.forEach(e=>{
    e.addEventListener('click',()=>{
        navTl.reverse().timeScale(1);
    })
})


const logoTl = new TimelineMax();
const controller = new ScrollMagic.Controller();

logoTl
    .to('.nameL',.6,{width:0,autoAlpha:0,ease:Power2.easeInOut})
    .to('#logo img',.3,{height:'40px'})
    .to('.scroll-indicator',.3,{autoAlpha:0,y:-300,ease:Power2.easeInOut},'-=.9')


    const scene = new ScrollMagic.Scene({
    offset: 600,
    triggerElement: '#s1',
    reverse: true
})
.setTween(logoTl)
.addTo(controller)

document.querySelector('#logo').addEventListener('mouseenter',()=>{
    logoTl.reverse();
})

document.querySelector('#logo').addEventListener('mouseleave',()=>{
    logoTl.play();
})
