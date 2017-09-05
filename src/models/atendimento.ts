interface Atendimento {
  createdAt: string;
  updatedAt: string;
  endereco: Endereco;
  contato: Contato;
  createdBy: string;
  updatedBy: string;
  _id: string;
  encaixe: boolean;
  estado: string[];
  fim: Fim;
  inicio: Fim;
  observacao: string;
  avaliacao: Avaliacao[];
  valor: number;
  tipo: string;
  tecnico: Tecnico;
  estacionamento: string;
  numero_equipamento: string;
  modelo_equipamento: string;
  testes_efetuados: string;
  descricao: string;
  data_atendimento: string;
  imagens: any[];
  cliente: Cliente;
}

interface Cliente {
  cnpj_cpf: string;
  nome_razao_social: string;
  inscricao_estadual: string;
  nome_fantasia: string;
}

interface Tecnico {
  nome: string;
}

interface Avaliacao {
  pergunta: string;
  _id: string;
  valor: number;
}

interface Fim {
  data?: any;
  km?: any;
}

interface Contato {
  telefone: string;
  nome: string;
  _id: string;
  observacao: string;
  celular: string;
  email: string;
}

interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
  uf: string;
  cidade: string;
  cep: string;
  _id: string;
  ponto_referencia: string;
  complemento: string;
}
