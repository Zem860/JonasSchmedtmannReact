import { useEffect } from "react";
export function useKey(key, action){
    useEffect(()=>{
        const callback = (e)=>{
          if (e.code.toLowerCase() === key.toLowerCase()){
            action();
          }
        }
        document.addEventListener('keydown', callback)
        return ()=>{
          document.removeEventListener('keydown', callback);
        }
      },[action, key]) //how we handle keypress event in react[go back to DOM cuz we interact with DOM(outside)]
}