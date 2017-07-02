
$(document).ready(function(){
	var users_array=["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion","comster404",  "storbeck", "habathcx","brunofin", "RobotCaleb", "noobs2ninjas"];
   
    users_array.forEach(function(value){
    
    var url="https://wind-bow.glitch.me/twitch-api/users/"+value;
	var url1="https://wind-bow.glitch.me/twitch-api/streams/"+value;

      $.getJSON(url,function(json){

		json=JSON.stringify(json);
		json=JSON.parse(json);
		var notfound=false;
		if(json.hasOwnProperty("logo") )
		{
			if(json.logo===null)
				var logo="http://utcfs.com.au/Images/ProductImages/Large/IMAGENOTAVAILABLE.jpg";
			else
			var logo=json.logo;
		}
		else
		{
			var logo="http://utcfs.com.au/Images/ProductImages/Large/IMAGENOTAVAILABLE.jpg";
			
		}
		if(json.hasOwnProperty("display_name") )
		{
			var name=json.display_name;
		}
		else
		{
			var name=value;
			var notfound=true;
			
		}

		 $.getJSON(url1,function(json1){
        
		json1=JSON.stringify(json1);
		json1=JSON.parse(json1);
        
	    
		
		if(json1.stream !==null)
		{

			$('#user').append('<div class="row text-center"><div id="user_name" class="col-md-6"><img src='+logo+
				'></img><p><a href="https://www.twitch.tv/'+value+'" target="blank">'+name+'</a></p></div><div class="col-md-6" id="status"><p>'+
				name+' is online</p><p>Live: '+json1.stream.channel.status+'</p></div></div>');
		}
		else
		{
			if(notfound===false)
			$('#user').append('<div class="row text-center"><div id="user_name" class="col-md-6"><img src='+logo+
				'></img><p><a href="https://www.twitch.tv/'+value+'" target="blank">'+name+'</a></p></div><div class="col-md-6" id="status"><p>'+
				name+' is offline</p></div></div>');
		    else
		    $('#user').append('<div class="row text-center"><div id="user_name" class="col-md-6"><img src='+logo+
				'></img><p><a href="https://www.twitch.tv/'+value+'" target="blank">'+name+'</a></p></div><div class="col-md-6" id="status"><p>'+
				name+' is offline</p><p>This user has  has closed their Twitch account (or the account never existed)</p></div></div>');
		}
  	});
      });

	 


    });
 });
