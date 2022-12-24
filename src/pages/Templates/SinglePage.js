import React ,{useEffect,useState} from 'react'
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import {firestore,db} from '../../firebase'
import { HeadProvider,  Link} from 'react-head';
import H2 from '../../compnentJSXTemplates/H2'
import H3 from '../../compnentJSXTemplates/H3'
import H4 from '../../compnentJSXTemplates/H4'
import H5 from '../../compnentJSXTemplates/H5'
import P1 from '../../compnentJSXTemplates/P1'
import P2 from '../../compnentJSXTemplates/P2'
import P5 from '../../compnentJSXTemplates/P5'
import P3 from '../../compnentJSXTemplates/P3'
import P4 from '../../compnentJSXTemplates/P4'
import N1 from '../../compnentJSXTemplates/N1';
import N2 from '../../compnentJSXTemplates/N2';
import JsxParser from "react-jsx-parser";

const SinglePage = () => {

  


    const {id}=useParams()
    const [data,setData]=useState({})
    const getData=async ()=>{
    const docRef = doc(firestore, db.userTemplate, id);
    const docSnap = await getDoc(docRef);
    console.log(db.formatedDoc(docSnap))
     setData(db.formatedDoc(docSnap))
    }
    useEffect(()=>{
     getData();
    },[])
    

    
    
  return (
    <>
    <HeadProvider>
     <Link rel="stylesheet" href={data?.cssUrl} />
    </HeadProvider>
    {/* {parse(`${data?.html}`)} */}
    {data&&<JsxParser bindings={{data:data}} components={{H2,H3,H4,H5,P1,P2,P3,P4,P5,N1,N2}}  jsx={data.jsx}  />}
    </>
  )
}

export default SinglePage