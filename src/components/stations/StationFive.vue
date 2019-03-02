<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Fifth station:</h3>
        <h5>Simon of Cyrene helps Jesus to carry his cross</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station05.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, the soldiers are becoming impatient. This is taking longer than they wanted it to. They are afraid you won't make it to the hill where you will be crucified. As you grow weaker, they grab a man out of the crowd and make him help carry your cross. He was just watching what was happening, but all of a sudden he is helping you carry your cross.</p>
                <p>As a child, sometimes I see people who need my help. Sometimes I pretend not to hear when my parents call me. I disappear when I know others could use my help.</p>
                <p>As an adult, sometimes I try to do as little as I can and still get by. Others might need my help, but I ignore their needs. Even when I'm asked to help, I sometimes claim to be too busy</p>
                <p>My Jesus, blest, thrice blest was he who aided Thee to bear the cross. Blest too shall I be if I aid Thee to bear the cross, by patiently bowing my neck to the crosses Thou shalt send me during life. My Jesus, give me grace to do so</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-6" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationFive',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
