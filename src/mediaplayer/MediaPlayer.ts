interface config{
    video: HTMLMediaElement,
    plugins: Array<any>
}

class MediaPlayer{
    media : HTMLMediaElement
    plugins?:Array<any>
    container: HTMLElement
    config:  config
    constructor(config){
        this.media = config.media
        this.plugins = config.plugins || []
        this.initContainer()
        this.init_plugins()
        
    }
    private initContainer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }
    private init_plugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
    toggleMute(){
        this.media.muted = !this.media.muted
    }
    togglePlay(){
        if(this.media.paused){
            this.play()
        }else{
            this.pause()
        }
    }
    play(){
        this.media.play()
    }
    pause(){
        this.media.pause()
    }
}

export default MediaPlayer