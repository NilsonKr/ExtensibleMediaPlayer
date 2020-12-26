import adsJSON from './listAds.json'

export interface Ad{
    imageUrl: string,
    title: string,
    body: string,
    url: string,
}


const listAds = adsJSON


class Ads{
    private static instace: Ads
    private allAds: Ad[]

    private constructor(){
        this.initAds()
    }

    static getInstance(){
        if(!this.instace){
            this.instace = new Ads()
        }

        return this.instace
    }
    private initAds(){
        this.allAds = [...listAds]
    }

    getAd(){
        if(this.allAds.length === 0){
            this.initAds()
        }
        return this.allAds.pop()
    }
}

export default Ads