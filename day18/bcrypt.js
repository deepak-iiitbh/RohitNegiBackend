const bcrypt = require("bcrypt" ) ;
const pass = "deepak@321"

async function  generate(){
    const salt = await bcrypt.genSalt(10)
    // console.time("hello deepak" ) ;
  const hashcode = await bcrypt.hash(pass , salt) ;
    // console.timeEnd("hello deepak") ;

    const cheking = await bcrypt.compare( pass ,hashcode ) ;
    if(cheking){
        console.log("password matched successfully") ;
    }
  console.log(hashcode) ;
}


generate() ;
