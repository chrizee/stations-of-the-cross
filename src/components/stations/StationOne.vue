<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h1>First station:</h1>
        <h3>Jesus is condemned to death</h3>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station01.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>  
                <p>Jesus, you stand all alone before Pilate. Nobody speaks up for you. Nobody helps defend you. You devoted your entire life to helping others, listening to the smallest ones, caring for those who were ignored by others. They don't seem to remember that as they prepare to put you to death.</p>
                <p>As a child, sometimes I feel alone. Sometimes I feel that others don't stand up for me and defend me when I am afraid. Sometimes I don't feel like I am treated fairly, especially if I am scolded or corrected.</p>
                <p>As an adult, sometimes I feel abandoned and afraid as well. Sometimes I too, feel like I am treated unfairly or blamed for things unfairly. I have a hard time when people criticize me at home or at work.</p>
                <p>Help me be grateful for what you did for me. Help me to accept criticism and unfairness as you did, and not complain. Help me pray for those who have hurt me</p>
                <p>My Jesus, often have I signed the death warrant by my sins; save me by Thy death from that eternal death which I have so often deserved.</p>
                <p>Our Father.... Hail Mary.... Glory Be to the Father....</p>
                <p>
                <strong>Leader:</strong> Jesus Christ Crucified <br />
                <strong>All:</strong> Have mercy on Us. <br />
                <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-2" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>           
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationOne',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
