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
    "id": "01",
    "title": "Ciclo 01 — Fundamentos da Atividade Notarial e Registral",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 1,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Introdução ao Direito Notarial e Registral — Natureza Jurídica da Atividade",
            "link": "",
            "description": "Natureza jurídica da atividade (delegação estatal a particulares — função pública exercida em caráter privado). Memorizar: Art. 236 CF é o fundamento constitucional. Armadilha FGV: a atividade é estatal (poder delegante é a União), mas a outorga é pelo TJ do estado. Distinção entre titular e delegat"
          },
          {
            "id": 2,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Dos Serviços Notariais e de Registros — Espécies e Atribuições",
            "link": "",
            "description": "Art. 5º — tabeliães de notas; Art. 6º — tabeliães e oficiais de protestos; Art. 7º — oficiais de registro de imóveis; Art. 8º — oficiais de RCPN; Art. 9º — oficiais de RTD; Art. 10 — oficiais de RCPJ. Armadilha FGV: confundir atribuições entre serventias (ex: certidão de nascimento é RCPN, não RI). "
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 3,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Ingresso na Atividade — Concurso, Requisitos e Vacância",
            "link": "",
            "description": "Requisitos para ingresso (Art. 14 — não ter condenação criminal, aptidão física e mental, habilitação em concurso). Art. 15 — concurso público de provas e títulos. Art. 16 — prazo para preenchimento de vaga (6 meses). Armadilha FGV: Art. 14, §1º — nacionalidade brasileira exigida (nato ou naturaliza"
          },
          {
            "id": 4,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Prepostos — Escreventes e Substitutos",
            "link": "",
            "description": "Art. 20 — os notários e oficiais de registro podem contratar escreventes e auxiliares. Art. 21 — o gerenciamento administrativo e financeiro é de responsabilidade exclusiva do titular. Distinção preposto vs. substituto (quem pratica atos vs. quem substitui o titular). Armadilha FGV: responsabilidade"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 5,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Responsabilidade Civil e Criminal dos Notários e Registradores",
            "link": "",
            "description": "Art. 22 — notários e registradores responderão pelos danos que praticarem. §1º — prescrição (3 anos, art. 206, §3º, V do CC). Art. 23 — responsabilidade do substituto. Art. 24 — responsabilidade civil independe da criminal. Armadilha FGV: natureza da responsabilidade — objetiva ou subjetiva? (STF: s"
          },
          {
            "id": 6,
            "discipline": "DIREITO CIVIL",
            "title": "LINDB e Parte Geral do CC — Pessoas Naturais e Capacidade",
            "link": "",
            "description": "Vigência da lei (art. 1º LINDB — 45 dias, salvo disposição contrária). Capacidade civil — absolutamente incapaz (art. 3º CC: menores de 16) vs. relativamente incapaz (art. 4º CC). Emancipação (art. 5º CC). Armadilha FGV: A Lei 13.146/2015 (Estatuto da Pessoa com Deficiência) alterou os arts. 3º e 4º"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 7,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Art. 236 CF + Organização do Estado aplicada à atividade notarial",
            "link": "",
            "description": "Art. 236 é o fundamento constitucional de toda a atividade — DECORAR literalmente cada parágrafo. Art. 22, XXV — competência privativa da União para legislar sobre registros públicos. Armadilha FGV: a lei que regulamenta é federal (Lei 8.935/94), mas a fiscalização é estadual (TJ). Art. 37 se aplica"
          },
          {
            "id": 8,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Incompatibilidades e Impedimentos",
            "link": "",
            "description": "Art. 25 — impedimentos para exercício (situações pessoais que impedem a prática de atos específicos, ex: parentesco). Art. 26 — incompatibilidades (atividades que não podem ser acumuladas com a função notarial/registral). Art. 27 — vedações. Armadilha FGV: distinção entre impedimento (caso específic"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 9,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Princípios do Direito Notarial e Registral",
            "link": "",
            "description": "DECORAR todos os princípios e suas definições: publicidade (art. 1º Lei 6.015), autenticidade, segurança jurídica, eficácia (art. 1º Lei 8.935). Princípios registrais específicos: inscrição, prioridade (art. 186 LRP), especialidade (objetiva e subjetiva), legalidade/qualificação, continuidade (art. "
          },
          {
            "id": 10,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Direitos e Deveres dos Notários e Registradores",
            "link": "",
            "description": "Deveres: independência no exercício, sigilo, manutenção do arquivo, atendimento prioritário (idosos, deficientes, gestantes), conservação de livros. Direitos: exercer a delegação (art. 28), auferir emolumentos, organizar o trabalho. Armadilha FGV: o dever de sigilo não é absoluto (ex: requisição jud"
          }
        ]
      },
      {
        "dayLabel": "Dia 06",
        "tasks": [
          {
            "id": 11,
            "discipline": "DIREITO CIVIL",
            "title": "Pessoas Jurídicas e Negócio Jurídico — Visão Registral",
            "link": "",
            "description": "Classificação das PJs (direito público vs. privado — art. 40-44). Constituição de PJ: registro (art. 45 — começo da existência legal). DECORAR art. 104 (requisitos de validade do NJ: agente capaz, objeto lícito, forma prescrita). Art. 108 — escritura pública obrigatória para imóveis acima de 30 salá"
          }
        ]
      }
    ]
  },
  {
    "id": "02",
    "title": "Ciclo 02 — Fiscalização, Infrações e Lei 6.015 — Disposições Gerais",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 12,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Infrações Disciplinares e Penalidades",
            "link": "",
            "description": "Art. 31 — infrações sujeitas a penalidades: negligência, conduta atentatória. Art. 32 — penalidades: repreensão, multa, suspensão (90 dias), perda da delegação. Art. 34 — processo disciplinar (devido processo legal). Art. 35 — competência do Poder Judiciário para aplicar penalidades. Armadilha FGV: "
          },
          {
            "id": 13,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Fiscalização pelo Poder Judiciário",
            "link": "",
            "description": "§1º do Art. 236 CF — a fiscalização é exercida pelo Poder Judiciário (TJ). Art. 37 — a corregedoria é o órgão fiscalizador. Art. 38 — competência do CNJ e da Corregedoria Nacional de Justiça. Armadilha FGV: quem fiscaliza é o TJ estadual (corregedoria), mas o CNJ tem competência supletiva/subsidiári"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 14,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Extinção da Delegação",
            "link": "",
            "description": "Causas de extinção: morte, aposentadoria, renúncia, perda (sentença judicial), descumprimento de requisitos. Art. 39 — a delegação é personalíssima (intransferível e incomunicável). Armadilha FGV: serventia NÃO se herda (personalíssima). A aposentadoria é compulsória aos 75 anos (EC 88/2015 + LC 152"
          },
          {
            "id": 15,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Lei 6.015/73 — Disposições Gerais (Título I)",
            "link": "",
            "description": "Art. 1º — os serviços concernentes aos Registros Públicos são os seguintes: (I) RCPN, (II) RCPJ, (III) RTD, (IV) RI. Art. 9º — sede, horário. Art. 10 — qualquer pessoa pode requerer certidão. Art. 13 — livros obrigatórios. Art. 16 — os oficiais e substitutos são civilmente responsáveis. Art. 198 — d"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 16,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Competência Material e Territorial — Serventias",
            "link": "",
            "description": "Competência material — qual serventia pratica qual ato (tabelião de notas ≠ oficial de RI ≠ oficial de RCPN). Competência territorial — circunscrição. No RI: Art. 169 LRP — o registro deve ser feito no cartório da situação do imóvel (forum rei sitae). No RCPN: nascimento no local do parto ou da resi"
          },
          {
            "id": 17,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Interinidade e Provimento 149/2023 — Aspectos Gerais",
            "link": "",
            "description": "O Provimento 149/2023 é o Código Nacional de Normas do Foro Extrajudicial. Estrutura: Parte Geral + Parte Especial. Interinidade — quem responde pela serventia quando o titular se afasta (substituto legal, interino designado pelo juiz). Armadilha FGV: interino NÃO é titular, é designado pelo juízo c"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 18,
            "discipline": "DIREITO CIVIL",
            "title": "Prescrição e Decadência — Foco Registral",
            "link": "",
            "description": "Distinção prescrição (pretensão, patrimonial, renunciável) vs. decadência (direito potestativo, pode ser legal ou convencional). DECORAR prazos: 3 anos para reparação civil (art. 206, §3º, V) — aplica-se à responsabilidade do notário. 10 anos para ação fundada em direito pessoal (art. 205). Armadilh"
          },
          {
            "id": 19,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Agentes Públicos — Notários e Registradores como Agentes Delegados",
            "link": "",
            "description": "Notários e registradores são agentes públicos? SIM — são particulares em colaboração com o Estado (agentes delegados). Consequência: se submetem à LIA (Art. 2º — todo aquele que exerce função pública). Princípios do art. 37 CF se aplicam por analogia. Armadilha FGV: notários NÃO são servidores públi"
          }
        ]
      }
    ]
  },
  {
    "id": "03",
    "title": "Ciclo 03 — Lei 8.935 Completa + Emolumentos + CC Obrigações",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 20,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Seguridade Social dos Notários e Registradores",
            "link": "",
            "description": "Notários e registradores são segurados obrigatórios do RGPS (Regime Geral) como contribuintes individuais, NÃO do RPPS. Armadilha FGV: notário não tem aposentadoria por tempo de serviço pelo regime estatutário."
          },
          {
            "id": 21,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Emolumentos — Lei 10.169/2000 + Natureza Jurídica",
            "link": "",
            "description": "Natureza jurídica dos emolumentos — taxa sui generis (ADI 1.378-5). Art. 1º — emolumentos são fixados por lei estadual. Art. 2º — para fixação, observar natureza pública e caráter social. Art. 3º — gratuidade (Lei 9.534/97 — registros de nascimento e óbito são gratuitos). Armadilha FGV: emolumentos "
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 22,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Acervo das Serventias + Organização Digital",
            "link": "",
            "description": "O acervo pertence ao Estado (art. 46 Lei 8.935). O titular é depositário. Na vacância, o acervo deve ser entregue ao substituto/interino. Organização digital: e-Notariado, SREI, SERP. Armadilha FGV: o notário NÃO é dono do acervo; é fiel depositário. Destruição de acervo = crime."
          },
          {
            "id": 23,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Atribuições e Competências dos Oficiais de Registros",
            "link": "",
            "description": "Revisão consolidada de todas as atribuições por serventia. Art. 12 LRP — serviço de registro é atividade exercida por oficiais privativos. Armadilha FGV: competência para certidão é do próprio oficial (qualquer pessoa pode requerer); não precisa de autorização judicial."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 24,
            "discipline": "DIREITO CIVIL",
            "title": "Obrigações — Modalidades e Transmissão",
            "link": "",
            "description": "Obrigações de dar coisa certa (art. 233-242) — relevância registral: tradição de imóvel se faz pelo registro (art. 1.245 CC). Cessão de crédito (art. 286-298) — registro no RTD para efeito contra terceiros. Armadilha FGV: distinção entre tradição (móvel) e registro (imóvel) como modo de aquisição."
          },
          {
            "id": 25,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Apostilamento e Legalização de Documentos",
            "link": "",
            "description": "O que é apostilamento: certificação de autenticidade de documentos para uso internacional. Quem apostila no Brasil: cartórios de registro civil, de notas e de RTD. Armadilha FGV: apostilamento ≠ tradução juramentada. A apostila substitui a legalização consular."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 26,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Direitos Fundamentais aplicados à atividade notarial — Art. 5º CF",
            "link": "",
            "description": "Art. 5º, LXXVI — gratuidade de registro de nascimento e certidão de óbito para os reconhecidamente pobres. Conexão direta com emolumentos e gratuidade nos cartórios. Art. 5º, XXXIII — direito de informação/publicidade registral. Armadilha FGV: a gratuidade do LXXVI é para reconhecidamente pobres; a "
          },
          {
            "id": 27,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Conciliação, Mediação e LGPD nos Cartórios",
            "link": "",
            "description": "Cartórios podem realizar conciliação e mediação extrajudiciais (Provimento CNJ). LGPD: cartórios tratam dados pessoais → devem observar princípios (finalidade, necessidade, adequação). Art. 23 LGPD — tratamento pelo poder público. Armadilha FGV: a publicidade registral CONVIVE com a LGPD — há tensão"
          }
        ]
      }
    ]
  },
  {
    "id": "04",
    "title": "Ciclo 04 — Tabelionato de Notas — Parte 1",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 28,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Tabelionato de Notas — Serviço Notarial e Princípios",
            "link": "",
            "description": "Princípios expressos: fé pública, imparcialidade, legalidade, publicidade. Princípios implícitos: imediatidade, personalidade, rogação. O tabelião de notas é responsável pela lavratura de escrituras públicas, procurações, testamentos públicos, atas notariais. Armadilha FGV: a fé pública do tabelião "
          },
          {
            "id": 29,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Ato Notarial — Requisitos e Classificação",
            "link": "",
            "description": "Classificação: atos protocolares (lavrados em livros — escrituras, testamentos, atas) vs. extraprotocolares (autenticações, reconhecimento de firma). Requisitos de validade: capacidade das partes, objeto lícito, forma legal. Armadilha FGV: autenticação e reconhecimento de firma NÃO são atos protocol"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 30,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Escritura Pública — Requisitos e Formalidades",
            "link": "",
            "description": "Art. 215 CC — DECORAR todos os requisitos da escritura pública: (I) data e local, (II) nome e qualificação das partes, (III) manifestação de vontade, (IV) referência ao título, (V) valor do bem. Art. 108 — obrigatória para imóveis >30 salários mínimos. Lei 7.433, art. 1º — documentos necessários (RG"
          },
          {
            "id": 31,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Escritura Pública de Compra e Venda",
            "link": "",
            "description": "Art. 481 — obrigações das partes. Art. 489 — nulo o contrato de compra e venda cujo preço é arbitrado por uma das partes. Art. 496 — anulável a venda de ascendente a descendente sem consentimento dos demais descendentes e do cônjuge. Art. 1.245 — a propriedade imobiliária se transfere pelo REGISTRO "
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 32,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Doação por Escritura Pública + Permuta",
            "link": "",
            "description": "Art. 541 — a doação de imóvel se faz por escritura pública (obrigatória, independente do valor). Art. 544 — doação de ascendente a descendente = antecipação de herança. Art. 548 — nula a doação de todos os bens. Art. 549 — nula se exceder legítima. Permuta: art. 533 — aplicam-se as regras da compra "
          },
          {
            "id": 33,
            "discipline": "DIREITO CIVIL",
            "title": "Direito das Obrigações — Adimplemento e Inadimplemento",
            "link": "",
            "description": "Pagamento (arts. 304-333) — quem paga, a quem se paga, objeto, prova, lugar, tempo. Consignação em pagamento (arts. 334-345). Novação (arts. 360-367). Compensação (arts. 368-380). Mora (arts. 394-401) — DECORAR art. 394 (mora do devedor) e art. 395 (efeitos). Armadilha FGV: consignação extrajudicial"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 34,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Improbidade Administrativa aplicada a Notários — Lei 8.429/92",
            "link": "",
            "description": "Art. 2º — notários e registradores se enquadram como agentes públicos para fins de LIA. Atos de improbidade: enriquecimento ilícito (art. 9), prejuízo ao erário (art. 10), violação de princípios (art. 11). A Lei 14.230/2021 eliminou a modalidade culposa (tudo agora é doloso). Armadilha FGV: após a L"
          }
        ]
      }
    ]
  },
  {
    "id": "05",
    "title": "Ciclo 05 — Tabelionato de Notas — Parte 2 + Contratos",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 35,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Escrituras de Separação, Divórcio e Inventário Extrajudiciais",
            "link": "",
            "description": "Requisitos para divórcio em cartório: consensual, sem filhos menores ou incapazes, assistência de advogado. Inventário extrajudicial: consenso, maiores e capazes, advogado. DECORAR: Lei 11.441/2007 autorizou. Res. CNJ 35/2007 regulamentou. Armadilha FGV: se houver testamento, pode ou não fazer inven"
          },
          {
            "id": 36,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Testamentos Públicos em Cartório",
            "link": "",
            "description": "Art. 1.864 — testamento público: ditado pelo testador ao tabelião, na presença de 2 testemunhas. Art. 1.865 — testador não pode assinar: a rogo, indicando quem assina. Art. 1.867 — pode ser lavrado em qualquer tabelionato. Armadilha FGV: testamento público exige 2 testemunhas (art. 1.864, II); a aus"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 37,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Atas Notariais e Procurações Públicas",
            "link": "",
            "description": "Ata notarial — art. 384 CPC: a existência e o modo de existir de algum fato pode ser atestada por ata lavrada por tabelião. Serve como prova pré-constituída. Procuração pública: obrigatória quando a lei exigir (art. 657 CC). Armadilha FGV: ata notarial NÃO é declaração de vontade (como escritura), é"
          },
          {
            "id": 38,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Carta de Sentença Notarial",
            "link": "",
            "description": "Instrumento pelo qual o tabelião certifica o teor de decisão judicial para fins de registro. Quando é utilizada e como se relaciona com o mandado judicial."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 39,
            "discipline": "DIREITO CIVIL",
            "title": "Teoria Geral dos Contratos — Foco Registral",
            "link": "",
            "description": "Art. 421 — função social do contrato. Art. 421-A (Lei 13.874) — contratos paritários. Art. 422 — boa-fé objetiva. Art. 462 — contrato preliminar (compromisso de compra e venda — altíssima relevância registral). Art. 463 — obrigação de celebrar contrato definitivo. Armadilha FGV: compromisso de compr"
          },
          {
            "id": 40,
            "discipline": "DIREITO CIVIL",
            "title": "Contratos em Espécie com relevância registral",
            "link": "",
            "description": "Locação registrada no RI — efeito de direito real (oponível a terceiros, art. 576 CC + art. 8º Lei 8.245/91). Compromisso de compra e venda — registrado = direito real de aquisição (art. 1.417-1.418). Armadilha FGV: locação SÓ vincula terceiros se registrada no RI (art. 576 CC)."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 41,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Poder Judiciário e Serventias — Art. 92-126 CF",
            "link": "",
            "description": "CNJ — composição (art. 103-B), competência para fiscalizar serventias (art. 103-B, §4º, III — receber reclamações contra serventias). STF — decisões sobre natureza jurídica da atividade notarial (ADI 3.643, ADI 1.378). Armadilha FGV: o CNJ NÃO exerce jurisdição — é órgão administrativo. Não pode anu"
          }
        ]
      }
    ]
  },
  {
    "id": "06",
    "title": "Ciclo 06 — Tabelionato de Protestos + Direito Tributário Registral",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 42,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Protesto Notarial — Conceito, Princípios e Função",
            "link": "",
            "description": "Art. 1º Lei 9.492 — protesto é o ato formal e solene pelo qual se prova a inadimplência e o descumprimento de obrigação. Art. 3º — competência do tabelião de protesto. Princípios: territorialidade, temporariedade, unicidade, legalidade. Armadilha FGV: protesto NÃO é executivo — é ato de prova, tem f"
          },
          {
            "id": 43,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Protesto — Procedimento (Apresentação, Intimação, Lavratura)",
            "link": "",
            "description": "Art. 5º — apresentação do título. Art. 9º — prazo de 3 dias úteis para pagamento ou manifestação. Art. 12 — protocolo. Art. 14 — intimação. Art. 19 — pagamento e efeitos. Art. 20 — lavratura e registro. Armadilha FGV: prazo de 3 dias para pagamento é ÚTIL (art. 9º), não corrido. Protesto de CDA (cer"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 44,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Protesto — Cancelamento, Sustação e Desistência",
            "link": "",
            "description": "Art. 26 — cancelamento mediante apresentação de documento de quitação ou autorização judicial. Art. 27 — prazo de 5 anos para retirada do protesto dos índices. Sustação judicial: medida cautelar que impede a lavratura. Desistência: o credor pode desistir antes da lavratura. Armadilha FGV: cancelamen"
          },
          {
            "id": 45,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Protesto — Qualificação, Competência e CENPROT",
            "link": "",
            "description": "Competência territorial: protesto no domicílio do devedor (regra). Qualificação: o tabelião examina a regularidade formal do título. CENPROT — Central Nacional de Protestos: base de dados eletrônica que unifica informações."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 46,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "ITBI — Imposto sobre Transmissão de Bens Imóveis",
            "link": "",
            "description": "ITBI — competência do município da situação do imóvel. Fato gerador: transmissão inter vivos de bens imóveis (art. 35 CTN). Base de cálculo: valor venal. IMUNIDADE: art. 156, §2º, I CF — não incide na incorporação ao patrimônio de PJ (salvo se atividade preponderante for compra/venda de imóveis). Te"
          },
          {
            "id": 47,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "ITCMD + ISS Notarial + Emolumentos como Taxa",
            "link": "",
            "description": "ITCMD — causa mortis e doação (competência estadual). ISS — incide sobre serviços notariais? Sim, lista anexa da LC 116/2003 inclui. Emolumentos como taxa — ADI 1.378 (natureza tributária). Armadilha FGV: ITBI é municipal (inter vivos), ITCMD é estadual (mortis causa/doação). O oficial de RI não pod"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 48,
            "discipline": "DIREITO CIVIL",
            "title": "Direitos Reais — Posse e Propriedade (Introdução)",
            "link": "",
            "description": "Distinção posse vs. propriedade (posse é fato, propriedade é direito). Art. 1.245 — propriedade imobiliária se adquire pelo REGISTRO. Art. 1.227 — direitos reais sobre imóveis constituídos ou transmitidos por atos entre vivos SÓ se adquirem com o registro no RI. Armadilha FGV: posse NÃO é direito re"
          }
        ]
      }
    ]
  },
  {
    "id": "07",
    "title": "Ciclo 07 — RCPN (Nascimento, Casamento, Óbito) + CC Família",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 49,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Organização, Livros e Atos",
            "link": "",
            "description": "Art. 29 — atos obrigatórios: nascimento, casamento, óbito. Art. 33 — livros obrigatórios: A (nascimento), B (casamento), B-Auxiliar (casamento religioso), C (óbito), C-Auxiliar (natimorto), D (proclamas), E (demais atos). DECORAR: cada livro e seu objeto."
          },
          {
            "id": 50,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Registro de Nascimento e Filiação",
            "link": "",
            "description": "Art. 50 — declaração de nascimento (prazo de 15 dias para o pai, 45 para a mãe). Art. 52 — elementos do registro (nome, filiação, naturalidade). Art. 1.597 CC — presunção de paternidade. Art. 1.609 — reconhecimento voluntário. Armadilha FGV: registro de nascimento é GRATUITO para todos (Lei 9.534/97"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 51,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Casamento e Habilitação",
            "link": "",
            "description": "Habilitação para casamento — art. 1.525 CC (requerimento ao oficial de RCPN). Proclamas — art. 1.527. Impedimentos — art. 1.521 (DECORAR). Causas suspensivas — art. 1.523. Casamento religioso com efeitos civis — art. 1.515. Armadilha FGV: impedimento (art. 1.521) gera NULIDADE, causa suspensiva (art"
          },
          {
            "id": 52,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Registro de Óbito",
            "link": "",
            "description": "Art. 77 — declaração de óbito (24h). Art. 78 — quem é obrigado a declarar. Art. 79 — elementos do registro. Art. 80 — óbito sem cadáver (morte presumida — art. 7º CC: sem decretação de ausência, após esgotados meios). Art. 88 — certidão de óbito gratuita (Lei 9.534/97). Armadilha FGV: natimorto se r"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 53,
            "discipline": "DIREITO CIVIL",
            "title": "Direito de Família — Casamento, Regimes de Bens",
            "link": "",
            "description": "Regimes de bens — DECORAR: comunhão parcial (art. 1.658-1.666, regime legal), comunhão universal (art. 1.667-1.671), separação obrigatória (art. 1.641 — maiores de 70 anos), participação final nos aquestos, separação convencional. Pacto antenupcial — art. 1.640, §único (escritura pública) + art. 1.6"
          },
          {
            "id": 54,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Nome, Retificação e Alterações",
            "link": "",
            "description": "Princípios do nome: imutabilidade relativa, indisponibilidade. Exceções: art. 56 (1 ano após maioridade), art. 57 (exceção judicial), art. 58 (prenome definitivo, exceto coisa ridícula). Lei 14.382/2022 — facilitou retificação administrativa (sem necessidade de ação judicial em muitos casos). Armadi"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 55,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Averbação de Registro de Pessoa Transgênero",
            "link": "",
            "description": "STF autorizou alteração de nome e sexo diretamente no RCPN, sem cirurgia ou laudos. Provimento 73/2018 CNJ regulamentou. Procedimento: averbação no registro original. Armadilha FGV: NÃO exige cirurgia, NÃO exige laudo psicológico, NÃO exige autorização judicial (desde 2018)."
          }
        ]
      }
    ]
  },
  {
    "id": "08",
    "title": "Ciclo 08 — RCPJ + RTD + CC Família/Sucessões (Introdução)",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 56,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RTD — Registro de Títulos e Documentos",
            "link": "",
            "description": "Art. 127 — atos sujeitos a registro facultativo (para conservação). Art. 129 — atos sujeitos a registro obrigatório (para validade contra terceiros): contratos de locação, cessão de crédito, penhor. Art. 130 — registro para mera publicidade. Armadilha FGV: registro no RTD é para OPONIBILIDADE a terc"
          },
          {
            "id": 57,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPJ — Registro Civil de Pessoas Jurídicas",
            "link": "",
            "description": "Art. 114 — atos que devem ser registrados: (I) contrato social, (II) atas de sociedades civis, (III) estatutos de fundações. Art. 119 — registro de jornais, revistas e periódicos. Art. 45 CC — começo da existência legal da PJ com o registro. Armadilha FGV: PJ de direito privado começa com registro n"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 58,
            "discipline": "DIREITO CIVIL",
            "title": "Direito das Sucessões — Sucessão Legítima",
            "link": "",
            "description": "Art. 1.784 — princípio da saisine (transmissão automática no momento da morte). Art. 1.829 — DECORAR ordem de vocação: (I) descendentes em concorrência com cônjuge, (II) ascendentes em concorrência com cônjuge, (III) cônjuge sobrevivente, (IV) colaterais até 4º grau. Armadilha FGV: cônjuge em separa"
          },
          {
            "id": 59,
            "discipline": "DIREITO CIVIL",
            "title": "Direito das Sucessões — Testamento e Inventário Extrajudicial",
            "link": "",
            "description": "Espécies de testamento: público (art. 1.864 — revisão), cerrado (art. 1.868), particular (art. 1.876). Legítima — 50% do patrimônio é reservado aos herdeiros necessários (art. 1.846). Inventário extrajudicial: requisitos (partes maiores e capazes, consenso, advogado). Armadilha FGV: testamento não p"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 60,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Teoria Geral do Direito Societário — Foco Registral",
            "link": "",
            "description": "Art. 966 — conceito de empresário. Art. 1.150 — empresário se registra na Junta Comercial; sociedade simples no RCPJ. Art. 985 — sociedade não registrada = sociedade em comum (sem personalidade). Armadilha FGV: sociedade simples se registra no RCPJ; sociedade empresária na Junta Comercial; sociedade"
          },
          {
            "id": 61,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Interação Interinstitucional e com Órgãos Públicos",
            "link": "",
            "description": "Comunicações obrigatórias dos cartórios: RCPN comunica nascimentos/óbitos à Receita, INSS. RI comunica alienações à Receita (DOI — Declaração de Operações Imobiliárias). Protestos comunicam ao SPC/Serasa."
          }
        ]
      }
    ]
  },
  {
    "id": "09",
    "title": "Ciclo 09 — Registro de Imóveis — Fundamentos e Princípios",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 62,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Introdução, Propriedade Imobiliária e Sistemas de Transmissão",
            "link": "",
            "description": "Sistema de transmissão brasileiro: título + modo (escritura + registro). Art. 1.245 — transferência inter vivos pelo registro. Art. 1.246 — registro eficaz DESDE A PRENOTAÇÃO. Art. 1.247 — retificação se o registro não corresponder à realidade. Art. 167 LRP — DECORAR os incisos I (atos de registro) "
          },
          {
            "id": 63,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Princípios do Registro de Imóveis (aprofundamento)",
            "link": "",
            "description": "APROFUNDAR princípios: (1) Inscrição — art. 167; (2) Prioridade — art. 186 (prenotação); (3) Especialidade objetiva (descrição do imóvel) e subjetiva (qualificação das partes); (4) Continuidade — art. 195 (encadeamento de registros); (5) Legalidade/Qualificação — o registrador examina a legalidade d"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 64,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Matrícula, Registro e Averbação",
            "link": "",
            "description": "DISTINÇÃO FUNDAMENTAL: matrícula ≠ registro ≠ averbação. Matrícula (art. 176): individualização do imóvel, atribuição de número próprio. Registro (art. 167, I): constituição, transferência, modificação de direitos reais. Averbação (art. 167, II): alterações posteriores (construção, demolição, mudanç"
          },
          {
            "id": 65,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Livros e Processamento Registral",
            "link": "",
            "description": "Art. 173 — livros obrigatórios: 1 (Protocolo), 2 (Registro Geral), 3 (Auxiliar), 4 (Indicador Real), 5 (Indicador Pessoal). Protocolo: diário de prenotação (art. 174) — gera a PRIORIDADE. Registro Geral: matrículas e registros propriamente ditos."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 66,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Qualificação Registral e Dúvida",
            "link": "",
            "description": "Qualificação: exame de legalidade do título pelo registrador. Dúvida registral (art. 198): procedimento administrativo quando o registrador se recusa a praticar o ato. Art. 198 — quem suscita a dúvida é o OFICIAL (não a parte); a parte REQUER a suscitação. Armadilha FGV: a dúvida é suscitada pelo of"
          },
          {
            "id": 67,
            "discipline": "DIREITO CIVIL",
            "title": "Direitos Reais — Propriedade e Usucapião",
            "link": "",
            "description": "Espécies de usucapião: extraordinária (art. 1.238 — 15 ou 10 anos), ordinária (art. 1.242 — 10 ou 5 anos + justo título + boa-fé), especial urbana (art. 1.240 — 5 anos, até 250m²), especial rural (art. 1.239 — 5 anos, até 50ha). Usucapião extrajudicial — Art. 216-A LRP (IMPORTANTÍSSIMO). Armadilha F"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 68,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Ordem Econômica, Política Urbana e Função Social — Foco Registral",
            "link": "",
            "description": "Art. 182 — política urbana (Estatuto da Cidade). Art. 183 — usucapião especial urbano constitucional (5 anos, 250m²). Art. 170 — princípios da ordem econômica (função social da propriedade). Art. 5º, XXII — direito de propriedade; XXIII — função social."
          }
        ]
      }
    ]
  },
  {
    "id": "10",
    "title": "Ciclo 10 — RI Retificação + Parcelamento + CC Vizinhança/Condomínio",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 69,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Retificação de Registro (Administrativa e Judicial)",
            "link": "",
            "description": "Art. 212 — retificação pode ser administrativa (pelo oficial) ou judicial. Art. 213 — retificação administrativa: (I) erro evidente na transcrição/inscrição, (II) inserção/alteração de medidas com anuência dos confrontantes, (III) área objeto de mensuração/georreferenciamento. Art. 214 — nulidades ("
          },
          {
            "id": 70,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Parcelamento do Solo e Registro (Lei 6.766/79)",
            "link": "",
            "description": "Art. 2º — parcelamento é a divisão de lote em frações (loteamento) ou transformação de propriedade em condomínio. Art. 3º — exigências (licença municipal, aprovação, escritura, registro). Art. 4º — vedações (não-loteável menor que 125m², declividade >30%, inundável). Art. 18 — registro: compete ao R"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 71,
            "discipline": "DIREITO CIVIL",
            "title": "Direito de Vizinhança — Vedações, Passagem, Limites e Responsabilidade",
            "link": "",
            "description": "Art. 1.277 — vedação a atividades potencialmente danosas aos vizinhos (fumaça, poeira, barulho, radiação). Art. 1.279 — exceção: atividades normais de propriedade (direito de propriedade não é absoluto — função social). Art. 1.284 — direito de passagem (acesso necessário ao imóvel sem saída para via"
          },
          {
            "id": 72,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Condomínio em Edifício (Unidades Autônomas e Áreas Comuns)",
            "link": "",
            "description": "Lei 4.591/64, Art. 2º — incorporação é atividade de promover a construção de edifício (fracionamento). Art. 8º — condomínio em edifício: cada unidade tem matrícula individual; áreas comuns são registradas em matrícula única. CC Art. 1.331 — direitos e deveres dos condôminos. Art. 1.335 — convenção d"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 73,
            "discipline": "DIREITO CIVIL",
            "title": "Condomínio — Deliberações, Assembleia e Dissolução",
            "link": "",
            "description": "Art. 1.345 — assembleia geral delibera sobre assuntos do condomínio. Art. 1.346 — convenção define modo de convocação e deliberação. Art. 1.352 — renovação de síndico (máx. 2 anos). Art. 1.354 — destituição de síndico por deliberação da assembleia. Art. 1.356 — dissolução: por consenso unânime (ence"
          },
          {
            "id": 74,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Incorporação Imobiliária (Lei 4.591/64)",
            "link": "",
            "description": "Art. 1º — incorporação é atividade de transformação de terreno em frações autônomas (edifício). Art. 2º — incorporador é pessoa física/jurídica. Art. 3º — memorial descritivo e convenção obrigatórios (devem ser registrados no RI ANTES da comercialização). Art. 8º — registro provisório na incorporaçã"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 75,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Fiscalização e Disciplina dos Notários e Registradores — Responsabilidade e Sanções",
            "link": "",
            "description": "Art. 28 — fiscalização é competência do Tribunal de Justiça (visitas periódicas). Art. 29 — responsabilidade civil e criminal. Art. 30 — suspensão temporária (até 30 dias) para violações. Art. 31 — cassação da delegação (perda do exercício da atividade). Art. 32 — multa. Art. 33 — suspensão de receb"
          },
          {
            "id": 76,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Garantias da Propriedade e Ordem Econômica (CF/88 + Lei 14.382/2022)",
            "link": "",
            "description": "Art. 5º XXII — garantia do direito de propriedade (direito fundamental). Art. 5º XXIII — propriedade atenderá função social. Tensão fundamental: propriedade ≠ irrestrita. Lei 14.382/2022 reafirma publicidade registral como GARANTIA (segurança jurídica). Art. 170, II — livre iniciativa + função socia"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 77,
            "discipline": "DIREITO CIVIL",
            "title": "Direitos Reais sobre Coisa Alheia — Servidões, Enfiteuse, Superfície",
            "link": "",
            "description": "Art. 1.378 — servidão é direito real que permite ao proprietário de um imóvel (dominante) usar imóvel alheio (serviente). Art. 1.380 — pode ser perpétua ou temporal. Art. 1.383 — não há direito de uso privativo de servidão (ambigüidade — ARMADILHA). Art. 1.369 — direito de superfície (uso + fruição "
          },
          {
            "id": 78,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Propriedade Privada, Função Social e Políticas Públicas (CF Arts. 5º, 170, 182-184)",
            "link": "",
            "description": "Art. 5º XXII — propriedade é direito (não é privilégio). Art. 5º XXIII — subordinação à função social. Art. 170, II-III — livre iniciativa + propriedade privada. Art. 182 — política urbana (plano diretor municipal obrigatório). Art. 182, §4º — IPTU progressivo (sanciona imóvel não-utilizado). Art. 1"
          }
        ]
      }
    ]
  },
  {
    "id": "11",
    "title": "Ciclo 11 — RI Alienação Fiduciária + Incorporação/Condomínio + CC Garantias",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 79,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Alienação Fiduciária de Imóveis (Lei 9.514/97)",
            "link": "",
            "description": "Art. 1º — alienação fiduciária é transferência de propriedade resolúvel do imóvel ao credor. Art. 22 — deve ser registrada no RI (matrícula diferenciada). Art. 23 — contratos têm CLÁUSULA PENAL (taxa de mora + multa + juros). Art. 26 — PROCEDIMENTO EXTRAJUDICIAL DE EXECUÇÃO (não precisa ação judicia"
          },
          {
            "id": 80,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Cédulas de Crédito Imobiliário (Lei 10.931/2004)",
            "link": "",
            "description": "Art. 1º Lei 10.931/04 — CCI é título de crédito garantido por hipoteca (ou alienação fiduciária). Art. 3º — pode ser emitida por instituição financeira ou não. Art. 4º — é negociável (pode ser transferida — endosso). Art. 14 — tem equivalência de sentença (execução extrajudicial simples). Armadilha "
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 81,
            "discipline": "DIREITO CIVIL",
            "title": "Direitos Reais de Garantia — Hipoteca, Penhor, Anticrese",
            "link": "",
            "description": "Art. 1.473 — hipoteca é direito real de garantia (credor não tem posse, apenas direito de execução). Art. 1.478 — hipoteca é registrada no RI. Art. 1.484 — ordem de hipoteca (primeira, segunda, terceira) — determina prioridade na execução. Art. 1.505 — extinção (pagamento, renúncia, prescrição 20 an"
          },
          {
            "id": 82,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Usucapião Extrajudicial (Art. 216-A LRP / Lei 13.105/2015 — CPC)",
            "link": "",
            "description": "Art. 216-A — procedimento ADMINISTRATIVO perante registrador (não judicial). Requisitos: (1) ata notarial comprovando posse, (2) planta e memorial descritivo georreferenciados, (3) certidões negativas (CRI, CCL, RFB), (4) justo título (comprovação de transferência anterior) OU prova de posse. Proced"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 83,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Adjudicação Compulsória (Lei 10.931/2004 + CC Arts. 1.418-1.422)",
            "link": "",
            "description": "Art. 1.418 CC — contrato de compra e venda pode conter cláusula de adjudicação compulsória (creditor pode obrigar devedor a transferir propriedade caso inadimplemento). Lei 10.931/04, Art. 26-35 — procedimento de adjudicação: (1) devedor inadimplente de CCI ou alienação fiduciária, (2) credor requer"
          },
          {
            "id": 84,
            "discipline": "DIREITO CIVIL",
            "title": "Obrigações e Responsabilidade Civil — Inadimplemento e Indenização",
            "link": "",
            "description": "Art. 234 — devedor é responsável por perdas e danos (mora, culpa, garantia de resultado). Art. 237 — mora (atraso injustificado). Art. 239 — credor não é obrigado a receber antes do vencimento. Art. 402 — perdas e danos incluem prejuízos atuais e lucros cessantes (lucro que deixou de ganhar). Art. 4"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 85,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Garantia da Propriedade — Sistema de Registro (Publicidade e Presunção)",
            "link": "",
            "description": "Art. 1º Lei 6.015/73 — registro é título constitutivo (faz lei, presume-se registrado). CC Art. 1.245 — transferência de propriedade por negócio jurídico é eficaz entre partes e relação a terceiros QUANDO REGISTRADA. Sem registro = vínculo obrigacional (devedor ainda é proprietário). Art. 1.251 — ad"
          },
          {
            "id": 86,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "ITBI — Imposto sobre Transmissão de Bens Imóveis (Lei Complementar 116/03)",
            "link": "",
            "description": "Art. 2º LC 116/03 — ITBI incide sobre transmissão de bens imóveis (compra, venda, permuta, doação, adjudicação, usucapião extrajudicial). Fato gerador: assinatura do instrumento de transferência. Art. 3º — alíquota é definida por lei municipal (máx. 3%, em média 2-2,5%). Sujeito passivo: adquirente "
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 87,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Tipicidade de Fatos Inscritíveis (Lei 14.382/2022)",
            "link": "",
            "description": "Art. 167 Lei 6.015/73 — lista de FATOS REGISTRÁVEIS em RI. Lei 14.382/2022 ampliou significativamente (permitiu mais atos). Tipicidade: atos devem estar expressamente previstos em lei (princípio de legalidade). Inovações Lei 14.382/2022: (1) servidão e direitos de passagem podem ser registrados sem "
          },
          {
            "id": 88,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Títulos de Crédito — Teoria Geral e Espécies (Lei Uniforme de Genebra)",
            "link": "",
            "description": "Art. 887 — título de crédito é documento necessário para exercer direito nele mencionado. Requisitos: (1) literalidade (o que está escrito), (2) cartularidade (posse do documento), (3) autonomia (direito não depende de relação anterior). Art. 889 — essencialidade (deve conter: nome do credor, quanti"
          }
        ]
      }
    ]
  },
  {
    "id": "12",
    "title": "Ciclo 12 — RI Usucapião + Adjudicação + CC Direitos Reais sobre Coisa Alheia",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 89,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Georreferenciamento de Imóveis (Lei 10.267/2001 + Lei 14.382/2022)",
            "link": "",
            "description": "Lei 10.267/01 — georreferenciamento é demarcação precisa de limites de imóvel (coordenadas GPS). Art. 1º — obrigatório para imóveis maiores que 4 módulos fiscais em áreas urbanas/rurais (com exceções). Lei 14.382/2022 ampliou obrigatoriedade (também cidades médias, áreas de conflito). Planta e memor"
          },
          {
            "id": 90,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Publicidade no Sistema Registral (Lei 6.015/73 + Lei 14.382/2022)",
            "link": "",
            "description": "Art. 1º Lei 6.015/73 — PRESUNÇÃO DE REGISTRO (quem registrou é proprietário). Publicidade é FORÇA da presunção (terceiros sabem do registro). Registrador fornece certidões (CRI — Certidão de Registro de Imóvel). Lei 14.382/2022 — SERP (Sistema Eletrônico dos Registros Públicos) modernizou publicidad"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 91,
            "discipline": "DIREITO CIVIL",
            "title": "Sucessões — Abertura, Herdeiros e Testamento",
            "link": "",
            "description": "Art. 1.784 — abertura da sucessão ocorre no momento da morte (domicílio do morto). Art. 1.786 — ordem de herança: (1) descendentes, (2) ascendentes, (3) cônjuge, (4) colaterais até 4º grau. Art. 1.789 — sucessão legítima é ordem legal. Art. 1.790 — companheiro(a) concorre com cônjuge (Lei 11.441/07 "
          },
          {
            "id": 92,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Bem de Família (Lei 8.009/90)",
            "link": "",
            "description": "Lei 8.009/90, Art. 1º — bem de família é o imóvel residencial da família (uno + móveis de uso ordinário), IMPENHORÁVEL. Art. 2º — automático (não precisa registro; é LEGAL). Art. 3º — exceções à impenhorabilidade: (1) crédito de construtor/fornecedor material de construção, (2) crédito de pessoal da"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 93,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Sistema Financeiro Imobiliário (Lei 9.514/97 + Lei 10.931/2004)",
            "link": "",
            "description": "Lei 9.514/97 — modernizou financiamento imobiliário (alienação fiduciária como GARANTIA). Art. 1º — sistema financeiro imobiliário (SFI) autoriza operações de financiamento para construção, aquisição, reforma de imóvel. Art. 2º — participantes: bancos, CEF, construtoras, incorporadoras. Art. 22 — al"
          },
          {
            "id": 94,
            "discipline": "DIREITO CIVIL",
            "title": "Contratos em Espécie — Compra e Venda (Imóvel)",
            "link": "",
            "description": "Art. 481 — compra e venda é contrato (obrigação mútua). Art. 482 — comprador obriga-se a pagar preço. Art. 483 — vendedor obriga-se a transferir propriedade. Art. 484 — compra e venda é CONSENSUAL (contrato se aperfeiçoa pelo consentimento, não precisa entrega). Art. 492 — obrigação do vendedor: (1)"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 95,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Atos Administrativos — Conceito, Características e Requisitos",
            "link": "",
            "description": "Lei 9.784/99, Art. 1º — processo administrativo federal (aplicável à Administração Pública direta/indireta). Art. 2º — administração pública obedece princípios: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, impessoalidade. Ato administrativo: (1) emanado de autorid"
          },
          {
            "id": 96,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Invalidade e Ineficácia de Contrato e Relação com Registro (CC Arts. 104-184)",
            "link": "",
            "description": "CC Art. 104 — requisitos ato jurídico válido: (1) agente capaz, (2) objeto lícito/possível/determinado, (3) forma prescrita/não proibida. Art. 166 — nulidade ABSOLUTA (ato é sempre nulo): incapacidade absoluta, objeto impossível, forma essencial. Art. 171 — anulabilidade (ato pode ser anulado por le"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 97,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Registro de Imóveis e Direito à Proteção de Dados Pessoais (LGPD + Lei 14.382/2022)",
            "link": "",
            "description": "Lei 13.709/18 — dados pessoais (informação relacionada a pessoa identificada/identificável). LGPD se aplica ao registro de imóveis? SIM — quando registrador coleta dados sensíveis (nome, CPF, RG, endereço). Princípios: (1) legalidade (base legal), (2) finalidade (propósito específico), (3) necessida"
          },
          {
            "id": 98,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Propriedade Intelectual e Direitos Autorais (CF Art. 5º XXVII, Lei 9.610/98)",
            "link": "",
            "description": "CF Art. 5º XXVII — propriedade intelectual é direito fundamental (tempo limitado para autores/inventores). Lei 9.610/98 — direitos autorais: (1) direitos morais (paternidade, integridade), (2) direitos patrimoniais (reprodução, distribuição, aluguel). Duração: vida do autor + 70 anos (pessoa física)"
          }
        ]
      }
    ]
  },
  {
    "id": "13",
    "title": "Ciclo 13 — RI Bem de Família + SFI + Cédulas de Crédito + Empresarial Títulos",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 99,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Direito Real de Laje (Lei 13.465/2017 — Novo Instituto)",
            "link": "",
            "description": "Lei 13.465/2017 — criou instituto NOVO: direito real de laje (DRL). Art. 1.510-A CC — DRL é direito real de construir/plantar SOBRE laje de propriedade alheia. Art. 1.510-B — pode ser transmissível (compravenda) e alienável (hipoteca). Art. 1.510-C — obrigação: pagar contribuição ao proprietário da "
          },
          {
            "id": 100,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Escrituras Públicas (Lei 8.935/94 + Provimento 149/2023)",
            "link": "",
            "description": "Lei 8.935/94, Art. 6º — tabelião de notas (notário) é responsável por escrituras. Art. 7º — oficiais de RI registram documentos. DISTINÇÃO: Notário (tabulião de notas) = autoridade que AUTENTICA e REDIGE escritura (valida assinatura, vontade, capacidade). Registrador = funcionário que REGISTRA no RI"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 101,
            "discipline": "DIREITO CIVIL",
            "title": "Contratos em Espécie — Doação (CC Arts. 538-564)",
            "link": "",
            "description": "Art. 538 — doação é contrato (ato de liberalidade — sem contraprestação). Art. 539 — requisitos: (1) capacidade (doador ≥ 18 anos, sã mente), (2) aceitação donatário. Art. 541 — doação é irrevogável (regra) — exceção: doador fica pobre + não consegue subsistência = revogação por ingratidão. Art. 544"
          },
          {
            "id": 102,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Contrato de Compra e Venda de Imóvel (Lei 6.015/73 + CC Arts. 481-504)",
            "link": "",
            "description": "CC Art. 481 — contrato de compra e venda é obrigação mútua. Art. 108 — compra e venda imóvel acima de 30 SM (salários mínimos) DEVE ser por ESCRITO (Lei Uniforme de Genebra — praxe). Na prática: ESCRITURA PÚBLICA (notário redige). Obrigações: (1) vendedor: transferência propriedade (registro), entre"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 103,
            "discipline": "DIREITO CIVIL",
            "title": "Contratos em Espécie — Permuta (CC Arts. 533-537) + Locação (CC Arts. 565-578)",
            "link": "",
            "description": "PERMUTA: Art. 533 — permuta é troca de bem por bem (não há preço em dinheiro). Art. 534 — permuta de imóvel DEVE ser por ESCRITURA PÚBLICA. Art. 535 — valem as regras de compra e venda. LOCAÇÃO: Art. 565 — locação é contrato (locador cede uso/gozo; locatário paga aluguel). Art. 566 — obrigações loca"
          },
          {
            "id": 104,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Títulos Admitidos a Registro (Lei 6.015/73, Art. 167)",
            "link": "",
            "description": "Art. 167 Lei 6.015/73 — lista exaustiva de documentos que podem ser registrados no RI: (1) escritura pública (compravenda, doação, etc.), (2) escritura de divisão (herança), (3) sentença transitada em julgado, (4) ato de governo (decreto de desapropriação), (5) testamento (após morte), (6) contrato "
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 105,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Lei de Reforma Agrária (Lei 8.629/1993 + Lei 13.465/2017)",
            "link": "",
            "description": "Lei 8.629/93, Art. 1º — reforma agrária é desapropriação de imóvel por interesse social (terra não cumpre função social). Art. 4º — desapropriação por interesse social: terras sem produção. Art. 6º — INCRA (Instituto Nacional de Colonização e Reforma Agrária) executa programas. Procedimento: (1) INC"
          },
          {
            "id": 106,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Sociedade Limitada — Estrutura, Quotas e Responsabilidade (CC Arts. 1.052-1.087)",
            "link": "",
            "description": "Art. 1.052 — sociedade limitada é sociedade empresária (exercício profissão comercial). Art. 1.053 — contrato social é documento constitutivo (acordo entre sócios). Art. 1.054 — responsabilidade: sócios respondem limitadamente ao VALOR DA QUOTA (responsabilidade limitada — diferença de sociedade sim"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 107,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Parcelamento do Solo Urbano e Registro (Lei 6.766/79 — Aprofundado)",
            "link": "",
            "description": "Lei 6.766/79, Art. 2º — conceito: loteamento é divisão de imóvel em lotes (fração menores), com abertura de ruas. Condomínio é transformação em UNIDADES AUTÔNOMAS (Lei 4.591/64). Art. 3º — OBRIGAÇÕES DO LOTEADOR: (1) licença municipal, (2) aprovação do projeto, (3) escritura transferindo áreas públi"
          },
          {
            "id": 108,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Impostos Imobiliários — ITBI, IPTU, ITR (Aprofundado)",
            "link": "",
            "description": "ITBI — LC 116/03: (1) fato gerador = transmissão de propriedade imóvel, (2) alíquota = máx. 3% (municipal), (3) contribuinte = adquirente, (4) isenções = cônjuge, imóvel residencial pequeno. ITBI incide sobre: compravenda, doação, permuta, adjudicação, usucapião extrajudicial. IPTU — Lei Municipal: "
          }
        ]
      }
    ]
  },
  {
    "id": "14",
    "title": "Ciclo 14 — Registro de Imóveis: Restrições Administrativas + Sistemas Eletrônicos",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 109,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Tombamento: Restrição Administrativa ao Direito de Propriedade",
            "link": "",
            "description": "Conceito de tombamento e sua anotação no RI. Efeitos patrimoniais e restrições ao proprietário. Armadilha FGV: distinção entre tombamento federal (IPHAN), estadual (SEPAC) e municipal — cada um gera obrigação de anotação no registro com titularidade distinta. Ordem de averbação conforme Lei 14.382/2"
          },
          {
            "id": 110,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Georreferenciamento de Imóveis Rurais e Urbanos",
            "link": "",
            "description": "Obrigatoriedade de georreferenciamento para imóveis rurais. Certificação por profissional credenciado no INCRA. Relevância para transferência de propriedade e hipotecas. Armadilha FGV: Exigência de GRU (Gleba Rural Única) — quando é obrigatório? Diferença entre georreferenciamento e simples descriçã"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 111,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Regularização Fundiária Urbana (REURB): Lei 13.465/2017",
            "link": "",
            "description": "Conceito de REURB e seus objetivos. Modalidades: Reurb-S (Sustentabilidade) e Reurb-E (Escrituras). Procedimento administrativo e registral. Legitimados ativos. Armadilha FGV: Aplicação em favelas e áreas precárias vs. loteamentos clandestinos. Diferença entre REURB-S (sem transferência) e REURB-E ("
          },
          {
            "id": 112,
            "discipline": "Direito Civil - Reforma Agrária",
            "title": "Lei 8.629/1993: Reforma Agrária e Proteção ao Desapropriado",
            "link": "",
            "description": "Sistema de reforma agrária brasileira. Conceito de latifúndio improdutivo. Procedimento de desapropriação para reforma agrária. Restrições e impedimentos. Papel do INCRA. Armadilha FGV: Imóvel com benfeitorias úteis durante desapropriação — indenização vs. apreensão. Direitos do proprietário desapro"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 113,
            "discipline": "Direito Civil - Reforma Agrária",
            "title": "Instrução Normativa INCRA 128/2022: Procedimentos Fundiários",
            "link": "",
            "description": "Procedimentos administrativos INCRA para reforma agrária. Etapas de desapropriação. Imissão de posse. Critérios de seleção de beneficiários. Armadilha FGV: Diferença entre imissão de posse precária (antes de sentença) vs. definitiva. Documentação necessária e prazos. Cancelamento de processo quando "
          },
          {
            "id": 114,
            "discipline": "Direito Administrativo",
            "title": "Princípios da Administração Pública: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência",
            "link": "",
            "description": "Princípios estruturantes do direito administrativo. Vinculação da administração pública. Aplicação aos serviços notariais e de registro. Armadilha FGV: Distinção entre moralidade administrativa e moralidade jurídica comum. Violação de princípios como fundamento para invalidação de atos. Sancionaliza"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 115,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Tipicidade de Fatos Inscritíveis à Luz da Lei 14.382/2022",
            "link": "",
            "description": "Conceito de tipicidade na matrícula. Fatos que admitem inscrição vs. averbação. Novos fatos inscritíveis conforme Lei 14.382/2022 (gravame de direito real de laje, direito real de garantia, restrição voluntária). Armadilha FGV: Fatos que exigem matrícula nova (propriedade + direito real) vs. averbaç"
          },
          {
            "id": 116,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Código Nacional de Matrícula (CNM) e Organização de Cartórios Eletrônicos",
            "link": "",
            "description": "Estrutura do CNM e seus componentes (CNPJ cartório + sequencial matrícula). Unificação de matrículas. Regras de numeração e identificação única. Armadilha FGV: CNM em transferências de propriedade — quando deve ser mantido vs. criado novo. Impacto em buscas registrais e garantias. Integração com SER"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 117,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Serviço de Registro Eletrônico de Imóveis (SREI) e Operador Nacional (ONR)",
            "link": "",
            "description": "Conceito de SREI e operacionalização. ONR como intermediário. Acesso remoto e assinatura digital. Garantias de segurança e fidedignidade. Armadilha FGV: Diferença entre cartório físico que utiliza SREI vs. cartório puramente eletrônico. Responsabilidade do ONR. Requisitos de documentação eletrônica."
          },
          {
            "id": 118,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Direito Real de Laje conforme Lei 14.382/2022",
            "link": "",
            "description": "Direito real de laje como novo direito real. Requisitos para constituição. Inscrição no registro. Relação com propriedade horizontal. Armadilha FGV: Propriedade de laje vs. concessão de uso. Diferença entre laje em imóvel convencional vs. em prédio de andares múltiplos. Transferência e gravame de la"
          }
        ]
      }
    ]
  },
  {
    "id": "15",
    "title": "Ciclo 15 — Registro de Imóveis: Documentação e Contratos Registrais",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 119,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Títulos Admitidos a Registro: Tipologia Documental",
            "link": "",
            "description": "Conceito de título em sentido registral. Documentos admitidos a registro. Requisitos formais. Armadilha FGV: Diferença entre título suficiente (inscritível) vs. insuficiente (exigência de documentos complementares). Escritura pública como pressuposto. Sentença judicial como título. Ato administrativ"
          },
          {
            "id": 120,
            "discipline": "Direito Civil - Tabelionato",
            "title": "Escrituras Públicas: Conceito, Requisitos e Efeitos Jurídicos",
            "link": "",
            "description": "Conceito e essência da escritura pública. Requisitos legais. Fé pública e presunção de veracidade. Lavratura e subscrição. Cópias e traslados. Armadilha FGV: Escritura por instrumento particular vs. pública — quando cada uma é exigida. Validade de contrato sem escritura pública (disposição sobre bem"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 121,
            "discipline": "Direito Civil",
            "title": "Contrato de Compra e Venda de Imóvel: Fases e Eficácia Registral",
            "link": "",
            "description": "Elementos essenciais do contrato de compra e venda de imóvel. Fase obrigacional vs. fase real. Efeitos antes do registro. Armadilha FGV: Contrato preliminar (promessa de venda) — direitos do promissário comprador. Inscrição de contrato preliminar como direito real. Resolução contrato por inadimpleme"
          },
          {
            "id": 122,
            "discipline": "Direito Civil",
            "title": "Contrato de Doação de Imóvel: Formalidades e Efeitos",
            "link": "",
            "description": "Conceito de doação. Requisitos de forma (escritura pública obrigatória para imóvel). Animus donandi. Capacidade do doador e donatário. Armadilha FGV: Doação irrevogável vs. revogável (causas de revogação — superveniência de filhos, ingratidão). Doação com encargo (cláusula modal). Doação por morte ("
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 123,
            "discipline": "Direito Civil",
            "title": "Contrato de Permuta: Características Registrais",
            "link": "",
            "description": "Conceito de permuta (troca de dois bens). Requisitos de forma (escritura pública se envolver imóvel). Equiparação à compra e venda. Armadilha FGV: Permuta com diferença de valores (compra e venda disfarçada?). Exigência de escritura por ambos os permutantes. Registro em duas matrículas (dupla transf"
          },
          {
            "id": 124,
            "discipline": "Direito Civil",
            "title": "Contrato de Locação de Imóvel: Anotações Registrais",
            "link": "",
            "description": "Conceito de locação. Requisitos de forma (não é obrigatória escritura pública, mas recomendada). Averbação de locação no RI (proteção ao locatário). Prazo máximo de locação para registro (Lei 8.245/1991). Armadilha FGV: Locação verbal X registro — validade entre partes vs. eficácia erga omnes. Averb"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 125,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Cédulas de Crédito: Hipoteca e Penhor de Imóvel",
            "link": "",
            "description": "Conceito de cédula de crédito imobiliário. Negociabilidade e garantia hipotecária. Requisitos de forma (pode ser eletrônica). Inscrição como direito real de garantia. Armadilha FGV: CCI vs. hipoteca comum — vantagens do CCI. Prazo de prescrição reduzido. Incorporação de multa e juros na cédula. Tran"
          },
          {
            "id": 126,
            "discipline": "Direito Constitucional",
            "title": "Direitos e Garantias Fundamentais: Direito de Propriedade (art. 5º, XXII) e Função Social",
            "link": "",
            "description": "Garantia constitucional de propriedade. Função social como limitação imanente. Usucapião como forma de aquisição originária. Desapropriação por interesse social/público. Armadilha FGV: Propriedade vs. posse. Propriedade não é direito absoluto (função social). Aplicação em registro de imóveis (REURB,"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 127,
            "discipline": "Direito Civil",
            "title": "Proteção de Dados Pessoais em Serviços Notariais e Registrais",
            "link": "",
            "description": "Princípios de proteção de dados. Responsabilidade de cartórios e registros. Consentimento do titular. Direitos do titular (acesso, retificação, exclusão). Armadilha FGV: Dados sensíveis (origem racial, convicção religiosa, filiação sindical). Diferença entre consentimento e permissão legal. Responsa"
          },
          {
            "id": 128,
            "discipline": "Direito Empresarial",
            "title": "Sociedades Empresárias: Registro de Contratos Sociais e Alterações",
            "link": "",
            "description": "Registro de contratos sociais em Junta Comercial. Diferença entre registro comercial e registro imobiliário. Sociedades imobiliárias (sociedade em comandita por ações, sociedade anônima). Armadilha FGV: Imóvel de sócios em nome de sociedade — necessidade de transferência via RI. Dissolução e liquida"
          }
        ]
      }
    ]
  },
  {
    "id": "16",
    "title": "Ciclo 16 — Sistemas Eletrônicos Registrais e Garantias Mobiliárias",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 129,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Sistema Eletrônico de Registros Públicos (SERP) e Integração Nacional",
            "link": "",
            "description": "Estrutura e funcionamento do SERP. Acesso remoto a registros. Interoperabilidade entre cartórios. Consultas públicas (certidões). Armadilha FGV: SERP como integrador nacional de registros (não substitui registros locais). Segurança de dados e sigilo (informações protegidas). Busca por matrícula elet"
          },
          {
            "id": 130,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Central Nacional de Indisponibilidade de Bens (CNIB) e Anotações de Bloqueio",
            "link": "",
            "description": "Conceito de CNIB como repositório de anotações de indisponibilidade. Hipóteses de bloqueio. Comunicação obrigatória por órgãos judiciais e administrativos. Armadilha FGV: CNIB vs. averbação de bloqueio no RI — diferença operacional. Prazo de bloqueio. Cancelamento automático ou mediante requerimento"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 131,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Direito Real de Garantia e Marco Legal de Garantias (Lei 13.097/2015)",
            "link": "",
            "description": "Novo direito real de garantia (substitui alienação fiduciária de bens imóveis). Constituição e inscrição. Vantagens vs. hipoteca. Armadilha FGV: Alienação fiduciária vs. direito real de garantia — transição Lei 14.382/2022. Hipoteca convencional X direito real de garantia (prioridade, execução, dire"
          },
          {
            "id": 132,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Serviço de Atendimento Eletrônico Compartilhado (SAEC) e Operacionalização",
            "link": "",
            "description": "SAEC como plataforma de atendimento compartilhado. Serviços disponibilizados (certidões, consultas, agendamentos). Responsabilidade do ONR. Segurança de acesso. Armadilha FGV: SAEC X SREI — diferença operacional. SAEC como serviço auxiliar. Custos de utilização e repasse. Assinatura digital e identi"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 133,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Receita do Fundo para Implementação e Custeio do SREI (Provimento 115-2021 CNJ)",
            "link": "",
            "description": "Fundo SREI e sua arrecadação. Distribuição de recursos. Custos de implementação e manutenção. Responsabilidade dos cartórios. Armadilha FGV: Fundo SREI vs. emolumentos (diferença). Percentual retido pelos cartórios. Despesas com certificação digital, acesso a ONR. Transparência na gestão do fundo."
          },
          {
            "id": 134,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Registro de Imóvel e Direito à Proteção dos Dados Pessoais",
            "link": "",
            "description": "Aplicação de LGPD ao RI. Dados pessoais em matrículas (nomes, CPF, endereços). Necessidade de consentimento ou base legal. Armadilha FGV: Publicidade registral vs. privacidade dados. Sigilo de dados sensíveis. Transferência de propriedade — consentimento para processamento. Responsabilidade do cartó"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 135,
            "discipline": "Direito Civil",
            "title": "Sistema Integrado de Pagamentos Eletrônicos (SIPE) e Emolumentos Eletrônicos",
            "link": "",
            "description": "SIPE como plataforma de pagamento integrado. Pagamento de emolumentos via sistema. Segurança de transações. Emissão de comprovantes eletrônicos. Armadilha FGV: SIPE X pagamentos convencionais (débito, crédito, transferência). Integridade de dados de pagamento. Auditoria de transações."
          },
          {
            "id": 136,
            "discipline": "Direito Tributário",
            "title": "Impostos sobre Propriedade Imóvel: IPTU, ITBI e Imposto de Renda (Pessoa Física)",
            "link": "",
            "description": "IPTU como imposto municipal. Sujeito passivo (proprietário). ITBI como imposto sobre transmissão de bem imóvel. Incidência no RI. Armadilha FGV: ITBI X transferência — obrigação de recolher antes de registro. Isenções (transferências em REURB). Imposto de renda em transferência de imóvel (pessoa fís"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 137,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Exame Crítico de Títulos: Legitimidade, Legitimação e Defesa do Direito",
            "link": "",
            "description": "Obrigação de registrador de examinar títulos criticamente. Requisitos formais vs. substanciais. Legitimidade de partes. Legitimação documentada. Armadilha FGV: Dúvidas sobre autoria ou capacidade — direito de não registrar. Recusa registral fundamentada. Defesa do proprietário anterior. Prazo para a"
          },
          {
            "id": 138,
            "discipline": "Direito Processual Civil",
            "title": "Ação Reivindicatória e Ação Possessória: Importância Registral",
            "link": "",
            "description": "Ação reivindicatória (vindicatio) — petitório. Posse vs. propriedade. Ação possessória (manutenção, reintegração, interdito proibitório). Armadilha FGV: Registro como prova de propriedade. Decisão em ação possessória não resolve propriedade. Efeitos registrais de sentença em reivindicação."
          }
        ]
      }
    ]
  },
  {
    "id": "17",
    "title": "Ciclo 17 — Provimento 149/2023 CNJ + Lei 8.935/1994 + Revisão Intensiva",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 139,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Provimento 149/2023 CNJ — Estrutura, Aplicação e Normatividade",
            "link": "",
            "description": "Escopo do Provimento 149 como consolidação de normas. Vigência e abrangência (notários e registradores). Estrutura dividida em partes (Geral, Tabelionato, RI). Armadilha FGV: Provimento 149 vs. normas anteriores (possíveis conflitos). Aplicabilidade a cartórios já modernizados. Alterações substancia"
          },
          {
            "id": 140,
            "discipline": "Direito Notarial",
            "title": "Tabelionato de Notas: Atribuições, Função Pública e Responsabilidade Profissional",
            "link": "",
            "description": "Conceito de tabelião como oficial público. Atribuições exclusivas (lavratura de escrituras, testamentos, procurações). Responsabilidade civil e administrativa. Armadilha FGV: Tabelião X cartório (pessoa física vs. serviço). Limite de atribuições (não pode fazer trabalho notarial além de competência)"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 141,
            "discipline": "Direito Notarial",
            "title": "Lei 8.935/1994 — Parte I: Disposições Gerais e Requisitos de Acesso à Profissão",
            "link": "",
            "description": "Natureza jurídica de serviço notarial e registral. Requisitos para acesso (nacionalidade, maioridade, capacidade civil, idoneidade moral, diploma de bacharel em direito). Exame de proficiência. Armadilha FGV: \"Idoneidade moral\" — avaliação subjetiva, critério jurisprudencial. Incompatibilidades (jui"
          },
          {
            "id": 142,
            "discipline": "Direito Notarial",
            "title": "Lei 8.935/1994 — Parte II: Delegação, Vitaliciedade, Substituição e Extinção",
            "link": "",
            "description": "Delegação de serviço (ato administrativo). Vitaliciedade como proteção profissional. Substituição permanente (designação de sucessor). Causas de extinção (morte, aposentadoria, exoneração, condenação). Armadilha FGV: Vitaliciedade X estabilidade — conceitos distintos. Perda de delegação por condenaç"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 143,
            "discipline": "Direito Notarial",
            "title": "Infrações Disciplinares e Penalidades: Sanções Administrativas e Penais",
            "link": "",
            "description": "Infrações administrativas vs. penais. Sanções disciplinares (advertência, multa, suspensão, cassação). Procedimento administrativo. Armadilha FGV: Falsificação de assinatura em escritura (crime de falsificação documental). Extravio de livros (crime previsão penal). Responsabilidade criminal pessoal "
          },
          {
            "id": 144,
            "discipline": "Direito Notarial",
            "title": "Emolumentos: Conceito, Cálculo, Distribuição e Tabela de Preços",
            "link": "",
            "description": "Conceito de emolumento como remuneração do serviço notarial/registral. Base legal (Lei ou Provimento). Tabela de preços (atualização anual). Armadilha FGV: Emolumento X taxa (diferença — taxa é recolhimento ao governo, emolumento é ao profissional). Isenção de emolumentos (REURB, transferência para "
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 145,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Apostilamento de Documentos: Convenção de Haia e Procedimento",
            "link": "",
            "description": "Conceito de apostilamento como certificação de autenticidade. Documentos públicos Brasil para uso no exterior (signatários Convenção). Procedimento simples (carimbo/assinatura). Armadilha FGV: Apostila vs. autenticação — diferença. Documentos que requerem apostila. Países signatários (UE, EUA, etc.)"
          },
          {
            "id": 146,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Conciliação e Mediação nos Serviços Notariais (Lei 13.140/2015)",
            "link": "",
            "description": "Mediação como forma de resolução de conflitos. Papel do notário/tabelião em mediação. Confidencialidade e sigilo. Armadilha FGV: Mediação vs. arbitragem. Notário como mediador (requisitos). Responsabilidade em mediação fracassada. Acordo em mediação (força executória)."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 147,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Organização Digital dos Serviços Notariais e Registrais: Modernização e Segurança",
            "link": "",
            "description": "Transformação digital dos serviços. Assinatura eletrônica vs. digital. Certificação digital (ICP-Brasil). Segurança de informação. Armadilha FGV: Assinatura eletrônica avançada X qualificada. Cartório digital vs. híbrido. Responsabilidade técnica. Backup e recuperação dados."
          },
          {
            "id": 148,
            "discipline": "Direito Notarial e Registral - REVISÃO INTENSIVA",
            "title": "Lei 8.935/1994 Consolidada + Lei 14.382/2022 + Jurisprudência FGV/CEBRASPE",
            "link": "",
            "description": "Síntese da Lei 8.935/1994 com Lei 14.382/2022. Mudanças substanciais (SREI, direito real de garantia, tipicidade). Questões recorrentes FGV (exame títulos, emolumentos, responsabilidade). Armadilha FGV: Pegadinhas clássicas (averbação X inscrição, emolumento X taxa, vitaliciedade X estabilidade, apo"
          }
        ]
      }
    ]
  },
  {
    "id": "18",
    "title": "Ciclo 18 — REDUZIDA — NASCIMENTO ESPERADO",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 149,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Tabelionato de Protestos (Arts. 1-50)",
            "link": "",
            "description": "Definição, competência, documentos protesto, qualidades do protesto. Armadilha FGV: Confundir protesto notarial com protesto cartorário em RFI. Arts. 14-20 (intimação do devedor)."
          },
          {
            "id": 150,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Tabelionato de Protestos (Arts. 51-100) + Atos de Protesto",
            "link": "",
            "description": "Procedimento do protesto (fases), atos notariais (ciência, intimação), registro em livro de protesto. Armadilha FGV: Ordem de atos — muitas questões trocam sequência de ciência/devolução."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 151,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Cartórios (RCPN)",
            "link": "",
            "description": "Registro cartorial de protesto (livro próprio), requisitos de validade, averbações. Armadilha FGV: RCPN vs. Registro de Protesto em RFI — diferenças essenciais de competência e efeitos."
          },
          {
            "id": 152,
            "discipline": "Direito Civil",
            "title": "Revisão Leve — Títulos de Crédito e Cambial (Arts. 887-926 CC)",
            "link": "",
            "description": "Conceito, características (literalidade, autonomia), títulos comuns (nota promissória, duplicata, cheque). Armadilha FGV: Confundir requisitos de validade de duplicata com protesto — protesto não valida título inválido."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 153,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Responsabilidade Civil do Notário em Protestos",
            "link": "",
            "description": "Responsabilidade do notário por atos ilícitos em protesto, prazos de reclamação, compensação. Armadilha FGV: Responsabilidade objetiva vs. subjetiva — FGV mescla conceitos."
          },
          {
            "id": 154,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Tabelionato de Notas — Escrituras (Arts. 1-100)",
            "link": "",
            "description": "Competência do tabelião (escrituras, atas, reconhecimento), requisitos formais (partes, identificação, consentimento), livros de notas. Armadilha FGV: Quando tabelião NÃO pode recusar ato — ordem pública vs. conveniência pessoal."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 155,
            "discipline": "REVISÃO / SIMULADO CURTO",
            "title": "Resumo Semanal Semana 18 — Consolidação Rápida",
            "link": "",
            "description": "Identificar gaps, revisar confusões comuns FGV"
          }
        ]
      }
    ]
  },
  {
    "id": "19",
    "title": "Ciclo 19 — REDUZIDA",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 156,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Créditos Pignoratícios (RCPJ)",
            "link": "",
            "description": "Conceito RCPJ, bens admitidos (moeda estrangeira, ouro, valores), requisitos de registro, cancelamento. Armadilha FGV: Confundir RCPJ com cartório de protestos ou RFI — jurisdições distintas."
          },
          {
            "id": 157,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Títulos e Documentos (RTD)",
            "link": "",
            "description": "Competência RTD (títulos, documentos), documentos admitidos, requisitos formais, prazo de guarda, cancelamento. Armadilha FGV: RTD não autentica conteúdo — autenticação é função notarial, não registral."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 158,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Imóveis (RI) — Arts. 1-100",
            "link": "",
            "description": "Competência RI (imóveis urbanos/rurais), sistema de registro (aquisição, conservação, segurança), livros de registro, efeitos do registro. Armadilha FGV: Presunção de validade do registro vs. propriedade real — registro não cria propriedade, presume validade."
          },
          {
            "id": 159,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Imóveis (RI) — Arts. 101-200 + Imóvel Rural",
            "link": "",
            "description": "Procedimento de registro (prenotação, decisão, arquivamento), imóvel rural (CCIR, cadastro técnico), matrículas. Armadilha FGV: Prenotação vs. Registro — efeitos diferentes; CCIR não é título de propriedade."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 160,
            "discipline": "Direito Constitucional / Administrativo",
            "title": "Revisão Leve — Competências Administrativa (Arts. 21-25 CF88)",
            "link": "",
            "description": "Competências privativas, comuns, concorrentes — foco em notarial/registral (competência estadual). Armadilha FGV: Confundir competência legislativa com administrativa."
          },
          {
            "id": 161,
            "discipline": "SIMULADO / REVISÃO",
            "title": "Simulado 01 — 50 questões cronometrado (versão reduzida)",
            "link": "",
            "description": "Identificar padrões de erro FGV, velocidade de resposta sob pressão"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 162,
            "discipline": "REVISÃO",
            "title": "Resumo Semanal Semana 19 — Análise de Erros Simulado 01",
            "link": "",
            "description": "Padrões de erro, conceitos ainda frágeis"
          }
        ]
      }
    ]
  },
  {
    "id": "20",
    "title": "Ciclo 20 — REDUZIDA",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 163,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Imóveis (RI) — Arts. 201-300 + Transcrição/Inscrição",
            "link": "",
            "description": "Transcrição vs. inscrição, sequência de registro, efeitos de cada uma, cancelamento. Armadilha FGV: Confundir transcrição (aquisição) com inscrição (gravames/encargos) — ordem importa para prioridade."
          },
          {
            "id": 164,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Cartório de Protestos + RFI (Registro de Financiamento Imobiliário)",
            "link": "",
            "description": "Diferenças entre protesto em Cartório de Protestos vs. RI, RFI (sistema fiduciário), prioridade de registro. Armadilha FGV: RFI é registro acessório (não registra propriedade) — confundir com RI."
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 165,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Autenticação, Reconhecimento de Assinatura + Atas",
            "link": "",
            "description": "Autenticação (cópia fiel), reconhecimento de assinatura (semelhança), atas (mediação/conciliação), requisitos formais. Armadilha FGV: Autenticação ≠ Certificação de conteúdo — autenticação é só forma; reconhecimento semelhança vs. tecnológico."
          },
          {
            "id": 166,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Disposições Finais + Fiscalização e Disciplina",
            "link": "",
            "description": "Deveres notariais, proibições, infrações disciplinares (suspensão, cancelamento), fiscalização pelo Judiciário. Armadilha FGV: Confundir infrações administrativas com penais — CNJ pune administrativa (suspenção), MP pune penal (crime)."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 167,
            "discipline": "Direito Administrativo / Constitucional",
            "title": "Revisão Leve — Princípios Administrativos + Responsabilidade Civil da Administração",
            "link": "",
            "description": "Princípios (legalidade, moralidade, impessoalidade), responsabilidade solidária Estado/notário, indenização. Armadilha FGV: Notário é delegatário (não servidor) — responsabilidade não é a mesma."
          },
          {
            "id": 168,
            "discipline": "SIMULADO / REVISÃO",
            "title": "Simulado 02 — 50 questões cronometrado (versão reduzida)",
            "link": "",
            "description": "Velocidade, consolidação Provimento 149, padrões FGV em questões complexas"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 169,
            "discipline": "REVISÃO",
            "title": "Resumo Semanal Semana 20 — Consolidação Semanas 18-20",
            "link": "",
            "description": "Validar conhecimento antes de retomar ritmo normal (semana 21+)"
          }
        ]
      }
    ]
  },
  {
    "id": "21",
    "title": "Ciclo 21 — RITMO NORMAL",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 170,
            "discipline": "SIMULADO",
            "title": "Simulado 03 — 100 questões cronometrado",
            "link": "",
            "description": "Performance geral, identificar weak spots, timing management"
          },
          {
            "id": 171,
            "discipline": "REVISÃO / ANÁLISE DE ERROS",
            "title": "Análise Detalhada Simulado 03 — Engenharia Reversa de Erros",
            "link": "",
            "description": "Por que errou? Qual conceito falta? Qual foi a armadilha FGV? Como não errar de novo?"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 172,
            "discipline": "Direito Processual Civil",
            "title": "Microdose — Competência e Foro (Arts. 43-63 CPC)",
            "link": "",
            "description": "Competência absoluta vs. relativa, foro competente para ações registrárias. Armadilha FGV: Confundir competência processual com competência de jurisdição notarial."
          },
          {
            "id": 173,
            "discipline": "Direito Penal",
            "title": "Microdose — Falso Testemunho e Fraude Documental (Arts. 342-345, 298-302 CP)",
            "link": "",
            "description": "Falsidade de documento (público e privado), falsidade em ata/autenticação notarial, elementos do crime. Armadilha FGV: Autenticação falsa é falsidade de documento público — responsabilidade penal do notário."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 174,
            "discipline": "Direito Processual Penal",
            "title": "Microdose — Competência Penal (Arts. 69-91 CPP)",
            "link": "",
            "description": "Foro competente para crimes praticados por notários (Justiça Estadual ou Federal?), prevenção. Armadilha FGV: Notário federal (TRF) vs. tabelião estadual — competência diferente."
          },
          {
            "id": 175,
            "discipline": "Direito Tributário",
            "title": "Microdose — ITBI e Impostos Sobre Imóveis (Arts. 156 CF88, Lei 6.015/73)",
            "link": "",
            "description": "ITBI (imposto de transmissão imobiliária), alíquotas, isenções, rol de documentos isentos. Armadilha FGV: Confundir ITBI com registro — registro é efeito da transmissão, ITBI é imposto."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 176,
            "discipline": "Direito Administrativo",
            "title": "Microdose — Licitação e Contratação Pública (Lei 14.133/21)",
            "link": "",
            "description": "Cartórios como serviço público delegado, obrigações de transparência, contratações (se houver). Armadilha FGV: Confundir lei de licitação com organização de cartório — cartório é serviço delegado, não Administração direta."
          },
          {
            "id": 177,
            "discipline": "Lavagem de Dinheiro",
            "title": "Microdose — Lei 9.613/98 + Obrigações Notariais",
            "link": "",
            "description": "Notários como obrigados a reportar operações suspeitas (PLD), limites de valor, sigilo quebrado. Armadilha FGV: Confundir sigilo profissional com dever de reportagem — PLD quebra sigilo notarial."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 178,
            "discipline": "Proteção de Dados Pessoais",
            "title": "Microdose — Lei Geral de Proteção de Dados (LGPD)",
            "link": "",
            "description": "Cartório como controlador de dados, direitos de titular, bases legais, sigilo vs. LGPD. Armadilha FGV: Confundir sigilo profissional com LGPD — LGPD amplia direitos, sigilo não anula."
          },
          {
            "id": 179,
            "discipline": "REVISÃO",
            "title": "Consolidação Microdoses Semana 21",
            "link": "",
            "description": "Validar aprendizado Class D, conectar com matérias principais"
          }
        ]
      }
    ]
  },
  {
    "id": "22",
    "title": "Ciclo 22 — RITMO NORMAL",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 180,
            "discipline": "SIMULADO",
            "title": "Simulado 04 — 100 questões cronometrado",
            "link": "",
            "description": "Validar progresso após Classe D microdoses, consolidar velocidade"
          },
          {
            "id": 181,
            "discipline": "REVISÃO / ANÁLISE DE ERROS",
            "title": "Análise Comparativa Simulados 01-04 — Padrões de Erro",
            "link": "",
            "description": "Quais temas repetem erros? Qual é o padrão? Qual armadilha FGV volta sempre?"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 182,
            "discipline": "Notarial e Registral",
            "title": "Revisão Densa — Provimento 149 + Lei 8.935/94 (Áreas de confusão)",
            "link": "",
            "description": "Confusões recorrentes — protesto vs. RI, RCPN vs. RCPJ, autenticação vs. certificação, reconhecimento vs. assinatura digital"
          },
          {
            "id": 183,
            "discipline": "Direito Civil",
            "title": "Revisão Densa — Lei 8.078/90 (Código de Defesa do Consumidor) + Relação Notário-Usuário",
            "link": "",
            "description": "Notário como fornecedor de serviço, obrigações de transparência, responsabilidade por atos ilícitos, vedações. Armadilha FGV: Confundir responsabilidade notarial com CDC — CDC protege consumidor contra abusos."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 184,
            "discipline": "Direito Civil",
            "title": "Revisão Densa — Capacidade (Arts. 1-6 CC) + Poderes de Representação (Arts. 115-133 CC)",
            "link": "",
            "description": "Quem pode ser parte em ato notarial? Menores, incapazes, representação legal vs. voluntária. Armadilha FGV: Confundir capacidade jurídica com capacidade de exercício — notário deve verificar."
          },
          {
            "id": 185,
            "discipline": "Organização Digital e Sistemas",
            "title": "Revisão — Lei 13.774/18 + Provimento 149 (Seção Digital)",
            "link": "",
            "description": "Assinatura eletrônica, notarização digital, certificados ICP-Brasil, segurança. Armadilha FGV: Confundir assinatura eletrônica com reconhecimento de assinatura — efeitos diferentes."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 186,
            "discipline": "Direito Imobiliário (Registro + Civil)",
            "title": "Revisão Densa — Posse, Propriedade, Usucapião (Arts. 1196-1333 CC)",
            "link": "",
            "description": "Posse (conceito, efeitos), propriedade (aquisição), usucapião (requisitos, prazos), registro. Armadilha FGV: Confundir posse com propriedade — posse é fato, propriedade é direito; registro presume propriedade de possuidor registrado."
          },
          {
            "id": 187,
            "discipline": "Sucessões",
            "title": "Revisão — Lei de Sucessões (Arts. 1784-1856 CC)",
            "link": "",
            "description": "Sucessão testamentária vs. legítima, ordem de vocação, testamento (requisitos), inventário extrajudicial (cartório). Armadilha FGV: Confundir testamento notarial com testamento cerrado — competências e requisitos distintos."
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 188,
            "discipline": "Pessoa Jurídica + Associações",
            "title": "Revisão — Constituição de PJ (Arts. 40-88 CC)",
            "link": "",
            "description": "Categorias de PJ, registro na Junta Comercial, cartório (atas de PJ não comercial), ato constitutivo. Armadilha FGV: Confundir registro em cartório com registro em Junta — competências diferentes."
          },
          {
            "id": 189,
            "discipline": "REVISÃO",
            "title": "Consolidação Semana 22 — Resumo de Revisões Densas",
            "link": "",
            "description": "Validar consolidação, identificar últimas lacunas"
          }
        ]
      }
    ]
  },
  {
    "id": "23",
    "title": "Ciclo 23 — INTENSIVO",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 190,
            "discipline": "SIMULADO",
            "title": "Simulado 05 — 100 questões cronometrado (foco velocidade)",
            "link": "",
            "description": "Velocidade máxima, eliminar hesitações, automatizar padrão de resposta"
          },
          {
            "id": 191,
            "discipline": "SIMULADO",
            "title": "Simulado 06 — 100 questões cronometrado (foco pressão psicológica)",
            "link": "",
            "description": "Manter concentração com fadiga, lidar com pressão, não desistir em questões difíceis"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 192,
            "discipline": "SIMULADO",
            "title": "Simulado 07 — 100 questões cronometrado (foco visão periférica de padrões)",
            "link": "",
            "description": "Reconhecer padrões FGV em tempo real, evitar pegadinhas comuns"
          },
          {
            "id": 193,
            "discipline": "REVISÃO / ANÁLISE DE ERROS",
            "title": "Engenharia Reversa Simulados 05-07 — Por Que Errou?",
            "link": "",
            "description": "Cada erro = aprendizado. Quebra cada questão: conceito fundamental? Armadilha FGV? Leitura de lei errada? Negligência?"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 194,
            "discipline": "Notarial e Registral",
            "title": "Top 20 Artigos Mais Errados — Provimento 149 + Lei 8.935/94",
            "link": "",
            "description": "Os 20 artigos/temas que mais geram erro. Memorizar casos limite, exceções, detalhes."
          },
          {
            "id": 195,
            "discipline": "Direito Civil",
            "title": "Top 20 Artigos Mais Errados — Código Civil",
            "link": "",
            "description": "Artigos do CC que causam confusão (capacidade, posse, propriedade, sucessão)"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 196,
            "discipline": "Direito Constitucional / Administrativo",
            "title": "Top 20 Temas Mais Errados — CF88, Lei 8.935/94, Princípios",
            "link": "",
            "description": "Competências, princípios, responsabilidade (tema que se repete com erro)"
          },
          {
            "id": 197,
            "discipline": "Classe D (Processo Civil, Penal, Tributário, PLD)",
            "title": "Top 15 Temas Mais Errados — Microdoses Recorrentes",
            "link": "",
            "description": "Temas Classe D que aparecem em questões e geram erro"
          }
        ]
      },
      {
        "dayLabel": "Dia 05",
        "tasks": [
          {
            "id": 198,
            "discipline": "REVISÃO / VELOCIDADE",
            "title": "Rapid Fire — 50 questões em 1h (máxima velocidade, sem profundidade)",
            "link": "",
            "description": "Treinar reflexo, eliminar pensamento lento, respostas por intuição consolidada"
          },
          {
            "id": 199,
            "discipline": "REVISÃO",
            "title": "Consolidação Semana 23 — Simulados + Top 20 Artigos",
            "link": "",
            "description": "Estar 90%+ confiante nos simulados"
          }
        ]
      }
    ]
  },
  {
    "id": "24",
    "title": "Ciclo 24 — PRÉ-PROVA",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 200,
            "discipline": "SIMULADO",
            "title": "Simulado 08 — 100 questões cronometrado (simulação final de prova)",
            "link": "",
            "description": "Prova real — mesmo ambiente, mesma pressão, mesma duração. Medir desempenho final."
          },
          {
            "id": 201,
            "discipline": "SIMULADO",
            "title": "Simulado 09 — 100 questões cronometrado (teste de resistência)",
            "link": "",
            "description": "Manter desempenho após fadiga, testar resistência mental antes da prova"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 202,
            "discipline": "REVISÃO / ANÁLISE DE ERROS",
            "title": "Análise Final Simulados 08-09 — Últimos Ajustes",
            "link": "",
            "description": "Últimos pontos cegos. Não é aprendizado novo — é consolidação final."
          },
          {
            "id": 203,
            "discipline": "Notarial e Registral",
            "title": "Revisão Leve — Provimento 149 (Leitura Rápida dos Pontos Críticos)",
            "link": "",
            "description": "Repassar rapidamente os temas que causaram mais erro na semana 23. Não é aprendizado novo."
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 204,
            "discipline": "Direito Civil + Constitucional",
            "title": "Revisão Leve — Temas Críticos CC + CF88",
            "link": "",
            "description": "Rápida passada nos temas que mais errou. Não é novo aprendizado."
          },
          {
            "id": 205,
            "discipline": "REVISÃO",
            "title": "Relaxamento Estratégico — Leitura Leve + Visualização",
            "link": "",
            "description": "Manter confiança, evitar ansiedade, relaxar mente antes da prova. Não é aprendizado."
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 206,
            "discipline": "DESCANSO ATIVO",
            "title": "Análise Final de Padrão — Qual Era Meu Erro Mais Comum?",
            "link": "",
            "description": "Identificar o único erro que se repetiu mais. Treinar aquele específico. Ganhar confiança."
          },
          {
            "id": 207,
            "discipline": "DESCANSO PRÉ-PROVA",
            "title": "Repouso Total + Preparação Emocional",
            "link": "",
            "description": "Descansar. Dormir bem. Confiar no aprendizado acumulado. Mentalização positiva."
          }
        ]
      }
    ]
  }
];
