const cookieImg = document.querySelector('.cookieImg'),
    knifeImg = document.querySelector('.knifeImg'),
    replayImg = document.querySelector('.replayImg'),
    notice = document.querySelector('.notice'),
    body = document.querySelector('body');

function cookieReact(){
    if(cookieImg.src.includes("cookie.png")){
        cookieImg.src="image/cookie_react.png";
    }
}
function cookieReactEnd(){
    if(cookieImg.src.includes("cookie_react.png")){
        cookieImg.src="image/cookie.png";
    }
}
function cookieKnife(){
    if(cookieImg.src.includes("cookie_react.png")){
        cookieImg.src="image/cookie_gif.gif";
        notice.innerHTML="Knife?"
        setTimeout(brokenCookie, 2500);
        function brokenCookie(){
            cookieImg.src="image/cookie_broken_paper.png";
            body.style.backgroundColor="gray";
            notice.innerHTML="Goodjob!"
        }
    }
}

function replayHandler(){
    if(cookieImg.src.includes("cookie_broken_paper.png"))
    cookieImg.src="image/cookie.png";
    body.style.backgroundColor="salmon";
    notice.innerHTML="Let's give a gift to the fortune cookie."
}

knifeImg.addEventListener('mouseenter',cookieReact);
knifeImg.addEventListener('mouseleave',cookieReactEnd);
knifeImg.addEventListener('click',cookieKnife);
replayImg.addEventListener('click',replayHandler);