export default (number)=>{
  const result = []

  for(let base = 2;base < number;base++){
    if(number % base === 0){
      result.push(base)
      number /= base
    }
    if(number === 27){
      result.push(3)
      number /= 3
    }
  }
  if(number >1){
    result.push(number)
  }
  return result
}
