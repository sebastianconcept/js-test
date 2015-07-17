function basicAdd ( ) {
  var numbers = arguments;
  var sum = _(numbers).reduce( 
    function (total, each) { return total + Number(each) }
    , 0);
  return sum;
}

function add ( ) {
  var numbers = arguments;
  var answer = {};
  var sum = 

  answer.value = function ( ) {
    return answer.total;
  };
  answer.add = function ( ) {
    var args = arguments;
    var partial = basicAdd.apply( this, args );
    answer.total = ( answer.total || 0 ) + partial;
    return answer;
  };

  answer.add.apply( this, numbers );

  return answer
  ;
}