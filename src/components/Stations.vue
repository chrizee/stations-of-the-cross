<template>
    <div class="mdl-grid ">
        <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone mdl-cell--2-offset-desktop">
            <section class="mdl-layout__tab-panel is-active" id="introduction">
                <div class="page-content">
                    <introduction @fire="eventFire"/>
                </div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-1">
                <div class="page-content"><station-one @fire="eventFire" /> </div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-2">
                <div class="page-content"><station-two @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-3">
              <div class="page-content"><station-three @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-4">
              <div class="page-content"><station-four @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-5">
              <div class="page-content"><station-five @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-6">
              <div class="page-content"><station-six @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-7">
              <div class="page-content"><station-seven @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-8">
              <div class="page-content"><station-eight @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-9">
              <div class="page-content"><station-nine @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-10">
              <div class="page-content"><station-ten @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-11">
              <div class="page-content"><station-eleven @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-12">
              <div class="page-content"><station-twelve @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-13">
              <div class="page-content"><station-thirteen @fire="eventFire" /></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-14">
              <div class="page-content"><station-fourteen @fire="eventFire" /></div>
            </section>
        </div>
    </div>
</template>

<script>
import introduction from './stations/Introduction'
import StationOne from './stations/StationOne'
import StationTwo from './stations/StationTwo'
import StationThree from './stations/StationThree'
import StationFour from './stations/StationFour'
import StationFive from './stations/StationFive'
import StationSix from './stations/StationSix'
import StationSeven from './stations/StationSeven'
import StationEight from './stations/StationEight'
import StationNine from './stations/StationNine'
import StationTen from './stations/StationTen'
import StationEleven from './stations/StationEleven'
import StationTwelve from './stations/StationTwelve'
import StationThirteen from './stations/StationThirteen'
import StationFourteen from './stations/StationFourteen'

export default {
  name: 'Stations',
  components: {
    introduction,
    'station-one': StationOne,
    'station-two': StationTwo,
    'station-three': StationThree,
    'station-four': StationFour,
    'station-five': StationFive,
    'station-six': StationSix,
    'station-seven': StationSeven,
    'station-eight': StationEight,
    'station-nine': StationNine,
    'station-ten': StationTen,
    'station-eleven': StationEleven,
    'station-twelve': StationTwelve,
    'station-thirteen': StationThirteen,
    'station-fourteen': StationFourteen
  },
  methods: {
    eventFire (el, etype = 'click') {
      if (el.fireEvent) {
        el.fireEvent('on' + etype)
      } else {
        let evObj = document.createEvent('Events')
        evObj.initEvent(etype, true, false)
        el.dispatchEvent(evObj)
      }
      Array.from(document.querySelectorAll('.mdl-card')).map((card) => {
        // scroll all cards into view
        // todo: make only the target card scroll into view
        card.scrollIntoView(true)
      })
    }
  }
}
</script>



