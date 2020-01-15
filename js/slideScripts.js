const slidesTl = new TimelineMax({paused:true});
    slidesTl
            .fromTo('.slides',1.5,{autoAlpha:0,x:500,y:40},{autoAlpha:1,x:0,y:0,ease:Power2.easeInOut})    
            .fromTo('.controlls',.5,{autoAlpha:0,y:50},{autoAlpha:1,y:0,ease:Power2.easeOut})
            .fromTo('#slideTitle',.5,{autoAlpha:0,x:-150},{autoAlpha:1,x:-100,ease:Power2.easeOut},'-=.5');        
    slidesTl.play();   

    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

    next.addEventListener('click',()=>{
        const slides = document.querySelectorAll('.slide');
        const slideActive = document.querySelector('.slide.active');
        const title = document.querySelector('#slideTitle');
        let nextActive = slideActive.nextSibling.nextSibling;
        let titleTl = new TimelineMax({paused:true});


        titleTl
                .to(title,.3,{x:-300,y:-190,scale:.6,autoAlpha:0,ease:Power2.easeOut});

        slideActive.classList.remove('active');

        if(nextActive != null){
        setTimeout(()=>{
            const titleText = nextActive.getAttribute('data-title');
            titleTl.restart();
            slideActive.style.display = 'none';
            nextActive.style.display = '';
            setTimeout(()=>{
                title.innerText = titleText;
                nextActive.classList.add('active');
                titleTl.reverse();
            },600)
        },100)
        }
        else{
            nextActive = slides[0];
            setTimeout(()=>{
                const titleText = slides[0].getAttribute('data-title');
                titleTl.restart();
                slideActive.style.display = 'none';
                nextActive.style.display = '';
                setTimeout(()=>{
                    title.innerText = titleText;
                    nextActive.classList.add('active');
                    titleTl.reverse();
                },600)
            },100)
        }
    }) 

    prev.addEventListener('click',()=>{
        const slides = document.querySelectorAll('.slide');
        const slideActive = document.querySelector('.slide.active');
        const title = document.querySelector('#slideTitle');
        let nextActive = slideActive.previousSibling.previousSibling;
        let titleTl = new TimelineMax({paused:true});


        titleTl
                .to(title,.3,{x:-300,y:-190,scale:.6,autoAlpha:0,ease:Power2.easeOut});

        slideActive.classList.remove('active');

        if(nextActive.classList.contains('slide')){
        setTimeout(()=>{
            const titleText = nextActive.getAttribute('data-title');
            titleTl.restart();
            slides.forEach(e=>{
                e.style.display = "none";
            })
            nextActive.style.display = '';
            setTimeout(()=>{
                title.innerText = titleText;
                nextActive.classList.add('active');
                titleTl.reverse();
            },600)
        },100)
        }
        else{
            nextActive = slides[3];
            console.log(nextActive)
            setTimeout(()=>{
                const titleText = nextActive.getAttribute('data-title');
                titleTl.restart();
                slideActive.style.display = 'none';
                nextActive.style.display = '';
                setTimeout(()=>{
                    title.innerText = titleText;
                    nextActive.classList.add('active');
                    titleTl.reverse();
                },600)
            },100)
        }
    }) 