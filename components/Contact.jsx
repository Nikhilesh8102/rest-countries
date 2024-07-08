import { useParams } from "react-router-dom"


export default function Contact() {
    console.log(useParams())//gives the object like this {dynamicroute : routename}
  return (
    <div>Contact us</div>
  )
}
