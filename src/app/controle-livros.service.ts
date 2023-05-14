import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Cavaleiro da Noite', resumo: 'O livro "Cavaleiro da Noite" é um conto de super-herói que se passa na era vitoriana e segue a história de um vigilante mascarado que utiliza seus poderes das sombras e da noite para proteger a cidade de Londres de criminosos e vilões perigosos. ', autores: ['Italo Costa'] },
    { codigo: 2, codEditora: 2, titulo: 'A Cidade dos Segredos', resumo: 'A cidade de Luxor é conhecida por seus segredos antigos, mas há mais mistérios do que se pode imaginar. Quando uma jovem estudante de arqueologia desaparece misteriosamente, sua melhor amiga, Maria, decide investigar o caso por conta própria. Ela se une a um detetive local, que a leva a descobrir uma rede de corrupção que envolve alguns dos habitantes mais poderosos da cidade. Mas, quanto mais eles se aprofundam na investigação, mais perigosos se tornam os segredos que descobrem. Maria e o detetive precisam decidir se estão dispostos a arriscar tudo para expor a verdade e salvar a cidade da corrupção que a consome.', autores: ['Sofia Martins, Lana Maria'] },
    { codigo: 3, codEditora: 3, titulo: 'A Cidade Sem Lei', resumo: 'Em A Cidade Sem Lei, três amigos que cresceram juntos em um bairro perigoso da cidade decidem tomar as rédeas de sua própria segurança e formam um grupo de vigilantes. Enquanto lutam contra a criminalidade, são confrontados com as consequências de suas ações e precisam lidar com dilemas éticos e morais. A trama é cheia de ação e suspense, com reviravoltas que mantêm o leitor preso até a última página.', autores: ['Ana Luiza, Pedro Henrique e Tiago Oliveira'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigos = this.livros.map(l => l.codigo);
    const novoCodigo = Math.max(...codigos) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
