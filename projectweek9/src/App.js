import './App.css'
import Button from './components/Button/Button'
import Text from './components/Text/Text'

function App() {
  return (
    <div> 
    <div className="container">
      <Button variant="solid" colorScheme="pink" onClick={() => console.log('clicou')}>
        Texto do Botão
      </Button>
      <Button variant="outlined" colorScheme="blue">Texto do Botão 2</Button>
      <Button variant="solid" isLoading>
        Texto do botão 3
      </Button>
      <Button disabled variant="solid">
        Texto do botão 4
      </Button>
      <Button disabled  variant="outlined">
        Texto do botão 5
      </Button>
      
        
      </div>
      <Text fontSize="sm">Texto Pequeno</Text>
      <Text>Texto Médio</Text>
      <Text className="text-red" as="h1" fontSize="lg" align="center">
        Texto Grande
      </Text>  

    </div>
    

    

    
  )
}

export default App
