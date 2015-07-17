function basicAdd ( ) {
  var numbers = arguments;
  var sum = _(numbers).reduce( 
    function (total, each) { return total + Number(each) }
    , 0);
  return sum;
}

function add ( ) {
  var numbers = arguments;
  var sum = basicAdd.apply( this, numbers );

  add.value = function ( ) {
    return sum;
  };

  add.add = add;

  return add;
}