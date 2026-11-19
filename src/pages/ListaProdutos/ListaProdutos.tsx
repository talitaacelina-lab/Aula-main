import './listaProdutos.css'
import imgProduto from '../../assets/img/produtos/le_grand_chocolat.png'
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
import type { Produtos } from '../../types/Produto';
import produtoService from '../../services/produtoService';
import { useSearchParams } from 'react-router-dom';




function ListaProdutos() {
  const[produtos, setProdutos] = useState<Produtos[]>([]);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [parametros] = useSearchParams();
  const busca = (parametros.get('q') ?? '').toLocaleLowerCase('pt-Br');
  const categoria = Number(parametros.get('categoria'));


  useEffect(() => {
    // Promise.call 
     produtoService.listar() 
     .then(lista => {setProdutos(lista), console.log(lista)} )
     .catch(() => setErro("Não foi possivel carregar os produtos!"))
     .finally(() => setCarregando(false))

}, [])

const visiveis = produtos.filter(produto =>
  produto.ativo &&
  (!categoria || produto.categoriaIds.includes(categoria)) &&
  (!busca || `${produto.nome} ${produto.descricaoCurta}`.toLocaleLowerCase('pt-BR').includes(busca))
)


    return (
        <>
      
        <main>
  <section className="prod_banner" />
  <section className="container prod_container">
    <div className="box_h2">
      <h1>Nossos Bolos</h1>
      <span>Nos Gâteaux</span>
      <hr />
    </div>
    {carregando && <p>Carregando produto...</p>}
    {!carregando && !erro && produtos.length === 0 && <p>Nenhum Produto encontrado.</p>}
    <div className="prod_cards">
     {visiveis.map(produto => { 
      return <Card 
      id={produto.id}
      key={produto.id}
      imgProduto={`http://localhost:3000${produto.imagem}`}
      nome={produto.nome} 
      descricao={produto.descricaoCurta} 
      valor={produto.precoPorKg} 
      quantidadeAvaliacoes={10} 
      nota={9.5}
      />})}
    </div>
  </section>
        </main>
      
</>


    )
}

export default ListaProdutos;