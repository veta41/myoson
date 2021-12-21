const getData = () => {
return fetch('https://o-zone-b6222-default-rtdb.firebaseio.com/')
  .then((response) => response.json())
  
    
}
export default getData