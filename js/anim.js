const s2Photo = new TimelineMax();
const s2Desc = new TimelineMax();

s2Photo
    .from('#s2 .photo',2,{x:-200,y:50,autoAlpha:0,ease:Power2.easeOut})


    const sceneS2Photo = new ScrollMagic.Scene({
        offset: 100,
        triggerElement: '#s2 .photo',
        reverse: false,
    })
    .setTween(s2Photo)
    .addTo(controller)

s2Desc
    .staggerFrom('#s2 .circle',3,{width:0,height:0,ease:Power2.easeOut},.2)
    .from('#s2 .desc',.3,{autoAlpha:0,ease:Power2.easeOut},'-=2.5')


    const sceneS2Desc = new ScrollMagic.Scene({
        offset: 200,
        triggerElement: '#s2 .text',
        reverse: false,
    })
    .setTween(s2Desc)
    .addTo(controller)

