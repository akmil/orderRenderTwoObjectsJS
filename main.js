/**
* Compare two obj. first obj is full, second - is addition and contain 'listOrder' array with keys of Obj. Should be sorted 'listOrder'
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
  
  //show log
  function log() {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i] );
      $('body')      
      	.append( "<strong style='color: black'>"+arguments[i] + ' ' + "</strong>" );
      }
      $('body').append('<br>');
  }
  function info() {
    for (var i = 0; i < arguments.length; i++) {
        console.info(arguments[i] );
        $('body').append(arguments[i] + ' ').css({'color':'gray'});
        }
        $('body').append('<br>');    
  }
  //show log end
    
  //sorting
  //swager - is main Json file
  //x - additional Json file
  //if in 'swager' not found some filed from swager.list then search it in 'x'
  function orderByList(x,swager){
  	var xArr = Object.keys(x),
    		sw = Object.keys(swager);    
    
    info('. . . . main Json have such keys : ' , xArr.join(', '));
    info('additional Json have such keys : ' , sw.join(', '));    
    info('order list:', x.list.join(', '));
    info('...........');
    var inList = false,
        contEmpty = 0;
    
   
    for(var i=0; i<sw.length; i++){
    
    //show item in list first
    	if(!inList){
      for(var k=0; k<x.list.length; k++){    
        log('__ sort by x.list:', x.list[k] ,'val = ', (x[x.list[k]])?x[x.list[k]]: swager[x.list[k]] );
        if(k < x.list.length) inList = true; //???test me x.list.length+1
        }//end for x.list
    	}      
      
      //show item that not in list
    	for(var j=0; j<x.list.length; j++){
        if(sw[i] !== x.list[j]){
        	contEmpty++;
          if(contEmpty === x.list.length){
  					log('**not in list ['+j+']:', sw[i] ,'val = ', (x[sw[i]])? x[sw[i]]: swager[sw[i]]);
          }
        }
        
     	}//end for xArr      
      contEmpty =0;
     }//end for sw
      
  }
  
}//main END

main();

