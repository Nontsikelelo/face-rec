const express = require( 'express' )
const app = express();
const fileUpload = require( 'express-fileupload' );
const bodyParser = require( 'body-parser' )
app.use( bodyParser.json() )
app.use( fileUpload( {
  createParentPath: true
} ) );

app.post( '/upload', function ( req, res ) {
  if ( !req.files ) {
    console.log( `No files` )
    return res.status( 400 )
      .send( 'No files were uploaded.' );
  } else {
    req.files.image.mv( 'FacialRecognition/test_image.png' )

  }
} );

app.listen( 3000, function () {
  console.log(
    `
            parse - server - example running on port 3000. ` );
} );
