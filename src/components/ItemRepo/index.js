import { ContainerItemRepo } from "./styles";


function ItemRepo({repo, handleRemoveRepo}) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ContainerItemRepo>
      <h3>{repo?.name}</h3>
      <p>{repo?.full_name}</p>
      <a href={repo?.html_url} target="_blank" rel="noreferrer">Ver Repositório</a>
      <p className="remover" onClick={handleRemove}>Remover</p>
      <hr />
        
    </ContainerItemRepo>
  )
}

export default ItemRepo;