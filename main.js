function main(){
	return init();
  
	function init(){
  var x = {
    item6:'-from x x=6',  item3:'-from x =3 ',
    list: ['item2','item3']
  }
  var swager = {
    item1:'swager_1',item2:'swager_2',item3:'swager_3',item5:'swager_5',item6:'swager_6',
  }; 	
    
  	orderByList(x,swager);
  }//init END
  
  function orderByList(x,swager){
  	var xArr = Object.keys(x),
    		sw = Object.keys(swager);    
    console.log('sw  :',sw);
    console.log('xArr:' , xArr);
    console.log('list:', x.list);
    var inList = false,
        contEmpty = 0;
    
   
    for(var i=0; i<sw.length; i++){
    
    //show items in list first
    	if(!inList){
      for(var k=0; k<x.list.length; k++){    
        console.log('   sort by x.list:', x.list[k] , (x[x.list[k]])?x[x.list[k]]: swager[x.list[k]] );
        if(k < x.list.length) inList = true; //???test me x.list.length+1
        }//end for x.list
    	}      
      
      //show items that not in list
    	for(var j=0; j<x.list.length; j++){
        if(sw[i] !== x.list[j]){
        	contEmpty++;
          if(contEmpty === x.list.length){
  					console.info('**not in list ['+j+']:', sw[i] , swager[sw[i]] );
          }
        }
        
     	}//end for xArr      
      contEmpty =0;
     }//end for sw
      
  }
  
}//main END

main();
