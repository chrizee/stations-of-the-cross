<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Tenth station:</h3>
        <h5>Jesus clothes are taken away</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station10.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>The soldiers notice you have something of value. They remove your cloak and throw dice for it. Your wounds are torn open once again. Some of the people in the crowd make fun of you. They tease you and challenge you to perform a miracle for them to see. They're not aware that you'll perform the greatest miracle of all!</p>
                <p>As a child, sometimes I'm tempted to repeat stories I know are unclean and disrespectful. I sometimes try to act grown up by using crude and bad words.</p>
                <p>As an adult, sometimes I repeat stories that are disrespectful of others. I can entertain thoughts that are not clean. Sometimes I give the young people around me a bad example to follow.</p>
                <p>Help me to keep myself pure and clean. Help me say things that build up the people around me. Help me overcome worldly desires that I may become more like Jesus. Help me set a good example for others to follow.</p>
                <p>My Jesus, stripped of Thy garments and drenched with gall, strip me of love for things of earth, and make me loathe all that savors of the world and sin.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-11" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationTen',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
