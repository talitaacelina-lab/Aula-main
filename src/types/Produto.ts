export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorkg: number;
    ativo: boolean;
    imagem: string;
    categoriaIds: number[]
}