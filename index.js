function basicAdd (  ) {
  var numbers = arguments;
  var sum = _(numbers).reduce( 
    function (total, each) { return total + Number(each) }
    , 0);
  return sum;
}

function add(){
  var numbers = arguments;
  return basicAdd.apply( this, numbers );
}