<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Eighth station:</h3>
        <h5>Jesus meets the women of Jerusalem</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station08.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, as you carry your cross you see a group of women along the road. As you pass by you see they are sad. You stop to spend a moment with them, to offer them some encouragement. Although you are have been abandoned by your friends and are in pain, you stop and try to help them.</p>
                <p>As a child, sometimes I think a lot about myself. I think about what I want and would like people to spend their lives pleasing me.</p>
                <p>As an adult, sometimes I act like a child. I become so absorbed in myself and what I'd like that I forget about the needs of others. I take them for granted, and often ignore their needs.</p>
                <p>Help me think more about others. Help me remembers that others have problems, too. Help me respond to them even when I'm busy or preoccupied with my own problems.</p>
                <p>My Jesus, Who didst comfort the pious women of Jerusalem who wept to see Thee bruised and torn, comfort my soul with Thy tender pity, for in Thy pity lies my trust. May my heart ever answer Thine.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-9" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationEight',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
