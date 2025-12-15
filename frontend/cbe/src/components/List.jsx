

export default function List(){
    let cars = ["BMW","MARCEDES","TOYOTA","DODGE","FORD"]

    return <>
      <h2>list of cars</h2>
      <ul>
        {cars.map((car, index)=>{
            return <li key={index}>{car}</li>
        })}
      </ul>

    </>
}