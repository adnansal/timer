const $h1=document.querySelector('#timer')

const pre=(dat)=>{
    const $pre=document.querySelector('#pre')
    $pre.innerText=dat
}
let i = 10;

setTimeout(function run() {
    if(i>0){
      const $pre=document.querySelector('#pre')
      $pre.innerText=i
      i--;
      setTimeout(run, 1000); 
    }
    else {
      const $pre=document.querySelector('#pre')
      $pre.innerText="Happy Independence Day"
    }
    
  }, 1000)


