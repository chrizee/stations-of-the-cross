<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Seventh station:</h3>
        <h5>Jesus falls the second time</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station07.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>This is the second time you have fallen on the road. As the cross grows heavier and heavier it becomes more difficult to get up. But you continue to struggle and try until you're up and walking again. You don't give up.</p>
                <p>As a child, sometimes things get me down. Others seem to find things easier to do or to learn. Each time I fail, I find it harder to keep trying.</p>
                <p>As an adult, sometimes I think I should know more than I do. I become impatient with myself and find it hard to believe in myself when I fail. It is easy to despair over small things, and sometimes I do.</p>
                <p>Help me when things seem difficult for me. Even when it's hard, help me get up and keep trying as you did. Help me do my best without comparing myself with others.</p>
                <p>My Jesus, often have I sinned and often, by sin, beaten Thee to the ground beneath the cross. Help me to use the efficacious means of grace that I may never fall again.</p>
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
  name: 'StationSeven',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
