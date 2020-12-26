import MediaPlayer from './mediaplayer/MediaPlayer'
import AutoPlay from './mediaplayer/plugins/autoPlay'
import AutoPause from './mediaplayer/plugins/autoPause'
import AdsPlugin from './mediaplayer/ADS/pluginAds'


const playBtn: HTMLElement = document.querySelector('#playButton')
const muteBtn: HTMLElement = document.querySelector('#muteButton')
const video: HTMLMediaElement = document.querySelector('video')


const player = new MediaPlayer({ media: video,  plugins: [new AutoPlay(),new AutoPause(), new AdsPlugin()]})

playBtn.onclick = () => player.togglePlay()
muteBtn.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../Sw.js').catch(err => console.log(err.message))
}

