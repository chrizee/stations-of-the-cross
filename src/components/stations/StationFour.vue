<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Fourth station:</h3>
        <h5>Jesus meets his mother</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station04.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, you feel so alone with all those people yelling and screaming at you. You don't like the words they are saying about you, and you look for a friendly face in the crowd. You see your mother. She can't make the hurting stop, but it helps to see that she is on your side, that she is suffering with you. She does understand and care.</p>
                <p>As a child, sometimes I feel like too many things are going on. Sometimes other kids pick on me and call me names. I need to look around me for a friendly face, and for the help I need. I need to share my troubles with those who truly care about me.</p>
                <p>As an adult I sometimes feel overwhelmed by many things. Life is so competitive, and I worry so much about my future and those who have some control over it. I need to remember that being an adult does not mean having to solve every problem all by myself. I need to look around me for a friendly face, for the help I need.</p>
                <p>Jesus most suffering, Mary Mother most sorrowful, if, by my sins, I caused you pain and anguish in the past, by God's assisting grace it shall be so no more; rather be you my love henceforth till death.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-5" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationFour',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
