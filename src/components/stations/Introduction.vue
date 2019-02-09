<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h1>Opening prayer</h1>
        <h2>Act of contriction</h2>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col-phone mdl-cell--4-col-desktop">
                <img src="https://www.catholic.org/images/ins_clife/act_of_contrition.gif" alt="stations of the cross" />
            </div>
            <div class="mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-phone text-left">  
                <p>O my God, my Redeemer, behold me here at Thy feet. From the bottom of my heart I am sorry for all my sins, because by them I have offended Thee, Who art infinitely good. I will die rather than offend thee again</p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-1" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Introduction',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
