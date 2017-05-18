import {TimelineMax} from "gsap";
import $ from 'jquery'

export function animCpuWin() {
    $(document).keypress(
        function(event){
            if (event.which === 13) {
                event.preventDefault();
            }
        });

    let cardToAnimate = $('.cpu-card-image'),
        cardToMove = $('.user-card-image'),
        versoCpuCard = $('.cpu-card-verso'),
        versoUserCard = $('.user-card-verso'),
        zIndexContainer = $('.cpu-card-container'),
        buttonPlay = $('.btn-play'),
        userInsideBattle = $('.user-card-inside-battle'),
        userBattle = $('.user-card-battle'),
        cpuInsideBattle = $('.cpu-card-inside-battle'),
        cpuBattle = $('.cpu-card-battle'),
        tl = new TimelineMax({paused:true, onComplete: console.log('completed')});

    return tl
        .to(userBattle, 0, {
            y:"0",
            opacity: 0
        }, "hide")

        .to(cpuBattle, 0, {
            y:"0",
            opacity: 0
        }, "hide")

        .to(userInsideBattle, 0, {
            y:"0",
            opacity: 0
        }, "hide")

        .to(cpuInsideBattle, 0, {
            y:"30",
            opacity: 0
        }, "hide")
        .to(zIndexContainer, 0, {
            zIndex: 1000
        })
        .to(buttonPlay, 0, {
            pointerEvents: "none",
            opacity: .2
        })
        .to(versoCpuCard, 0, {
            opacity: 0,
        })
        .to(versoUserCard, 0, {
            opacity: 0,
        })
        .to(cardToAnimate, 0.5, {
            scale: 1.1,
        })
        .to(cardToMove, 0.2, {
            left: cardToAnimate.offset().left - cardToMove.offset().left,
        })
        .to(cardToAnimate, 0.2, {
            scale: 1
        })
        .to(versoCpuCard, 0, {
            opacity: 1,
        })
        .to(versoUserCard, 0, {
            opacity: 1
        })
        .to(cardToMove, 0, {
            left: versoUserCard.position().left ,
        })
        .to(buttonPlay, 0, {
            pointerEvents: "auto",
            opacity: 1,
            cursor: 'pointer'
        })
        .to(zIndexContainer, 0, {
            zIndex: 999
        })
}