var express = require('express');
var app = express();

// Allows us to view pages without ejs extension
app.set("view engine", "ejs");

app.get('/', function(req, res){
   res.render("landing"); 
});

app.get("/books", function(req, res){
    var books = [
        { title: "Lucky Jim",
          author: "Kingsley Amis",
          image: "https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141182599.jpg",
          rating: 4.1
        },
        { title: "Great Expectations",
          author: "Charles Dickens",
          image: "https://www.penguin.co.uk/content/dam/catalogue/pim/editions/29/9780141439563/cover.jpg",
          rating: 4.4
        },
        { title: "Gorky Park",
          author: "Martin Cruz Smith",
          image: "https://images-na.ssl-images-amazon.com/images/I/417FQcPpGZL._SX326_BO1,204,203,200_.jpg",
          rating: 3.8
        }
      ]
    
    res.render("books", {books: books});
  
});

app.get('/members', function(req, res){
    
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Book swap up and live!") 
});