<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Fourteenth station:</h3>
        <h5>Jesus is laid in the tomb</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station14.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, your body is prepared for burial. Joseph gave you his own tomb. He laid your body there and rolled a large stone in front of it, then went home. What a sad day it has been for so many people.</p>
                <p>As a child, sometimes I try to keep everything for myself. I find it hard to share my things with my brothers or sisters and with my friends. </p>
                <p>As an adult, I can be selfish too. I can accumulate things and keep them for myself. I try to make sure I have what I want before I share what I have with anybody else.</p>
                <p>Help me think of Joseph of Arimathea, who risked his own life as he accepted Jesus' body for burial. Help me think of how Joseph loved Jesus so much that he gave him his own tomb.</p>
                <p>My Jesus, beside Thy body in the tomb I, too, would lie dead; but if I live, let it be for Thee, so as one day to enjoy with Thee in heaven the fruits of Thy passion and Thy bitter death.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-8" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationFourteen',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
