export type Produtos = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorkg: number;
    ativo: boolean;
    imagem: string;
    categoriaIds: number[]
}