<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Second station:</h3>
        <h5>Jesus carries His cross</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station02.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>  
                <p>Jesus, as you accepted your cross, you knew you would carry it to your death on Calvary. You knew it wouldn't be easy, but you accepted it and carried it just the same.</p>
                <p>As a child, sometimes I don't like the problems that come my way. Sometimes I try to get others to take care of them or solve them for me. Sometimes I become upset and crabby when I'm asked to do even the smallest thing to help others.</p>
                <p>As an adult I sometimes feel like I'm not appreciated. Sometimes I feel as if I accept more responsibility that I need to. I can feel sorry for myself, even though the crosses others carry are much larger than my own. In my self-pity, I don't reach out to help.</p>
                <p>My Jesus, Who by Thine own will didst take on Thee the most heavy cross I made for Thee by my sins, oh, make me feel their heavy weight, and weep for them ever while I live.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-3" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationTwo',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
