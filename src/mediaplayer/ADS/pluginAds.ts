import MediaPlayer from '../MediaPlayer'
import Ads, { Ad } from '../ADS/index'

class AdsPlugin{
    player: MediaPlayer
    media: HTMLMediaElement
    ads: Ads
    currentAd: Ad
    containerAds: HTMLElement

    constructor(){
        this.ads = Ads.getInstance()
        this.handlerTime = this.handlerTime.bind(this)
        this.containerAds = document.createElement('div')
    }

    run(player:MediaPlayer){
        this.player = player
        this.media = player.media
        this.player.container.appendChild(this.containerAds)
        this.media.addEventListener('timeupdate', this.handlerTime)
    }
    
    renderAd(){
        if(this.currentAd){
            return
        }

        const ad = this.ads.getAd()
        this.currentAd = ad

        this.containerAds.innerHTML = `
        <div class="ads">
        <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
         <img class="ads__img" src="${this.currentAd.imageUrl}" />
            <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
             <p class="ads__body">${this.currentAd.body}</p>
            </div>
         </a>
         </div>
        ` 

        setTimeout(() => {
            this.currentAd = null
            this.containerAds.innerHTML = ''
        }, 8000)
    }

    handlerTime(){
        const time = Math.floor(this.media.currentTime) 
        if(time % 30 === 0){
            this.renderAd()
        }
    }
}

export default AdsPlugin