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
            <div class="page-content"><!-- Your content goes here --></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-4">
            <div class="page-content"><!-- Your content goes here --></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-5">
            <div class="page-content"><!-- Your content goes here --></div>
            </section>
            <section class="mdl-layout__tab-panel" id="scroll-tab-6">
            <div class="page-content"><!-- Your content goes here --></div>
            </section>
        </div>
    </div>
</template>

<script>
import introduction from './stations/Introduction'
import StationOne from './stations/StationOne'
import StationTwo from './stations/StationTwo'
export default {
  name: 'Stations',
  components: {
    introduction,
    'station-one': StationOne,
    'station-two': StationTwo
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



