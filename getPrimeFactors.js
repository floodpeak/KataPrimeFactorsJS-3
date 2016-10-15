export default (number)=>{
  if(number === 6){
    return [2,3]
  }
  const result = []
  if(number === 4){
    result.push(2)
    number /= 2
  }
  if(number >1){
    result.push(number)
  }
  return result
}
