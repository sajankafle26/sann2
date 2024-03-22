var productData=[
    {id:1, title: "Product1", category: "Mobile"},
    {id:1, title: "Product2", category: "Mobile"},
    {id:1, title: "Product3", category: "TV"},
    {id:1, title: "Product4", category: "TV"},
]

function Products(){
    var catdata=productData.filter((a)=>a.category=='Mobile')
    return (
        <>
    <h3>Product List</h3>
    {productData.map((a)=>(
        <li key={a.id}> {a.title}</li>
    ))}
      <h3>Mobile Cat Product List</h3>
      {catdata.map((a)=>(
        <li key={a.id}> {a.title}</li>
    ))}
        </>
    )
}
export default Products