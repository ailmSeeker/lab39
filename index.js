function receivesAFunction(x){
  x();
}

function returnsANamedFunction(){
  return function x(){return 0;}
}

function returnsAnAnonymousFunction(){
  return () => {return 0;}
}
