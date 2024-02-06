class AbstractApi {
    _duration : string 
    _picture : string
    _released_in : string
    _synopsis : string
    _title : string
        
    constructor(data) {
        this._duration = data.duration
        this._picture = data.picture
        this._released_in = data.released_in
        this._synopsis = data.synopsis
        this._title = data.title
    }
}
