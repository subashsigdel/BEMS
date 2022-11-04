// import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './partners.css'


const Partners = () => {
// useEffect(() => {
//  getData()
// }, [])


// const getData=()=>{
//    const data= window.localStorage.getItem("userInfo")
//    const {user}=data
//    console.log(user);
   
// }

    const [image,setImage]=useState([]);
const [name,setName]=useState("");
const [category,setCategory]=useState("")

const cat=['Supporting','sponser','technical']
    const handleImage=(e)=>{
        const file=e.target.files[0]
        imageEncode(file);
console.log(file);

    }
    const imageEncode=(file)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
reader.onloadend=()=>{
    setImage(reader.result)
}
console.log(image)
    }
    // const submit=async ()=> {
    //     console.log("submitted");
    //     const data=new FormData();
    //     data.append('name',name);
    //     data.append('category',category)
    //     data.append('image',image)
        
    //     const dataa=await axios.post("http://localhost:5000/api/addPartner",data);

    //     console.log(dataa);

    // }
  return (
    <div className='partners'>
        <h2 className='heading'>Partners of yantra 9.0</h2>

    <form className='form' >
        <div className='productN'>
            <div className='nameofproduct'>Enter your product name: </div>
    <input className='gap'
                                type="text"
                                placeholder="Product Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /></div>
<div className='productN'>
<div className='nameofproduct'>Select category of product : </div>
<select className='gap' onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Choose Category</option>
                                {cat.map((cate) => (
                                <option key={cate} value={cate}>
                                    {cate}
                                </option>
                                ))}
                            </select></div>
<div className='productN'>
<div className='nameofproduct'>Input your logo of company : </div>
    <input className='gap' type="file" name="partner" accept='image/*' onChange={handleImage} required/></div>
<div className='productN'><input type="submit" title="submit" /></div>
    </form>
    </div>
  )
}

export default Partners