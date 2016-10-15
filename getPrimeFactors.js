export default (number)=>{
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
