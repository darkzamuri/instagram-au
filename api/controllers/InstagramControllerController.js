/**
 * InstagramControllerController
 *
 * @description :: Server-side logic for managing instagramcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var ig = require('instagram-node').instagram();

// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.

ig.use({ client_id: '5af3028bb8f043e3bdfb4e8040a06fc3',
         client_secret: '552f464ed0c44e7dacda336887ef5a32' });
//ig.use({ access_token: '1474334019.5af3028.0315b2be44974a058b64a6c9c60f0b40' });

var redirect_uri = 'http://localhost:1337/instagramController/comment';
module.exports = {
	code: function (req, res) {
	  res.redirect(ig.get_authorization_url(redirect_uri, { scope: ['relationships' ,'follower_list'  ,'basic','likes' , 'public_content' , 'comments'], state: 'a state' }));
  	},
  	comment: function (req, res) {
	  ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
	    if (err) {
	      console.log(err.body);
	      res.send("Didn't work");
	    } else {
	      

	      res.send(result.access_token);
	    }
	  });
  	},
  	medias: function (req, res) {
  	  ig.use({ access_token: '1474334019.5af3028.0315b2be44974a058b64a6c9c60f0b40' });
  	  //ig.tag('tag', function(err, result, remaining, limit) {
  	  ig.tag_media_recent('caracas', [], function(err, medias, pagination, remaining, limit) {
  	  //ig.tag_search('caracas', function(err, result, remaining, limit) {
  	  //ig.media_popular(function(err, medias, remaining, limit) {	
  	  //ig.user_media_recent('1474334019', [] ,	function(err, medias, pagination, remaining, limit) {
  	  //ig.user('1474334019', function(err, result, remaining, limit) {
  	  //	ig.user_search('darkzamuri', function(err, result, remaining, limit) {
	  	if (err) {
	      console.log(err);
	      res.send("Didn't work");
	    } else {
	      //medias.forEach(function(item) { 
	      /* etc etc */
	      	
	      	//ig.add_comment(medias[0].id, 'prueba', function(err, result, remaining, limit) {
	      	//	if (err) {
			  //    console.log(err);
			    //  res.send("Didn't work");
			   // }
			   // else {
			    	res.send(result);
			   // }
	      	//}); 
	      	//res.send(item.id);
	  	 //});
	      
	    }
	  });
  	}, 
};

