export interface TrilhaTask {
  id: number;
  discipline: string;
  title: string;
  link: string;
  description: string;
}

export interface TrilhaDay {
  dayLabel: string;
  tasks: TrilhaTask[];
}

export interface Trilha {
  id: string;
  title: string;
  days: TrilhaDay[];
}

export const TRILHAS: Trilha[] = [
  {
    "id": "00",
    "title": "Trilha 00",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 1,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Estudo do capítulo 3.2",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo Iniciando nossa Trilha de Direito Administrativo, estudaremos nesta tarefa os seguintes tópicos do capítulo: Regime Jurídico Administrativo. Princípios Informativos do Direito Administrativo:"
          },
          {
            "id": 2,
            "discipline": "Direito Administrativo",
            "title": "Estudo do capítulo 3.3",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo e Administração Pública Você vai estudar o ramo do Direito que organiza e disciplina a atuação da administração pública. Aqui, o foco é entender como o Estado funciona no dia a dia, com base em normas jurídicas."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 3,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo dos capítulos 1, 2 e 3, tópicos “Introdução ao Direito Empresarial”, “Histórico e",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Direito Empresarial Evolução” e “Empresa”. Daremos início ao estudo de Direito Empresarial para o seu concurso. Como é um curso regular para vários"
          },
          {
            "id": 4,
            "discipline": "Direito Empresarial",
            "title": "Estudo dos capítulos 4 e 5, tópicos “Empresário” e “Registro Empresarial”.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Antes de iniciar o tópico Empresários, leia os artigos 3º a 5º, 179, 968 a 980 e 984 do CC e artigo 68 da LC Prossiga o estudo pelo tópico Empresários no material da aula. Aproveite as artes e tabelas do professor na explicação da matéria."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 5,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 2 do LDI, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Iniciaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 6,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 3 do LDI, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI. O Poder Constituinte é aquele que cria a Constituição, cujo titular é o povo, que o exerce direta ou"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 7,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 4 do LDI, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI. Nesse capítulo 04 trataremos de Normas Constitucionais e Hermenêutica Constitucional."
          },
          {
            "id": 8,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo da LINDB, subcapítulo 2; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Bem-vindo a nossa trilha regular de Direito Civil para os concursos ENAC II. Iniciaremos o estudo pela Lei de Introdução. Faça as marcações e anotações utilizando o LDI."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 9,
            "discipline": "Direito Civil",
            "title": "Estudo da Teoria Geral do Direito Civil, subcapítulo 3; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a Teoria Geral do Direito Civil. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/w3xev9 Leia a correção daquelas que errar ou ficar em dúvida. Marque os principais exercícios, aqueles difíceis ou"
          },
          {
            "id": 10,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Introdução ao Direito Processual Civil, capítulo 2 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Iniciaremos a trilha de Direito Processual Civil para o ENAC. Como base para o nosso estudo, utilizaremos o Curso Direto ao Ponto."
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 11,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Jurisdição, capítulo 3 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa estudaremos a Jurisdição. Faça as marcações e anotações utilizando o LDI. O primeiro tópico da aula explora as fases da evolução do direito. Observe que na fase primitiva o poder está fundado no princípio do parentesco, o direito e o usos e costumes não se diferenciavam. Lembre-se que"
          },
          {
            "id": 12,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudo dos tópicos: Direito Notarial e Registral, capítulo 2",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Caros alunos, iniciaremos agora a trilha de estudo da Teoria Geral dos Atos Notariais para Cartórios para o ENAC. Como base para o nosso estudo, utilizaremos o Curso Direto ao Ponto."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 13,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudo do tópico: Serviços Notariais e Registrais, capítulo 3",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Conforme a Lei nº 8.935/94, artigo 1º: Art. 1º Serviços notariais e de registro são os de organização técnica e administrativa destinados a garantir a publicidade, autenticidade, segurança e eficácia dos atos jurídicos."
          }
        ]
      }
    ]
  },
  {
    "id": "01",
    "title": "Trilha 01",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 14,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo das Pessoas naturais, subcapítulo 4; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre as pessoas naturais. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/b0alg6"
          },
          {
            "id": 15,
            "discipline": "Direito Civil",
            "title": "Estudo das Pessoas Jurídicas, subcapítulo 5; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre as Pessoas Jurídicas. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/iwwzjy Leia a correção daquelas que errar ou ficar em dúvida. Marque os principais exercícios, aqueles difíceis ou"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 16,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 5 do LDI, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 17,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 6 do LDI, até o tópico 6.3 Classificação Trialista.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI. Inicie o seu estudo pelo tópico que trata da Origem dos Direitos Fundamentais, não é um assunto"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 18,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Estudo do capítulo 4 – Organização da Administração Pública – PARTE 1",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo Daremos início ao assunto Organização da Administração Pública, tema bastante importante para o nosso concurso."
          },
          {
            "id": 19,
            "discipline": "Direito Administrativo",
            "title": "Estudo do capítulo 4 – Organização da Administração Pública – PARTE 2",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Seguindo o estudo para as OSCIPs, reiteramos a necessidade de saber diferenciar os dois tipos de organizações. Esse é, talvez, parte mais importante da matéria. Faça uma leitura deste item dando atenção aos objetivos delas e às proibições quanto a elas:"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 20,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo do capítulo 06, tópico “Estabelecimento Empresarial”.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Direito Empresarial Em relação ao Estabelecimento Empresarial, grave a literalidade do art. 1142 do CC. A sua natureza jurídica trata-se de uma Universalidade de Fato. Porém, leia o quadro deste item para entender as divergências"
          },
          {
            "id": 21,
            "discipline": "Direito Empresarial",
            "title": "Estudo dos capítulos 7, 8, 9 e 10, tópicos “Dos Prepostos, Do Gerente e Do Contabilista e",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Outros Auxiliares”, “Escrituração Empresarial”, “Nome Empresarial” e “Comércio Eletrônico e Marco Legal das Startups”. Começando agora o estudo Dos Prepostos, Do Gerente e Do Contabilista e Outros Auxiliares, é"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 22,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Competência, capítulo 4 do Direto ao Ponto, de “Conceito de",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Competência” até o tópico “Critérios determinativos da competência”. Nesta tarefa estudaremos da Competência. Como o professor bem menciona, a cobrança inicial dos certames"
          },
          {
            "id": 23,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Ação, capítulo 5 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa estudaremos a Ação. Faça as marcações e anotações utilizando o LDI. Nesta tarefa, estudaremos o conceito de ação, a evolução histórica das teorias e sobre o momento de análise das condições da ação. Primeiramente, observe que a palavra ação pode ter várias acepções, sabia"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 24,
            "discipline": "Direito Processual Civil",
            "title": "Estudo do Processo, capítulo 6 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa estudaremos o Processo. Faça as marcações e anotações utilizando o LDI. Antes de iniciar o capítulo sobre Processo, faça uma primeira (e breve) leitura dos arts. 70 ao 76 do Lembre-se que o processo é a forma por meio da qual a jurisdição é exercida, sua exteriorização. Trata-se do"
          },
          {
            "id": 25,
            "discipline": "TEORIA GERAL DOS ATOS NOTARIAIS E REGISTRAIS",
            "title": "Estudo do tópico: 4. Ingresso na Atividade",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Teoria Geral do Direito Notarial e Registral O tópico é fundamental para a compreensão da atividade, e está ligado com o tópico de “Delegação” lá do Direito Administrativo. Se houver tempo, faça um estudo conjunto do tema, após a leitura do tópico de TGNR."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 26,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Revisão da semana: Ao final, revise os seus próprios grifos feitos durante estas Tarefas e aproveite para",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Estudo do tópico: 5. Prepostos O titular é a pessoa que presta o concurso público de provas e títulos e recebe a delegação do Estado. O titular não pode transferir a sua delegação a outra pessoa. Ele pode contratar pessoas para lhe auxiliar na atividade,"
          }
        ]
      }
    ]
  },
  {
    "id": "02",
    "title": "Trilha 02",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 27,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo dos Bens, subcapítulo 7; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre os Bens. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/jngtd0"
          },
          {
            "id": 28,
            "discipline": "Direito Civil",
            "title": "Estudo do fato jurídico, subcapítulo 8; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre o fato jurídico, lendo do início do subcapítulo 8 até o final do tópico sobre “Fatos Ilícitos em Sentindo Amplo (Stricto Sensu)”. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/fect2z"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 29,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 6 do LDI, do tópico 6.4 Classificação em Dimensões até o tópico",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=6",
            "description": "Direito Constitucional Conflito entre Direitos Fundamentais. Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o"
          },
          {
            "id": 30,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 6 do LDI, do tópico 6.7 Características até o tópico Tratados",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=6",
            "description": "Internacionais e Tribunal Penal Internacional. Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o nosso estudo, utilizaremos o LDI."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 31,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Estudo do capítulo 5 - Entidades Paraestatais e Terceiro Setor.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo Olá, tudo bem? Vamos estudar hoje o assunto de: Entidades paraestatais e terceiro setor. Parcerias com organizações da sociedade civil (Lei nº 13.019/2014)."
          },
          {
            "id": 32,
            "discipline": "Direito Administrativo",
            "title": "Estudo do capítulo 6 (Atos e Poderes)",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Seguindo nosso roteiro de Direito Administrativo, estudaremos agora o importante assunto relacionado aos Poderes Administrativos. Passamos agora ao estudo do capítulo 6, que trata do importante tema relacionado aos Atos"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 33,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo do capítulo 12, do tópico “Teoria Geral do Direito Societário” ao “Teoria Maior”",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1/",
            "description": "Direito Empresarial (pertencente ao tópico “Desconsideração da Personalidade Jurídica”), inclusive. Neste capítulo, vamos estudar a Teoria Geral do Direito Societário. Inicialmente, vale a pena você ler"
          },
          {
            "id": 34,
            "discipline": "Direito Empresarial",
            "title": "Estudo do capítulo 12, do tópico “Teoria Menor” (pertencente ao tópico “Desconsideração",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1/",
            "description": "da Personalidade Jurídica”) ao “Operações Societárias”, inclusive. Vamos reiniciar o estudo lendo sobre a Teoria Menor, presente no CDC. Como já comentado na tarefa anterior, é importante você saber diferenciar a Teoria Menor da Teoria Maior."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 35,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo dos Deveres das Partes e Procuradores, capítulo 7 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1/",
            "description": "Direito Processual Civil Nesta tarefa estudaremos os Deveres das Partes e Procuradores. Faça as marcações e anotações utilizando o Saiba que parte é todo sujeito que participa da relação jurídica processual em contraditório defendendo"
          },
          {
            "id": 36,
            "discipline": "REGISTRO CIVIL DE PESSOAS NATURAIS",
            "title": "Estudo do tópico completo \"Da Atividade”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "Registro Civil das Pessoas Naturais Pessoal, daremos início agora ao estudo do Registro Civil de Pessoas Naturais para ENAC 2026, com base na ferramenta do LDI (Curso completo)"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 37,
            "discipline": "Registro Civil das Pessoas Naturais",
            "title": "Estudo do tópico completo \"Organização da Atividade Aplicável do Registro Civil",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "das Pessoas Naturais” Essa temática prevista nesta tarefa é muito importante e merece atenção dobrada. O tema sobre a escrituração é de grande importância haja vista se tratar da forma como os atos públicos são"
          },
          {
            "id": 38,
            "discipline": "TEORIA GERAL DOS ATOS NOTARIAIS E REGISTRAIS",
            "title": "Revisão da semana: Ao final, revise os seus próprios grifos feitos durante estas Tarefas e aproveite para",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Estudo do tópico: Prepostos O titular é a pessoa que presta o concurso público de provas e títulos e recebe a delegação do Estado. O titular"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 39,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudo do tópico: “Responsabilidade Civil e Criminal!",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/Sobre",
            "description": "responsabilidade dos interinos, entenda quem são os interinos e como se dá sua designação, no LDI foi destacado as normas do Código Nacional de Normas (Provimento nº 176/24) que trata deste assunto, isso deve ser marcado devido a sua probabilidade de cobrança em prova. E o que acontece se o prazo de"
          }
        ]
      }
    ]
  },
  {
    "id": "03",
    "title": "Trilha 03",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 40,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo das nulidades, subcapítulo 8, integralmente.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre as nulidades, lendo a partir do tópico “Teoria das Invalidades” até o final do subcapítulo. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 41,
            "discipline": "Direito Civil",
            "title": "Estudo da caducidade: prescrição e decadência e provas, subcapítulos 9 e 10; e resolução",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "de questões. Nesta tarefa veremos a teoria sobre a caducidade e a provas. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões dos seguintes cadernos do SQ: http://questo.es/ykd6zq e"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 42,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 7 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 43,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 8 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o nosso estudo, utilizaremos o LDI. O objeto do capítulo são as Ações Constitucionais. Esse tema possui importância alta nas provas para"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 44,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 2, subcapítulos “Introdução ao Estudo do Direito Penal” a “Velocidades",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal do Direito Penal”, inclusive. Daremos início agora ao estudo do Direito Penal para o ENAC 2026.1."
          },
          {
            "id": 45,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 2, subcapítulo “A Lei Penal e o Tempo” ao final da teoria; e resolução de",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "A Lei Penal no Tempo despenca em provas, então muita atenção no estudo! Compreenda o conflito de leis penais no tempo, observando que: a teoria do Tempo do Crime adotada no Brasil é a Teoria da Atividade."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 46,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo do capítulo 12, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Direito Empresarial Agora, veremos o tema Sociedades Não Personificadas no Código Civil. Iniciaremos pelo subtópico Sociedades em Comum:"
          },
          {
            "id": 47,
            "discipline": "Direito Empresarial",
            "title": "Estudo do capítulo 13, do tópico “Introdução” ao “Sociedade em Comandita Simples”,",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Na última tarefa, estudamos as sociedades não personificadas. Agora, vamos começar a estudar as sociedades personificadas no Código Civil. As Sociedades Simples são todas as empresas que não se enquadram no conceito de empresa."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 48,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo das Despesas Processuais, capítulo 8 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa estudaremos as Despesas Processuais. Faça as marcações e anotações utilizando o LDI. Sobre as despesas processuais, o professor divide a explicação dos dispositivos legais conforme a"
          },
          {
            "id": 49,
            "discipline": "REGISTRO CIVIL DAS PESSOAS NATURAIS",
            "title": "Estudo do tópico completo \" Dos Atos de Registro Civil das Pessoas Naturais”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1",
            "description": "Registro Civil das Pessoas Naturais Respirem fundo e vamos lá! Temos que ter o conceito do RCPN em mente: “As funções do RCPN não se esgotam na lei, transcendem o"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 50,
            "discipline": "Registro Civil das Pessoas Naturais",
            "title": "Estudo do tópico completo \" Livros e Atos do Registro Civil das Pessoas Naturais”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1",
            "description": "No primeiro momento a professora explicará a diferença entre: REGISTRO > AVERBAÇÃO > ANOTAÇÃO Na sequencia, entenderemos a ordem do serviço, os professores colocam como pontos importantes a serem"
          },
          {
            "id": 51,
            "discipline": "TEORIA GERAL DOS ATOS NOTARIAIS",
            "title": "Estudo do tópico: Princípios de Direito Notarial e Registral",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Este tópico é vital para a resolução de questões em todas as fases, inclusive auxiliando na interpretação de temas. Então concentre-se em entender as ideias principais que diferenciam cada um dos princípios e sua"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 52,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudo do tópico: “Direitos e Deveres dos Notários”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-",
            "description": "enac-2026-1/ No tópico sobre Deontologia deve-se atentar para os seguintes pontos:  Quais os direitos dos Notários e Registradores? (Decore! São poucos e têm cara de prova!)"
          }
        ]
      }
    ]
  },
  {
    "id": "04",
    "title": "Trilha 04",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 53,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo do Direito da Personalidade, subcapítulos 6; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre o Direito da Personalidade. Faça as marcações e anotações utilizando o Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/d39ycn"
          },
          {
            "id": 54,
            "discipline": "Direito Civil",
            "title": "Estudo da teoria geral das obrigações, subcapítulo 11.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre a teoria geral das obrigações, estudando do início do subcapítulo 11 até o final do tópico 11.2.6. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/od6vqm"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 55,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 9 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=9",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 56,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 10 do LDI, até o tópico Vedações Constitucionais (Inclusive).",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=10",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o nosso estudo, utilizaremos o LDI. Seguiremos com a Direitos Políticos."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 57,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 3 (Imunidades e Conflito Aparente de Normas Penais); e resolução de",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal 25 questões. Nesta tarefa, você estudará as Imunidades e o Conflito Aparente das Normas Penais."
          },
          {
            "id": 58,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 4 (Imunidades e Conflito Aparente de Normas Penais); e resolução de",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "01 questão. Nesta tarefa, você vai estudar as Escolas Penais. Comece sua tarefa com a leitura do trecho inicial da aula que o ajudará a entender o histórico das Escolas Penais e seus pensadores."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 59,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo do capítulo 14, todo o tópico “Sociedades Limitadas”.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1/",
            "description": "Direito Empresarial Iniciaremos nessa tarefa o maior tópico do capítulo: Sociedades Limitadas. O CC dedica do art. 1052 ao 1087 para abordar esse tipo de sociedade."
          },
          {
            "id": 60,
            "discipline": "Direito Empresarial",
            "title": "Estudo do Capítulo 15 a 17, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1/",
            "description": "Nesta tarefa, vamos ao estudo do tema Classificação das Companhias. Algumas dicas pontuais de estudo: De início saiba que cada acionista detém responsabilidade limitada ao montante investido nas ações"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 61,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo dos Honorários Advocatícios, capítulo 9 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1/",
            "description": "Direito Processual Civil Nesta tarefa estudaremos os Honorários Advocatícios. Faça as marcações e anotações utilizando o LDI. Inicialmente, saiba as diferenças entre o CPC/73 e CPC/2015."
          },
          {
            "id": 62,
            "discipline": "REGISTRO CIVIL DAS PESSOAS NATURAIS",
            "title": "Estudo do tópico \" Livros e Atos do Registro Civil das Pessoas Naturais”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "Registro Civil das Pessoas Naturais Nesta tarefa vamos aprofundar o estudo sobre a reprodução assistida. Comece pelas características existentes, os pontos mais importantes para recordarmos e estudarmos são que a existência de técnicas de"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 63,
            "discipline": "Registro Civil das Pessoas Naturais",
            "title": "Estudo do tópico \" Livros e Atos do Registro Civil das Pessoas Naturais”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "Voltamos nosso estudo para outro ponto importantíssimo que envolve o assento do nascimento: O estabelecimento de filiação. Como determina o artigo 1.603 CC/2002 a filiação prova-se pela certidão do termo de nascimento registrada"
          },
          {
            "id": 64,
            "discipline": "TEORIA GERAL DOS ATOS NOTARIAIS",
            "title": "Estudo do tópico: “Infrações Disciplinares”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Observe atentamente o art. 31 da Lei dos Notários e Registradores. Revise os deveres descritos no art. 30 da LNR."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 65,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudo do tópico: “Fiscalização pelo Poder Judiciário”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Procure entender como se dá a Fiscalização do Poder Judiciário acontece e a forma pela qual o Conselho Nacional de Justiça (CNJ) e os Tribunais locais regulamentam a fiscalização das serventias. Ao final, resolva às questões propostas."
          }
        ]
      }
    ]
  },
  {
    "id": "05",
    "title": "Trilha 05",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 66,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo da teoria geral das obrigações, subcapítulo 11.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre a teoria geral das obrigações, estudando do tópico 11.2.7 até o final do subcapítulo 11. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 67,
            "discipline": "Direito Civil",
            "title": "Estudo da Transmissão e Adimplemento das Obrigações, subcapítulos 12 e 13; e resolução",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "de questões. Nesta tarefa veremos a teoria sobre a Transmissão e Adimplemento das Obrigações. Faça as marcações e anotações utilizando o LDI."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 68,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 11 do LDI, até o tópico Vedações Constitucionais (Inclusive).",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=11",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 69,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 12 do LDI, até o tópico Vedações Constitucionais (Inclusive).",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=12",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC (2026.1). Como base para o nosso estudo, utilizaremos o LDI. Nesta aula, estudaremos Organização do Estado, assunte bem significativo para provas de Delgado,"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 70,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 5 (Teoria Geral do Crime: Fato Típico); e resolução de 25 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Hoje, você estudará o Fato Típico. Inicialmente, no tópico Conceito de Crime, compreenda que crime é uma das espécies do gênero infração"
          },
          {
            "id": 71,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 6 (Teoria do Crime: Ilicitude); e resolução de 03 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Nesta tarefa, você estudará a Teoria do Crime - Ilicitude. Inicialmente, leia o Conceito de Ilicitude e o Injusto Penal. A ilicitude ou a antijuridicidade é a análise de conformidade ou não com o ordenamento jurídico. Ou"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 72,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo do Capítulo 17, 18 e 19, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1/",
            "description": "Direito Empresarial Nesta tarefa, vamos ao estudo do tema Capital das Sociedades Anônimas, que, segundo Modesto Carvalhosa, é o valor das entradas que os acionistas declaram vinculado aos negócios que constituem o objeto"
          },
          {
            "id": 73,
            "discipline": "Direito Empresarial",
            "title": "Estudo dos Capítulos 20 a 24, toda a teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1/",
            "description": "Nesta parte, vamos ao estudo dos Órgãos Societários, Administradores, Reservas, Outras Operações Societárias Na Lei Nº 6.404/1976, Sociedade Anônima de Futebol – S.A.F. (Inovação Lei Nº 14.193/2021)."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 74,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Gratuidade de Justiça, capítulo 10 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1/",
            "description": "Direito Processual Civil Nesta tarefa estudaremos a Gratuidade de Justiça. Faça as marcações e anotações utilizando o LDI. É essencial que você saiba conceito de Gratuidade de Justiça, Assistência Jurídica e Assistência Judiciária, e"
          },
          {
            "id": 75,
            "discipline": "REGISTRO CIVIL DAS PESSOAS NATURAIS",
            "title": "Estudo parcial do tópico “Casamentos”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "Registro Civil das Pessoas Naturais Vamos dividir nosso estudo sobre o casamento em dois pontos. Nesse primeiro iremos ler e entender os tópicos “A família é a Base da Sociedade” e “A Habilitação de para o Casamento”."
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 76,
            "discipline": "Registro Civil das Pessoas Naturais",
            "title": "Estudo do tópico “Casamentos”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "Vamos dividir nosso estudo sobre o casamento em dois pontos. Nesse primeiro iremos ler e entender os tópicos “A celebração civil do casamento” “O registro do casamento” “averbações no registro de Casamento”. A celebração do casamento civil no Brasil é um ato formal e solene, regido pelos artigos 1.5"
          },
          {
            "id": 77,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudo do tópico: “Extinção das Delegações”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-",
            "description": "Teoria Geral do Direito Notarial e Registral enac-2026-1/ Durante os seus estudos, priorize os seguintes itens:"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 78,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudo do tópico: “Competência Material”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-",
            "description": "enac-2026-1/ Perceba que nem todas as especialidades estão vinculadas à competência territorial e dê especial atenção aos atos notariais que tem o processo informatizado de escrituração. Neles existem regras de flexibilização da"
          }
        ]
      }
    ]
  },
  {
    "id": "06",
    "title": "Trilha 06",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 79,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo do Inadimplemento das Obrigações e Teoria do Adimplemento Substancial,",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil subcapítulo 14; e resolução de questões. Nesta tarefa veremos a teoria sobre o Inadimplemento das Obrigações e Teoria do Adimplemento Substancial."
          },
          {
            "id": 80,
            "discipline": "Direito Civil",
            "title": "Estudo da Teoria geral dos contratos, subcapítulo 15; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre a Teoria geral dos contratos e seus princípios, estudando do início do subcapítulo 15 até o final do tópico 15.1.1.7. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/uq5nn4"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 81,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 12 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=12",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 82,
            "discipline": "Direito Constitucional",
            "title": "Estudo dos Capítulos 13 e 14 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1/?topic=12",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI. Nesta aula, estudaremos Intervenção Federal e Estadual."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 83,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 7 (Teoria do Crime: Culpabilidade.); e resolução de 08 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Nesta tarefa, você revisará tópicos importantes sobre a Culpabilidade. Como você já sabe, foi adotada a teoria tripartida ou tripartite para conceituar o crime sob o critério analítico."
          },
          {
            "id": 84,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 8 (Punibilidade); e resolução de 20 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Nesta tarefa, você revisará tópicos importantes sobre a Punibilidade. Faça anotações/marcações no seu material para futura revisão. Inicialmente, leia as Considerações Iniciais e fique por dentro do conteúdo que será estudado na aula."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 85,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Revisão da semana: Revise os seus próprios grifos feitos durante estas Tarefas e aproveite para",
            "link": "",
            "description": "Direito Empresarial aprofundar os assuntos que não ficaram bem consolidados. Aproveite para revisar as questões que você errou na resolução dos exercícios anteriores."
          },
          {
            "id": 86,
            "discipline": "Direito Empresarial",
            "title": "Revisão da semana: Revise os seus próprios grifos feitos durante estas Tarefas e aproveite para",
            "link": "",
            "description": "aprofundar os assuntos que não ficaram bem consolidados. Aproveite para revisar as questões que você errou na resolução dos exercícios anteriores."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 87,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 2 do Livro Digital Interativo (LDI), subcapítulos 2.1 ao 2.2, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Iniciaremos a trilha de Direito Tributário para ENAC (2026.1). Desde já, recomendo que estejam sempre acompanhando a jurisprudência sobre os temas dos capítulos, pois"
          },
          {
            "id": 88,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 2 do Livro Digital Interativo (LDI), subcapítulos 2.3 ao 2.15, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Vamos prosseguir no estudo do capítulo vendo Princípio da Irretroatividade, Princípio da Isonomia Tributária e Princípio da Capacidade Contributiva. Nesta tarefa teremos também os princípios inseridos pela reforma tributária que poderão ser bem explorados em questões futuras por serem"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 89,
            "discipline": "REGISTRO CIVIL DE PESSOAS NATURAIS",
            "title": "Estudo do tópico “Óbitos”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "Registro Civil das Pessoas Naturais Sobre este tópico, inicia-se estudo sobre a Morte real, em que há presença do cadáver. Podendo ser também natural ou provocada (por violência ou acidente) e Morte presumida, sem cadáver, com e sem declaração de"
          },
          {
            "id": 90,
            "discipline": "Registro Civil das Pessoas Naturais",
            "title": "Estudo do tópico “Livro E”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1/",
            "description": "O livro E é guardado para registrais especiais. O Livro E possui particularidades e não está presente em todas as serventias de RCPN. Em localidades maiores, com vários ofícios, ele pertence ao 1º Ofício, indicando que nem todas as serventias têm competência"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 91,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudo do tópico: Seguridade Social",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-",
            "description": "Teoria Geral do Direito Notarial e Registral enac-2026-1/ O tema da Seguridade Social é breve. Aproveite para revisar pontos que ainda não estão sedimentados."
          }
        ]
      }
    ]
  },
  {
    "id": "07",
    "title": "Trilha 07",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 92,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo da Teoria geral dos contratos, subcapítulo 15; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre a Teoria geral dos contratos e seus princípios, estudando do início do tópico 15.1.1.8 até o final do tópico 15.4.3. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 93,
            "discipline": "Direito Civil",
            "title": "Estudo da Teoria geral dos contratos, subcapítulo 15; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre a Teoria geral dos contratos e seus princípios, estudando do tópico 15.5 até o final do subcapítulo 15. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/rpbaw6"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 94,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 15 do LDI, até o tópico Ingresso no Serviço Público.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 95,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 15 do LDI, do tópico Estabilidade até o fim da teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI. Continuaremos no estudo da aula a partir do tópico que trata da Estabilidade."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 96,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 7 (Teoria do Crime: Culpabilidade.); e resolução de 08 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Nesta tarefa, você revisará tópicos importantes sobre a Culpabilidade. Como você já sabe, foi adotada a teoria tripartida ou tripartite para conceituar o crime sob o critério analítico."
          },
          {
            "id": 97,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 8 (Punibilidade); e resolução de 20 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Nesta tarefa, você revisará tópicos importantes sobre a Punibilidade. Faça anotações/marcações no seu material para futura revisão. Inicialmente, leia as Considerações Iniciais e fique por dentro do conteúdo que será estudado na aula."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 98,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo do Capítulo 24, Títulos de Cré ditos.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Direito Empresarial A partir de agora, veremos uma sequência de temas relevantes da matéria: Títulos de crédito. Os títulos de crédito são documentos formais que instrumentalizam obrigações pecuniárias,"
          },
          {
            "id": 99,
            "discipline": "Direito Empresarial",
            "title": "Estudo do Capítulo 25, Principais Institutos Cambiários.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "A partir de agora, veremos uma sequência de temas relevantes da matéria: Principais institutos cambiários. Os principais institutos cambiários a serem estudados são: (i) endosso; (ii) aval; (iii) protesto."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 100,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 3 do Livro Digital Interativo (LDI), subcapítulos 3.1 a 3.9, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Nesta tarefa trataremos sobre as imunidades tributárias. É essencial o conhecimento da jurisprudência sobre diversos pontos do presente assunto. Cabe destacar, o “conceito de imunidade” (onde o candidato"
          },
          {
            "id": 101,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 3 do Livro Digital Interativo (LDI), subcapítulos 3.10 a 3.14, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Como falado na tarefa anterior, é essencial o conhecimento da jurisprudência sobre diversos pontos do presente assunto. O destaque, dessa vez, fica por conta da imunidade tributária recíproca. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 102,
            "discipline": "REGISTRO CIVIL DE PESSOAS NATURAIS",
            "title": "Estudo do tópico “Filiação”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1",
            "description": "Registro Civil das Pessoas Naturais A filiação, segundo o Código Civil brasileiro, é o vínculo jurídico que une pais e filhos, gerando direitos e deveres recíprocos de ordem pessoal e patrimonial. Nos termos do artigo 1.596 do Código Civil, “os filhos,"
          },
          {
            "id": 103,
            "discipline": "Registro Civil das Pessoas Naturais",
            "title": "Estudo do tópico “Do Nome”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1",
            "description": "O estudo sobre o nome civil, é um dos mais importantes. Leia sua definição tipificada no art. 16 do Código “Toda a pessoa tem direito ao nome, nele compreendidos o prenome e o sobrenome”"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 104,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudo do tópico: Acervo das Serventias",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-",
            "description": "Teoria Geral do Direito Notarial e Registral enac-2026-1/ Quanto ao tema do acervo das serventias, verifique:"
          }
        ]
      }
    ]
  },
  {
    "id": "08",
    "title": "Trilha 08",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 105,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo dos Contratos em espécie - Parte I, subcapítulos 16; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre os contratos de Compra e Venda, Permuta e Estimatório estudando os subcapítulos 16.1.1 a 16.1.3. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 106,
            "discipline": "Direito Civil",
            "title": "Estudo dos Contratos em espécie - Parte II, subcapítulos 16; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre os contratos de Doação, Locação de Coisa e Empréstimo estudando os subcapítulos 16.1.4 a 16.1.6. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/uqmt7i"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 107,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 16 do LDI, até o tópico atribuições do Senado Federal.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 108,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 16 do LDI, do tópico Imunidade Material dos Parlamentares até",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "o fim da teoria. Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 109,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 11 (Concurso de Pessoas); e resolução de 11 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Nesta tarefa, você revisará tópicos importantes sobre a Concurso de Pessoas. Faça anotações/marcações no seu material para futura revisão."
          },
          {
            "id": 110,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 12 (Teoria Geral da Pena), subcapítulos 12.1 ao 12.5.5.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Nesta tarefa, iniciaremos o estudo da Teoria Geral da Pena. Faça anotações/marcações no seu material para futura revisão. Inicialmente, assista ao vídeo do professor que explica as Penas em Espécie. É um vídeo introdutório que"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 111,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Estudo do Capítulo 27, de “Introdução” a “Modalidades Especiais de Cheque: Segurança,",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Direito Empresarial Liquidação e Garantia Bancária”, inclusive. A partir de agora, veremos uma sequência de temas relevantes da matéria: Principais Espécies de"
          },
          {
            "id": 112,
            "discipline": "Direito Empresarial",
            "title": "Estudo do Capítulo 26, de “Cheque” ao final.",
            "link": "https://cj.estrategia.com/ldi/direito-empresarial-enac-2026-1",
            "description": "Retome o estudo no tópico “Cheque”. Atente-se ao quadro esquematizado apresentado pelo professor ao final do capítulo, que sintetiza as principais informações sobre o cheque:"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 113,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 4 do Livro Digital Interativo (LDI), subcapítulos 4.1.1 ao 4.1.4.2, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Nesse capítulo, você estudará os seguintes temas: Sistema Tributário e Discriminação de Competências. Nesta tarefa serão estudados os Impostos. Em seguida vocês estudarão características"
          },
          {
            "id": 114,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 4 do Livro Digital Interativo (LDI), subcapítulos 4.1.4.3 ao 4.1.4.5,",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Nessa tarefa, vocês estudarão as seguintes espécies tributárias: contribuições de melhoria, empréstimos compulsórios e contribuições especiais. Em termos de cobrança em concurso, as contribuições especiais somam mais questões do que as contribuições de melhoria e os empréstimos"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 115,
            "discipline": "REGISTRO CIVIL DAS PESSOAS NATURAIS",
            "title": "Estudo do tópico “Filiação”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1",
            "description": "Registro Civil das Pessoas Naturais A filiação, segundo o Código Civil brasileiro, é o vínculo jurídico que une pais e filhos, gerando direitos e deveres recíprocos de ordem pessoal e patrimonial. Nos termos do artigo 1.596 do Código Civil, “os filhos,"
          },
          {
            "id": 116,
            "discipline": "Registro Civil das Pessoas Naturais",
            "title": "Estudo do tópico “Do Nome”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-naturais-enac-2026-1",
            "description": "O estudo sobre o nome civil, é um dos mais importantes. Leia sua definição tipificada no art. 16 do Código “Toda a pessoa tem direito ao nome, nele compreendidos o prenome e o sobrenome”"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 117,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudo do tópico: “Emolumentos”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Entenda o que é emolumento e de que forma ele é regulamentado, em qual lei. Ao final, resolva às questões propostas."
          }
        ]
      }
    ]
  },
  {
    "id": "09",
    "title": "Trilha 09",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 118,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo dos Contratos em espécie - Parte III, subcapítulos 16; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre os contratos de Prestação de Serviço, Empreitada, Depósito e Mandato estudando os subcapítulos 16.1.7 a 16.1.10. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 119,
            "discipline": "Direito Civil",
            "title": "Estudo dos Contratos em espécie - Parte IV, subcapítulos 16; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre os contratos de Comissão, Agência e Distribuição, Corretagem, Transporte e Seguro, estudando os subcapítulos 16.1.11 a 16.1.15. Faça as marcações e anotações utilizando Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/qysen9"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 120,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 17 do LDI, até o tópico Processo Legislativo Especial.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 121,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 17 do LDI, do tópico Medidas Provisórias até o fim da teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI. Hoje, o assunto alvo será Processo Legislativo."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 122,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Estudo do conteúdo referente ao capítulo 7 – Atos Administrativos.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo Passamos agora ao estudo do capítulo que trata do importante tema relacionado aos Atos Administrativos."
          },
          {
            "id": 123,
            "discipline": "Direito Administrativo",
            "title": "Estudo do conteúdo do capítulo 8 e 9 – Serviços Públicos e Concessão, Permissão e",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Autorização de Serviços Públicos Passemos agora ao estudo dos assuntos relativos ao capítulo 8, que trata de Serviços Públicos. Na próxima tarefa, iniciaremos o estudo dos subtópicos relativos ao tema: Concessão Comum e Permissão"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 124,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 5 do Livro Digital Interativo (LDI).",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Nessa tarefa, vocês estudarão a Repartição de Competências. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das"
          },
          {
            "id": 125,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 6 do Livro Digital Interativo (LDI), subcapítulos 6.1 ao 6.4.2, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Neste capítulo, vocês estudarão o tema Legislação Tributária. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões que, porventura, tenha errado ou tido algum tipo de dificuldade."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 126,
            "discipline": "TABELIONATO DE PROTESTOS",
            "title": "Estudo do tópico completo \"Protesto Notarial”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Tabelionato de Protestos Caros alunos, daremos início agora ao estudo da especialidade de Tabelionato de Protestos para II ENAC, com base na ferramenta do LDI (Curso completo)"
          },
          {
            "id": 127,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico completo \"Princípios do Protesto” “",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Nessa parte da aula, veremos os primeiros princípios vinculados ao Tabelionato de Protestos. Para facilitar, colocaremos um compilado com as principais informações trazidas pelo professor sobre cada um deles abaixo. Porém, recomendamos que leia todo o conteúdo desse tema com atenção, diretamente na"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 128,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudos do tópicos: “Apostilamento”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Links: https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/ Preste atenção a quem está autorizado para realização dos procedimentos de conciliação e mediação, como"
          },
          {
            "id": 129,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudos do tópicos: “Apostilamento”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Links: https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/ Leia sobre a Convenção da Apostila de Haia e identifique o selo padrão. Ao final, resolva as questões propostas."
          }
        ]
      }
    ]
  },
  {
    "id": "10",
    "title": "Trilha 10",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 130,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo dos Contratos em espécie - Parte V, subcapítulos 16; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre os contratos de Constituição de Renda, Jogo e Aposta, Fiança, Administração Fiduciária de Garantias, Transação e Compromisso, estudando os subcapítulos 16.1.16 a"
          },
          {
            "id": 131,
            "discipline": "Direito Civil",
            "title": "Estudo dos Atos Unilaterais, subcapítulo 17; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre os Atos Unilaterais. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões dos seguintes cadernos do SQ: ● http://questo.es/p5fpdl"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 132,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 18 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 133,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 19 do LDI, até o tópico Estatuto da Magistratura.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios. Como base para o nosso estudo, utilizaremos o LDI. Agora, nosso objetivo é estudar sobre o Poder Judiciário. Antes de iniciar o pdf, leia os arts. 92 a"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 134,
            "discipline": "Direito Administrativo",
            "title": "Estudo dos conteúdos do capítulo 10 - Agentes públicos – PARTE 2.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Faça uma leitura atenta do tópico – Acumulação de cargos e empregos públicos, visto que ele é bastante explorado em provas. Por fim, decore a seguinte tabela:"
          },
          {
            "id": 135,
            "discipline": "Direito Administrativo",
            "title": "Estudo do capítulo 11 - Controle da Administração Pública.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Olá, tudo bem? Se levarmos em consideração a grande diversidade de assuntos cobrados em provas de concurso da disciplina de Direito Administrativo, apenas o item Controle da Administração representa mais de 5% das questões cobradas. Então, trataremos o assunto como importância alta."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 136,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 6 do Livro Digital Interativo (LDI), subcapítulos 6.4.3 ao 6.4.5, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Nessa tarefa, será feito o estudo acerca da vigência, da aplicação, da interpretação e da integração da legislação tributária."
          },
          {
            "id": 137,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 7 do Livro Digital Interativo (LDI), subcapítulos 7.1 ao 7.5, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Este capítulo trata de diversos pontos acerca do tema “Obrigação Tributária”. A presente tarefa terá por base o estudo dos conceitos acerca das obrigações tributárias e dos seus respectivos fatos geradores. Em seguida, será feito o estudo acerca dos sujeitos da relação"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 138,
            "discipline": "TABELIONATO DE PROTESTOS",
            "title": "Estudo do tópico completo \"Aspectos Jurídicos e Função Econômica”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Tabelionato de Protestos Nessa parte da aula, iremos entender os “reflexos” do Protesto, conforme indicado no capítulo. Na aula professor reforça qual é a definição de protesto, qual seja: constituir prova, sendo simplesmente"
          },
          {
            "id": 139,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico completo “Atribuições”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Nessa parte da aula, veremos as atribuições do Tabelião de Protestos, previstos no capítulo 5. Conforme artigo 11, Lei 8.935/1994 temos que: Aos tabeliães de protesto de título compete privativamente:"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 140,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico completo “Apresentação, Distribuição e Providências Iniciais”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "A distribuição dos títulos no Tabelionato de Protestos. Foi através da Lei 9.492/1997 que houve a sistematização sobre a especialidade de protestos. O referido diploma legal regula os serviços concernentes ao protesto de títulos, propiciando uniformidade e"
          },
          {
            "id": 141,
            "discipline": "TEORIA GERAL DOS ATOS NOTARIAIS E REGISTRAIS",
            "title": "Estudo do tópico:“Conciliação e Mediação”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral dos Atos Notariais e Registrais Olhar com atenção o art. 7º-A, que instituiu a possibilidade de os tabeliães de notas atuarem como árbitros, sem exclusividade."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 142,
            "discipline": "Teoria Geral dos Atos Notariais e Registrais",
            "title": "Estudo do tópico:“ Proteção de Dados Pessoais dos Usuários dos Serviços Notariais”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Quanto ao tópico da proteção de dados dos usuários do serviço, verificar as disposições da Lei nº 13.079/2018, e do Provimento nº 149, do CNJ. Resolva as questões propostas."
          }
        ]
      }
    ]
  },
  {
    "id": "11",
    "title": "Trilha 11",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 143,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 19 do LDI, do tópico Quinto Constitucional até o tópico",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Precatórios. Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso"
          },
          {
            "id": 144,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 19 do LDI, do tópico STF até o fim da teoria.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI. Nesta tarefa, veremos as disposições relacionadas ao Supremo Tribunal Federal, ao Conselho Nacional de"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 145,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Estudo do capítulo 12 e 13 – Improbidade Administrativa e Lei Anticorrupção",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo Chegamos ao estudo da importante Lei 8.429/02, que trata da Improbidade Administrativa. Estude toda a parte do capítulo que trata de Improbidade Administrativa,. A parte do capítulo que trata da"
          },
          {
            "id": 146,
            "discipline": "Direito Administrativo",
            "title": "Estudo de todo o assunto do capítulo 14 (Responsabilidade Civil do Estado)",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Continuamos com nosso método de estudo que considera apenas a leitura de resumos e grifos do aluno. É importante salientar que tentar ler as 2 aulas por completo em apenas uma tarefa seria um trabalho hercúleo e precisamos utilizar nosso tempo de maneira inteligente"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 147,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo do Juiz e dos Auxiliares da Justiça, capítulo 11 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa estudaremos o Juiz e os Auxiliares da Justiça. Faça as marcações e anotações utilizando o LDI. Nesta aula, foque seu estudo nas hipóteses de impedimento e suspeição."
          },
          {
            "id": 148,
            "discipline": "Direito Processual Civil",
            "title": "Estudo do Ministério Público, capítulo 12 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa estudaremos o Ministério Público. Faça as marcações e anotações utilizando o LDI. Com relação ao Ministério Público, a própria CF/88 elenca suas funções institucionais no art. 129. Decore essas funções:"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 149,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 7 do Livro Digital Interativo (LDI), subcapítulo 7.6.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Nessa tarefa, será feito o estudo acerca da responsabilidade tributária. Esse é um tema que vocês precisam estar bem atualizados quanto ao entendimento jurisprudencial. Algumas vezes, ele diverge do"
          },
          {
            "id": 150,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 8 do Livro Digital Interativo (LDI), subcapítulos 8.1 ao 8.3, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Nesse capítulo, você estudará o tema Crédito Tributário. Além da sua constituição, serão estudadas as suas modalidades de suspensão da exigibilidade, extinção e exclusão. Trata-se, portanto, de um tema de grande relevância. Deixo uma dica bem simples, que vai servir"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 151,
            "discipline": "LEGISLAÇÃO PENAL ESPECIAL",
            "title": "Estudo do subcapítulo 2. Interceptação Telefônica. (Lei n.º 9.296/96). Resolução de",
            "link": "https://cj.estrategia.com/ldi/legislacao-penal-especial-enac-2026-1",
            "description": "Legislação Penal Especial Vamos começar pela Interceptação Telefônica. (Lei n.º 9.296/96). A interceptação de comunicações telefônicas, de qualquer natureza, para prova em investigação criminal e"
          },
          {
            "id": 152,
            "discipline": "Legislação Penal Especial",
            "title": "Estudo do Capítulo 03. Lavagem de dinheiro. Resolução de questões da aula.",
            "link": "https://cj.estrategia.com/ldi/legislacao-penal-especial-enac-2026-1",
            "description": "Nessa tarefa estudaremos os crimes de Lavagem de dinheiro, tratados na Lei 9.613/98. A lavagem de dinheiro pode ser definida como uma atividade criminosa que tem por objetivo transformar a obtenção de recursos de origem ilícita em lícita, por meio das fases da introdução (placement), dissimulação"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 153,
            "discipline": "TABELIONATO DE PROTESTO",
            "title": "Estudo do tópico completo “Competência Material e Territorial”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Tabelionato de Protestos A competência territorial é crucial para a validade do protesto, sendo necessário respeitar as normas locais para sua realização."
          },
          {
            "id": 154,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico “Qualificação dos Títulos e outros documentos de dívida (judiciais",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Vamos entender como ocorre o processo qualificatório no Tabelionato de Protestos. Para esse ponto leia também o Capítulo IV da Lei 9.492/97 da Apresentação e Protocolização. Atente ao prazo de prescrição abordado pelo professor."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 155,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudo do tópico: “Interação Interinstitucional”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Vamos entender como ocorre a interação interinstitucional. Ao final, resolva as questões propostas."
          }
        ]
      }
    ]
  },
  {
    "id": "12",
    "title": "Trilha 12",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 156,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 20 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 157,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 21 do LDI, até o tópico Controle Difuso de Constitucionalidade.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI. Neste capítulo estudaremos as disposições relacionadas ao Controle de Constitucionalidade,"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 158,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Advocacia Pública e da Defensoria Pública, capítulos 13 e 14 do Direto ao",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa estudaremos a Advocacia Pública e a Defensoria Pública. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 159,
            "discipline": "Direito Processual Civil",
            "title": "Estudo dos atos processuais, capítulo 17 do Direto ao Ponto, de “17.1) Atos",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "processuais: Conceito” até “17.5) Da prática eletrônica dos atos processuais”. Nesta tarefa iniciaremos o estudo dos atos processuais. Faça as marcações e anotações utilizando o LDI. O tema atos processuais estão entre os mais cobrados nessa disciplina."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 160,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 8 do Livro Digital Interativo (LDI), subcapítulos 8.4 ao 8.6, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Daremos continuidade ao estudo deste capítulo com o tópico Extinção do Crédito Tributário. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões"
          },
          {
            "id": 161,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 8 do Livro Digital Interativo (LDI), subcapítulos 8.7 e 8.8.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Nessa tarefa, será feito o estudo das garantias e privilégios do crédito tributário e da administração tributária. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 162,
            "discipline": "LEGISLAÇÃO PENAL ESPECIAL",
            "title": "Estudo do Capítulo 04; Proteção a vítima e a Testemunhas Ameaçadas e resolução de",
            "link": "https://cj.estrategia.com/ldi/legislacao-penal-especial-enac-2026-1",
            "description": "Legislação Penal Especial Inicie o estudo da Lei 9.807/1999, conhecida como Lei de proteção a vítima e a testemunhas. Inicialmente, saiba que a Lei n° 9.807/99 é responsável por cuidar da proteção a vítima e as"
          },
          {
            "id": 163,
            "discipline": "Legislação Penal Especial",
            "title": "Estudo do Capítulo 05; Parcelamento do solo e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/legislacao-penal-especial-enac-2026-1",
            "description": "Inicialmente, saiba que com o escopo de assegurar o efetivo controle da urbanização, entrou em vigência no ordenamento jurídico pátrio a lei nº 6.766/79, diploma legal incumbido de regulamentar o parcelamento do solo, contendo regras de caráter administrativo, civil e criminal."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 164,
            "discipline": "TABELIONATO DE PROTESTO",
            "title": "Estudo do tópico “Procedimento”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Tabelionato de Protestos O procedimento de protesto de títulos conforme a Lei nº 9.492/1997 inclui os seguintes pontos: Apresentação do título: O título deve ser apresentado pelo apresentante, que é responsável pelas"
          },
          {
            "id": 165,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico “Lavratura do Protesto”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "A lavratura do protesto é o ato formal pelo qual o tabelião de protesto certifica, de maneira pública e solene, a existência de uma dívida não paga, seja ela representada por títulos ou outros documentos de dívida. Esse procedimento está regulamentado pela Lei nº 9.492/1997, que disciplina os serviç"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 166,
            "discipline": "TEORIA GERAL DO DIREITO NOTARIAL E REGISTRAL",
            "title": "Estudo do tópico “Interinidade”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Teoria Geral do Direito Notarial e Registral Em relação à interinidade, verifique como funciona a designação do interino. Ato contínuo, examine como funciona o exercício da interinidade, e como se dá a revogação da interinidade."
          },
          {
            "id": 167,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudo do tópico “Interação com Órgãos e Entes Públicos”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "Quanto à interação com os órgãos e emtes públicos, examine os detalhes do Provimento nº 149/CNJ. Ao final, resolva as questões propostas."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 168,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Estudo do tópico “Organização Digital dos Serviços”",
            "link": "https://cj.estrategia.com/ldi/teoria-geral-dos-atos-notariais-e-registrais-enac-2026-1/",
            "description": "No que diz respeito a documentos eletrônicos, fique esperto com a certificação digital. As regras são simples, mas é um ponto que pode fazer a diferença na sua aprovação. Leia sobre as Centrais de serviços eletrônicos e busque esquematizar para entender."
          }
        ]
      }
    ]
  },
  {
    "id": "13",
    "title": "Trilha 13",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 169,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 21 do LDI, do tópico Ação Direta de Inconstitucionalidade até",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Ação Direta de Inconstitucionalidade por Omissão. Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso"
          },
          {
            "id": 170,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 21 do LDI, do tópico Ação Declaratória de Constitucionalidade",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "até Arguição de Descumprimento de Preceito Fundamental. Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 171,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 12 (Teoria Geral da Pena), subcapítulos 12.5.6 ao 12.7; e resolução de 11",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Nesta tarefa, continuaremos o estudo da Teoria Geral da Pena. Faça anotações/marcações no seu material para futura revisão."
          },
          {
            "id": 172,
            "discipline": "Direito Penal",
            "title": "Treino Capítulo 12. Resolução de 28 questões do Sistema de Questões.",
            "link": "http://questo.es/rfke2p",
            "description": "Agora que você já estudou a teoria, treine seus conhecimentos resolvendo questões de provas, no Sistema de Questões:"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 173,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo das Tutela Provisória, capítulo 20 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa estudaremos a Tutela Provisória. Faça as marcações e anotações utilizando o LDI. Lembre-se que tutela é a proteção prestada pelo Estado quando provocado por meio de um processo,"
          },
          {
            "id": 174,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Petição Inicial, capítulo 22 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa estudaremos a Petição Inicial. Faça as marcações e anotações utilizando o LDI. A petição inicial, conforme Didier, é o instrumento da demanda, sendo essencial para iniciar um processo. Lembre-se que ela precisa conter os três elementos fundamentais: as partes envolvidas, o pedido"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 175,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 9 do Livro Digital Interativo (LDI), subcapítulos 9.1 e 9.2.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Neste capítulo, você estudará o tema Processo Judicial Tributário. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões"
          },
          {
            "id": 176,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 9 do Livro Digital Interativo (LDI), subcapítulo 9.3.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Neste capítulo, você continuará o estudo do Processo Judicial Tributário com o tema Ações Antiexacionais. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 177,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo dos tópicos: “Da Propriedade e dos Direitos Reais”; “Propriedade Imobiliária",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Registro de Imóveis e o Registro de Imóveis (Função Social)”; “Sistemas de Transmissão da Propriedade Imobiliária”"
          },
          {
            "id": 178,
            "discipline": "Registro de Imóveis",
            "title": "Estudo dos tópicos: “Introdução ao Registro de Imóveis”; “Princípios Registrais",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Imobiliários”; e “Atribuições do Registro de Imóveis” Caros alunos, iniciaremos agora a trilha de estudo de Registro de Imóveis para Cartórios para o ENAC. Como base para o nosso estudo, utilizaremos o Curso Direto ao Ponto."
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 179,
            "discipline": "TABELIONATO DE NOTAS",
            "title": "Estudo dos tópicos: “ Serviço Notarial”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Tabelionato de Notas Nesta primeira tarefa, veremos os aspectos introdutórios da disciplina e começaremos a conhecer o que a diferencia das demais."
          },
          {
            "id": 180,
            "discipline": "Tabelionato de Notas",
            "title": "Estudo do tópico: “Princípios Expressos da Atividade Notarial”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "O tema de princípios é extremamente relevante para todas as fases do concurso. As questões objetivas costumam ou abordar a definição do artigo, ou expõem um problema prático, e indagam qual princípio deve ser aplicado àquela situação."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 181,
            "discipline": "Tabelionato de Notas",
            "title": "Estudo do tópico: “Princípios Implícitos da Atividade Notarial”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Verifique atentamente a aplicação dos princípios da legalidade, da imparcialidade, da independência, da justiça preventiva, da formalidade, da rogação, da economia, da imediação, e do consentimento. Ao final, resolva as questões propostas."
          }
        ]
      }
    ]
  },
  {
    "id": "14",
    "title": "Trilha 14",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 182,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 21 do LDI, do tópico Representação Interventiva até o fim da",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 183,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 22 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI. Agora, estudaremos o capítulo que trata da Seguridade Social."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 184,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 13 (Concurso de Crimes); e resolução de 13 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Nesta tarefa, estudaremos o tema Concurso de Crimes. Faça anotações/marcações no seu material para futura revisão."
          },
          {
            "id": 185,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 14 (Medidas de Segurança); e resolução de 13 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Nesta tarefa, estudaremos o tema Medidas de Segurança. Faça anotações/marcações no seu material para futura revisão. Inicialmente, entenda que a sanção penal pode ser:"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 186,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Audiência de Conciliação e Mediação, capítulo 24 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa estudaremos a Audiência de Conciliação e Mediação. Faça as marcações e anotações utilizando Após a propositura de uma ação, o juiz pode designar uma audiência de conciliação ou"
          },
          {
            "id": 187,
            "discipline": "Direito Processual Civil",
            "title": "Estudo das Providências Preliminares e o Julgamento Conforme o Estado do",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Processo, capítulo 27 do Direto ao Ponto. Nesta tarefa estudaremos as Providências Preliminares e o Julgamento Conforme o Estado do Processo. Faça as marcações e anotações utilizando o LDI."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 188,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 9 do Livro Digital Interativo (LDI), subcapítulo 9.4.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Neste capítulo, você continuará o estudo do Processo Judicial Tributário com o tema Coisa julgada em matéria tributária"
          },
          {
            "id": 189,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 10 do Livro Digital Interativo (LDI), subcapítulos 10.1 ao 10.4, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Nesse capítulo, você estudará o tema Impostos Federais. A presente tarefa terá por base o estudo dos impostos de importação (II), de exportação (IE) e imposto de renda (IR)."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 190,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: “Tipicidade de Fatos Inscritíveis à Luz da Lei 14.382/2022”; e “Invalidade",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Registro de Imóveis e Ineficácia do Contrato e sua Relação com o Registro” Nesse capítulo, você estudará o tema da tipicidade do art. 167 da Lei de Registros Públicos, que foi alterado"
          },
          {
            "id": 191,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Do registro. Das averbações. Das anotações/comunicações”",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Nesse capítulo, você estudará a diferença entre registros, anotações, averbações e comunicações, e como eles impactam o conteúdo que fica arquivado no Registro de Imóveis. Leia atentamente, pois o assunto é bem cobrado em provas."
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 192,
            "discipline": "TABELIONATO DE NOTAS",
            "title": "Estudo do tópico: “Ato Notarial”",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Tabelionato de Notas Verifique atentamente o Conceito de Ato Notarial; de Regime Jurídico, Natureza Jurídica. Observe quais são os elementos fundamentais, como é atribuída a competência."
          }
        ]
      }
    ]
  },
  {
    "id": "15",
    "title": "Trilha 15",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 193,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo dos Capítulos 23 e 24 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 194,
            "discipline": "Direito Constitucional",
            "title": "Estudo dos Capítulos 25, 26 e 27 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI. O capítulo que trata de Meio Ambiente é bem curto."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 195,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 15 (Ação Penal); e resolução de 05 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Nesta tarefa, estudaremos o tema Ação Penal. Faça anotações/marcações no seu material para futura revisão."
          },
          {
            "id": 196,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 16 (Dos Crimes contra a Fé Pública); e resolução de 09 questões.",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Faça anotações/marcações no seu material para futura revisão. Nesta tarefa estudaremos exclusivamente Dos Crimes contra a Fé Pública. Tenha em mente que o Crime de Moeda falsa, previsto no art. 289 do CP, é crime comum, ou seja, pode"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 197,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo das Provas em Espécie, capítulo 29 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa estudaremos as Provas em Espécie. Faça as marcações e anotações utilizando o LDI. Saibas os aspectos relevantes dos principais meios de prova:"
          },
          {
            "id": 198,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Fase Decisória (Sentença), capítulo 30 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa estudaremos a Fase Decisória (Sentença). Faça as marcações e anotações utilizando o LDI. Inicialmente, saiba que as sentenças são classificadas quanto ao conteúdo e quanto à resolução ou não do • Quanto ao Conteúdo:"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 199,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 10 do Livro Digital Interativo (LDI), subcapítulos 10.5 ao 10.8, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário Esta tarefa terá por base o estudo do IPI, do IOF, do ITR e do Imposto Seletivo. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões"
          },
          {
            "id": 200,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 11 do Livro Digital Interativo (LDI), subcapítulos 11.2 e 11.4, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Nesse capítulo, você estudará o tema Impostos Estaduais. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões que, porventura, tenha errado ou tido algum tipo de dificuldade."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 201,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 11 do Livro Digital Interativo (LDI), subcapítulo 11.3.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "A presente tarefa terá por base o estudo do ICMS. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões que, porventura, tenha errado ou tido algum tipo de dificuldade."
          },
          {
            "id": 202,
            "discipline": "Direito Tributário",
            "title": "Estudo do Capítulo 12 do Livro Digital Interativo (LDI), subcapítulos 12.1 e 12.2.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-ii-enac",
            "description": "Nesse capítulo, você estudará o tema Impostos Municipais. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões que, porventura, tenha errado ou tido algum tipo de dificuldade."
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 203,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo dos tópicos: “Registro de Imóveis e o Direito à Proteção dos Dados Pessoais;",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Registro de Imóveis Proteção de Dados Pessoais e Publicidade Registral” Durante o estudo, dê especial atenção a diferença entre publicidade direta e indireta. Quanto à amplitude da"
          },
          {
            "id": 204,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Dos Livros. Dos Classificadores.”",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Aqui, vale a pena observar: • Quais são os Livros e suas respectivas finalidades; • Qual a finalidade dos classificadores e como eles são usados;"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 205,
            "discipline": "TABELIONATO DE NOTAS",
            "title": "Revisão da semana: Ao final, revise os seus próprios grifos feitos durante estas Tarefas e aproveite para",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Tabelionato de Notas Estudo do tópico: “Atos Notariais Extraprotocolares” Verifique a diferença entre atos protocolares e atos extraprotocolares. Fique atento às classificações, que"
          },
          {
            "id": 206,
            "discipline": "Tabelionato de Notas",
            "title": "Estudo do tópico: “Escritura Pública”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Verifique atentamente os requisitos gerais para lavratura de escritura pública, e também as normas específicas para cada tipo de escritura pública. Analise atentamente a definição de escrituras públicas declaratórias, e os atos que podem ser praticados sob o"
          }
        ]
      }
    ]
  },
  {
    "id": "16",
    "title": "Trilha 16",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 208,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo da Teoria Geral da Responsabilidade Civil, subcapítulo 18; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil - 23 Nesta tarefa veremos a teoria sobre a Teoria Geral da Responsabilidade Civil. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 209,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 28 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 210,
            "discipline": "Direito Constitucional",
            "title": "Estudo do Capítulo 29 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC. Como base para o nosso estudo, utilizaremos o LDI. Para começar, em relação a este assunto, saiba quais assuntos devem ser disciplinados por lei"
          },
          {
            "id": 211,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Coisa Julgada, capítulo 32 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa estudaremos a Coisa Julgada. Faça as marcações e anotações utilizando o LDI. Lembre-se que a coisa julgada é a qualidade de uma decisão judicial que a torna imutável e indiscutível"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 212,
            "discipline": "Direito Processual Civil",
            "title": "Estudo dos Procedimentos Especiais, capítulo 33 do Direto ao Ponto, de “33.1)",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Procedimentos Especiais: Introdução” até “33.9) Ação de Inventário e Partilha”. Nesta tarefa iniciaremos o estudo dos Procedimentos Especiais. Faça as marcações e anotações utilizando o LDI. Foque nos principais aspectos da atividade notarial e registral."
          },
          {
            "id": 213,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Estudo do Capítulo 12 do Livro Digital Interativo (LDI), subcapítulos 12.3 ao 12.5, inclusive.",
            "link": "https://cj.estrategia.com/ldi/direito-tributario-enac-2026-1",
            "description": "Direito Tributário A presente tarefa terá por base o estudo do ISS e do IBS. OBS: Resolva as questões contidas no decorrer da teoria e, em seguida, estude os comentários das questões"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 214,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: “Do Processamento Registral”",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Registro de Imóveis A regulamentação e etapas do processo de registro encontram-se nos artigos 182 e seguintes da Lei 6.015/73. Preste atenção também ao significado jurídico da prenotação."
          },
          {
            "id": 215,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Da Qualificação Registral”",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "A retificação de registro de imóveis é um procedimento legal que visa corrigir erros, omissões, imprecisões ou divergências constatadas nos registros públicos de imóveis. Esse processo é regulado pela Lei dos Registros Públicos (Lei nº 6.015/1973), que estabelece normas específicas para a retificaçã"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 216,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Retificação de Registro”",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Após realizado o lançamento do registro ou averbação na matrícula, poderão ser verificados no conteúdo dos atos alguns casos de omissão, imprecisão ou divergências com a verdade ou realidade fática. Nesses casos, o oficial deve promover a retificação, ou seja, a alteração para a devida correção do t"
          },
          {
            "id": 217,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Da Matrícula de Imóveis”",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Compreenda as principais diferenças entre matrícula, registro e averbação: Estude com atenção as hipóteses de abertura, cancelamento e fusão de matrículas. Ao final, resolva as questões propostas."
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 218,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Dúvida Registral”",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "A dúvida registral é o recurso jurídico posto à disposição de qualquer pessoa que não se conforme com as exigências formuladas pelo Cartório de Registro de Imóveis para o registro de um título. Acha-se previsto em lei para os casos de discordância do interessado no registro em face de exigências fei"
          },
          {
            "id": 219,
            "discipline": "Tabelionato de Notas",
            "title": "Estudo do tópico: “Escrituras Públicas – Compra e Venda”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Fique atento aos requisites básicos das escrituras de compra e venda, como o rol apresentado pelo professor. Analise o conceito de compra e venda, como os detalhes trazidos pelo art. 481, do CC/02. Examine a definição de anuente e suas implicações jurídicas."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 220,
            "discipline": "Tabelionato de Notas",
            "title": "Estudo do tópico: “Escrituras Públicas – Troca ou Permuta”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "A troca ou permuta é o contrato segundo o qual as partes contratantes se obrigam a dar uma coisa por outra que não seja dinheiro. Na prática, ocorrem, ao mesmo tempo, duas vendas, servindo as coisas trocadas como compensação recíproca. Por isso, aplicam-se residualmente, à permuta, as mesmas regras "
          }
        ]
      }
    ]
  },
  {
    "id": "17",
    "title": "Trilha 17",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 221,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo da Responsabilidade Civil em sentido amplo, subcapítulo 19; e resolução de",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre a Responsabilidade Civil em sentido amplo. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 222,
            "discipline": "Direito Civil",
            "title": "Estudo da Responsabilidade Civil por fato impróprio, subcapítulo 20; e resolução de",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre a Responsabilidade Civil por fato impróprio. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do(s) seguinte(s) caderno(s) do SQ:"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 223,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Estudo do Capítulo 30 do LDI.",
            "link": "https://cj.estrategia.com/ldi/direito-constitucional-enac-2026-1",
            "description": "Direito Constitucional Continuaremos a trilha de Direito Constitucional para Cartórios – ENAC II. Como base para o nosso estudo, utilizaremos o LDI."
          },
          {
            "id": 224,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo dos atos processuais, capítulo 33 do Direto ao Ponto, de “33.10) Embargos",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil de Terceiro” até “33.25) Da Organização e Fiscalização das Fundações”. Nesta tarefa concluiremos o estudo dos Procedimentos Especiais. Faça as marcações e anotações utilizando"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 225,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Fase Executiva, capítulo 34 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa estudaremos a Fase Executiva. Faça as marcações e anotações utilizando o LDI. Saiba cada uma das classificações da tutela de acordo com a espécie de crise, que se dividem em:"
          },
          {
            "id": 226,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: “Parcelamento do Solo Urbano e Rural” (parte 1)",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Registro de Imóveis Do parcelamento do solo urbano surgem os loteamentos e os desmembramentos. Essas são as formas pelas quais as glebas localizadas em áreas urbanas, de expansão urbana ou de"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 227,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Parcelamento do Solo Urbano e Rural” (parte 2)",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "O parcelamento (loteamento ou desmembramento) é regulamentado pela Lei 6.766/1979, comumente conhecida por Lei de Parcelamento do Solo (Lei 6.766/1979). Fique atento aos requisitos mínimos para a aprovação do projeto de loteamento ou desmembramento"
          },
          {
            "id": 228,
            "discipline": "TABELIONATO DE PROTESTOS",
            "title": "Estudo do tópico “Averbações (desistência, sustação e cancelamento)”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Tabelionato de Protestos Sobre as averbações, temos: Desistência"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 229,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico “Publicidade e suas Restrições (Certidões)”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Vamos verificar que o artigo 31 da Lei nº 9.492/97, denota que certidões e informações de protestos não cancelados poderão ser fornecidas a qualquer interessado, sendo obrigatório o requerimento por escrito para tanto."
          },
          {
            "id": 230,
            "discipline": "REGISTRO DE TÍTULOS E DOCUMENTOS E CIVIL DE",
            "title": "Estudo do tópico completo “Considerações Iniciais”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos Pessoal, daremos início agora ao estudo do Registro Civil de Pessoas Jurídicas, Títulos e Documentos para o curso de Cartórios Regular, com base na ferramenta do LDI (Curso completo)"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 231,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo dos tópicos “Dos Princípios aplicáveis ao Registro de Títulos e Documentos”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Na aula o professor aborda que o autor Marcelo Rodrigues (2014) apresenta cinco princípios fundamentais do Registro de Títulos e Documentos (RTD): Conservação: O arquivo garante a perenidade do ato registrado."
          },
          {
            "id": 232,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo dos tópicos “Da Escrituração”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1/",
            "description": "Nessa parte da aula, vamos entender como ocorre o procedimento registral em nossa especialidade, previsto no capítulo 9. A escrituração na especialidade ocorre em 6 livros, indicados no artigo 132 da Lei 60.15/73:"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 233,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo dos tópicos “Da Transcrição e da Averbação”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Transcrever documentos no RTD? Sim, é possível — e, mais do que isso, é exatamente isso que o RTD se propõe a fazer. Como o próprio nome sugere, a transcrição é a arte de copiar fielmente, palavra por palavra, vírgula por vírgula. Parece simples? É. Mas exige rigor quase artesanal."
          }
        ]
      }
    ]
  },
  {
    "id": "18",
    "title": "Trilha 18",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 234,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo da Teoria Geral do Direito das Coisas e Posse, subcapítulo 16.21; e resolução de",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a Teoria Geral do Direito das Coisas. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões dos seguintes cadernos do SQ:"
          },
          {
            "id": 235,
            "discipline": "Direito Civil",
            "title": "Estudo da Teoria Geral das Coisas, subcapítulo 21; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre a Teoria Geral das Coisas. Faça as marcações e anotações utilizando o Após o estudo, resolva as questões do(s) seguinte(s) caderno(s) do SQ: ● http://questo.es/yxtj25"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 236,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Títulos Executivos, capítulo 35 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-penal-enac-2026-1/",
            "description": "Direito Processual Civil Nesta tarefa estudaremos a Títulos Executivos. Faça as marcações e anotações utilizando o LDI. Leia inicialmente, apenas para contextualização, o texto de introdução, bem como entenda as três correntes"
          },
          {
            "id": 237,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Responsabilidade Patrimonial, capítulo 36 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-penal-enac-2026-1/",
            "description": "Nesta tarefa, estudaremos a Responsabilidade Patrimonial. Faça as marcações e anotações utilizando o LDI. Leia atentamente a introdução e saiba diferenciar obrigação e responsabilidade. Saiba ainda que o CPC/15,"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 238,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: “Incorporação e Condomínio” (parte 1)",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Registro de Imóveis A palavra condomínio diz respeito ao domínio conjunto (copropriedade), de duas ou mais pessoas sobre um mesmo bem ou um conjunto de bens."
          },
          {
            "id": 239,
            "discipline": "TABELIONATO DE PROTESTOS",
            "title": "Estudo do tópico “Escrituração dos Atos e Gestão Documental”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Tabelionato de Protestos Em se falando de escrituração dos atos e gestão documental, temos que os livros e arquivos que compõem o Registro de Protestos estão elencados entre os artigos 32 e 36 da lei de Protestos, cada espécie de livro"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 240,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico “CENPROT – Central Nacional de Serviços Eletrônicos dos Tabeliães",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "de Protesto de Títulos” Sobre a CENPROT, vamos entender como ocorre o funcionamento da principal ferramenta de trabalho na especialidade, a CENPROT."
          },
          {
            "id": 241,
            "discipline": "DIREITO PENAL",
            "title": "Estudo do capítulo 17, tópicos “Dos Crimes Praticados por Funcionário Público Contra a",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Direito Penal Administração em Geral e Dos Crimes Praticados por particular Contra a Administração Faça anotações/marcações no seu material para futura revisão."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 242,
            "discipline": "Direito Penal",
            "title": "Estudo do capítulo 17, tópicos “Dos Crimes Praticados por Particular Contra a",
            "link": "https://cj.estrategia.com/ldi/direito-penal-enac-2026-1",
            "description": "Administração Estrangeira e Dos Crimes em Licitações e Contratos Administrativos.” Faça anotações/marcações no seu material para futura revisão. Inicialmente vamos estudar Dos Crimes Praticados por Particular Contra a Administração"
          },
          {
            "id": 243,
            "discipline": "REGISTRO CIVIL DE PESSOAS JURÍDICAS, TÍTULOS E",
            "title": "Estudo do tópico “Da Ordem do Serviço”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos A ordem do serviço diz respeito, entre outras situações, na ordem de apresentação dos títulos seguirá o número de ordem, bem como a natureza do instrumento, a espécie de lançamento a ser realizado (registro"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 244,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Do Cancelamento”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "A respeito do cancelamento, este tem por finalidade aniquilar os efeitos do registro, bem como extinguir o direito nele referido. O legislador fixou no artigo 164 da LRP, o cancelamento por decisão judicial e voluntário. Porém há a hipótese de cancelamento legal."
          },
          {
            "id": 245,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Atribuições do Registro de Títulos e Documentos”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Como sabemos e vimos estudando até o momento, o Registro de Títulos e Documentos possui uma competência residual e supletiva, sendo responsável pelo recebimento de documentos e títulos que não se relacionem a outras especialidades registrais."
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 246,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Das Comunicações Processuais mediante Notificações",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Extrajudiciais (Registros de Título e Documentos)” O ato de notificar diz respeito a informar certo indivíduo a respeito de fato ou ato que se tem intenção de que a pessoa tenha ciência. Assim é relatado o fato a essa pessoa. A notificação poderá ser no âmbito judicial"
          }
        ]
      }
    ]
  },
  {
    "id": "19",
    "title": "Trilha 19",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 247,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo da Posse, subcapítulo 22; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre a Posse. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do(s) seguinte(s) caderno(s) do SQ:"
          },
          {
            "id": 248,
            "discipline": "Direito Civil",
            "title": "Estudo de Propriedade Parte I, subcapítulo 23; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre Noções Gerais, Função Social, Extensão e Limite e Aquisição e Transmissão de Propriedade Imobiliária. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões dos seguintes cadernos do SQ:"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 249,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Cumprimento de Sentença, capítulo 37 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa, estudaremos o Cumprimento de Sentença. Faça as marcações e anotações utilizando Inicialmente, saiba que o cumprimento provisório de sentença (nomenclatura dada pelo CPC), também se"
          },
          {
            "id": 250,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Processo de Execução, capítulo 38 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa, estudaremos o Processo de Execução. Faça as marcações e anotações utilizando o LDI. Inicialmente, entenda e guarde os requisitos da petição inicial do processo de execução, trazidos nos art. 798 e 799 do CPC. Saiba que a doutrina majoritária entende que não há instrução probatória"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 251,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: “Incorporação e Condomínio” (parte 2)",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Registro de Imóveis Estude com atenção a incorporação imobiliária. No Brasil, a incorporação imobiliária é regida pela Lei nº 4.591/1964."
          },
          {
            "id": 252,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “Georreferenciamento”",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "O georreferenciamento consiste na determinação dos limites do imóvel rural, através de coordenadas georreferenciadas ao Sistema Geodésico Brasileiro. O controle do georreferenciamento é exercida pelo INCRA - Instituto Nacional de Colonização e Reforma Agrária."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 253,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: Alienação Fiduciária",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "A alienação fiduciária é direito real de garantia que constitui a chamada propriedade fiduciária. É hoje a modalidade de garantia mais difundida e mais utilizada, em razão de sua eficiência na recomposição do A propriedade fiduciária imobiliária é regulada pelos art. 1.361 a 1.368-B do Código Civil "
          },
          {
            "id": 254,
            "discipline": "TABELIONATO DE PROTESTOS",
            "title": "Estudo do tópico “Emolumentos”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "Tabelionato de Protestos É de nosso conhecimento que é de caráter privado a prestação dos serviços extrajudiciais, inclusive o serviço de protestos, mediante delegação do Poder Público, segundo consta do artigo 236 da Constituição Federal."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 255,
            "discipline": "Tabelionato de Protestos",
            "title": "Estudo do tópico “Gratuidade”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-protestos-enac-2026-1",
            "description": "O artigo 19 da Lei 9.492 dispõe que: Art. 19. O pagamento do título ou do documento de dívida apresentado para protesto será feito diretamente no Tabelionato competente, no valor igual ao declarado pelo apresentante, acrescido dos emolumentos e"
          },
          {
            "id": 256,
            "discipline": "REGISTRO CIVIL DE PESSOAS JURÍDICAS, TÍTULOS E",
            "title": "Estudo do tópico “Da Competência do Registro de Título e Documentos”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos Devemos entender que os artigos 127 e 129 da Lei de Registros Públicos determinam quais documentos devem ser registrados no Registro de Títulos e Documentos (RTD). Alguns registros são obrigatórios para a"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 257,
            "discipline": "REGISTRO CIVIL DE PESSOAS JURÍDICAS, TÍTULOS E",
            "title": "Estudo do tópico “Do Serviço de Registro Eletrônico de Títulos e Documentos e civil",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos das pessoas jurídicas” A respeito do Sistema Eletrônico dos Registros Públicos (Serp) aplica-se a todas as relações jurídicas que"
          },
          {
            "id": 258,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Atos Registráveis”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "O Registro de Títulos e Documentos (RTD) tem como principal finalidade assegurar a autenticidade, conservação, publicidade e segurança jurídica de documentos. Ao realizar esse registro, o interessado garante que o conteúdo do documento ficará protegido de eventuais perdas, extravios ou danos, pois f"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 259,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Decreto 911/69 – Alienação Fiduciária”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "O artigo 8º-B do Decreto-Lei nº 911/1969, inserido pela Lei nº 14.711/2023, permite a busca e apreensão extrajudicial de bens em contratos de alienação fiduciária, desde que haja cláusula expressa no contrato. Nesse caso, o credor, comprovando a mora do devedor, pode realizar a consolidação da propr"
          }
        ]
      }
    ]
  },
  {
    "id": "20",
    "title": "Trilha 20",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 260,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo de Propriedade Parte II, subcapítulo 23; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre Aquisição e Transmissão da Propriedade Mobiliária e Perda da Propriedade. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 261,
            "discipline": "Direito Civil",
            "title": "Estudo de Propriedade Parte III, subcapítulo 23; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre a propriedade resolúvel, propriedade fiduciária, direitos do promitente comprador e direito de laje. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões dos seguintes cadernos do SQ:"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 262,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Execuções Especiais, capítulo 39 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa, estudaremos o Execuções Especiais. Faça as marcações e anotações utilizando o LDI. No que tange à execução de prestação alimentícia, saiba que nada mais é que uma execução de"
          },
          {
            "id": 263,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Defesas do Executado, capítulo 40 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Nesta tarefa, estudaremos o Defesas do Executado. Faça as marcações e anotações utilizando o LDI. Inicialmente, veremos a impugnação ao cumprimento de sentença, prevista no art. 525 do CPC. É importante guardar as matérias alegáveis em impugnação, previstas no art. 525, §1º, CPC, quais sejam: I -"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 264,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: Usucapião Judicial e Adjudicação Compulsória",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Registro de Imóveis Usucapião judicial: Para efeitos de registro imobiliário, o importante dentro da usucapião judicial está que o procedimento é vislumbrado pelo Processo Civil e, também pela Lei 6.969/1981."
          },
          {
            "id": 265,
            "discipline": "Registro de Imóveis",
            "title": "Estudo dos tópicos: “Títulos Admitidos a Registro” e “Escrituras Públicas”",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Títulos Registráveis Os atos e negócios jurídicos são formalizados juridicamente a partir da confecção de títulos. São os títulos que trazem em si o conteúdo dos atos. Um mesmo ato (ex.: compra e venda) pode adentrar o registro"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 266,
            "discipline": "Registro de Imóveis",
            "title": "Estudo dos tópicos: “Contrato de Compra e Venda”",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "O contrato de compra e venda é a modalidade mais comum dos contratos, seja na forma verbal ou escrita. O Código Civil o trata como a primeira espécie contratual, regendo supletivamente outros contratos. Conforme disposto no art. 481, o contrato de compra e venda implica na obrigação de uma das parte"
          },
          {
            "id": 267,
            "discipline": "TABELIONATO DE NOTAS",
            "title": "Estudo do tópico: “Escrituras Públicas – Doação”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Tabelionato de Notas Segundo o Código Civil, considera-se doação o contrato em que uma pessoa, por liberalidade, transfere do seu patrimônio bens ou vantagens para o de outra (art. 538)."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 268,
            "discipline": "Tabelionato de Notas",
            "title": "Estudo do tópico: Escrituras de Separação de Fato e Divórcio Consensual”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Historicamente judicial, com as alterações promovidas no então CPC vigente, a Lei 11.441/2007 possibilitou a lavratura de atos notariais de separação, divórcio, inventário e partilha extrajudicial. Esse movimento de desjudicialização foi bastante relevante à sociedade como um todo, gerando economia"
          },
          {
            "id": 269,
            "discipline": "REGISTRO DE TÍTULOS E DOCUMENTOS E CIVIL DA",
            "title": "Estudo do tópico “Das Pessoas Jurídicas”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos Faça a leitura do item sobre as sociedades. Importante entender que estas podem se classificar:"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 270,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Da Desconsideração da Personalidade Jurídica”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "A desconsideração da personalidade jurídica é uma poderosa ferramenta jurídica que permite, em casos de fraude, abuso de direito ou desvio de finalidade, ultrapassar a proteção da empresa e alcançar os bens pessoais dos sócios e administradores para garantir o pagamento de dívidas."
          },
          {
            "id": 271,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Dos Atribuições do Registro Civil de Pessoas Jurídicas”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "O registro da pessoa jurídica possui objetivo de distingui-la da pessoa física de seus sócios, ao menos no que toca ao patrimônio. Como breve conceito, temos que:"
          }
        ]
      },
      {
        "dayLabel": "Dia 07",
        "tasks": [
          {
            "id": 272,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Registro das Pessoas Jurídicas”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "O registro público empresarial funciona como uma espécie de \"certidão de nascimento\" dos negócios, tornando visíveis e acessíveis ao público — especialmente a parceiros, clientes e investidores — os principais fatos da vida profissional e financeira do empresário."
          }
        ]
      }
    ]
  },
  {
    "id": "21",
    "title": "Trilha 21",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 273,
            "discipline": "DIREITO CIVIL",
            "title": "Estudo do Direito de Vizinhança, subcapítulo 24; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos o Direito de Vizinhança. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões dos seguintes cadernos do SQ:"
          },
          {
            "id": 274,
            "discipline": "Direito Civil",
            "title": "Estudo do Condomínio, subcapítulo 25; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos o Condomínio. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões dos seguintes cadernos do SQ: Leia a correção daquelas que errar ou ficar em dúvida. Marque os principais exercícios, aqueles difíceis ou"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 275,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Estudo do capítulo 15 – Processo Administrativo Federal.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo Vamos estudar a partir de agora o Processo Administrativo Federal, através da Lei 9.784/99! De início, veja que a aplicação da Lei 9.784/99 é no âmbito federal, em todas as esferas. Atenção para as"
          },
          {
            "id": 276,
            "discipline": "Direito Administrativo",
            "title": "Estudo do capítulo 16 completo.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "O tema Bens Públicos aparece pouco em questões de Direito Administrativo quando comparado com outras matérias. Por esse motivo, você o estudará em apenas uma tarefa, para, em seguida, resolver uma boa quantidade de questões a fim de consolidar o conhecimento."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 277,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo dos Precedentes e o CPC/15, da Ordem dos Processos nos Tribunais e do",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-enac-2026-1",
            "description": "Direito Processual Civil Incidente de Resolução de Demandas Repetitivas, capítulos 42, 43 e 44 do Direto Nesta tarefa, estudaremos os Precedentes e o CPC/15, a Ordem dos Processos nos"
          },
          {
            "id": 278,
            "discipline": "Direito Processual Civil",
            "title": "Estudo dos Incidente de Assunção de Competência, Incidente de Arguição de",
            "link": "https://cj.estrategia.com/ldi/direito-processual-civil-ii-enac/?topic=45",
            "description": "Inconstitucionalidade e Homologação de Decisão Estrangeira, capítulos 45, 46 e 47 do Direto ao Ponto. Capítulo 45: https://cj.estrategia.com/ldi/direito-processual-civil-ii-enac/?topic=45"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 279,
            "discipline": "REGISTRO DE TÍTULOS E DOCUMENTOS E CIVIL DE",
            "title": "Estudo do tópico “Natureza jurídica do Registro e Órgãos Registrais”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos Quando falamos sobre a qualidade de empresário, o registro, via de regra, tem caráter declaratório. Isso significa que a pessoa já é considerada empresário a partir do momento em que exerce, de forma profissional"
          },
          {
            "id": 280,
            "discipline": "Registro Civil de Pessoas Jurídicas, Títulos e Documentos",
            "title": "Estudo do tópico “Matrícula das Pessoas Jurídicas”",
            "link": "https://cj.estrategia.com/ldi/registro-civil-de-pessoas-juridicas-titulos-e-documentos-enac-2026-1",
            "description": "Outra função do RCPJ é realizar as matrículas de veículos de comunicação. Esta afirmação pode parecer um tanto estranha, dado que o título do capítulo da Lei dos Registros Públicos – 6.015/1973 é \"Do Registro de Jornais, Oficinas Impressoras, Empresas de Radiodifusão e Agências de"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 281,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: “Contrato de Doação”; “Contrato de Permuta”; “Contrato de",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Registro de Imóveis Atente-se às regras dos contratos, voltando à disciplina de Direito de Civil, se necessário."
          },
          {
            "id": 282,
            "discipline": "Registro de Imóveis",
            "title": "Estudo do tópico: “SREI/ONR”, “Central de Indisponibilidade de Bens”",
            "link": "https://cj.estrategia.com/ldi/registro-de-imoveis-enac-2026-1",
            "description": "Será instituído o direito real de laje no espaço aéreo ou no subsolo de terrenos públicos ou privados, tomados em projeção vertical, como unidade imobiliária autônoma. Recaindo sobre parte da construção-base, o título deverá descrever a área total da laje e a área cedida."
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 283,
            "discipline": "TABELIONATO DE NOTAS",
            "title": "Estudo do tópico: Escrituras de Inventário e Partilha Extrajudicial",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Tabelionato de Notas Historicamente judicial, com as alterações promovidas no então CPC vigente, a Lei 11.441/2007 possibilitou a lavratura de atos notariais de separação, divórcio, inventário e partilha extrajudicial."
          },
          {
            "id": 283,
            "discipline": "Tabelionato de Notas",
            "title": "Estudo do tópico: Testamento Público",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "A título introdutório devemos lembrar que os testamentos podem ser: ORDINÁRIOS/COMUNS ou O testamento é, portanto, o ato de disposição de última vontade previsto no art. 1.786, do Código Civil, que viabiliza a sucessão testamentária. Como se vê, o testamento, de cujo conceito estamos aqui tratando n"
          }
        ]
      }
    ]
  },
  {
    "id": "22",
    "title": "Trilha 22",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 284,
            "discipline": "DIREITO CIVIL",
            "title": "Revisão dos Direitos Reais sobre Coisa Alheia, subcapítulo 26; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Direito Civil Nesta tarefa veremos a teoria sobre Direitos Reais sobre Coisa Alheia. Faça as marcações e anotações utilizando o LDI."
          },
          {
            "id": 285,
            "discipline": "Direito Civil",
            "title": "Revisão dos Direitos reais de Garantia, subcapítulo 27; e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direito-civil-enac-2026-1/",
            "description": "Nesta tarefa veremos a teoria sobre direitos reais limitados, estudando os subcapítulos 6.7 e 6.8, inclusive. Faça as marcações e anotações utilizando o LDI. Após o estudo, resolva as questões do seguinte caderno do SQ: http://questo.es/puv02i"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 286,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Estudo do conteúdo do capítulo 17 e 18 – Intervenção do Estado na Propriedade e",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Administrativo LGPD e Administração Pública Chegou a hora de estudar os assuntos relativos ao capítulo 17, relativa à Intervenção do Estado na"
          },
          {
            "id": 287,
            "discipline": "DIREITO PROCESSUAL CIVIL",
            "title": "Estudo da Ação Rescisória, capítulo 48 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Direito Processual Civil Nesta tarefa, estudaremos o Ação Rescisória. Faça as marcações e anotações utilizando o LDI. Inicialmente, saiba as hipóteses em que a coisa julgada pode ser superada, dentre elas a ação rescisória, que"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 288,
            "discipline": "Direito Processual Civil",
            "title": "Estudo da Reclamação, capítulo 49 do Direto ao Ponto.",
            "link": "https://cj.estrategia.com/ldi/direito-administrativo-enac-2026-1",
            "description": "Nesta tarefa, estudaremos o Reclamação. Faça as marcações e anotações utilizando o LDI. Guarde que ela é cabível para: a) preservar a competência do tribunal;"
          },
          {
            "id": 289,
            "discipline": "DIREITO URBANÍSTICO",
            "title": "Estudo do capítulo 2, do início ao tópico “2.6 Política Agrícola”, inclusive.",
            "link": "https://cj.estrategia.com/ldi/cartorios-direito-urbanistico",
            "description": "Antes de mais nada, tenha atenção sempre que o professor colocar quadros do seguinte tipo: “Preste atenção”, “Esta cai na prova”, “Resumindo”, “Atenção decore”, “Tome nota” e “Despenca na prova”. Nessas situações o professor já está chamando sua atenção para algo importante na disciplina."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 290,
            "discipline": "DIREITO URBANÍSTICO",
            "title": "Estudo do capítulo 2, do tópico “2.7 Direito Urbanístico e Direito à Cidade” ao final da aula.",
            "link": "https://cj.estrategia.com/ldi/cartorios-direito-urbanistico",
            "description": "Leia com atenção o tópico Direito Urbanístico e Direito à Cidade, concluindo esta tarefa quando tiver visto o item Justa distribuição dos benefícios e ônus decorrentes do processo de urbanização."
          },
          {
            "id": 291,
            "discipline": "DIREITOS HUMANOS",
            "title": "Estudo do capítulo 02 e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direitos-humanos-enac-2026-1/",
            "description": "Direitos Humanos Este capítulo versa, em suma, sobre a Teoria Geral dos Direitos Humanos. Entendam o conceito de Direitos Humanos:"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 292,
            "discipline": "Direitos Humanos",
            "title": "Estudo dos capítulos 03 a 05 e resolução de questões.",
            "link": "https://cj.estrategia.com/ldi/direitos-humanos-enac-2026-1/",
            "description": "Estes capítulos versam, em suma, sobre Características, Dimensões e Afirmação Histórica dos Direitos Humanos. Iniciaremos pelas características, sendo muitas delas intuitivas. Tenha atenção ao destacado abaixo!"
          },
          {
            "id": 293,
            "discipline": "REGISTRO DE IMÓVEIS",
            "title": "Estudo do tópico: Central Nacional de Indisponibilidade de Bens (CNIB)",
            "link": "https://cj.estrategia.com/ldi/direitos-humanos-enac-2026-1/",
            "description": "Registro de Imóveis Central de Indisponibilidade de Bens A Central Nacional de Indisponibilidade de Bens está atualmente regulamentada no Código Nacional de"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 294,
            "discipline": "TABELIONATO DE NOTAS",
            "title": "Estudo do tópico: “Ato notarial”",
            "link": "https://cj.estrategia.com/ldi/tabelionato-de-notas-enac-2026-1",
            "description": "Tabelionato de Notas Nessa aula, veremos as atas notariais, inclusive as atas de usucapião. Logo no início da aula, saiba o conceito dela:"
          }
        ]
      }
    ]
  }
];
