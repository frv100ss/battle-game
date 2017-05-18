import {TimelineMax} from "gsap";
import $ from 'jquery'

export function cpuWinGame() {
    let  modal = $('.modal'),
         tl = new TimelineMax({paused:true});

    $('.modal-content').text('Malheureusement l\'ordinateur a gagné la partie')

    return tl
        .to(modal, 0, {
            alpha: 1,
            zIndex: 1000
        })

}