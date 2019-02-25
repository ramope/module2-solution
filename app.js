(function(){
'use strict';

	


angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){


var tobuylist=this;

tobuylist.items=ShoppingListCheckOffService.getItems();

tobuylist.buyItem = function (itemIndex,itemName,itemQuantity) {
    ShoppingListCheckOffService.buyItem(itemIndex,itemName, itemQuantity);
  
    tobuylist.Message=ShoppingListCheckOffService.configureMessage(tobuylist.items.length);
    tobuylist.myStyle1={"color":"red","font-size" : "20px"};
  }


   

}



AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];


function AlreadyBoughtController(ShoppingListCheckOffService){

var bought=this;


  
  bought.bitems =  ShoppingListCheckOffService.boughtItems();
  bought.bmessage=ShoppingListCheckOffService.configurebmessage(bought.bitems.length);
  bought.myStyle2={"color":"blue","font-size" : "20px"};
 
  
}



function ShoppingListCheckOffService(){

var service=this;



var items=[
{
	name:"strawberry",
    quantity:"2"
},
{
    name:"apple",
    quantity: "3"
},
{   
	name:"lemon",
    quantity: "4"
},
{
    	name:"fig",
    	quantity:"5"
},
{
    	name:"plum",
    	quantity:"6"
}];



    
    service.getItems = function () {
    return items;
  };

var bitems=[];

  
  

  service.buyItem = function (itemIndex,itemName,itemQuantity) {
  	
  	/*if(bitems==[]){var emptyMessage="Nothing bought yet."}*/
  	/*	else{emptyMessage=undefined}*/
  	/*    var emptyMessage="Nothing bought yet."*/
       
  		var bitem = {
      name: itemName,
      quantity: itemQuantity
    };
    bitems.push(bitem);
    
    
    
    
    items.splice(itemIndex, 1);
    
    
   
    return items;
  };

  service.configureMessage=function(buylist){
  
    if(buylist==0){var Message="Everything is bought!"}
    
  	return Message;
  }





  service.configurebmessage=function(buylist){
  	var bmessage="Nothing is bought yet."
  	 	
  	 	return bmessage;
  	 
  };

  service.boughtItems = function () {
  	
    return bitems;


  };

}





})();