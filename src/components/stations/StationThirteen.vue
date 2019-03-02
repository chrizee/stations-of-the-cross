<template>
    <div class="mdl-card mdl-shadow--2dp">
        <h3>Thirteenth station:</h3>
        <h5>The body of Jesus is taken down from the cross</h5>
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--12-col-phone" >
                <img src="https://www.catholic.org/images/ins_clife/station13.jpg" alt="first station" />
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-cell--12-col-phone text-left">            
                <p><strong>Leader:</strong> We adore Thee, O Christ, and bless Thee.</p>
                <p><strong>All:</strong> Because by Thy holy cross Thou hast redeemed the world.</p>
                <p>Jesus, how brutally you were put to death. How gently your are taken from the cross. Your suffering and pain are ended, and you are put in the lap of your mother. The dirt and blood are wiped away. You are treated with love. </p>
                <p>As a child, sometimes I treat others better when they're sad or in pain. When somebody dies, I become very gentle and kind. I notice the good and kind things people say about those who have died.</p>
                <p>As an adult, I seem to be kinder when someone dies. If only I could learn to see the good things about them while they were alive. If only I would tell those around me how much I love them, while I still have the opportunity to do so.</p>
                <p>Help me look for the good in those around me, especially those I love the most. Help me live this day as if it were the last. Help me become a more gentle and loving person through my greater appreciation for those around me.</p>
                <p>O Mary, Mother most sorrowful, the sword of grief pierced thy soul when thou didst see Jesus lying lifeless on thy bosom; obtain for me hatred of sin because sin slew thy Son and wounded thine own heart, and grace to live a Christian life and save my soul.</p>
                <p>
                    <strong>Leader:</strong> Jesus Christ Crucified <br />
                    <strong>All:</strong> Have mercy on Us. <br />
                    <strong>Leader:</strong> May the souls of the faithful departed, through the mercy of God, Rest in peace <br />
                    <strong>All:</strong> Amen. <br />
                </p>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--9-offset">
                <button @click="go" data-target="#scroll-tab-14" class="nav-btn mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                    <i class="material-icons">arrow_right</i>
                </button>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'StationThirteen',
  methods: {
    go (e) {
      const target = document.querySelector('a[href="' + e.target.dataset.target + '"]')
      this.$emit('fire', target)
    }
  }
}
</script>
