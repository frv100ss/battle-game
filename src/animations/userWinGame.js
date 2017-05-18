import {TimelineMax} from "gsap";
import $ from 'jquery'

export function userWinGame() {
    let  modal = $('.modal'),
         tl = new TimelineMax({paused:true});

    $('.modal-content').text('Bravo vous avez remporté la partie !!!')

    return tl
        .to(modal, 0, {
            alpha: 1,
            zIndex: 1000
        })

}