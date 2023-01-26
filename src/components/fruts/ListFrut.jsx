import ItemFruts from "./ItemFruts"

const ListFruts = ({fruts})=>{
  return(
    <ul>
        {fruts.map((frut,index)=>(
          <ItemFruts key={index} frut={frut}/>
        ))}
      </ul>
  )
}
export default ListFruts;