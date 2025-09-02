import { useParams } from "react-router";

export default function CarDetails(){
  const params = useParams();

  return(
    <div>
      <h1>Car Details Page</h1>
      <p>Car ID: {params.id}</p>
    </div>
  )
}