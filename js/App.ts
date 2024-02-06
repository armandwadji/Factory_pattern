class App {
    
    $moviesWrapper: HTMLButtonElement
    ApiV1 : MovieApi
    ApiV2 : MovieApi
    ApiV3 : MovieApi

    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper') as HTMLButtonElement
        
        this.ApiV1 = new MovieApi( '/data/old-movie-data.json' );
        // this.ApiV2 = new MovieApi( '/data/new-movie-data.json' );
        // this.ApiV3 = new MovieApi( '/data/external-movie-data.json' );
    }

    async main() {
        const ApiV1Data = await this.ApiV1.get();
        // const ApiV2Data = await this.ApiV2.get();
        // const ApiV3Data = await this.ApiV3.get();

        const ApiV1Movies = ApiV1Data.map( movie => new MoviesFactory( movie, "ApiV1" ) );
        // const ApiV2Movies = ApiV2Data.map( movie => new MoviesFactory( movie, 'ApiV2' ) );
        // const ApiV3Movies = ApiV3Data.map( movie => new MoviesFactory( movie, 'ApiV3' ) );


        const FullMovies = [
            ...ApiV1Movies,
            // ...ApiV2Movies,
            // ...ApiV3Movies
        ];

        FullMovies.forEach( movie => {
            const Template = new MovieCard( movie )
            this.$moviesWrapper.appendChild( Template.createMovieCard() );
        } );
    }
}

const app = new App();
app.main();
