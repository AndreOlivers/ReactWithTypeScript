// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AlunoProps {
    nome: string
    idade: number
  }
  
  export function Aluno({ 
      nome, 
      idade }: AlunoProps ){
    return (
      <div>
        <h1>Aluno: {nome}</h1>
        <h1>Aluno: {idade}</h1>
      </div>
    )
  }