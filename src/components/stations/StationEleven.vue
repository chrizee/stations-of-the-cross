<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Eleventh station:</h3>
        <h5>Jesus is nailed to the cross</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station11.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>You are stretched out on the cross you have carried so far. The soldiers take big nails and drive them into your hands and feet. You feel abandoned by the people you loved so much. People seem to have gone mad. You have done nothing but good, yet they drive nails through your hands and feet.</p>
                <p>As a child, sometimes I hurt others. Sometimes I join with friends and decide not to like another. We gang up against another and cause them hurt and pain. Sometimes I say or do hurtful things to my brothers and sisters. I can wonder what they'd think about themselves if they believed everything I told them about themselves.</p>
                <p>As and adult, sometimes I discriminate against others. Even without thinking, I judge others because of their color, intelligence, income level or name. I forget that I am to live as a brother or sister to all people. Sometimes I use harsh words when I speak to my children and family members. I can find it easy to look for something that isn't very important and make it very important.</p>
                <p>Help me look again at the people around me. Help me see the hurt and pain I have caused in others. Be with me to help me make amends for the harm I have done.</p>
                <p>My Jesus, by Thine agony when the cruel nails pierced Thy tender hands and feet and fixed them to the cross, make me crucify my flesh by Christian penance.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-12" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationEleven',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
