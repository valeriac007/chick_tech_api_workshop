$(document).ready(function(){

  console.log("Document is ready!");

  // when any 'p' tag is clicked, this function runs
  $("p").click(function(){
    console.log("p tag was pressed");
    $("img").hide(); // hide all 'img' tags
  });

  // when the tag with the id 'call-api' is clicked, this function runs
  $("#call-api").click(function(){
    console.log("call-api button was pressed");

    // call the API
    var url = "https://api.nasa.gov/planetary/apod?api_key	=B8UNxTRKr7FDWLcVDCYgJTpbr1Lpg6FnkpqGT2qE&date=2002-1-25&hd=true"; // add your API's URL here!
    $.get(url, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        console.log(data);
        $("img").attr("src", data.url);
        $("p").html(data.explanation);

        // do something cool with the data here!!!
    });

  });

});
