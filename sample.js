import CamaraAPI from './index';

const main = async () => {
  const blocos = await CamaraAPI.getBlocos();

  const bloco = await CamaraAPI.getBloco(blocos.dados[0].id);
  console.log('blocos', blocos);
  console.log('bloco', bloco);

  const deputados = await CamaraAPI.getDeputados();
  const deputadoId = deputados.dados[0].id;
  const deputado = await CamaraAPI.getDeputado(deputadoId);
  const despesas = await CamaraAPI.getDespesasByDeputado(deputadoId);
  const discursos = await CamaraAPI.getDiscursosByDeputado(deputadoId);
  const eventosDeputado = await CamaraAPI.getEventosByDeputado(deputadoId);
  const frentes = await CamaraAPI.getFrentesByDeputado(deputadoId);
  const orgaosDeputado = await CamaraAPI.getOrgaosByDeputado(deputadoId);

  console.log('deputados', deputados);
  console.log('deputado', deputado);
  console.log('despesas', despesas);
  console.log('discursos', discursos);
  console.log('eventos deputado', eventosDeputado);
  console.log('frentes', frentes);
};

main();
