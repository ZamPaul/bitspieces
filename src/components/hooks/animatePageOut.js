import bezier from 'bezier-easing'
import gsap from 'gsap'

const animatePageOut = (href,router,pth) => {

    const ese = bezier(0.76, 0, 0.24, 1);

    if(pth !== href){
        const slideOut = document.getElementById("transition-slide-out")
        const tl = gsap.timeline()
        tl.set(slideOut,{ clipPath:"polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)" }).to(slideOut,{
            clipPath:"polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
            delay:0.2,
            ease:ese,
            duration:.7,
            onComplete: function(){
                router.push(href)
            }
        })
    }

}

export default animatePageOut