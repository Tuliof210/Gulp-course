import { Carro, Vendavel } from './produto';

function exibir(v: Vendavel): void {
  console.log(`${v.nome} custa ${v.preco}!`);
}

const c: Vendavel = new Carro();
c.nome = 'Civic';
c.preco = 89499.0;
exibir(c);
