<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Sixth station:</h3>
        <h5>Veronica wipes the face of Jesus</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station06.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, suddenly a woman comes out of the crowd. Her name is Veronica. You can see how she cares for you as she takes a cloth and begins to wipe the blood and sweat from your face. She can't do much, but she offers what little help she can.</p>
                <p>As a child, sometimes I know someone could use a little help and understanding. They may be picked on or teased by others, or just sad or lonely. Sometimes I feel bad that others don't step in to help, but I don't help either.</p>
                <p>As an adult, I notice the needs around me. Sometimes my own family members crave my attention, and I don't even seem to notice. Sometimes a co-worker, friend, or family member could use help or understanding, but I don't reach out to help lest I be criticized, or that they demand more of me than I'd like to give.</p>
                <p>My tender Jesus, Who didst deign to print Thy sacred face upon the cloth with which Veronica wiped the sweat from off Thy brow, print in my soul deep, I pray Thee, the lasting memory of Thy bitter pains.</p>    
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                   <strong>Leader:</strong> Jesus Christ Crucified <br />
                   <strong>All:</strong> Have mercy on Us. <br />
                   <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                   <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-7" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationSix',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
