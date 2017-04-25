<template>
    <div>
        <video-player ref="videoPlayer"
                      :options="playerOptions"

                      title="you can listen some event if you need"
                      @play="onPlayerPlay($event)"
                      @pause="onPlayerPause($event)"
                      @statechanged="playerStateChanged($event)"
                      @ready="playerReadied">
        </video-player>
        <div class="title">云台控制</div>
        <div class=""></div>
    </div>
</template>
<style scoped lang="less">
    body{
        background-color:#ff0000;
    }
    .title{
        font-size: 4rem;
        padding-left: 2em;
        margin-top: 1em;
    }

</style>
<script type="text/ecmascript-6">
    export default{
        data () {
            return {
                playerOptions: {

                    // component options
                    start: 0,
                    playsinline: true,

                    // videojs options
                    height: 650,
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "/static/极限特工2BD.mkv"
                    }],
                    poster: "/static/images/author.jpg",
                }
            }
        },
        mounted() {
            console.log('this is current player instance object', this.player)
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },

            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },

            // player is ready
            playerReadied(player) {
                console.log('the player is readied', player)
                // you can use it to do something...
                // player.[methods]
            }
        }
    }
</script>
