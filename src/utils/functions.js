import { useState,useEffect } from "react";

import { getDatabase,onValue,push,query,ref,set } from "firebase/database";

import { successNote } from "./customTostify";
import firebase from "./firebase";
export const addInfo=(id,name,email,phone,age)=>{
  const db=getDatabase();
  const userRef=ref(db,"contact")
  const newUserRef=push(userRef)
  set(newUserRef,{
        username: name,
        email: email,
        phone:phone,
        age:age
      });
    
    }
    export const useFetch=()=>{
        const [contactList, setContactList] = useState();
        const [isLoading,setIsLoading]=useState(false)
        useEffect(()=>{
          setIsLoading(true)
    
          const db = getDatabase();
          const userRef = ref(db, 'user');
      
          onValue(query(userRef), snapshot => {
            const contacts=snapshot.val()
            // send an array of the values in database
            const contactArray = [];
            for (let id in contacts) {
              contactArray.push({ id, ...contacts[id] });
            }
            setContactList(contactArray);
            setIsLoading(false)
          })
        },[]);
        return {isLoading,contactList};
    }
    