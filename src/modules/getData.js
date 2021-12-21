const getData = () => {
return fetch('https://o-zone-b6222-default-rtdb.firebaseio.com/goods.json')
  .then((response) => response.json())
  
    
}
export default getData