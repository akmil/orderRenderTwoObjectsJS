/**
* Compare two obj. first obj is full, second - is addition and contain 'listOrder' array with keys of Obj. Should be sorted 'listOrder'
* AC - can't be used Array.map() or forEach() or for(key in obj) constructions. Use only standart for(i++) loop
*/
function main(){
	return init();

	function init(){
	  var console1 = {};
	  var mainJson = {
	    item1:'swager_1',item2:'swager_2',item3:'swager_3',item5:'swager_5',item6:'swager_6',
	  }; 
	  var metaJson = {
	    item6:'from x =6',  item3:'from x =3 ',
	    list: ['item2','item3']
	  }  	
    
  	orderByList(metaJson,mainJson);
  }//init END
  
    
  //sorting
  //swager - is main Json file
  //x - additional Json file
  //if in 'swager' not found some filed from swager.list then search it in 'x'
  function orderByList(x,swager){
  	var xArr = Object.keys(x),
		sw = Object.keys(swager),
		inList = false,
        contEmpty = 0;
    
    console.log('. . . . main Json have such keys : ' , xArr.join(', '));
    console.log('additional Json have such keys : ' , sw.join(', '));    
    console.log('order list:', x.list.join(', '));
    console.log('...........');    
   
    for(var i=0; i<sw.length; i++){
    
    //show item in list first
    	if(!inList){
      for(var k=0; k<x.list.length; k++){    
        console.log('__ sort by x.list:', x.list[k] ,'val = ', (x[x.list[k]])?x[x.list[k]]: swager[x.list[k]] );
        if(k < x.list.length) inList = true; //???test me x.list.length+1
        }//end for x.list
    	}      
      
      //show item that not in list
    	for(var j=0; j<x.list.length; j++){
        if(sw[i] !== x.list[j]){
        	contEmpty++;
          if(contEmpty === x.list.length){
		console.log('**not in list ['+j+']:', sw[i] ,'val = ', (x[sw[i]])? x[sw[i]]: swager[sw[i]]);
          }
        }
        
     	}//end for xArr      
      contEmpty =0;
     }//end for sw
      
  }
  
}//main END

main();

