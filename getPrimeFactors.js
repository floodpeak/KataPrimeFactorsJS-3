export default (number)=>{
  const result = []

  for(let base = 2;base < number;base++){
    while(number % base === 0){
      result.push(base)
      number /= base
    }
  }
  if(number >1){
    result.push(number)
  }
  return result
}
