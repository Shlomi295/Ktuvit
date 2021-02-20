const { getLoginCookie } = require('ktuvit-api');
const ktuvitManager = require('ktuvit-api');
const fs = require('fs');
require('./managerHandler')
var passwordHash = require('password-hash');

var hashedPassword = 'ChOCihy+fsXuA2R34RBCp7sFadzxMJ1u75qdOZo3aEs=';

// const manager = new ktuvitManager(await ktuvitManager.getLoginCookie("shlori295@gmail.com", hashedPassword));

try{
    const manager = new ktuvitManager('u=###&g=###');
 
    // const pulpFictionKtuvitID =  manager.getKtuvitID({imdbId: 'tt0110912', name: 'Pulp Fiction'});
    let pulpFictionKtuvitID =  getIdForMovie('tt0110912','Pulp Fiction');

     manager.getSubsIDsListMovie(pulpFictionKtuvitID).then(response => console.log(response));
    // const firstSub = manager.getSubsIDsListMovie(pulpFictionKtuvitID)[0].then(response => console.log(response));
     
    // manager.downloadSubtitle(pulpFictionKtuvitID, firstSub.id, function(buffer){
    //   fs.writeFile('pulp-fiction.srt', buffer, function (err) {
    //       if (err) return console.log(err);
    //       console.log('SRT is ready!');
    //       });
    // });

    
}

catch(ex){
    console.log(ex.message)
}





