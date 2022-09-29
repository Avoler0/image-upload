import multer from "multer";
import { useEffect, useRef } from "react";


export default function MyImage(){
  const formRef = useRef<HTMLFormElement|null>(null);
  const fileRef = useRef<HTMLInputElement|null>(null);
  // const upload = multer({ dest: 'api/' })

  useEffect(()=>{
    console.log("폼",formRef , formRef.current);
  console.log("파일",fileRef , fileRef.current);

  },[formRef,fileRef])
  function onSubmit(event:any){
    console.log("파일",fileRef , fileRef.current?.files);
    event.preventDefault()
  }
  function onClick(event:any){
    // console.log(event.target.files)
  }
  function onChange(event:any){
    // console.log(event.target.files)
    
  }
  function uploadClick(){
    fileRef.current?.click();
  }
  return(
    <div>
      <label htmlFor="upload-image" >업로드...</label>
      {/* <div  onClick={uploadClick}>업로드할거야?</div> */}
      <form ref={formRef} onSubmit={onSubmit}>
        <input id="upload-image" className="sr-only" type="file" name="image" multiple={true} ref={fileRef} onChange={onChange}/>
        <button onClick={onClick}>submit</button>
      </form>
    </div>
  )
}