import ListItem from "./Listitem"
const persona = [
{
  nombre:'arleth juarez',
  telefono:'2871040828',
  email: 'arleth@gmail.com'
},

{
  nombre:'arleth velasco',
  telefono:'123451234',
  email: 'velasco@gmail.com'
},
{
  nombre:'arleth',
  telefono:'5821911',
  email: 'juva@gmail.com'
}

  
]

function App() {


  return (
   <div>
    <h1>Agenda</h1>
    <hr/>
    <ul>
    {
      persona.map((persona) => (
        <ListItem
        key={persona.email}
        nombre={persona.nombre}
        telefono={persona.telefono}
        email={persona.email}
        ></ListItem>
      ))
    }
    </ul>
   </div>

  )
}

export default App