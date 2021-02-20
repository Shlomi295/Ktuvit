
class managerHandler{

     async getIdForMovie(id, moviename){

        const id = await manager.getKtuvitID({imdbId: id, name: moviename});
        return id;
     }
}
