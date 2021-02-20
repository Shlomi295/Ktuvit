const { getLoginCookie } = require('ktuvit-api');
const ktuvitManager = require('ktuvit-api');
const fs = require('fs');
var passwordHash = require('password-hash');

var hashedPassword = 'ChOCihy+fsXuA2R34RBCp7sFadzxMJ1u75qdOZo3aEs=';

// const manager = new ktuvitManager(await ktuvitManager.getLoginCookie("shlori295@gmail.com", hashedPassword));

try{
    const loginCookie = "u=####g=####";
    const manager = new ktuvitManager(loginCookie);
    
    const pulpFictionKtuvitID =  manager.getKtuvitID({imdbId: 'tt4154796', name: 'Avengers Endgame'});
    console.log(pulpFictionKtuvitID);
    
    
    const pulpFictionsSubtitles =  manager.getSubsIDsListMovie(pulpFictionKtuvitID);
    
    console.log(pulpFictionsSubtitles) //Will print:
}

catch(ex){
    console.log(ex)
}

