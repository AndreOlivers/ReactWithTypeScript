import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: number;
}


export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [contador, setContador] = useState(0);  

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>() 

  function incrementar() {
    setContador(contador => contador + 1)
  } 

  function decrementar() {
    if (contador === 0) 
       return
      
    setContador(contador - 1)
  } 

  function mostrarAluno() {

    setInfoAluno({
      nome: nome,
      idade: Number(idade)
    })
  }

  return (
    <div>
      <h1>Conhecendo UseState</h1>

      <input
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br/><br/>

      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <br/>
      <h1>Aluno: {infoAluno?.nome}</h1> 
      <br/>
      <h1>Idade: {infoAluno?.idade}</h1> 

      <hr/>
      <br/>
      <h1>Contatdor com UseState</h1>
      <button onClick={incrementar}>+</button> {contador} <button onClick={decrementar}>-</button>
    </div>
  )
}

