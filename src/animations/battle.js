import { TimelineMax} from "gsap";
import $ from 'jquery'

export function animBattle() {
    $(document).keypress(
        function(event){
            if (event.which === '13') {
                event.preventDefault();
            }
        });
    let userInsideBattle = $('.user-card-inside-battle'),
        userBattle = $('.user-card-battle'),
        cpuInsideBattle = $('.cpu-card-inside-battle'),
        cpuBattle = $('.cpu-card-battle'),
        cardUserToAnimate = $('.cpu-card-image'),
        cardCpuToAnimate = $('.user-card-image'),
        cardUserVerso = $('.user-card-verso'),
        cardCpuVerso = $('.cpu-card-verso'),
        buttonPlay = $('.btn-play'),

        tl = new TimelineMax({paused : true});

    return tl
        .to(buttonPlay, 0, {
            pointerEvents: "none",
            opacity: .2
        })
        .to(cardUserToAnimate, 0.05, {
            x: "+=10", yoyo: true, repeat: 25
        }, "immediate")

        .to(cardCpuToAnimate, 0.05, {
            x: "+=10", yoyo: true, repeat: 25
        }, "immediate")

        .fromTo(cardUserVerso, 0.5, {
            y:"-200",
            opacity: 0
        }, {
            y:"0",
            opacity: 1
        }, "step1")

        .fromTo(cardCpuVerso, 0.5, {
            y:"-200",
            opacity: 0
        }, {
            y:"0",
            opacity: 1
        }, "step1")

        .fromTo(userBattle, 0.5, {
            y:"-200",
            opacity: 0
        }, {
            y:"0",
            opacity: 1
        }, "step1 +=0.5", "step2")

        .fromTo(cpuBattle, 0.5, {
            y:"-200",
            opacity: 0
        }, {
            y:"0",
            opacity: 1
        }, "step1 +=0.5", "step2")

        .fromTo(userInsideBattle, 0.75, {
            y:"-200",
            opacity: 0
        }, {
            y:"300",
            opacity: 1
        }, "step2 +=0.5")

        .fromTo(cpuInsideBattle, 0.75, {
            y:"-200",
            opacity: 0
        }, {
            y:"300",
            opacity: 1
        }, "step2 +=0.5")

        .to(buttonPlay, 0, {
            pointerEvents: "auto",
            opacity: 1,
            cursor: 'pointer'
        })

}