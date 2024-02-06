class ApiV1 extends AbstractApi{
    constructor(data) {
        super( data );
    }

    get duration() {
        return this._duration
    }

    get picture() {
        return `/assets/${this._picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`
    }

    get released_in() {
        return this._released_in
    }

    get synopsis() {
        return this._synopsis
    }

    get title() {
        return this._title
    }
}
