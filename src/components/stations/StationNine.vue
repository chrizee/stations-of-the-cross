<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Ninth station:</h3>
        <h5>Jesus falls a third time</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station09.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, your journey has been long. You fall again, beneath your cross. You know your journey is coming to an end. You struggle and struggle. You get up and keep going.</p>
                <p>As a child, sometimes I fail time and time again. I find it hard to get along with my sisters and brothers, sometimes I'm not honest, sometimes I'm lazy. I'm tempted to stop trying. It's just too hard sometimes.</p>
                <p>As an adult, I often feel I should have conquered my weaknesses by now. I become discouraged when I'm confronted by the same problems over and over again. Sometimes I get weary. When I have health problems, I can become discouraged and depressed.</p>
                <p>Help me think of the cross you carried. Help me continue to hope that I can make the changes in my life I need to. You didn't give up. I can have the strength to get up again as well.</p>
                <p>My Jesus, by all the bitter woes Thou didst endure when for the third time the heavy cross bowed Thee to the earth, never, I beseech Thee, let me fall again into sin. Ah, my Jesus, rather let me die than ever offend Thee again.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-10" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationNine',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
