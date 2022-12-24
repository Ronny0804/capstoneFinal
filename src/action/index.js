import { ERROR, SIGN_UP,AUTH_STATE, SIGN_IN, LOG_OUT } from "./types";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import {setDoc,doc,getDoc} from "@firebase/firestore";
import { auth, db, firestore } from "../firebase";
export const addName = (value) => {
    console.log(value);
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime().toString(),
          value: value
      },
    };
  }
  
  export const addImg = (allImg) => {
    console.log(allImg);
    return {
      type: 'ADD_IMG',
      payload: {
        id: new Date().getTime().toString(),
        value:allImg
      },
    };
  }

  export const addbagImg = (allbagImg) => {
    console.log(allbagImg);
    return {
      type: 'ADDBAG_IMG',
      payload: {
        id: new Date().getTime().toString(),
        value:allbagImg
      },
    };
  }

  export const addMenu = (allMenu) => {
    
    return {
      type: 'ADD_MENU',
      payload: {
        id: new Date().getTime().toString(),
        value:allMenu
      },
    };
  }

  export const addTemplate = (templateID,component) => {
    console.log(component)
    return {
      type: 'ADD_TEMPLATE',
      payload: {
        id: new Date().getTime().toString(),
        value:templateID,
        component
      },
    };
  }
  
  export const signUp=(email,password,business,name,setLoading)=>async(dispatch,getState)=>{
    try {
      setLoading(true)
   const user= await createUserWithEmailAndPassword(auth,email,password)
   console.log(user)
    const data = await  setDoc(doc(firestore,db.users,email),{
     name,
     email,
     userId:user.user.uid,
     business
    })
    dispatch({type:SIGN_UP,payload:{name,
        email,
        userId:user.user.uid,}})
      
        setLoading(false)
   } catch (error) {
       
       dispatch({type:ERROR,payload:error.message})
       setLoading(false)
   }
  
}

// login action

export const login =(email,password,setLoading)=>async(dispatch,getState)=>{
    try {

        setLoading(true)
        const user = await signInWithEmailAndPassword(auth,email,password)
  const docRef = doc(firestore,db.users,email)
  const docSnap = await getDoc(docRef)
   .then(doc=>{
  dispatch({type:SIGN_IN,payload:db.formatedDoc(doc)})
  
  setLoading(false)
})
        
    } catch (error) {
        dispatch({type:ERROR,payload:error})
        setLoading(false)

    }

}


//ogout state

export const logout =()=>async dispatch=>{
   await signOut(auth)
   console.log('looged out')
   dispatch({type:LOG_OUT,payload:null})
 
}

//uesr Sate changed

export const userStateChange=(user)=>{
 return {type:AUTH_STATE,payload:user}
}