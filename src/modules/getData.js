const getData = () => {
return fetch('https://o-zone-adf85-default-rtdb.firebaseio.com/goods.json')
  .then((response) => response.json())
  
    
}
export default getData