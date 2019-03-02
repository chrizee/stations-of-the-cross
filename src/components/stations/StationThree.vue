<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Third station:</h3>
        <h5>Jesus falls the first time</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station03.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, the cross you have been carrying is very heavy. You are becoming weak and almost ready to faint, and you fall down. Nobody seems to want to help you. The soldiers are interested in getting home, so they yell at you and try to get you up and moving again.</p>
                <p>As a child, sometimes I start to do something, but then get tired of it. I hurry to get finished and sometimes don't do my work well. Sometimes I don't pay attention to what I should be doing. When things get hard for me, sometimes I give up.</p>
                <p>As an adult, I sometimes put things off. I give up too easily, and sometimes don't do my work as well as I know I can.</p>
                <p>My Jesus, the heavy burden of my sins is on Thee, and bears Thee down beneath the cross. I loathe them, I detest them; I call on Thee to pardon them; may Thy grace aid me never more to commit them.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-4" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationThree',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
