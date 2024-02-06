class MoviesFactory {
  constructor(data, type) {
    switch (type) {
      case "ApiV1":
        // Si le type correspond à la version 1 de l' API, alors on retourne le bon formattage
        return new ApiV1(data);
      // case 'ApiV2':
      //     // Sinon retourne on retourne la version 2
      //     return new ApiV2( data );
      // case 'ApiV3':
      //     // Sinon retourne on retourne la version 3
      //     return new ApiV3(data)
      default:
        // Une bonne pratique est de throw une erreur si le format n'est pas reconnu
        throw "Unknown type format, please add new factory";
    }
  }
}
