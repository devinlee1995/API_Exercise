$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      'q'              : $('input[name=q]').val(),
      'type'             : $('input[name=type]').val()
    };
    $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/search',
      data: formData,
      success: function (response) {
        var artistArray= response.artists.items; 
    
        for(var i = 0 ; i<artistArray.length; i++){
          for(var j = 0; j<artistArray[i].images.length; j++){
            console.log(artistArray[i].images[j].url);
             var img = new Image();
             var name = document.createTextNode(artistArray[i].name);
             img.src = artistArray[i].images[j].url;
             img.width = artistArray[i].images[j].width;
             img.height = artistArray[i].images[j].height;
              div1.appendChild(img);
              div1.appendChild(name);

          }
        }
      }
    });
  });
});

//$.each(item, function(key,value){
  //console.log("key: " + key);
  //console.log("value: " + value);
//})