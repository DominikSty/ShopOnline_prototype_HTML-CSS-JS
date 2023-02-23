  // Object
	const item = {
    	name: "",
    	description: "",
    	price: 0,
    	picture: ""
	}
	// Cart
	cart_name = new Array();
	cart_price = new Array();
	var sum = 0;

	// Window after pressing the product
	function itemStart(){
    	// Display of product data
      document.getElementById("pictureItem").src = item.picture;
      document.getElementById('nameItem').innerHTML = item.name;
      document.getElementById('descriptionItem').innerHTML = "<b>Description:</b><br>"+item.description;
      document.getElementById('priceItem').innerHTML = "Price: "+item.price+" ";
      // Show window
      document.getElementById("window").style.visibility = 'visible';
      document.getElementById("window_title").style.visibility = 'visible';
    }
    function windowReset(){
    	document.getElementById("window").style.visibility = 'hidden';
        document.getElementById("window_title").style.visibility = 'hidden';
        document.getElementById("pictureItem").src = "";
        document.getElementById('nameItem').innerHTML = '';
        document.getElementById('descriptionItem').innerHTML = '';
        document.getElementById('priceItem').innerHTML = '';
    }
    // Button action
    function closeItem(){
    	windowReset();
    }
    // Adding an item to ArrayList
    function addToCartItem(){
    	cart_name.push(item.name);
    	cart_price.push(item.price);
    	windowReset();
    }
    // Display items in the shopping cart window after activating the button
    function cartItem(){
    	if(cart_name.length==0){
    		document.getElementById('textarea_item').value = 'No items in your cart.';
    	}else{
    		sum = 0;
    			cart_name.forEach(function(item, index, array) {
  					document.getElementById('textarea_item').value += item + "\n" + cart_price[index] + " \n\n";
  					sum += cart_price[index];
				});
    	}
    	document.getElementById('product_list_sum').innerHTML = "sum: "+sum+"";
    	document.getElementById("windowCart").style.visibility = 'visible';
        document.getElementById("window_title").style.visibility = 'visible';
    }
    function clearCartItem(){
    	// Cleaning the shopping cart list
    	document.getElementById('textarea_item').value = "";
    	// Cleaning variable cart price i name
    	cart_name = [];
    	cart_price = [];
    	sum = 0;
    	cartItem();
    }
    function buyItem(){
    	// Buy action
    	alert("You buy products of value: "+sum+". The buy action is not implemented because it is not a real site :)");
    }
    function closeCartItem(){
    	document.getElementById("windowCart").style.visibility = 'hidden';
        document.getElementById("window_title").style.visibility = 'hidden';
        document.getElementById('textarea_item').value = "";
        document.getElementById('product_list_sum').innerHTML = "sum: 0,00";
    }
// ITEM-JS-START
    function item_1(){
      item.name = "Item_1";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 397.25;
      item.picture = "files/image/item1.png";
      itemStart();
    }

    function item_2(){
      item.name = "Item_2";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 42.59;
      item.picture = "files/image/item2.png";
      itemStart();
    }

    function item_3(){
      item.name = "Item_3";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 449.78;
      item.picture = "files/image/item3.png";
      itemStart();
    }

    function item_4(){
      item.name = "Item_4";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 329.37;
      item.picture = "files/image/item4.png";
      itemStart();
    }

    function item_5(){
      item.name = "Item_5";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 199.99;
      item.picture = "files/image/item5.png";
      itemStart();
    }

    function item_6(){
      item.name = "Item_6";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 168.99;
      item.picture = "files/image/item6.png";
      itemStart();
    }

    function item_7(){
      item.name = "Item_7";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 199.83;
      item.picture = "files/image/item7.png";
      itemStart();
    }

    function item_8(){
      item.name = "Item_8";
      item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex turpis, imperdiet eget hendrerit eu, sollicitudin a urna. In facilisis, elit in fermentum vulputate, purus ante convallis lacus, blandit maximus massa nisi in massa."
      item.price = 450.68;
      item.picture = "files/image/item8.png";
      itemStart();
    }
// ITEM-JS-END
