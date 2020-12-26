import MediaPlayer from '../MediaPlayer'


class AutoPause{
    media: HTMLMediaElement
    threshold: number
    player: MediaPlayer
    constructor(){
        this.threshold = 0.40
        this.intersectionHandler = this.intersectionHandler.bind(this)
        this.visibilityHandler = this.visibilityHandler.bind(this)
    }


    run(player: MediaPlayer){
        this.player = player
        this.media = player.media
        const observer = new IntersectionObserver(this.intersectionHandler, {
            threshold: this.threshold
        })
        observer.observe(this.media)

        document.addEventListener('visibilitychange', this.visibilityHandler)
    }
    visibilityHandler(){
        const visibility = document.visibilityState === 'hidden'

        if(visibility){
            this.player.pause()
        }else{
            this.player.play()
        }
    }
    intersectionHandler(entries){
        const entry = entries[0]
        const visibility = entry.intersectionRatio <= this.threshold
        if(visibility){
            this.player.pause()
        }else{
            this.player.play()
        }

    }
}

export default AutoPause