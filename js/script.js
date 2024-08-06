// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

        let self = this;
        let name = "";

        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;
              console.log(self.name);

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + self.name + "!</h2>";
            });

        
      });
  }
);





