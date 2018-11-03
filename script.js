var books= [
  {name: "Skyward", price: "15", image: "https://images-na.ssl-images-amazon.com/images/I/510KjgMXPGL._SX331_BO1,204,203,200_.jpg"},
  {name: "What Do You Care What Other People Think?: Further Adventures of a Curious Character", price: "10", image: "https://images-na.ssl-images-amazon.com/images/I/51chg7QzXvL._SX331_BO1,204,203,200_.jpg"},
  {name: "The Fork, the Witch, and the Worm: Tales from Alagaësia ", price: "11", image: "https://images-na.ssl-images-amazon.com/images/I/41WdLZyWHgL._SX351_BO1,204,203,200_.jpg"},
  {name: "Programming Computer Vision with Python: Tools and Algorithms for Analyzing Images", price: "37", image: "https://images-na.ssl-images-amazon.com/images/I/51a-NURM4tL._SX377_BO1,204,203,200_.jpg"},
  {name: "The Night Angel Trilogy: 10th Anniversary Edition", price: "22", image: "https://images-na.ssl-images-amazon.com/images/I/41FDx39%2B9kL._SX327_BO1,204,203,200_.jpg"},
  {name: "The Core: Book Five of The Demon Cycle", price: "18", image: "https://images-na.ssl-images-amazon.com/images/I/51ZEQ52VWJL._SX327_BO1,204,203,200_.jpg"},
  {name: "The Lady Or The Tiger And Other Stories", price: "39", image: "https://images-na.ssl-images-amazon.com/images/I/31DSwRwR0PL._SX312_BO1,204,203,200_.jpg"},
  {name: "The Way of Shadows: The Graphic Novel (The Night Angel Trilogy)", price: "20", image: "https://images-na.ssl-images-amazon.com/images/I/61ujg8pooAL._SX340_BO1,204,203,200_.jpg"},
  {name: "Asimov's New Guide to Science (Penguin Press Science)", price: "27", image: "https://images-na.ssl-images-amazon.com/images/I/51UboKLTSlL._SX320_BO1,204,203,200_.jpg"},
  {name: "The Children of Hurin", price: "21", image: "https://images-na.ssl-images-amazon.com/images/I/41FwLxwd-pL.jpg"},
];

var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):
{
  items: [],
  total: 0
};

localStorage.setItem('cart', JSON.stringify(cart));

$(document).ready(function(){
//combo items
  books.forEach(function (book, index){
    var colDiv= $('<div>').addClass('col-md-6');
    var cardDiv= $('<div>').addClass('card');
  
    var bookImage= $('<img>').addClass("card-img-top");
    bookImage.attr ('src', book.image);
    cardDiv.append (bookImage);
  
    var cardBodyDiv= $('<div>').addClass('card-body');
    cardDiv.append(cardBodyDiv);
  
    var bookTitle= $('<h5>').addClass('card-text').text(book.name);
    cardBodyDiv.append(bookTitle);
  
    var bookPrice= $('<p>').addClass('card-text').text("$ " + book.price);
    cardBodyDiv.append(bookPrice);
  
    var addToCart= $('<button>').addClass ("btn btn-primary").text("Add to Cart").attr('id', index);
    addToCart.click(function(event){
      var cartItem= books[event.target.id];
      cartItem.quantity= 1;
      cart.items.push(cartItem);
      console.log(cartItem.price);
      cart.total= (parseInt (cart.total) + parseInt(cartItem.price)).toString();
      $("#total").text(cart.total);
      localStorage.setItem('cart', JSON.stringify(cart));
    });
    cardBodyDiv.append(addToCart);
    
    colDiv.append(cardDiv);
    $("#book-items").append(colDiv);
    });
    
    $("#total").text(cart.total);
    
    //cart items
    cart.items.forEach(function(item, index){
    var colDiv= $('<div>').addClass('col-md-6');
    var cardDiv= $('<div>').addClass('card');
    
    var comboImage= $('<img>').addClass("card-img-top");
    comboImage.attr('src', item.image);
    cardDiv.append(comboImage);
    
    var cardBodyDiv= $('<div>').addClass('card-body');
    cardDiv.append(cardBodyDiv);
    
    var comboTitle= $('<h5>').addClass('card-title').text(item.name);
    cardBodyDiv.append(comboTitle);

    var comboPrice= $('<p>').addClass('card-text').text ("$"+ item.price);
    cardBodyDiv.append(comboPrice);
  
    colDiv.append(cardDiv);
    $('#cart-row').append(colDiv);
  });
    
    
    $("#showCartBtn").click(function(){
      $("#cart").show();
      $("#book").hide();
      $("#showCartBtn").show();
      $("#welcome").hide();
      $("#available").hide();
    });
  
    $("#hideCartBtn").click(function(){
      $("#cart").hide();
      $("#showCartBtn").show();
      $("#book").show();
      $("hideCartBtn").hide();
    });
});
    
    