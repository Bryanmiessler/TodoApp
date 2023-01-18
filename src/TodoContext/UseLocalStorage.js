import { useState, useEffect } from "react";


function UseLocalStorage(itemName,initialValue){

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);


  useEffect(() => {
    setTimeout(() =>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        }else {
          parsedItems = JSON.parse(localStorageItem);
        }

        setItem(parsedItems);

      }catch(error) {
        setError(error);
      }finally{
        setLoading(false);
      }
    }, 2000);
  })
  

  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }

}

export {UseLocalStorage};