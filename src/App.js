import './App.css';

function App() {
  return (
    <div className="container">
      <div 
        className="mt-3 justify-content-center align-items-center mx-auto" 
        style={{ width: "70vw", backgroundColor: "#ffffff"}}
      >
        <h2 className="text-center text-white bg-success card mb-1">Gerenciador de jogadores</h2>
        <h6 className="card text-center text-white bg-success mb-2 pb-1">Informações</h6>
        <div className="card-body text-center">
          <h5 className="card text-center text-white bg-dark pb-1">Cadastro de jogdores</h5>
          <span className="card-text">
            <input className="mb-2 form-control" placeholder="Nome do jogador"/>
            <input className="mb-2 form-control" placeholder="Idade do jogador"/>
            <input className="mb-2 form-control" placeholder="Time do jogador"/>
            <button className="btn btn-outline-success mb-4">Criar cadastro</button>
          </span>
          <h5 className="card text-center text-white bg-dark pb-1">Jogadores cadastrados no sistema</h5>
          <div>

          </div>
        </div>
        <h6 className="card text-center text-light bg-success py-1">&copy; Matheus Leal</h6>
      </div>
    </div>
  );
}

export default App;
