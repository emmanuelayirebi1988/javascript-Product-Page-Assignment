

//productsItem starts here
class ProductsItem{
  products = [
    new Products(
      'Suree shoes',
      59.99,
      5,
      'US made suree shoes women shoes ',
      'assets/womenslip.jpg', 
      
      
    ),
    new Products(
      'BOLOVE Smart Watch',
      213.65,
      4,
      'Bulove men futuro black bial smart watch with a 2years warranty',
      'assets/smartWatch.jpg',
    ),
    new Products(
      'Buff Shoe Polish',
      89.99,
      4,
      'Shoe travel set for real gentle men',
      'assets/menPolish.jpg'
    ),

    new Products(
      'Trotters mika boot in Shoe',
      55.55,
      4,
      'US made stock Trotters mika boot women shoe',
      'assets/womenBoot.jpg'
    ),

    new Products(
      'T-shirt casaual Blouse',
      60.99,
      4,
      'US made T-shirt casaual women',
      'assets/skirtBlouse2.jpg'
    ),

    new Products(
      'grand Sports trainer Shoe',
      45.99,
      4,
      'US made sports trainer sneaker shoe for men and female',
      'assets/menTrainer.jpg'
    ),

  ];


  //The render product method
  renderProduct(){
    const parentDiv = document.querySelector('.container');
    const divOfProds = document.createElement('div');
    divOfProds.className = "div-of-prods"
    const listOfProds = document.createElement('ul');
    listOfProds.className = 'list-of-prods';
        for(let product of this.products){
          let item = new ProductInfo(product);
          const prodElement = item.renderElement();
          listOfProds.append(prodElement);
        }

      
        parentDiv.append(divOfProds);
        divOfProds.append(listOfProds);

        divOfProds.insertAdjacentHTML('afterbegin',
        '<div  class="info-div"> <h2 class="caption"> Recent Products </h2> <a href=""> <h2 class=" caption" id="cartView"> View CartItems </h2> </a> </div>');
    
  }

}



//Page UI class
class WebUI  extends ProductsItem{

      constructor(){
        super();
        this.containerDiv = document.querySelector('.container');
        this.body = document.querySelector('body');
      }
  renderUI(){

  
    // console.log(containerDiv);


    //Overlay starts here
    

    const overLay = document.createElement('div');
    overLay.id = 'backdrop';
    
    //creating navigation for the website
    const navigation = document.createElement('div');
    navigation.className='nav-bar';
     navigation.innerHTML= `
       <div class="logo">
        <img src="assets/logo.jpg" alt="logo Image"/>
       </div>
       <div class="nav-menu">
        <ul>
          <li class="navButton">Home</li>
          <li class="navButton">About</li>
          <li class="navButton">Products</li>
          <li class="navButton">Store Listing</li>
          <li class="navButton">Sign Up</li>
  
        </ul>
       </div>
  
       <div class="searchDiv">
           <input type="text" name="SearchItem" id="search">
           <button> Search </button>
       </div>
     
     `;
     
     //Content menu starts here
     const containerItem = document.createElement('div');
     containerItem.className ='containerItem';
     containerItem.innerHTML = `
         <div class="containerText">
              <h3>Best Selling Products</h3>
              <p> Consider purchasing our 3 in 1 unisex T-Shirts
               at a a very low price and get it delivered to your 
               door step. </p>
  
          <button> Shop now </button>     
         </div>
     
     `;
  


     //cartItems div container starts here
     const cartDivContainer = document.createElement('div');
     cartDivContainer.className = 'cart-Container';

     
  
     //footer starts here
     const footer = document.createElement('div');
     footer.className = 'footer';
     footer.innerHTML = `
         <div class="footer-div">
            
         </div>
     
     `;
  




     //Appending elements to ParentDivs for rendering
     this.body.append(overLay);
     this.containerDiv.appendChild(navigation);
     this.containerDiv.appendChild(containerItem);
    //  console.log( containerDiv.children.length+1);
     super.renderProduct();
   
    
     //adding cart containerDiv
     this.containerDiv.insertAdjacentHTML('beforebegin',
     '<div  class="cart-Container"></div>');


     this.containerDiv.append(footer)
    
      
  }


}


//products class starts here
class Products{
  constructor(title,price,stock,description,imageUrl){
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.description = description,
    this.imageUrl = imageUrl
  }
}

class ShoppingCart{
  static cartItems = [];

  static addNewItem(item){
    this.cartItems.push(item);
  }

  closeCartItems(){
       
        let container = document.querySelector('.cart-Container');
        let backdrop = document.querySelector('#backdrop');
        container.classList.remove('visible');
        backdrop.classList.remove('visible');
        
  }

  //The next method will be used to render product Items to the screen
  renderCartItems(){
        const ui = new WebUI();
       const cartDiv = ui.body.querySelector('.cart-Container');
       cartDiv.classList.add('visible');
       console.log(cartDiv);
       cartDiv.innerHTML = `
       <div class="cart-Heading">   
           <h3>  Product </h3>

           <h3>  Price </h3>

           <h3>  Quantity </h3>

           <h3>  Total </h3>
       
       </div>

       
       `;
       

       //Renders each individual product
      const prods = document.createElement('div')
      prods.className='individual-products';
       Object.values(ShoppingCart.cartItems).map(item =>{
           console.log(item.imageUrl);
           
           prods.innerHTML = `
               <img class="delete-img" src="assets/delete.png"   alt="" />
               <img class="prod-image" src="GHC${item.imageUrl}"   alt="" />
               <h4> {item.title} </h4>
               <h4 class="price">GHC<span>${item.price} </span></h4>
               
               <div class='quantityDiv'>
                <img id='minus' src='assets/minus.png' />
                <input type="number" name="quantity" min="0" max="100" value="1" id="num" >
                <img id='add' src='assets/plusIcon.png' />
               </div>


               <h4 class="quantity"> \GHC<span>${item.price}</span></h4>
               

            
 

           `;
        
        
        cartDiv.append(prods)
        
       });
       
       
       //Adding a button to continue shoping and total Items div
       const cartFooterDiv = document.createElement('div');
       cartFooterDiv.className = 'cart-footer';
       cartFooterDiv.innerHTML = `
           <h5 class="total-text"> Total: <span>  </span> </h5>
           <h5 class="continue-text"> Continue ShoppingCart </h5>
           <button class="btn-checkout"> CheckOut </button>


       `;

       cartDiv.append(cartFooterDiv);

       //Adding Event listeners to each Items
       document.querySelector('#minus').addEventListener('click',this.decreaseQuantity);
       document.querySelector('#add').addEventListener('click',this.increaseQuantity)
       cartDiv.querySelector('.continue-text').addEventListener('click',this.closeCartItems)
       
       //Updating the total text
       const itemInCart = cartDiv.querySelectorAll('.quantityDiv #num');
       
       this.calculateTotal(itemInCart);
  }

   


  increaseQuantity(){
    //  const ancestoryContainer = document.querySelector('.individual-products')
    

    let quantity = parseInt(this.previousElementSibling.value);
    let val = (quantity == "") ? 1 : quantity + 1;
    this.previousElementSibling.value = val;
     

  }

  decreaseQuantity(){
    
    let quantity = parseInt(this.nextElementSibling.value);
    if(quantity != 1){
      let val = (quantity == "") ? 1 : quantity - 1;
      this.nextElementSibling.value = val;
    }
    
    
 }

 calculateTotal(quantity){
    let  totalSum = 0;
     quantity.forEach(item => console.dir(item));
     
}

}

class CartComponents extends WebUI{
    backdropOverlay = document.querySelector('#backdrop');
    
   constructor(product){
     super();
     this.product = product;
   }

 showBackDropOverlay(){
    // this.backdropOverlay.id('visible');
    console.log('I am executing')
    this.backdropOverlay.classList.add('visible');
    // this.containerDiv.innerHTML = '';
    
 }

 addToCart(){
    console.log("Adding to CART");
    this.showBackDropOverlay();
    // console.log(this.product);

     const shoppingCart = new ShoppingCart();
     ShoppingCart.addNewItem(this.product);
     console.log(shoppingCart.cartItems);
     shoppingCart.renderCartItems();
    

    
 }

}



//Renders individual products and returns it to the product Items
class ProductInfo extends CartComponents{
    constructor(product){
      super();
      this.product = product;
    }

    renderElement(){
      let list = document.createElement('li');
      list.className = 'products-info';
      list.innerHTML = `
         <div>
            <img src="${this.product.imageUrl}" alt="GHC${this.product.title}"/>
            <div class="product-info-content">
              <h2> ${this.product.title} </h2>
              <h3> GHC${this.product.price}  </h3>
              <p>  GHC${this.product.description} </p>
            </div>
            <button>  Add to Cart </button>
         </div>
      
      `;
      
       const addtoCartButton = list.querySelector('button');
       addtoCartButton.addEventListener('click',this.addToCart.bind(this))
     return list;
    }
}




// let productItem = new ProductsItem();
// productItem.renderProduct();
// renderUI();





new WebUI().renderUI();