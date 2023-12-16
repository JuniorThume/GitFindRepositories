import Input from './../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import GitHub from './../assets/GitHub.png';
import { Container } from './styles';
import { useState } from'react';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    
    const { data } = await api.get(`repos/${currentRepo}`)
    

    if(data.id) { 
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }
  }

  const handleRemoveRepo = (id) => {
    alert(`Removendo repositorio ${(repos.find((repo) => repo.id === id )).name} de ID: ${id}`)
    setRepos(repos.filter((repo) => repo.id !== id))
  }

  return (
    <Container className="App">
      <img src={GitHub} width={150} alt='Logo do GitHub'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map((repo)  => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />)}
    </Container>
  );
}

export default App;
