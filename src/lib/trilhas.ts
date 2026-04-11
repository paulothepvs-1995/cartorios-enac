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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/1. Apresentação do Curso.pdf + 2. Direito Notarial e Registral.pdf\n\n**Lei Seca Obrigatória:** CF/88 Art. 236 e §§1º-3º; Lei 8.935/94, Arts. 1º-2º\n\n**Foco:** Natureza jurídica da atividade (delegação estatal a particulares — função pública exercida em caráter privado). Memorizar: Art. 236 CF é o fundamento constitucional. Armadilha FGV: a atividade é estatal (poder delegante é a União), mas a outorga é pelo TJ do estado. Distinção entre titular e delegatário.\n\n**Flashcards:** Criar 8 clozes — Art. 236 caput, §§1º-3º, natureza jurídica (delegação vs. concessão), titularidade da fé pública, duplo regime jurídico (público + privado) | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 2,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Dos Serviços Notariais e de Registros — Espécies e Atribuições",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/3. Dos Serviços Notariais e de Registros.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 3º-13 (DECORAR a distinção entre cada serventia)\n\n**Foco:** Art. 5º — tabeliães de notas; Art. 6º — tabeliães e oficiais de protestos; Art. 7º — oficiais de registro de imóveis; Art. 8º — oficiais de RCPN; Art. 9º — oficiais de RTD; Art. 10 — oficiais de RCPJ. Armadilha FGV: confundir atribuições entre serventias (ex: certidão de nascimento é RCPN, não RI). Art. 12 — acumulação de atribuições (quando pode/não pode).\n\n**Flashcards:** Criar 10 clozes — mapear cada artigo (5-13) à serventia correspondente, regra de acumulação | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/4. Ingresso na Atividade Notarial e de Registro.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 14-19; CF Art. 236, §3º; Resolução CNJ 81/2009\n\n**Foco:** Requisitos para ingresso (Art. 14 — não ter condenação criminal, aptidão física e mental, habilitação em concurso). Art. 15 — concurso público de provas e títulos. Art. 16 — prazo para preenchimento de vaga (6 meses). Armadilha FGV: Art. 14, §1º — nacionalidade brasileira exigida (nato ou naturalizado). Art. 16 — vacância declarada pelo juízo competente.\n\n**Flashcards:** Criar 8 clozes — requisitos do art. 14, prazo do art. 16, competência para concurso (TJ), papel do ENAC (Res. 81 CNJ) | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 4,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Prepostos — Escreventes e Substitutos",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/5. Prepostos.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 20-21; Provimento 149/2023 CNJ, artigos sobre prepostos\n\n**Foco:** Art. 20 — os notários e oficiais de registro podem contratar escreventes e auxiliares. Art. 21 — o gerenciamento administrativo e financeiro é de responsabilidade exclusiva do titular. Distinção preposto vs. substituto (quem pratica atos vs. quem substitui o titular). Armadilha FGV: responsabilidade do titular pelos atos dos prepostos (objetiva? subjetiva?).\n\n**Flashcards:** Criar 5 clozes — art. 20, 21, responsabilidade do titular, distinção escrevente/substituto | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/6. Responsabilidade Civil e Criminal.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 22-24; CC Art. 927 e 186-187; Art. 236, §1º CF\n\n**Foco:** Art. 22 — notários e registradores responderão pelos danos que praticarem. §1º — prescrição (3 anos, art. 206, §3º, V do CC). Art. 23 — responsabilidade do substituto. Art. 24 — responsabilidade civil independe da criminal. Armadilha FGV: natureza da responsabilidade — objetiva ou subjetiva? (STF: subjetiva, com culpa; mas há divergência doutrinária). Direito de regresso contra preposto.\n\n**Flashcards:** Criar 8 clozes — arts. 22-24, prazo prescricional, natureza da responsabilidade, direito de regresso | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 6,
            "discipline": "DIREITO CIVIL",
            "title": "LINDB e Parte Geral do CC — Pessoas Naturais e Capacidade",
            "link": "",
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (capítulos iniciais); Vade Mecum: Códigos Cartório 2026.1.pdf\n\n**Lei Seca Obrigatória:** LINDB (DL 4.657/42), Arts. 1º-6º, 13-17; CC Arts. 1º-10, Arts. 3º-5º\n\n**Foco:** Vigência da lei (art. 1º LINDB — 45 dias, salvo disposição contrária). Capacidade civil — absolutamente incapaz (art. 3º CC: menores de 16) vs. relativamente incapaz (art. 4º CC). Emancipação (art. 5º CC). Armadilha FGV: A Lei 13.146/2015 (Estatuto da Pessoa com Deficiência) alterou os arts. 3º e 4º do CC — deficientes NÃO são mais absolutamente incapazes. Isso é extremamente cobrado.\n\n**Flashcards:** Criar 8 clozes — arts. 1º e 2º LINDB, arts. 3º-5º CC (capacidade), emancipação, efeitos da Lei 13.146 | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Direto ao Ponto/9. Direito Constitucional.pdf; Vade Mecum: Constituição para Cartórios 2026.1.pdf\n\n**Lei Seca Obrigatória:** CF Art. 236 e §§; Art. 22, XXV; Art. 24, I; Art. 37; Art. 93, I\n\n**Foco:** Art. 236 é o fundamento constitucional de toda a atividade — DECORAR literalmente cada parágrafo. Art. 22, XXV — competência privativa da União para legislar sobre registros públicos. Armadilha FGV: a lei que regulamenta é federal (Lei 8.935/94), mas a fiscalização é estadual (TJ). Art. 37 se aplica por analogia (regime híbrido).\n\n**Flashcards:** Criar 6 clozes — Art. 236 completo, Art. 22 XXV, competência legislativa vs. fiscalização | **Questões:** 8 | **Tempo:** 1h15min"
          },
          {
            "id": 8,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Incompatibilidades e Impedimentos",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/7. Incompatibilidades e Impedimentos.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 25-27\n\n**Foco:** Art. 25 — impedimentos para exercício (situações pessoais que impedem a prática de atos específicos, ex: parentesco). Art. 26 — incompatibilidades (atividades que não podem ser acumuladas com a função notarial/registral). Art. 27 — vedações. Armadilha FGV: distinção entre impedimento (caso específico) e incompatibilidade (vedação geral). Advocacia é incompatível (Art. 28, IV, EAOAB).\n\n**Flashcards:** Criar 6 clozes — arts. 25-27, impedimento vs. incompatibilidade, vedações | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/8. Princípios de Direito Notarial e Registral.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Art. 1º; Lei 6.015/73, Arts. 1º-11; Provimento 149/2023 CNJ\n\n**Foco:** DECORAR todos os princípios e suas definições: publicidade (art. 1º Lei 6.015), autenticidade, segurança jurídica, eficácia (art. 1º Lei 8.935). Princípios registrais específicos: inscrição, prioridade (art. 186 LRP), especialidade (objetiva e subjetiva), legalidade/qualificação, continuidade (art. 195 LRP), instância/rogação, tipicidade. Armadilha FGV: confundir publicidade material (RI) com formal (RTD), ou prioridade (art. 186) com preferência.\n\n**Flashcards:** Criar 12 clozes — um para cada princípio com artigo de lei correspondente | **Questões:** 15 | **Tempo:** 2h00min"
          },
          {
            "id": 10,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Direitos e Deveres dos Notários e Registradores",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/9. Direito e Deveres dos Notários.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 28-31 (deveres); Arts. 28-30 (direitos)\n\n**Foco:** Deveres: independência no exercício, sigilo, manutenção do arquivo, atendimento prioritário, conservação de livros. Direitos: exercer a delegação (art. 28), auferir emolumentos, organizar o trabalho. Armadilha FGV: o dever de sigilo não é absoluto (ex: requisição judicial), e a independência funcional não significa ausência de fiscalização.\n\n**Flashcards:** Criar 6 clozes — deveres (art. 30) e direitos, exceções ao sigilo | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Pessoas Jurídicas + Negócio Jurídico)\n\n**Lei Seca Obrigatória:** CC Arts. 40-69, Arts. 104-114\n\n**Foco:** Classificação das PJs (direito público vs. privado). Constituição de PJ: registro (art. 45). DECORAR art. 104 (requisitos de validade). Art. 108 — escritura pública obrigatória para imóveis acima de 30 salários mínimos. Armadilha FGV: Art. 108 — a escritura pública é da essência do ato (ad solemnitatem), não mera prova.\n\n**Flashcards:** Criar 8 clozes — arts. 40-44, art. 45, art. 104, art. 108 | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/10. Infrações Disciplinares e Penalidades.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 31-36; Lei 6.015/73, Art. 32\n\n**Foco:** Art. 31 — infrações. Art. 32 — penalidades: repreensão, multa, suspensão (90 dias), perda da delegação. Art. 34 — processo disciplinar. Art. 35 — competência do Poder Judiciário. Armadilha FGV: a perda da delegação exige sentença judicial transitada em julgado (art. 35, §2º).\n\n**Flashcards:** Criar 8 clozes — escala de penalidades, competência, requisito para perda | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 13,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Fiscalização pelo Poder Judiciário",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/11. Fiscalização pelo Poder Judiciário.pdf\n\n**Lei Seca Obrigatória:** CF Art. 236, §1º; Lei 8.935/94, Art. 37-38; Provimento 149/2023 CNJ\n\n**Foco:** §1º do Art. 236 CF — a fiscalização é exercida pelo Poder Judiciário (TJ). Art. 37 — a corregedoria é o órgão fiscalizador. Art. 38 — competência do CNJ. Armadilha FGV: quem fiscaliza é o TJ estadual, mas o CNJ tem competência supletiva/subsidiária.\n\n**Flashcards:** Criar 6 clozes — competência do TJ, papel do CNJ, corregedoria | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/12. Extinção da Delegação.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 35, 39; CF Art. 236, §3º\n\n**Foco:** Causas de extinção: morte, aposentadoria, renúncia, perda, descumprimento de requisitos. Art. 39 — a delegação é personalíssima. Armadilha FGV: serventia NÃO se herda. A aposentadoria é compulsória aos 75 anos.\n\n**Flashcards:** Criar 6 clozes — causas de extinção, personalíssima, aposentadoria | **Questões:** 8 | **Tempo:** 1h15min"
          },
          {
            "id": 15,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Lei 6.015/73 — Disposições Gerais (Título I)",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/6. Registro de Imóveis/1. Apresentação do Curso.pdf + Lei 6.015\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 1º-28 (LEITURA INTEGRAL)\n\n**Foco:** Art. 1º — os serviços concernentes. Art. 9º — sede, horário. Art. 10 — qualquer pessoa pode requerer certidão. Art. 13 — livros obrigatórios. Art. 198 — dúvida registral. Armadilha FGV: Art. 10 — a publicidade é princípio fundamental, qualquer pessoa pode requerer certidão SEM informar motivo.\n\n**Flashcards:** Criar 10 clozes — arts. 1º, 9º, 10, 13, 16-17 | **Questões:** 15 | **Tempo:** 2h00min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/13. Competência Material.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 5º-12; Lei 6.015/73, Arts. 169-171; Provimento 149/2023\n\n**Foco:** Competência material. Competência territorial. No RI: Art. 169 LRP — o registro deve ser feito no cartório da situação do imóvel (forum rei sitae). Armadilha FGV: exceções à competência territorial (ex: escritura pública pode ser lavrada em qualquer tabelionato, mas o REGISTRO é no RI da situação).\n\n**Flashcards:** Criar 8 clozes — competência por serventia, forum rei sitae, exceções | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 17,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Interinidade e Provimento 149/2023 — Aspectos Gerais",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/14. Interinidade.pdf + 7. Código Nacional de Normas...\n\n**Lei Seca Obrigatória:** Provimento 149/2023 CNJ — Parte Geral\n\n**Foco:** O Provimento 149/2023 é o Código Nacional de Normas do Foro Extrajudicial. Interinidade — quem responde pela serventia quando o titular se afasta. Armadilha FGV: interino NÃO é titular, exerce a função em caráter precário e temporário.\n\n**Flashcards:** Criar 8 clozes — estrutura do Prov. 149, interinidade | **Questões:** 8 | **Tempo:** 1h30min"
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
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Prescrição e Decadência)\n\n**Lei Seca Obrigatória:** CC Arts. 189-211, 207-211; Art. 206, §3º, V\n\n**Foco:** Distinção prescrição vs. decadência. DECORAR prazos: 3 anos para reparação civil (art. 206) — aplica-se à responsabilidade do notário. Armadilha FGV: prescrição NÃO corre contra absolutamente incapazes; decadência legal NÃO pode ser renunciada.\n\n**Flashcards:** Criar 8 clozes — prazos prescricionais registrais, distinção | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 19,
            "discipline": "DIREITO ADMINISTRATIVO",
            "title": "Agentes Públicos — Notários e Registradores como Agentes Delegados",
            "link": "",
            "description": "**Material:** Direto ao Ponto/8. Direito Administrativo.pdf\n\n**Lei Seca Obrigatória:** CF Art. 37; Art. 236; Lei 8.935/94, Art. 3º; Lei 8.429/92, Art. 2º\n\n**Foco:** Notários e registradores são agentes delegados. Consequência: se submetem à LIA. Armadilha FGV: notários NÃO são servidores públicos (não estatutários), mas SÃO agentes públicos.\n\n**Flashcards:** Criar 6 clozes — classificação do notário, LIA, princípios do art. 37 | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/15. Seguridade Social.pdf\n\n**Lei Seca Obrigatória:** CF Art. 40; Lei 8.935/94, Art. 40; Lei 10.666/2003\n\n**Foco:** Notários e registradores são segurados obrigatórios do RGPS como contribuintes individuais, NÃO do RPPS.\n\n**Flashcards:** Criar 4 clozes — regime previdenciário, RGPS vs. RPPS | **Questões:** 6 | **Tempo:** 1h00min"
          },
          {
            "id": 21,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Emolumentos — Lei 10.169/2000 + Natureza Jurídica",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/17. Emolumentos.pdf\n\n**Lei Seca Obrigatória:** Lei 10.169/2000 (COMPLETA); CF Art. 236, §2º; ADI 1.378-5/ES\n\n**Foco:** Natureza jurídica dos emolumentos — taxa sui generis. Art. 1º — fixados por lei estadual. Art. 3º — gratuidade (Lei 9.534/97). Armadilha FGV: emolumentos TÊM natureza de taxa (tributária).\n\n**Flashcards:** Criar 8 clozes — natureza jurídica, arts. 1º-7º, gratuidade | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/16. Acervo das Serventias.pdf + 24. Organização Digital dos Serviços.pdf\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Art. 46; Provimento 149/2023; Lei 6.015/73, Art. 3º\n\n**Foco:** O acervo pertence ao Estado (art. 46). O titular é depositário. Na vacância, o acervo deve ser entregue ao interino. Organização digital: e-Notariado, SREI, SERP. Armadilha FGV: o notário NÃO é dono do acervo; é fiel depositário.\n\n**Flashcards:** Criar 6 clozes — acervo como propriedade estatal, depositário | **Questões:** 8 | **Tempo:** 1h15min"
          },
          {
            "id": 23,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Atribuições e Competências dos Oficiais de Registros",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/18. Das Atribuições...pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 12-17; Lei 8.935/94, Arts. 6º-12\n\n**Foco:** Revisão consolidada de todas as atribuições por serventia. Art. 12 LRP — serviço exercido por oficiais privativos.\n\n**Flashcards:** Criar 6 clozes — consolidação de atribuições | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Obrigações)\n\n**Lei Seca Obrigatória:** CC Arts. 233-285, 286-303\n\n**Foco:** Obrigações de dar coisa certa. Relevância registral: tradição de imóvel se faz pelo registro (art. 1.245 CC). Cessão de crédito — registro no RTD. Armadilha FGV: distinção entre tradição (móvel) e registro (imóvel).\n\n**Flashcards:** Criar 6 clozes — tradição vs. registro, cessão de crédito | **Questões:** 8 | **Tempo:** 1h15min"
          },
          {
            "id": 25,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Apostilamento e Legalização de Documentos",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/19. Apostilamento.pdf\n\n**Lei Seca Obrigatória:** Convenção de Haia de 1961; Decreto 8.660/2016; Resolução CNJ 228/2016; Provimento 149/2023\n\n**Foco:** O que é apostilamento: certificação de autenticidade para uso internacional. Quem apostila no Brasil: RCPN, Notas e RTD. Armadilha FGV: apostilamento NÃO é tradução juramentada. A apostila substitui a legalização consular.\n\n**Flashcards:** Criar 5 clozes — quem apostila, Haia, diferença apostila vs. legalização | **Questões:** 6 | **Tempo:** 1h00min"
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
            "description": "**Material:** Direto ao Ponto/9. Direito Constitucional.pdf\n\n**Lei Seca Obrigatória:** CF Art. 5º, incisos X, XI, XII, XXII, XXX, XXXIII, XXXV, LIV, LXXIII, LXXVI\n\n**Foco:** Art. 5º, LXXVI — gratuidade de nascimento e óbito para pobres. Conexão direta com gratuidade nos cartórios. Armadilha FGV: a gratuidade do LXXVI é para pobres; a Lei 9.534/97 ampliou para TODOS (1º registro e 1ª certidão).\n\n**Flashcards:** Criar 6 clozes — incisos do art. 5º com aplicação registral | **Questões:** 8 | **Tempo:** 1h15min"
          },
          {
            "id": 27,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Conciliação, Mediação e LGPD nos Cartórios",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/20. Conciliação e Mediação.pdf + 21. Proteção de Dados...\n\n**Lei Seca Obrigatória:** Provimento 149/2023 CNJ; LGPD (Lei 13.709/2018), Arts. 1º-7º + Art. 23\n\n**Foco:** Cartórios podem realizar conciliação e mediação. LGPD: cartórios tratam dados pessoais — observar princípios. Armadilha FGV: a publicidade registral CONVIVE com a LGPD (resolvida pela proporcionalidade).\n\n**Flashcards:** Criar 6 clozes — LGPD aplicada a cartórios, conciliação | **Questões:** 8 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/2. Serviço Notarial.pdf + Princípios\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 6º-7º; Lei 7.433/85; Provimento 149/2023\n\n**Foco:** Princípios expressos (fé pública, imparcialidade) e implícitos (imediatidade, personalidade, rogação). O tabelião lavra escrituras, procurações, testamentos, atas. Armadilha FGV: a fé pública é juris tantum, não absoluta.\n\n**Flashcards:** Criar 8 clozes — princípios, atribuições | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 29,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Ato Notarial — Requisitos e Classificação",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/5. Ato Notarial.pdf\n\n**Lei Seca Obrigatória:** Lei 7.433/85, Arts. 1º-3º; Provimento 149/2023\n\n**Foco:** Classificação: protocolares (lavrados em livros) vs. extraprotocolares (autenticações). Requisitos: capacidade, objeto lícito, forma. Armadilha FGV: autenticação e reconhecimento de firma NÃO são atos protocolares.\n\n**Flashcards:** Criar 8 clozes — protocolar vs. extraprotocolar | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/7. Escritura Pública.pdf\n\n**Lei Seca Obrigatória:** CC Art. 108, Art. 215; Lei 7.433/85, Art. 1º; Provimento 149/2023\n\n**Foco:** Art. 215 CC — DECORAR todos os requisitos (data/local, qualificação, manifestação, referência ao título, valor). Art. 108 — obrigatória para imóveis >30 SM. Armadilha FGV: Art. 215 é rol exemplificativo ou taxativo?\n\n**Flashcards:** Criar 10 clozes — art. 215, art. 108 | **Questões:** 12 | **Tempo:** 2h00min"
          },
          {
            "id": 31,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Escritura Pública de Compra e Venda",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/8. Escritura Pública de Compra e Venda.pdf\n\n**Lei Seca Obrigatória:** CC Arts. 481-504; Art. 1.245; Lei 7.433/85\n\n**Foco:** Art. 489 — nulo o contrato com preço arbitrado por uma das partes. Art. 496 — anulável venda de ascendente a descendente sem consentimento. Art. 1.245 — propriedade se transfere pelo REGISTRO. Armadilha FGV: a escritura NÃO transfere propriedade — apenas o registro no RI transfere.\n\n**Flashcards:** Criar 8 clozes — arts. 481, 489, 496, 1.245 | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/10. Doação.pdf + 9. Troca ou Permuta.pdf\n\n**Lei Seca Obrigatória:** CC Arts. 538-564, 533, 541\n\n**Foco:** Art. 541 — doação de imóvel exige escritura pública (independente do valor). Art. 548 — nula doação de todos os bens. Art. 549 — nula se exceder legítima. Armadilha FGV: art. 541 — toda doação de imóvel exige escritura, DIFERENTE da compra e venda (que é só acima de 30 SM).\n\n**Flashcards:** Criar 8 clozes — arts. 541, 544, 548, 549 | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 33,
            "discipline": "DIREITO CIVIL",
            "title": "Direito das Obrigações — Adimplemento e Inadimplemento",
            "link": "",
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Adimplemento/Inadimplemento)\n\n**Lei Seca Obrigatória:** CC Arts. 304-420\n\n**Foco:** Pagamento, consignação, novação, compensação. Mora (arts. 394-401). Armadilha FGV: consignação extrajudicial em estabelecimento bancário.\n\n**Flashcards:** Criar 6 clozes — formas de pagamento, mora | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Direto ao Ponto/8. Direito Administrativo.pdf (Improbidade)\n\n**Lei Seca Obrigatória:** Lei 8.429/92, Arts. 1º-2º, 9-11, 12; Lei 14.230/2021\n\n**Foco:** Notários são agentes públicos (LIA). Atos de improbidade (arts. 9-11). Armadilha FGV: após a Lei 14.230/2021, NÃO existe mais improbidade culposa (tudo exige dolo).\n\n**Flashcards:** Criar 6 clozes — aplicação LIA a notários, dolo obrigatório | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/11. Escrituras... Divórcio.pdf + 12. Inventário.pdf\n\n**Lei Seca Obrigatória:** CPC Art. 733; Art. 610, §1º; Lei 11.441/2007; Resolução CNJ 35/2007; Provimento 149/2023\n\n**Foco:** Requisitos: consensual, sem incapazes, assistência de advogado. Armadilha FGV: divergências sobre inventário em cartório quando há testamento (Provimento 149/2023 permite em certos casos).\n\n**Flashcards:** Criar 10 clozes — requisitos | **Questões:** 12 | **Tempo:** 2h00min"
          },
          {
            "id": 36,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Testamentos Públicos em Cartório",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/13. Escrituras Públicas de Testamento.pdf\n\n**Lei Seca Obrigatória:** CC Arts. 1.857-1.867\n\n**Foco:** Art. 1.864 — testamento público: ditado, presença de 2 testemunhas. Armadilha FGV: testamento público exige 2 testemunhas; ausência é vício de nulidade.\n\n**Flashcards:** Criar 8 clozes — arts. 1.864-1.867, requisitos | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/14. Atas Notariais.pdf + Procuração\n\n**Lei Seca Obrigatória:** CPC Art. 384; CC Arts. 653-692; Lei 8.935/94, Art. 7º, III\n\n**Foco:** Ata notarial (art. 384 CPC) atesta fatos. Armadilha FGV: ata notarial NÃO é declaração de vontade, é CONSTATAÇÃO de fato. Procuração em causa própria é irrevogável.\n\n**Flashcards:** Criar 8 clozes — ata vs. escritura, procuração | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 38,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Carta de Sentença Notarial",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/2. Tabelionato de Notas/16. Carta de Sentença Notarial.pdf\n\n**Lei Seca Obrigatória:** Provimento 149/2023\n\n**Foco:** Instrumento pelo qual o tabelião certifica o teor de decisão judicial para fins de registro.\n\n**Flashcards:** Criar 4 clozes | **Questões:** 6 | **Tempo:** 1h00min"
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
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Contratos em Geral)\n\n**Lei Seca Obrigatória:** CC Arts. 421-480; Lei 13.874/2019\n\n**Foco:** Art. 421-A — contratos paritários. Art. 462 — contrato preliminar (compromisso de compra e venda). Armadilha FGV: compromisso de compra e venda registrado no RI gera direito real (art. 1.417 CC) — sem registro, é mero direito pessoal.\n\n**Flashcards:** Criar 8 clozes — arts. 421, 462, 1.417 | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 40,
            "discipline": "DIREITO CIVIL",
            "title": "Contratos em Espécie com relevância registral",
            "link": "",
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Espécies de Contratos)\n\n**Lei Seca Obrigatória:** CC Arts. 481-504, 533, 538-564, 565-578, 1.417-1.418\n\n**Foco:** Locação registrada no RI tem efeito erga omnes. Armadilha FGV: locação SÓ vincula terceiros adquirentes se registrada no RI (art. 576 CC).\n\n**Flashcards:** Criar 6 clozes — efeitos do registro | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Direto ao Ponto/9. Direito Constitucional.pdf\n\n**Lei Seca Obrigatória:** CF Arts. 92-103, Art. 103-B, Art. 236\n\n**Foco:** CNJ — competência para fiscalizar serventias (art. 103-B). Armadilha FGV: o CNJ NÃO exerce jurisdição — é órgão administrativo. Não anula ato notarial, apenas ato administrativo.\n\n**Flashcards:** Criar 6 clozes — CNJ, competência | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/3. Tabelionato de Protestos/2. Protesto Notarial.pdf + Princípios\n\n**Lei Seca Obrigatória:** Lei 9.492/97, Arts. 1º-3º; Lei 8.935/94, Art. 11\n\n**Foco:** Art. 1º Lei 9.492 — prova a inadimplência. Princípios: territorialidade, temporariedade, unicidade, legalidade. Armadilha FGV: protesto NÃO é executivo — é ato de prova (declaratório).\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 43,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Protesto — Procedimento (Apresentação, Intimação, Lavratura)",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/3. Tabelionato de Protestos/6. Apresentação.pdf + Procedimento\n\n**Lei Seca Obrigatória:** Lei 9.492/97, Arts. 4º-22\n\n**Foco:** Art. 9º — prazo de 3 dias úteis para pagamento. Armadilha FGV: prazo de 3 dias é ÚTIL. Protesto de CDA é cabível (Lei 12.767/2012).\n\n**Flashcards:** Criar 10 clozes — prazos, CDA | **Questões:** 12 | **Tempo:** 2h00min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/3. Tabelionato de Protestos/11. Averbações.pdf\n\n**Lei Seca Obrigatória:** Lei 9.492/97, Arts. 26-27; CPC Art. 300\n\n**Foco:** Cancelamento vs. sustação judicial. Desistência (credor desiste antes da lavratura). Armadilha FGV: cancelamento é posterior, sustação é preventiva.\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 45,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Protesto — Qualificação, Competência e CENPROT",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/3. Tabelionato de Protestos/7. Competência.pdf + CENPROT\n\n**Lei Seca Obrigatória:** Lei 9.492/97, Arts. 6º-11\n\n**Foco:** Competência territorial: domicílio do devedor (regra). Qualificação: exame da regularidade formal. CENPROT: unifica informações.\n\n**Flashcards:** Criar 6 clozes | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Material:** Direto ao Ponto/incidental/16. Direito Tributário.pdf\n\n**Lei Seca Obrigatória:** CF Art. 156, II; CTN Arts. 35-42; Tema 1124 STF\n\n**Foco:** Competência municipal. Tema 1124 STF: base de cálculo é o valor da TRANSAÇÃO, não o valor venal de IPTU.\n\n**Flashcards:** Criar 8 clozes — competência, Tema 1124, imunidades | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 47,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "ITCMD + ISS Notarial + Emolumentos como Taxa",
            "link": "",
            "description": "**Material:** Direto ao Ponto/incidental/16. Direito Tributário.pdf\n\n**Lei Seca Obrigatória:** CF Art. 155, I; CTN Arts. 35-42; CF Art. 156, III; ADI 1.378-5\n\n**Foco:** ITCMD (estadual). ISS incide sobre cartórios. Emolumentos = taxa. Armadilha FGV: O oficial de RI não pode recusar registro por falta de pagamento; deve qualificar e exigir comprovação.\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf\n\n**Lei Seca Obrigatória:** CC Arts. 1.196-1.232, Art. 1.245\n\n**Foco:** Art. 1.245 — propriedade imobiliária se adquire pelo REGISTRO. Armadilha FGV: posse NÃO é direito real (não está no art. 1.225).\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/4. RCPN/2. Da Atividade.pdf + Livros\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 29-38\n\n**Foco:** Art. 29 — atos obrigatórios. Art. 33 — livros obrigatórios: A (nascimento), B (casamento), B-Auxiliar, C (óbito), C-Auxiliar (natimorto). DECORAR.\n\n**Flashcards:** Criar 10 clozes | **Questões:** 12 | **Tempo:** 2h00min"
          },
          {
            "id": 50,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Registro de Nascimento e Filiação",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/4. RCPN/9. Filiação.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 50-66; CC Arts. 1.596-1.606\n\n**Foco:** Prazos de declaração (art. 50). Presunção de paternidade. Armadilha FGV: registro de nascimento é GRATUITO para todos (Lei 9.534/97).\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/4. RCPN/6. Casamentos.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 67-76; CC Arts. 1.511-1.532\n\n**Foco:** Impedimentos (art. 1.521). Causas suspensivas (art. 1.523). Armadilha FGV: impedimento gera NULIDADE, causa suspensiva gera separação obrigatória.\n\n**Flashcards:** Criar 10 clozes | **Questões:** 12 | **Tempo:** 2h00min"
          },
          {
            "id": 52,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Registro de Óbito",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/4. RCPN/7. Óbitos.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 77-88; CC Arts. 6-9\n\n**Foco:** Declaração (24h). Óbito sem cadáver (morte presumida). Armadilha FGV: natimorto se registra no Livro C-Auxiliar, NÃO no Livro C.\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Família)\n\n**Lei Seca Obrigatória:** CC Arts. 1.511-1.570, 1.639-1.688\n\n**Foco:** Regimes de bens: separação obrigatória (art. 1.641). Pacto antenupcial (art. 1.657 — eficácia depende de registro no RI). Armadilha FGV: pacto sem registro no RI é INEFICAZ perante terceiros.\n\n**Flashcards:** Criar 10 clozes | **Questões:** 12 | **Tempo:** 2h00min"
          },
          {
            "id": 54,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPN — Nome, Retificação e Alterações",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/4. RCPN/10. Do Nome.pdf + Retificações\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 54-55, 109-113; Lei 14.382/2022\n\n**Foco:** Princípios do nome. Lei 14.382/2022 facilitou retificação administrativa. Armadilha FGV: alteração de prenome no cartório (diretamente após 2022).\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/4. RCPN/12. Averbação... Transgênero.pdf\n\n**Lei Seca Obrigatória:** Provimento 73/2018 CNJ; ADI 4275 STF\n\n**Foco:** STF autorizou alteração sem cirurgia/laudos. Armadilha FGV: NÃO exige cirurgia, NÃO exige laudo, NÃO exige autorização judicial.\n\n**Flashcards:** Criar 5 clozes | **Questões:** 6 | **Tempo:** 1h00min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/5. RCPJ e RTD/...\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 127-141; Lei 8.935/94, Art. 12\n\n**Foco:** Registro obrigatório (art. 129) vs. facultativo (art. 127). Armadilha FGV: registro no RTD é para OPONIBILIDADE a terceiros (eficácia erga omnes).\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 57,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RCPJ — Registro Civil de Pessoas Jurídicas",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/5. RCPJ e RTD/14. Das Pessoas Jurídicas.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 114-126; CC Arts. 45-69\n\n**Foco:** Art. 114 — atos registrados: contrato social, atas. Armadilha FGV: PJ de direito privado começa no RCPJ, EXCETO sociedades empresárias (Junta Comercial).\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Sucessões)\n\n**Lei Seca Obrigatória:** CC Arts. 1.784-1.856, 1.829\n\n**Foco:** Princípio da saisine (art. 1.784). Ordem de vocação (art. 1.829). Armadilha FGV: cônjuge em separação obrigatória NÃO concorre com descendentes.\n\n**Flashcards:** Criar 10 clozes | **Questões:** 12 | **Tempo:** 2h00min"
          },
          {
            "id": 59,
            "discipline": "DIREITO CIVIL",
            "title": "Direito das Sucessões — Testamento e Inventário Extrajudicial",
            "link": "",
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf (Sucessão Testamentária)\n\n**Lei Seca Obrigatória:** CC Arts. 1.857-1.990; CPC Art. 610, §1º\n\n**Foco:** Espécies de testamento. Legítima (art. 1.846). Inventário extrajudicial.\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Direto ao Ponto/12. Direito Empresarial.pdf\n\n**Lei Seca Obrigatória:** CC Arts. 966-980, 1.150-1.154\n\n**Foco:** Empresário vs. Sociedade. Armadilha FGV: sociedade simples se registra no RCPJ; empresária na Junta Comercial; advocacia na OAB.\n\n**Flashcards:** Criar 6 clozes | **Questões:** 8 | **Tempo:** 1h15min"
          },
          {
            "id": 61,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Interação Interinstitucional e com Órgãos Públicos",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/1. Teoria Geral/22. Interação Interinstitucional.pdf\n\n**Lei Seca Obrigatória:** Provimento 149/2023\n\n**Foco:** Comunicações obrigatórias (DOI para Receita, RCPN para INSS).\n\n**Flashcards:** Criar 5 clozes | **Questões:** 6 | **Tempo:** 1h00min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/6. Registro de Imóveis/2. Introdução...pdf\n\n**Lei Seca Obrigatória:** CC Art. 1.227, 1.245-1.247; Lei 6.015/73, Art. 167\n\n**Foco:** Sistema brasileiro: título + modo (escritura + registro). Art. 1.246 — registro eficaz DESDE A PRENOTAÇÃO.\n\n**Flashcards:** Criar 10 clozes | **Questões:** 15 | **Tempo:** 2h00min"
          },
          {
            "id": 63,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Princípios do Registro de Imóveis (aprofundamento)",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/6. Registro de Imóveis/6. Princípios do RI.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 167-171, 182, 195, 198\n\n**Foco:** Prioridade (prenotação), Especialidade, Continuidade, Fé pública registral. Armadilha FGV: o princípio da fé pública no Brasil é relativo (juris tantum).\n\n**Flashcards:** Criar 12 clozes | **Questões:** 15 | **Tempo:** 2h00min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/6. Registro de Imóveis/9. Do registro. Das averbações.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 176-181, 167 I e II\n\n**Foco:** Matrícula (individualização) vs. Registro (constituição/transferência) vs. Averbação (alterações). DECORAR art. 167.\n\n**Flashcards:** Criar 15 clozes | **Questões:** 15 | **Tempo:** 2h00min"
          },
          {
            "id": 65,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Livros e Processamento Registral",
            "link": "",
            "description": "**Material:** Notarial e Registral - Estudo regular/6. Registro de Imóveis/11. Dos Livros.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 173-175\n\n**Foco:** Livros: 1 (Protocolo), 2 (Registro Geral), 3 (Auxiliar), 4 e 5 (Indicadores). Protocolo = PRIORIDADE.\n\n**Flashcards:** Criar 8 clozes | **Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Material:** Notarial e Registral - Estudo regular/6. Registro de Imóveis/13. Da Qualificação.pdf\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 198-207; Art. 13\n\n**Foco:** Qualificação e Suscitação de Dúvida (art. 198). Armadilha FGV: quem suscita a dúvida é o OFICIAL, a parte apenas requer.\n\n**Flashcards:** Criar 10 clozes | **Questões:** 12 | **Tempo:** 2h00min"
          },
          {
            "id": 67,
            "discipline": "DIREITO CIVIL",
            "title": "Direitos Reais — Propriedade e Usucapião",
            "link": "",
            "description": "**Material:** Direto ao Ponto/10. Direito Civil.pdf\n\n**Lei Seca Obrigatória:** CC Arts. 1.238-1.244, 1.228-1.232; CF Art. 183\n\n**Foco:** Usucapião extraordinária, ordinária, especial. Usucapião extrajudicial (Art. 216-A LRP).\n\n**Flashcards:** Criar 10 clozes | **Questões:** 12 | **Tempo:** 2h00min"
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
            "description": "**Material:** Direto ao Ponto/9. Direito Constitucional.pdf\n\n**Lei Seca Obrigatória:** CF Arts. 170-181, 182-183, Art. 5º XXII-XXIII\n\n**Foco:** Função social da propriedade e usucapião constitucional.\n\n**Flashcards:** Criar 6 clozes | **Questões:** 8 | **Tempo:** 1h15min"
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
            "description": "**Lei Seca:** Lei 6.015/73, Arts. 212-214; Lei 14.382/2022\n\n**Foco:** Retificação administrativa vs judicial (ampliação com a Lei 14.382/2022).\n\n**Questões:** 12 | **Tempo:** 1h30min"
          },
          {
            "id": 70,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Parcelamento do Solo e Registro (Lei 6.766/79)",
            "link": "",
            "description": "**Lei Seca:** Lei 6.766/79, Arts. 2º-4º, 18-22\n\n**Foco:** Loteamento vs. condomínio. O registro é CONDIÇÃO DE VALIDADE.\n\n**Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** CC Arts. 1.277-1.313\n\n**Foco:** Vedações, passagem, limites. Armadilha FGV: passagem é DIREITO, onera propriedade serviente.\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 72,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Condomínio em Edifício (Unidades Autônomas e Áreas Comuns)",
            "link": "",
            "description": "**Lei Seca:** Lei 4.591/64, Arts. 1º-9º; CC Arts. 1.331-1.358\n\n**Foco:** Unidades autônomas e áreas comuns (matrículas individuais vs. única).\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** CC Arts. 1.345-1.358\n\n**Foco:** Síndico, renovação (2 anos), quóruns. Armadilha FGV: unanimidade exigida apenas para dissolução consensual.\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 74,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Incorporação Imobiliária (Lei 4.591/64)",
            "link": "",
            "description": "**Lei Seca:** Lei 4.591/64, Arts. 28-44\n\n**Foco:** Memorial descritivo obrigatório ANTES da comercialização. Proteção aos compradores.\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 8.935/94, Arts. 28-33; Lei 8.429/92\n\n**Foco:** Sanções (suspensão temporária, cassação, multa).\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 76,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Garantias da Propriedade e Ordem Econômica (CF/88 + Lei 14.382/2022)",
            "link": "",
            "description": "**Lei Seca:** CF/88, Art. 5º XXII-XXIII; Art. 170\n\n**Foco:** Propriedade, função social, segurança jurídica através do registro (Lei 14.382/2022).\n\n**Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** CC Arts. 1.378-1.410, 1.369-1.377\n\n**Foco:** Servidão vs. Superfície. Enfiteuse abolida (Lei 14.382/2022).\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 78,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Propriedade Privada, Função Social e Políticas Públicas (CF Arts. 5º, 170, 182-184)",
            "link": "",
            "description": "**Lei Seca:** CF/88 Arts. 182-184\n\n**Foco:** Plano diretor, IPTU progressivo, desapropriação para reforma agrária.\n\n**Questões:** 8 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** Lei 9.514/97, Arts. 22-27\n\n**Foco:** Propriedade resolúvel, consolidação, leilão OBRIGATÓRIO (vedação pacto comissório).\n\n**Questões:** 14 | **Tempo:** 2h00min"
          },
          {
            "id": 80,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Cédulas de Crédito Imobiliário (Lei 10.931/2004)",
            "link": "",
            "description": "**Lei Seca:** Lei 10.931/04, Arts. 1º-35\n\n**Foco:** CCI é título de crédito. Pode ser endossada. Distinção para alienação fiduciária.\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** CC Arts. 1.473-1.505, 1.431-1.470, 1.506-1.510\n\n**Foco:** Sem posse (Hipoteca), com posse móvel (Penhor), com posse imóvel e fruição (Anticrese).\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 82,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Usucapião Extrajudicial (Art. 216-A LRP / Lei 13.105/2015 — CPC)",
            "link": "",
            "description": "**Lei Seca:** Lei 6.015/73, Art. 216-A\n\n**Foco:** Procedimento perante o registrador, notificação de confrontantes, impugnações.\n\n**Questões:** 14 | **Tempo:** 2h00min"
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
            "description": "**Lei Seca:** Lei 10.931/04, Arts. 26-35; CC Arts. 1.418-1.422\n\n**Foco:** Procedimento registral para transferência de propriedade por inadimplemento.\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 84,
            "discipline": "DIREITO CIVIL",
            "title": "Obrigações e Responsabilidade Civil — Inadimplemento e Indenização",
            "link": "",
            "description": "**Lei Seca:** CC Arts. 234-301, 186-187, 402-404\n\n**Foco:** Mora, perdas e danos, danos morais e materiais.\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 6.015/73, Art. 1º; CC Arts. 1.245-1.252\n\n**Foco:** A proteção do terceiro de boa-fé. Presunção registral juris tantum.\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 86,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "ITBI — Imposto sobre Transmissão de Bens Imóveis (Lei Complementar 116/03)",
            "link": "",
            "description": "**Lei Seca:** LC 116/03; CTN Arts. 32-34\n\n**Foco:** Transmissão de bens imóveis (fato gerador, base de cálculo).\n\n**Questões:** 8 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** Lei 6.015/73, Arts. 167-168; Lei 14.382/2022\n\n**Foco:** Ampliação do rol do Art. 167 (direito de laje, infiltração).\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 88,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Títulos de Crédito — Teoria Geral e Espécies (Lei Uniforme de Genebra)",
            "link": "",
            "description": "**Lei Seca:** CC Arts. 887-903; Lei de Genebra\n\n**Foco:** Literalidade, cartularidade, autonomia.\n\n**Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** Lei 10.267/01; Lei 14.382/2022\n\n**Foco:** Obrigatoriedade, registro via coordenadas, ampliação de exigência.\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 90,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Publicidade no Sistema Registral (Lei 6.015/73 + Lei 14.382/2022)",
            "link": "",
            "description": "**Lei Seca:** Lei 6.015/73, Arts. 1º-10; Lei 14.382/2022\n\n**Foco:** SERP: interoperabilidade, compartilhamento com Receita.\n\n**Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** CC Arts. 1.784-1.856, 1.858-1.875\n\n**Foco:** Ordem de herança, saisine, legítima.\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 92,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Bem de Família (Lei 8.009/90)",
            "link": "",
            "description": "**Lei Seca:** Lei 8.009/90; CC Arts. 1.711-1.722\n\n**Foco:** Impenhorabilidade legal vs. voluntária. Exceções à regra.\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 9.514/97; Lei 10.931/04\n\n**Foco:** Securitização de CCIs, execução extrajudicial, alienação fiduciária.\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 94,
            "discipline": "DIREITO CIVIL",
            "title": "Contratos em Espécie — Compra e Venda (Imóvel)",
            "link": "",
            "description": "**Lei Seca:** CC Arts. 481-504\n\n**Foco:** Obrigações recíprocas, evicção, vícios ocultos.\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 9.784/99\n\n**Foco:** Legalidade, finalidade, imperatividade, presunção de legitimidade dos atos notariais.\n\n**Questões:** 8 | **Tempo:** 1h30min"
          },
          {
            "id": 96,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Invalidade e Ineficácia de Contrato e Relação com Registro (CC Arts. 104-184)",
            "link": "",
            "description": "**Lei Seca:** CC Arts. 104-184\n\n**Foco:** Nulidade absoluta vs. anulabilidade (impactos no registro e terceiro de boa-fé).\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 13.709/18; Lei 14.382/2022\n\n**Foco:** Conflito entre publicidade registral e privacidade de dados.\n\n**Questões:** 8 | **Tempo:** 1h30min"
          },
          {
            "id": 98,
            "discipline": "DIREITO CONSTITUCIONAL",
            "title": "Propriedade Intelectual e Direitos Autorais (CF Art. 5º XXVII, Lei 9.610/98)",
            "link": "",
            "description": "**Lei Seca:** CF Art. 5º, XXVII; Lei 9.610/98\n\n**Foco:** Proteção constitucional, reflexos indiretos no direito registral.\n\n**Questões:** 8 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** CC Arts. 1.510-A-1.510-D; Lei 13.465/17\n\n**Foco:** Matrícula separada, regularização fundiária (Reurb).\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 100,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Escrituras Públicas (Lei 8.935/94 + Provimento 149/2023)",
            "link": "",
            "description": "**Lei Seca:** Lei 8.935/94, Arts. 6º-9º; Provimento 149/2023\n\n**Foco:** Atribuição do Tabelião vs Registrador. Forma e solenidade.\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** CC Arts. 538-564\n\n**Foco:** Irrevogabilidade (exceções: ingratidão), exigência de escritura pública para imóveis.\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 102,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Contrato de Compra e Venda de Imóvel (Lei 6.015/73 + CC Arts. 481-504)",
            "link": "",
            "description": "**Lei Seca:** CC Arts. 481-504; Lei 6.015/73, Art. 167\n\n**Foco:** Necessidade de registro para oponibilidade erga omnes.\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** CC Arts. 533-537, 565-578\n\n**Foco:** Regras de permuta (equiparação à venda), locação (proteção locatícia, averbação).\n\n**Questões:** 12 | **Tempo:** 1h45min"
          },
          {
            "id": 104,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "RI — Títulos Admitidos a Registro (Lei 6.015/73, Art. 167)",
            "link": "",
            "description": "**Lei Seca:** Lei 6.015/73, Art. 167; Lei 14.382/2022\n\n**Foco:** Rol do art. 167 (tipicidade registral).\n\n**Questões:** 12 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 8.629/93; Lei 13.465/17\n\n**Foco:** Desapropriação por interesse social vs. Reurb.\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 106,
            "discipline": "DIREITO EMPRESARIAL",
            "title": "Sociedade Limitada — Estrutura, Quotas e Responsabilidade (CC Arts. 1.052-1.087)",
            "link": "",
            "description": "**Lei Seca:** CC Arts. 1.052-1.087\n\n**Foco:** Registro na Junta Comercial, responsabilidade limitada, quotas.\n\n**Questões:** 10 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** Lei 6.766/79, Arts. 1º-44\n\n**Foco:** Loteamento (divisão com ruas) vs condomínio. Regularização via Reurb.\n\n**Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 108,
            "discipline": "DIREITO TRIBUTÁRIO",
            "title": "Impostos Imobiliários — ITBI, IPTU, ITR (Aprofundado)",
            "link": "",
            "description": "**Lei Seca:** LC 116/03, Lei 5.172/66, Lei 9.393/96\n\n**Foco:** Progressividade do IPTU e ITR, diferença de fatos geradores.\n\n**Questões:** 8 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** Lei 5.771/1971; Lei 14.382/2022\n\n**Foco:** Anotação obrigatória no RI, IPHAN vs esferas locais.\n\n**Questões:** 6 | **Tempo:** 1h45min"
          },
          {
            "id": 110,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Georreferenciamento de Imóveis Rurais e Urbanos",
            "link": "",
            "description": "**Lei Seca:** Lei 10.267/2001; Lei 13.465/2017\n\n**Foco:** Gleba Rural Única (GRU), certificação INCRA, prazos.\n\n**Questões:** 7 | **Tempo:** 1h50min"
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
            "description": "**Lei Seca:** Lei 13.465/2017; Decreto 9.310/2018\n\n**Foco:** REURB-S vs REURB-E, legitimados ativos, usucapião ordinária.\n\n**Questões:** 8 | **Tempo:** 2h00min"
          },
          {
            "id": 112,
            "discipline": "Direito Civil - Reforma Agrária",
            "title": "Lei 8.629/1993: Reforma Agrária e Proteção ao Desapropriado",
            "link": "",
            "description": "**Lei Seca:** Lei 8.629/1993\n\n**Foco:** Desapropriação de latifúndio improdutivo, indenizações, hipotecas sobre imóveis desapropriados.\n\n**Questões:** 7 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** IN INCRA 128/2022\n\n**Foco:** Imissão de posse precária vs definitiva, cancelamento do processo.\n\n**Questões:** 6 | **Tempo:** 1h40min"
          },
          {
            "id": 114,
            "discipline": "Direito Administrativo",
            "title": "Princípios da Administração Pública: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência",
            "link": "",
            "description": "**Lei Seca:** CF/1988 Art. 37\n\n**Foco:** Legalidade, Impessoalidade, Moralidade, aplicados a cartórios.\n\n**Questões:** 6 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 14.382/2022\n\n**Foco:** Diferença de inscrição vs averbação, direito real de garantia.\n\n**Questões:** 8 | **Tempo:** 2h00min"
          },
          {
            "id": 116,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Código Nacional de Matrícula (CNM) e Organização de Cartórios Eletrônicos",
            "link": "",
            "description": "**Lei Seca:** Provimento CNJ 65/2008\n\n**Foco:** Estrutura do CNM (CNPJ + sequencial), unificação de matrículas.\n\n**Questões:** 6 | **Tempo:** 1h35min"
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
            "description": "**Lei Seca:** Lei 14.382/2022; Provimento 115/2021\n\n**Foco:** Registro Eletrônico de Imóveis, papel centralizador do ONR.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 118,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Direito Real de Laje conforme Lei 14.382/2022",
            "link": "",
            "description": "**Lei Seca:** Lei 10.257/2001; Lei 14.382/2022\n\n**Foco:** Responsabilidade civil, gravames sobre laje, diferenças para propriedade horizontal.\n\n**Questões:** 6 | **Tempo:** 1h40min"
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
            "description": "**Lei Seca:** Lei 6.015/1973, Arts. 176-180\n\n**Foco:** Título suficiente vs insuficiente, prazo para apresentação.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 120,
            "discipline": "Direito Civil - Tabelionato",
            "title": "Escrituras Públicas: Conceito, Requisitos e Efeitos Jurídicos",
            "link": "",
            "description": "**Lei Seca:** Lei 14.382/2022; Lei 8.935/1994\n\n**Foco:** Fé pública, presunção de veracidade, assinaturas eletrônicas.\n\n**Questões:** 8 | **Tempo:** 2h00min"
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
            "description": "**Lei Seca:** CC/2002, arts. 481-504\n\n**Foco:** Fase obrigacional vs fase real, promessa de venda, nemo plus iuris.\n\n**Questões:** 8 | **Tempo:** 2h00min"
          },
          {
            "id": 122,
            "discipline": "Direito Civil",
            "title": "Contrato de Doação de Imóvel: Formalidades e Efeitos",
            "link": "",
            "description": "**Lei Seca:** CC/2002, arts. 538-564\n\n**Foco:** Animus donandi, revogação por superveniência de filhos ou ingratidão.\n\n**Questões:** 7 | **Tempo:** 1h50min"
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
            "description": "**Lei Seca:** CC/2002, arts. 534-537\n\n**Foco:** Dupla transferência, equiparação à compra e venda.\n\n**Questões:** 6 | **Tempo:** 1h40min"
          },
          {
            "id": 124,
            "discipline": "Direito Civil",
            "title": "Contrato de Locação de Imóvel: Anotações Registrais",
            "link": "",
            "description": "**Lei Seca:** Lei 8.245/1991; CC/2002\n\n**Foco:** Averbação no RI, direito de preferência, prazos.\n\n**Questões:** 7 | **Tempo:** 1h50min"
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
            "description": "**Lei Seca:** Lei 10.931/2004\n\n**Foco:** Negociabilidade (endosso), prescrição reduzida.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 126,
            "discipline": "Direito Constitucional",
            "title": "Direitos e Garantias Fundamentais: Direito de Propriedade (art. 5º, XXII) e Função Social",
            "link": "",
            "description": "**Lei Seca:** CF/1988, art. 5º, XXII e XXIII\n\n**Foco:** Limitações à propriedade, usucapião, REURB.\n\n**Questões:** 6 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 13.709/2018\n\n**Foco:** Consentimento, responsabilidade solidária, multas LGPD.\n\n**Questões:** 6 | **Tempo:** 1h40min"
          },
          {
            "id": 128,
            "discipline": "Direito Empresarial",
            "title": "Sociedades Empresárias: Registro de Contratos Sociais e Alterações",
            "link": "",
            "description": "**Lei Seca:** Lei 6.404/1976\n\n**Foco:** Diferença entre Junta Comercial e RI, imóveis de sócios.\n\n**Questões:** 5 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** Lei 14.382/2022\n\n**Foco:** Interoperabilidade, certidões eletrônicas, publicidade vs. sigilo.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 130,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Central Nacional de Indisponibilidade de Bens (CNIB) e Anotações de Bloqueio",
            "link": "",
            "description": "**Lei Seca:** Lei 14.382/2022\n\n**Foco:** Central Nacional de Indisponibilidade de Bens. Reflexos no registro.\n\n**Questões:** 7 | **Tempo:** 1h50min"
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
            "description": "**Lei Seca:** Lei 13.097/2015; Lei 14.382/2022\n\n**Foco:** Novo direito real de garantia, flutuação de direitos, prioridade.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 132,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Serviço de Atendimento Eletrônico Compartilhado (SAEC) e Operacionalização",
            "link": "",
            "description": "**Lei Seca:** Lei 14.382/2022 (SAEC)\n\n**Foco:** Atendimento eletrônico compartilhado, ONR.\n\n**Questões:** 6 | **Tempo:** 1h40min"
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
            "description": "**Lei Seca:** Provimento CNJ 115/2021\n\n**Foco:** Arrecadação, custos, diferença de emolumentos.\n\n**Questões:** 5 | **Tempo:** 1h30min"
          },
          {
            "id": 134,
            "discipline": "Direito Civil - Registro de Imóveis",
            "title": "Registro de Imóvel e Direito à Proteção dos Dados Pessoais",
            "link": "",
            "description": "**Lei Seca:** LGPD\n\n**Foco:** Dados sensíveis em matrículas, direitos do titular e responsabilidade do operador.\n\n**Questões:** 6 | **Tempo:** 1h40min"
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
            "description": "**Lei Seca:** Lei 14.382/2022\n\n**Foco:** Pagamento integrado, emissão de comprovantes.\n\n**Questões:** 6 | **Tempo:** 1h35min"
          },
          {
            "id": 136,
            "discipline": "Direito Tributário",
            "title": "Impostos sobre Propriedade Imóvel: IPTU, ITBI e Imposto de Renda (Pessoa Física)",
            "link": "",
            "description": "**Lei Seca:** CF Arts. 145-160\n\n**Foco:** Recolhimento antes do registro (ITBI), declaração de IR PF.\n\n**Questões:** 6 | **Tempo:** 1h45min"
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
            "description": "**Lei Seca:** Lei 6.015/1973, Art. 198\n\n**Foco:** Legitimidade, recusa registral fundamentada.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 138,
            "discipline": "Direito Processual Civil",
            "title": "Ação Reivindicatória e Ação Possessória: Importância Registral",
            "link": "",
            "description": "**Lei Seca:** CPC/2015, arts. 556-633\n\n**Foco:** Efeitos da sentença possessória sobre o registro imobiliário.\n\n**Questões:** 5 | **Tempo:** 1h30min"
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
            "description": "**Lei Seca:** Provimento 149/2023\n\n**Foco:** Código Nacional de Normas: abrangência e obrigatoriedade.\n\n**Questões:** 5 | **Tempo:** 1h30min"
          },
          {
            "id": 140,
            "discipline": "Direito Notarial",
            "title": "Tabelionato de Notas: Atribuições, Função Pública e Responsabilidade Profissional",
            "link": "",
            "description": "**Lei Seca:** Lei 8.935/1994, Arts. 1-5; Prov. 149\n\n**Foco:** Atribuições exclusivas, limite de competência, conflitos de interesse.\n\n**Questões:** 7 | **Tempo:** 1h50min"
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
            "description": "**Lei Seca:** Lei 8.935/1994, Arts. 1-12\n\n**Foco:** Requisitos (idade, idoneidade), incompatibilidades.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 142,
            "discipline": "Direito Notarial",
            "title": "Lei 8.935/1994 — Parte II: Delegação, Vitaliciedade, Substituição e Extinção",
            "link": "",
            "description": "**Lei Seca:** Lei 8.935/1994, Arts. 13-35\n\n**Foco:** Causas de extinção (morte, condenação), estabilidade vs vitaliciedade.\n\n**Questões:** 7 | **Tempo:** 1h50min"
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
            "description": "**Lei Seca:** Lei 8.935/1994, Arts. 36-45; Código Penal\n\n**Foco:** Falsificação vs erro administrativo, esferas de responsabilização.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 144,
            "discipline": "Direito Notarial",
            "title": "Emolumentos: Conceito, Cálculo, Distribuição e Tabela de Preços",
            "link": "",
            "description": "**Lei Seca:** Lei 8.935/1994, Arts. 46-56\n\n**Foco:** Tabela de preços, distinção para taxa, gratuidades e isenções legais.\n\n**Questões:** 7 | **Tempo:** 1h50min"
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
            "description": "**Lei Seca:** Convenção de Haia; Prov. 149\n\n**Foco:** Documentos públicos, efeito no exterior.\n\n**Questões:** 6 | **Tempo:** 1h40min"
          },
          {
            "id": 146,
            "discipline": "Teoria Geral do Direito Notarial e Registral",
            "title": "Conciliação e Mediação nos Serviços Notariais (Lei 13.140/2015)",
            "link": "",
            "description": "**Lei Seca:** Lei 13.140/2015; Prov. 149\n\n**Foco:** Notário mediador, confidencialidade, força executória do acordo.\n\n**Questões:** 6 | **Tempo:** 1h40min"
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
            "description": "**Lei Seca:** Lei 14.382/2022; Prov. 149\n\n**Foco:** ICP-Brasil, assinaturas eletrônicas, responsabilidade.\n\n**Questões:** 7 | **Tempo:** 1h50min"
          },
          {
            "id": 148,
            "discipline": "Direito Notarial e Registral - REVISÃO INTENSIVA",
            "title": "Lei 8.935/1994 Consolidada + Lei 14.382/2022 + Jurisprudência FGV/CEBRASPE",
            "link": "",
            "description": "**Lei Seca:** Leis Integradas e Jurisprudência\n\n**Foco:** Casos práticos da FGV e armadilhas.\n\n**Questões:** 12 | **Tempo:** 2h30min"
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
            "description": "- Provimento 149 — Tabelionato de Protestos (Arts. 1-100)\n- Definição, competência, documentos de protesto, qualidades do protesto\n- Armadilha FGV: Confundir protesto notarial com protesto cartorário em RFI\n- Arts. 14-20 (intimação do devedor)"
          },
          {
            "id": 150,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Tabelionato de Protestos (Arts. 51-100) + Atos de Protesto",
            "link": "",
            "description": "- Provimento 149 — Registro de Cartórios (RCPN) e Responsabilidade Civil do Notário\n- Procedimento do protesto (fases), atos notariais (ciência, intimação), registro em livro de protesto\n- Armadilha FGV: Ordem de atos — muitas questões trocam sequência de ciência/devolução"
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
            "description": "- Provimento 149 — Tabelionato de Notas (Escrituras Arts. 1-100)\n- Registro cartorial de protesto (livro próprio), requisitos de validade, averbações\n- Armadilha FGV: RCPN vs. Registro de Protesto em RFI — diferenças essenciais de competência e efeitos"
          },
          {
            "id": 152,
            "discipline": "Direito Civil",
            "title": "Revisão Leve — Títulos de Crédito e Cambial (Arts. 887-926 CC)",
            "link": "",
            "description": "- Revisão Leve: Títulos de Crédito (Arts. 887-926 CC)\n- Conceito, características (literalidade, autonomia), títulos comuns (nota promissória, duplicata, cheque)\n- Armadilha FGV: Confundir requisitos de validade de duplicata com protesto — protesto não valida título inválido"
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
            "description": "- Responsabilidade do notário por atos ilícitos em protesto, prazos de reclamação, compensação\n- Armadilha FGV: Responsabilidade objetiva vs. subjetiva — FGV mescla conceitos"
          },
          {
            "id": 154,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Tabelionato de Notas — Escrituras (Arts. 1-100)",
            "link": "",
            "description": "- Competência do tabelião (escrituras, atas, reconhecimento), requisitos formais (partes, identificação, consentimento), livros de notas\n- Armadilha FGV: Quando tabelião NÃO pode recusar ato — ordem pública vs. conveniência pessoal"
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
            "description": "- Simulado Curto de Fixação (8 a 10 questões rápidas mistas)\n- Identificar gaps, revisar confusões comuns FGV"
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
            "description": "- Provimento 149 — Registro de Créditos Pignoratícios (RCPJ) e Registro de Títulos (RTD)\n- Conceito RCPJ, bens admitidos (moeda estrangeira, ouro, valores), requisitos de registro, cancelamento\n- Armadilha FGV: Confundir RCPJ com cartório de protestos ou RFI — jurisdições distintas"
          },
          {
            "id": 157,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Títulos e Documentos (RTD)",
            "link": "",
            "description": "- Competência RTD (títulos, documentos), documentos admitidos, requisitos formais, prazo de guarda, cancelamento\n- Armadilha FGV: RTD não autentica conteúdo — autenticação é função notarial, não registral"
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
            "description": "- Provimento 149 — Registro de Imóveis (Arts. 1-200) e propriedades rurais\n- Competência RI (imóveis urbanos/rurais), sistema de registro (aquisição, conservação, segurança), livros de registro, efeitos do registro\n- Armadilha FGV: Presunção de validade do registro vs. propriedade real — registro não cria propriedade, presume validade"
          },
          {
            "id": 159,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Registro de Imóveis (RI) — Arts. 101-200 + Imóvel Rural",
            "link": "",
            "description": "- Procedimento de registro (prenotação, decisão, arquivamento), imóvel rural (CCIR, cadastro técnico), matrículas\n- Armadilha FGV: Prenotação vs. Registro — efeitos diferentes; CCIR não é título de propriedade"
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
            "description": "- Revisão Leve: Competências Administrativas da CF/88 (Arts. 21-25)\n- Competências privativas, comuns, concorrentes — foco em notarial/registral (competência estadual)\n- Armadilha FGV: Confundir competência legislativa com administrativa"
          },
          {
            "id": 161,
            "discipline": "SIMULADO / REVISÃO",
            "title": "Simulado 01 — 50 questões cronometrado (versão reduzida)",
            "link": "",
            "description": "- Simulado 01 (50 questões) e Engenharia Reversa dos Erros\n- Identificar padrões de erro FGV, velocidade de resposta sob pressão"
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
            "description": "- Padrões de erro, conceitos ainda frágeis\n- Engenharia Reversa dos Erros do Simulado 01"
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
            "description": "- Provimento 149 — Registro de Imóveis (Transcrição vs Inscrição), Protesto e RFI\n- Transcrição vs. inscrição, sequência de registro, efeitos de cada uma, cancelamento\n- Armadilha FGV: Confundir transcrição (aquisição) com inscrição (gravames/encargos) — ordem importa para prioridade"
          },
          {
            "id": 164,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Cartório de Protestos + RFI (Registro de Financiamento Imobiliário)",
            "link": "",
            "description": "- Diferenças entre protesto em Cartório de Protestos vs. RI, RFI (sistema fiduciário), prioridade de registro\n- Armadilha FGV: RFI é registro acessório (não registra propriedade) — confundir com RI"
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
            "description": "- Provimento 149 — Autenticações, Reconhecimento de Firma e Disposições Finais (Infrações)\n- Autenticação (cópia fiel), reconhecimento de assinatura (semelhança), atas (mediação/conciliação), requisitos formais\n- Armadilha FGV: Autenticação NÃO é Certificação de conteúdo — autenticação é só forma; reconhecimento semelhança vs. tecnológico"
          },
          {
            "id": 166,
            "discipline": "Notarial e Registral",
            "title": "Provimento 149 — Disposições Finais + Fiscalização e Disciplina",
            "link": "",
            "description": "- Deveres notariais, proibições, infrações disciplinares (suspensão, cancelamento), fiscalização pelo Judiciário\n- Armadilha FGV: Confundir infrações administrativas com penais — CNJ pune administrativa (suspensão), MP pune penal (crime)"
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
            "description": "- Revisão Leve: Responsabilidade Civil da Administração\n- Princípios (legalidade, moralidade, impessoalidade), responsabilidade solidária Estado/notário, indenização\n- Armadilha FGV: Notário é delegatário (não servidor) — responsabilidade não é a mesma"
          },
          {
            "id": 168,
            "discipline": "SIMULADO / REVISÃO",
            "title": "Simulado 02 — 50 questões cronometrado (versão reduzida)",
            "link": "",
            "description": "- Simulado 02 (50 questões) e Resumo Semanal Consolidado\n- Velocidade, consolidação Provimento 149, padrões FGV em questões complexas"
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
            "description": "- Validar conhecimento antes de retomar ritmo normal (semana 21+)\n- Resumo Semanal Consolidado das semanas reduzidas"
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
            "description": "- Simulado 03 (100 questões cronometradas) e Análise Detalhada de Erros\n- Performance geral, identificar weak spots, timing management"
          },
          {
            "id": 171,
            "discipline": "REVISÃO / ANÁLISE DE ERROS",
            "title": "Análise Detalhada Simulado 03 — Engenharia Reversa de Erros",
            "link": "",
            "description": "- Por que errou? Qual conceito falta? Qual foi a armadilha FGV? Como não errar de novo?\n- Análise detalhada de cada erro do Simulado 03"
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
            "description": "- Microdose: Competência Processual Civil (Arts. 43-63 CPC)\n- Competência absoluta vs. relativa, foro competente para ações registrárias\n- Armadilha FGV: Confundir competência processual com competência de jurisdição notarial"
          },
          {
            "id": 173,
            "discipline": "Direito Penal",
            "title": "Microdose — Falso Testemunho e Fraude Documental (Arts. 342-345, 298-302 CP)",
            "link": "",
            "description": "- Microdose: Falso Testemunho e Fraude (CP)\n- Falsidade de documento (público e privado), falsidade em ata/autenticação notarial, elementos do crime\n- Armadilha FGV: Autenticação falsa é falsidade de documento público — responsabilidade penal do notário"
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
            "description": "- Microdose: Competência Penal (CPP)\n- Foro competente para crimes praticados por notários (Justiça Estadual ou Federal?), prevenção\n- Armadilha FGV: Notário federal (TRF) vs. tabelião estadual — competência diferente"
          },
          {
            "id": 175,
            "discipline": "Direito Tributário",
            "title": "Microdose — ITBI e Impostos Sobre Imóveis (Arts. 156 CF88, Lei 6.015/73)",
            "link": "",
            "description": "- Microdose: ITBI/Impostos\n- ITBI (imposto de transmissão imobiliária), alíquotas, isenções, rol de documentos isentos\n- Armadilha FGV: Confundir ITBI com registro — registro é efeito da transmissão, ITBI é imposto"
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
            "description": "- Microdose: Licitações e PLD\n- Cartórios como serviço público delegado, obrigações de transparência, contratações (se houver)\n- Armadilha FGV: Confundir lei de licitação com organização de cartório — cartório é serviço delegado, não Administração direta"
          },
          {
            "id": 177,
            "discipline": "Lavagem de Dinheiro",
            "title": "Microdose — Lei 9.613/98 + Obrigações Notariais",
            "link": "",
            "description": "- Microdose: PLD (Prevenção à Lavagem de Dinheiro)\n- Notários como obrigados a reportar operações suspeitas (PLD), limites de valor, sigilo quebrado\n- Armadilha FGV: Confundir sigilo profissional com dever de reportagem — PLD quebra sigilo notarial"
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
            "description": "- Revisão LGPD e Proteção de Dados\n- Cartório como controlador de dados, direitos de titular, bases legais, sigilo vs. LGPD\n- Armadilha FGV: Confundir sigilo profissional com LGPD — LGPD amplia direitos, sigilo não anula"
          },
          {
            "id": 179,
            "discipline": "REVISÃO",
            "title": "Consolidação Microdoses Semana 21",
            "link": "",
            "description": "- Validar aprendizado Classe D, conectar com matérias principais\n- Consolidação de todas as microdoses da semana 21"
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
            "description": "- Simulado 04 (100 questões cronometradas) e Análise Comparativa de Padrões FGV\n- Validar progresso após Classe D microdoses, consolidar velocidade"
          },
          {
            "id": 181,
            "discipline": "REVISÃO / ANÁLISE DE ERROS",
            "title": "Análise Comparativa Simulados 01-04 — Padrões de Erro",
            "link": "",
            "description": "- Quais temas repetem erros? Qual é o padrão? Qual armadilha FGV volta sempre?\n- Análise Comparativa de Padrões FGV nos simulados 01-04"
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
            "description": "- Revisões Densas: Prov. 149 + Lei 8.935/94\n- Confusões recorrentes — protesto vs. RI, RCPN vs. RCPJ, autenticação vs. certificação, reconhecimento vs. assinatura digital"
          },
          {
            "id": 183,
            "discipline": "Direito Civil",
            "title": "Revisão Densa — Lei 8.078/90 (Código de Defesa do Consumidor) + Relação Notário-Usuário",
            "link": "",
            "description": "- Revisão Densa: CDC e Notários\n- Notário como fornecedor de serviço, obrigações de transparência, responsabilidade por atos ilícitos, vedações\n- Armadilha FGV: Confundir responsabilidade notarial com CDC — CDC protege consumidor contra abusos"
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
            "description": "- Revisão Densa: Capacidade e Representação\n- Quem pode ser parte em ato notarial? Menores, incapazes, representação legal vs. voluntária\n- Armadilha FGV: Confundir capacidade jurídica com capacidade de exercício — notário deve verificar"
          },
          {
            "id": 185,
            "discipline": "Organização Digital e Sistemas",
            "title": "Revisão — Lei 13.774/18 + Provimento 149 (Seção Digital)",
            "link": "",
            "description": "- Assinatura eletrônica, notarização digital, certificados ICP-Brasil, segurança\n- Armadilha FGV: Confundir assinatura eletrônica com reconhecimento de assinatura — efeitos diferentes"
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
            "description": "- Revisão Densa: Posse/Propriedade e Sucessões\n- Posse (conceito, efeitos), propriedade (aquisição), usucapião (requisitos, prazos), registro\n- Armadilha FGV: Confundir posse com propriedade — posse é fato, propriedade é direito; registro presume propriedade de possuidor registrado"
          },
          {
            "id": 187,
            "discipline": "Sucessões",
            "title": "Revisão — Lei de Sucessões (Arts. 1784-1856 CC)",
            "link": "",
            "description": "- Sucessão testamentária vs. legítima, ordem de vocação, testamento (requisitos), inventário extrajudicial (cartório)\n- Armadilha FGV: Confundir testamento notarial com testamento cerrado — competências e requisitos distintos"
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
            "description": "- PJ e Associações\n- Categorias de PJ, registro na Junta Comercial, cartório (atas de PJ não comercial), ato constitutivo\n- Armadilha FGV: Confundir registro em cartório com registro em Junta — competências diferentes"
          },
          {
            "id": 189,
            "discipline": "REVISÃO",
            "title": "Consolidação Semana 22 — Resumo de Revisões Densas",
            "link": "",
            "description": "- Validar consolidação, identificar últimas lacunas\n- Resumo de todas as revisões densas da semana 22"
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
            "description": "- Simulados 05, 06 e 07 (100 questões cada) focados em velocidade, pressão psicológica e visão de padrões FGV\n- Velocidade máxima, eliminar hesitações, automatizar padrão de resposta"
          },
          {
            "id": 191,
            "discipline": "SIMULADO",
            "title": "Simulado 06 — 100 questões cronometrado (foco pressão psicológica)",
            "link": "",
            "description": "- Manter concentração com fadiga, lidar com pressão, não desistir em questões difíceis\n- Foco em pressão psicológica e resistência mental"
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
            "description": "- Reconhecer padrões FGV em tempo real, evitar pegadinhas comuns\n- Foco em visão de padrões FGV"
          },
          {
            "id": 193,
            "discipline": "REVISÃO / ANÁLISE DE ERROS",
            "title": "Engenharia Reversa Simulados 05-07 — Por Que Errou?",
            "link": "",
            "description": "- Engenharia Reversa Total: \"Top 20 artigos mais errados do CC e Prov. 149\"\n- Cada erro = aprendizado. Quebra cada questão: conceito fundamental? Armadilha FGV? Leitura de lei errada? Negligência?"
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
            "description": "- Os 20 artigos/temas que mais geram erro no Provimento 149 e Lei 8.935/94\n- Memorizar casos limite, exceções, detalhes"
          },
          {
            "id": 195,
            "discipline": "Direito Civil",
            "title": "Top 20 Artigos Mais Errados — Código Civil",
            "link": "",
            "description": "- Top 20 artigos mais errados do Código Civil\n- Artigos do CC que causam confusão (capacidade, posse, propriedade, sucessão)"
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
            "description": "- Competências, princípios, responsabilidade (tema que se repete com erro)\n- Top 20 temas mais errados em Direito Constitucional e Administrativo"
          },
          {
            "id": 197,
            "discipline": "Classe D (Processo Civil, Penal, Tributário, PLD)",
            "title": "Top 15 Temas Mais Errados — Microdoses Recorrentes",
            "link": "",
            "description": "- Temas Classe D que aparecem em questões e geram erro\n- Top 15 temas mais errados nas matérias de microdose"
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
            "description": "- Treinamento Rapid Fire: 50 questões em 1 hora para reflexo intuitivo\n- Treinar reflexo, eliminar pensamento lento, respostas por intuição consolidada"
          },
          {
            "id": 199,
            "discipline": "REVISÃO",
            "title": "Consolidação Semana 23 — Simulados + Top 20 Artigos",
            "link": "",
            "description": "- Estar 90%+ confiante nos simulados\n- Consolidação de todos os simulados e Top 20 artigos da semana 23"
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
            "description": "- Simulados Finais 08 e 09 (Teste Real e Resistência)\n- Prova real — mesmo ambiente, mesma pressão, mesma duração. Medir desempenho final."
          },
          {
            "id": 201,
            "discipline": "SIMULADO",
            "title": "Simulado 09 — 100 questões cronometrado (teste de resistência)",
            "link": "",
            "description": "- Manter desempenho após fadiga, testar resistência mental antes da prova\n- Teste de resistência: manter performance sob fadiga extrema"
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
            "description": "- Últimos pontos cegos. Não é aprendizado novo — é consolidação final.\n- Análise final dos simulados 08 e 09"
          },
          {
            "id": 203,
            "discipline": "Notarial e Registral",
            "title": "Revisão Leve — Provimento 149 (Leitura Rápida dos Pontos Críticos)",
            "link": "",
            "description": "- Leituras Dinâmicas Leves: Passagem panorâmica do Provimento 149\n- Repassar rapidamente os temas que causaram mais erro na semana 23. Não é aprendizado novo."
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
            "description": "- Leituras Dinâmicas Leves: Artigos críticos do CC/CF88\n- Rápida passada nos temas que mais errou. Não é novo aprendizado."
          },
          {
            "id": 205,
            "discipline": "REVISÃO",
            "title": "Relaxamento Estratégico — Leitura Leve + Visualização",
            "link": "",
            "description": "- Descanso ativo, mentalização, relaxamento psicológico\n- Manter confiança, evitar ansiedade, relaxar mente antes da prova. Não é aprendizado."
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
            "description": "- Zero conteúdo novo!\n- Identificar o único erro que se repetiu mais. Treinar aquele específico. Ganhar confiança."
          },
          {
            "id": 207,
            "discipline": "DESCANSO PRÉ-PROVA",
            "title": "Repouso Total + Preparação Emocional",
            "link": "",
            "description": "- Descansar. Dormir bem. Confiar no aprendizado acumulado. Mentalização positiva.\n- Zero conteúdo novo! Repouso total antes da prova ENAC."
          }
        ]
      }
    ]
  },
  {
    "id": "25",
    "title": "Ciclo 25 — Revisão Dirigida por Gaps + Dissertativa 01",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 208,
            "discipline": "REVISÃO DIRIGIDA",
            "title": "Mapeamento de Gaps — Análise Consolidada de Todos os Simulados",
            "link": "",
            "description": "**Material:** Gabaritos de todos os simulados realizados (Tarefas 161, 168, 170, 179, 185, 191, 197, 201)\n\n**Lei Seca Obrigatória:** Todos os erros acumulados — agrupar por tema/artigo\n\n**Foco:** Criar uma lista dos 20 temas/artigos que mais geraram erro. Classificar: (1) erro por desconhecimento, (2) erro por confusão entre conceitos, (3) erro por desatenção. Priorizar os erros tipo 1 e 2.\n\n**Flashcards:** Criar 15 clozes novos focados nos temas de maior erro | **Questões:** Nenhuma (tarefa analítica) | **Tempo:** 2h00min"
          },
          {
            "id": 209,
            "discipline": "DIREITO NOTARIAL E REGISTRAL",
            "title": "Revisão Profunda — Top 5 Temas de Erro em Notarial/Registral",
            "link": "",
            "description": "**Material:** Material original dos temas identificados na Tarefa 208\n\n**Lei Seca Obrigatória:** Artigos específicos dos 5 temas de maior erro em Notarial/Registral\n\n**Foco:** Releitura dirigida dos dispositivos que geraram mais erro. Comparar com flashcards existentes — estão imprecisos? Reescrever se necessário.\n\n**Flashcards:** Revisar/reescrever 10 clozes imprecisos + criar 5 novos | **Questões:** 20 (exclusivamente dos temas de erro) | **Tempo:** 2h00min"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 210,
            "discipline": "DIREITO CIVIL",
            "title": "Revisão Profunda — Top 3 Temas de Erro em Civil",
            "link": "",
            "description": "**Material:** Material original dos temas identificados na Tarefa 208\n\n**Lei Seca Obrigatória:** CC artigos dos 3 temas de maior erro\n\n**Foco:** Releitura de artigos + doutrina nos pontos de confusão. Especial atenção a: regime de bens + efeitos registrais, legítima + testamento, usucapião requisitos.\n\n**Flashcards:** Revisar/reescrever 8 clozes + criar 4 novos | **Questões:** 15 (dos temas de erro) | **Tempo:** 1h30min"
          },
          {
            "id": 211,
            "discipline": "DISSERTATIVA",
            "title": "Dissertativa 01 — Tema de Prova Anterior (Notarial/Registral)",
            "link": "",
            "description": "**Material:** Banco de provas anteriores ENAC + TJ-BA + TJ-SP (selecionar 1 tema)\n\n**Lei Seca Obrigatória:** Artigos conforme tema escolhido\n\n**Foco:** Cronometrar 90 minutos. Temas sugeridos: (1) Usucapião extrajudicial, requisitos, procedimento registral e inovações legislativas; (2) Natureza jurídica da atividade notarial e registral à luz do Art. 236 CF e da Lei 8.935/94; (3) Comparação alienação fiduciária de imóvel e hipoteca quanto aos aspectos registrais. Estrutura: introdução (conceito + fundamento legal), desenvolvimento (requisitos, procedimento, jurisprudência), conclusão.\n\n**Flashcards:** Criar 3 clozes com os pontos que esqueceu/errou na dissertativa | **Questões:** Nenhuma | **Tempo:** 1h30min (escrita) + 30min (análise/correção)"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 212,
            "discipline": "SIMULADO",
            "title": "Simulado 07 — 100 questões cronometrado",
            "link": "",
            "description": "**Material:** Questões ENAC + Banco Estratégia Cartórios (questões inéditas)\n\n**Lei Seca Obrigatória:** Revisão pós-simulado — análise de erros imediata\n\n**Foco:** Performance pós-revisão de gaps. Comparar com simulados anteriores.\n\n**Flashcards:** Criar 10 clozes com base nos erros | **Questões:** 100 | **Tempo:** 2h45min + 1h análise"
          },
          {
            "id": 213,
            "discipline": "JURISPRUDÊNCIA",
            "title": "Revisão Consolidada — Top 10 Julgados Notariais/Registrais",
            "link": "",
            "description": "**Material:** Informativos Dizer o Direito acumulados ao longo do plano\n\n**Lei Seca Obrigatória:** Selecionar os 10 julgados mais relevantes para o ENAC dentre os que foram estudados\n\n**Foco:** Consolidar teses em formato de flashcard. Verificar se houve atualização/superação de algum julgado.\n\n**Flashcards:** Revisar 20 clozes de jurisprudência + criar 5 novos | **Questões:** 10 (jurisprudência FGV) | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 214,
            "discipline": "REVISÃO",
            "title": "Revisão de Legislação Seca — Lei 6.015/73 Título IV (3ª passada dirigida)",
            "link": "",
            "description": "**Material:** Vade Mecum — Lei 6.015/73, Arts. 167-299\n\n**Lei Seca Obrigatória:** Lei 6.015/73 Título IV completo — LEITURA DIRIGIDA (apenas artigos de alto erro)\n\n**Foco:** Leitura rápida focada nos artigos que mais geraram confusão. Marcar os que ainda causam dúvida.\n\n**Flashcards:** Revisar 15 clozes existentes | **Questões:** Nenhuma | **Tempo:** 1h30min"
          }
        ]
      }
    ]
  },
  {
    "id": "26",
    "title": "Ciclo 26 — Lei Seca Intensiva + Dissertativa 02",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 215,
            "discipline": "REVISÃO DE LEI SECA",
            "title": "Lei 8.935/94 — Releitura Integral Anotada (3ª passada)",
            "link": "",
            "description": "**Material:** Vade Mecum — Lei 8.935/94 (íntegra, 56 artigos)\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Arts. 1º-56 — INTEGRAL\n\n**Foco:** Releitura integral com anotação dos pontos de dúvida. 56 artigos = leitura possível em ~90min. Comparar com flashcards existentes.\n\n**Flashcards:** Revisar 20 clozes + criar 5 de artigos negligenciados | **Questões:** 15 (focadas em Lei 8.935) | **Tempo:** 2h00min"
          },
          {
            "id": 216,
            "discipline": "REVISÃO DE LEI SECA",
            "title": "Provimento 149/2023 — Releitura Dirigida (Parte Geral + Tabelionato)",
            "link": "",
            "description": "**Material:** Provimento 149/2023 CNJ — Parte Geral + Tabelionato de Notas\n\n**Lei Seca Obrigatória:** Provimento 149 — artigos de alto erro (identificados nos simulados)\n\n**Foco:** Não é leitura integral — é revisão dos pontos que mais erraram nos simulados.\n\n**Flashcards:** Revisar 15 clozes + criar 3 novos | **Questões:** 10 (sobre Provimento 149) | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 217,
            "discipline": "REVISÃO DE LEI SECA",
            "title": "CC — Direitos Reais + Família + Sucessões (artigos registrais — 3ª passada)",
            "link": "",
            "description": "**Material:** Vade Mecum — CC, artigos selecionados com impacto registral\n\n**Lei Seca Obrigatória:** CC Arts. 1.225-1.276 (direitos reais), 1.511-1.570 (casamento), 1.639-1.688 (regime bens), 1.784-1.856 (sucessão legítima), 1.857-1.990 (testamento)\n\n**Foco:** Apenas os artigos com conexão registral direta. Não é releitura de Civil por inteiro.\n\n**Flashcards:** Revisar 20 clozes existentes | **Questões:** 15 (Civil com viés registral) | **Tempo:** 2h00min"
          },
          {
            "id": 218,
            "discipline": "DISSERTATIVA",
            "title": "Dissertativa 02 — Tema de Direito Civil com Viés Registral",
            "link": "",
            "description": "**Material:** Provas anteriores (selecionar 1 tema)\n\n**Lei Seca Obrigatória:** Artigos conforme tema escolhido\n\n**Foco:** 90 minutos cronometrados. Temas sugeridos: (1) Efeitos registrais do pacto antenupcial e da alteração de regime de bens; (2) Inventário extrajudicial: requisitos, procedimento e atuação do tabelião; (3) Transmissão de propriedade imobiliária inter vivos e causa mortis quanto aos aspectos registrais. Estrutura jurídica com artigos precisos.\n\n**Flashcards:** Criar 3 clozes com pontos fracos identificados | **Questões:** Nenhuma | **Tempo:** 1h30min + 30min análise"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 219,
            "discipline": "SIMULADO",
            "title": "Simulado 08 — 100 questões cronometrado",
            "link": "",
            "description": "**Material:** Questões ENAC + FGV cartórios (inéditas)\n\n**Lei Seca Obrigatória:** Análise de erros imediata + comparação com simulados anteriores\n\n**Foco:** Benchmark de evolução. Meta: superar pontuação do Simulado 07.\n\n**Flashcards:** Criar 10 clozes dos erros | **Questões:** 100 | **Tempo:** 2h45min + 1h análise"
          },
          {
            "id": 220,
            "discipline": "REVISÃO",
            "title": "Classe B/C — Revisão Relâmpago Constitucional + Administrativo + Tributário",
            "link": "",
            "description": "**Material:** Flashcards existentes de Constitucional, Administrativo e Tributário\n\n**Lei Seca Obrigatória:** CF Art. 236, Art. 37; Lei 8.429 (trechos); CTN arts. ITBI/ITCMD\n\n**Foco:** Revisão de todos os flashcards de Classe B/C. Identificar lacunas.\n\n**Flashcards:** Revisar 30 clozes + criar 5 novos | **Questões:** 15 (mistas: Const. + Admin. + Trib.) | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 221,
            "discipline": "REVISÃO",
            "title": "Classe D — Microdose Final: Proc. Civil + Penal + Proc. Penal + Empresarial",
            "link": "",
            "description": "**Material:** Flashcards existentes + Direto ao Ponto (consulta rápida)\n\n**Lei Seca Obrigatória:** CPC arts. registrais, CP arts. 297-302, CCom arts. societários\n\n**Foco:** Última passada nas matérias de ROI baixo. Apenas revisar flashcards e resolver questões — zero conteúdo novo.\n\n**Flashcards:** Revisar 20 clozes | **Questões:** 10 (mistas Classe D) | **Tempo:** 1h00min"
          }
        ]
      }
    ]
  },
  {
    "id": "27",
    "title": "Ciclo 27 — Simulados Intensivos + Dissertativa 03",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 222,
            "discipline": "SIMULADO",
            "title": "Simulado 09 — 100 questões cronometrado (simulação real)",
            "link": "",
            "description": "**Material:** Prova completa montada com distribuição ENAC (60 Notarial + 14 Civil + 9 Const. + restante)\n\n**Lei Seca Obrigatória:** Revisão pós-simulado\n\n**Foco:** Simular condições reais de prova. Cronometrar 5 horas. Sem consulta.\n\n**Flashcards:** Criar 10 clozes dos erros | **Questões:** 100 | **Tempo:** 5h (simulação real)"
          },
          {
            "id": 223,
            "discipline": "REVISÃO / ANÁLISE",
            "title": "Análise Detalhada Simulado 09 — Engenharia Reversa",
            "link": "",
            "description": "**Material:** Gabarito + legislação de cada questão errada\n\n**Lei Seca Obrigatória:** Cada questão errada — análise por que errou, qual artigo esqueceu\n\n**Foco:** Padrão de erros persistentes vs. novos.\n\n**Flashcards:** Criar 10 clozes específicos | **Questões:** Revisar 20 questões erradas | **Tempo:** 2h00min"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 224,
            "discipline": "DISSERTATIVA",
            "title": "Dissertativa 03 — Tema de Notarial/Registral (Procedimento)",
            "link": "",
            "description": "**Material:** Provas anteriores\n\n**Lei Seca Obrigatória:** Artigos conforme tema escolhido\n\n**Foco:** 90 minutos cronometrados. Temas sugeridos: (1) Procedimento da dúvida registral, seus legitimados e recursos cabíveis; (2) Retificação extrajudicial de registro imobiliário; (3) Procedimento de protesto de títulos, desde a apresentação até o cancelamento. Foco em procedimentos — etapas sequenciais com fundamento legal.\n\n**Flashcards:** Criar 3 clozes | **Questões:** Nenhuma | **Tempo:** 1h30min + 30min análise"
          },
          {
            "id": 225,
            "discipline": "PEÇA PRÁTICA",
            "title": "Peça Prática 01 — Ata Notarial",
            "link": "",
            "description": "**Material:** Provimento 149/2023 (Tabelionato de Notas — Atas Notariais); modelos práticos\n\n**Lei Seca Obrigatória:** Lei 8.935/94, Art. 7º, III; Provimento 149 (seção de atas); CPC Art. 384\n\n**Foco:** Redigir uma ata notarial completa. Cenário: constatação de conteúdo publicado em rede social para fins de prova em processo judicial. Incluir: qualificação do solicitante, descrição detalhada dos fatos, capturas de tela (referência), declaração de fé pública, encerramento.\n\n**Flashcards:** Criar 5 clozes sobre requisitos formais da ata notarial | **Questões:** Nenhuma | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 226,
            "discipline": "REVISÃO DIRIGIDA",
            "title": "Revisão de Armadilhas FGV — Top 15 Pegadinhas Recorrentes",
            "link": "",
            "description": "**Material:** Caderno de erros acumulado + análises de simulados\n\n**Lei Seca Obrigatória:** As 15 armadilhas FGV que mais apareceram nos simulados\n\n**Foco:** Para cada armadilha: (1) qual é a pegadinha, (2) qual a resposta correta, (3) qual o artigo. Ex: 'fé pública é juris tantum, não juris et de jure'; 'pacto antenupcial sem registro é ineficaz contra terceiros, não nulo'.\n\n**Flashcards:** Revisar/criar 15 clozes (1 por armadilha) | **Questões:** 15 (que contenham armadilhas identificadas) | **Tempo:** 1h30min"
          },
          {
            "id": 227,
            "discipline": "JURISPRUDÊNCIA",
            "title": "Informativos STJ/STF — Temas Registrais Atualizados",
            "link": "",
            "description": "**Material:** Dizer o Direito — informativos dos últimos 6 meses sobre temas registrais/notariais\n\n**Lei Seca Obrigatória:** Buscar informativos recentes sobre usucapião, alienação fiduciária, REURB, registro eletrônico, responsabilidade do notário\n\n**Foco:** Identificar teses novas ou consolidação de entendimentos que possam cair na prova.\n\n**Flashcards:** Criar 8 clozes com teses recentes | **Questões:** Nenhuma | **Tempo:** 1h30min"
          }
        ]
      }
    ]
  },
  {
    "id": "28",
    "title": "Ciclo 28 — Peças + Simulado + Dissertativa 04",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 228,
            "discipline": "PEÇA PRÁTICA",
            "title": "Peça Prática 02 — Escritura Pública de Compra e Venda de Imóvel",
            "link": "",
            "description": "**Material:** Provimento 149/2023 (Tabelionato de Notas — Escrituras); Lei 7.433/85; modelos\n\n**Lei Seca Obrigatória:** Lei 7.433/85, Art. 1º; CC Art. 108; Provimento 149 (escrituras)\n\n**Foco:** Redigir escritura completa. Cenário: compra e venda de imóvel urbano entre particulares, com cláusula de financiamento parcial. Incluir: qualificação completa, descrição do imóvel (conforme matrícula), preço e forma de pagamento, certidões negativas, declarações fiscais.\n\n**Flashcards:** Criar 5 clozes sobre requisitos da escritura de compra e venda | **Questões:** Nenhuma | **Tempo:** 1h30min"
          },
          {
            "id": 229,
            "discipline": "DISSERTATIVA",
            "title": "Dissertativa 04 — Tema de Direito Constitucional/Administrativo com Viés Registral",
            "link": "",
            "description": "**Material:** Provas anteriores\n\n**Lei Seca Obrigatória:** Artigos conforme tema escolhido\n\n**Foco:** 90 minutos cronometrados. Tema interdisciplinar. Temas sugeridos: (1) Natureza jurídica dos emolumentos à luz da jurisprudência do STF; (2) Fiscalização da atividade notarial e registral pelo Poder Judiciário e pelo CNJ; (3) Regime de responsabilidade do notário comparado ao do servidor público.\n\n**Flashcards:** Criar 3 clozes | **Questões:** Nenhuma | **Tempo:** 1h30min + 30min análise"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 230,
            "discipline": "SIMULADO",
            "title": "Simulado 10 — 100 questões cronometrado",
            "link": "",
            "description": "**Material:** Questões inéditas ENAC/FGV\n\n**Lei Seca Obrigatória:** Análise de erros\n\n**Foco:** Consolidação. Meta: 65+ acertos.\n\n**Flashcards:** Criar 8 clozes dos erros | **Questões:** 100 | **Tempo:** 2h45min + 1h análise"
          },
          {
            "id": 231,
            "discipline": "REVISÃO / ANÁLISE",
            "title": "Análise Comparativa — Evolução nos Simulados 01-10",
            "link": "",
            "description": "**Material:** Planilha de resultados de todos os simulados\n\n**Lei Seca Obrigatória:** Comparar pontuações, % de acerto por disciplina, tendências\n\n**Foco:** Visualizar a curva de evolução. Identificar disciplinas que estagnaram. Definir foco cirúrgico para as últimas 4 semanas.\n\n**Flashcards:** Nenhum | **Questões:** Nenhuma | **Tempo:** 1h00min"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 232,
            "discipline": "REVISÃO",
            "title": "Revisão Profunda — Lei 6.015/73 Art. 167 (Registro vs. Averbação — 4ª passada)",
            "link": "",
            "description": "**Material:** Vade Mecum — Lei 6.015/73, Art. 167\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Art. 167, incisos I e II — DECORAR CADA INCISO\n\n**Foco:** O artigo mais cobrado da prova inteira. Cada inciso do I (registro) e do II (averbação) deve estar memorizado.\n\n**Flashcards:** Revisar 15 clozes do Art. 167 | **Questões:** 15 (exclusivamente sobre Art. 167) | **Tempo:** 1h30min"
          },
          {
            "id": 233,
            "discipline": "REVISÃO",
            "title": "Lei 9.514/97 + Lei 14.711/2023 — Garantias Imobiliárias (Revisão Final)",
            "link": "",
            "description": "**Material:** Vade Mecum + Flashcards existentes\n\n**Lei Seca Obrigatória:** Lei 9.514/97 (alienação fiduciária — procedimento), Lei 14.711/2023 (Marco Legal Garantias — alterações)\n\n**Foco:** Procedimento de execução extrajudicial (art. 26-27 Lei 9.514), consolidação de propriedade, leilão. Alterações do Marco Legal.\n\n**Flashcards:** Revisar 10 clozes + criar 3 novos | **Questões:** 10 | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 234,
            "discipline": "JURISPRUDÊNCIA",
            "title": "CNJ — Pedidos de Providência e Consultas Recentes (Revisão)",
            "link": "",
            "description": "**Material:** Dizer o Direito + site do CNJ\n\n**Lei Seca Obrigatória:** Consultas e pedidos de providência do CNJ sobre temas registrais/notariais (últimos 12 meses)\n\n**Foco:** O ENAC é prova do CNJ — entender como o próprio CNJ interpreta a legislação é vantagem competitiva.\n\n**Flashcards:** Criar 5 clozes com entendimentos do CNJ | **Questões:** Nenhuma | **Tempo:** 1h00min"
          }
        ]
      }
    ]
  },
  {
    "id": "29",
    "title": "Ciclo 29 — Simulado Real + Peça + Dissertativa 05",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 235,
            "discipline": "SIMULADO",
            "title": "Simulado 11 — Simulação Real Completa (5h cronometradas)",
            "link": "",
            "description": "**Material:** Prova montada com distribuição ENAC exata\n\n**Lei Seca Obrigatória:** —\n\n**Foco:** Condições reais: 5h, sem consulta, sem interrupção. Meta: 68+ acertos.\n\n**Flashcards:** Criar 8 clozes dos erros | **Questões:** 100 | **Tempo:** 5h + 1h análise"
          },
          {
            "id": 236,
            "discipline": "PEÇA PRÁTICA",
            "title": "Peça Prática 03 — Escritura de Inventário Extrajudicial",
            "link": "",
            "description": "**Material:** Provimento 149 + Res. CNJ 35/2007 + CC Arts. 1.784-1.856\n\n**Lei Seca Obrigatória:** CC Arts. 1.784-1.856; CPC Art. 610, §1º; Res. CNJ 35/2007\n\n**Foco:** Redigir escritura de inventário extrajudicial. Cenário: falecido casado em comunhão parcial, 2 filhos maiores e capazes, imóvel urbano + veículo. Incluir: qualificação do falecido e herdeiros, descrição dos bens, partilha, meação, ITCMD.\n\n**Flashcards:** Criar 5 clozes sobre requisitos do inventário extrajudicial | **Questões:** Nenhuma | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 237,
            "discipline": "DISSERTATIVA",
            "title": "Dissertativa 05 — Tema Complexo (Interdisciplinar)",
            "link": "",
            "description": "**Material:** Provas anteriores\n\n**Lei Seca Obrigatória:** Artigos conforme tema escolhido\n\n**Foco:** 90 minutos cronometrados. Tema complexo que exige domínio de múltiplas leis. Temas sugeridos: (1) Sistema de Registro Eletrônico de Imóveis (SREI), o ONR e o SERP, comparando suas funções e impacto na modernização registral; (2) Regularização fundiária urbana (Reurb) quanto ao procedimento, modalidades e efeitos registrais; (3) Regimes de responsabilidade civil do notário e do registrador.\n\n**Flashcards:** Criar 3 clozes | **Questões:** Nenhuma | **Tempo:** 1h30min + 30min análise"
          },
          {
            "id": 238,
            "discipline": "REVISÃO",
            "title": "Revisão Final — Provimento 149 (RI + Protestos)",
            "link": "",
            "description": "**Material:** Provimento 149/2023 — Seções RI e Protestos\n\n**Lei Seca Obrigatória:** Provimento 149 — artigos sobre RI e Protestos\n\n**Foco:** Última passada nos trechos do Provimento 149 que mais geraram dúvida.\n\n**Flashcards:** Revisar 20 clozes | **Questões:** 10 | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 239,
            "discipline": "REVISÃO",
            "title": "Top 30 Artigos Mais Cobrados — Revisão Focada",
            "link": "",
            "description": "**Material:** Vade Mecum\n\n**Lei Seca Obrigatória:** Os 30 artigos que mais aparecem nas provas FGV de cartórios: Art. 167 LRP, Art. 176 LRP, Art. 186 LRP, Art. 195 LRP, Art. 198 LRP, Art. 216-A LRP, Art. 236 CF, Art. 1.245 CC, Art. 1.227 CC, Art. 108 CC, Art. 1.641 CC, Art. 1.829 CC, entre outros.\n\n**Foco:** Ler cada artigo, fechar os olhos, recitar de memória. Repetir até fixar.\n\n**Flashcards:** Revisar 30 clozes (1 por artigo) | **Questões:** Nenhuma | **Tempo:** 2h00min"
          },
          {
            "id": 240,
            "discipline": "REVISÃO",
            "title": "Revisão de Flashcards — Maratona (todas as disciplinas)",
            "link": "",
            "description": "**Material:** Todos os flashcards no RemNote\n\n**Lei Seca Obrigatória:** Revisão espaçada de TODOS os cards vencidos/próximos do vencimento\n\n**Foco:** Sessão longa de revisão. Meta: revisar 100+ cards.\n\n**Flashcards:** Revisar 100+ clozes | **Questões:** Nenhuma | **Tempo:** 2h00min"
          }
        ]
      }
    ]
  },
  {
    "id": "30",
    "title": "Ciclo 30 — Simulados Finais + Peça + Dissertativa 06",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 241,
            "discipline": "SIMULADO",
            "title": "Simulado 12 — 100 questões cronometrado",
            "link": "",
            "description": "**Material:** Questões inéditas\n\n**Lei Seca Obrigatória:** —\n\n**Foco:** Benchmark final. Meta: 70+ acertos.\n\n**Flashcards:** Criar 8 clozes dos erros | **Questões:** 100 | **Tempo:** 2h45min + 1h análise"
          },
          {
            "id": 242,
            "discipline": "PEÇA PRÁTICA",
            "title": "Peça Prática 04 — Escritura de Divórcio Consensual Extrajudicial",
            "link": "",
            "description": "**Material:** Provimento 149 + Res. CNJ 35/2007 + CC Arts. 1.571-1.582\n\n**Lei Seca Obrigatória:** CC Arts. 1.571-1.582; Res. CNJ 35/2007; EC 66/2010\n\n**Foco:** Redigir escritura de divórcio consensual. Cenário: casal sem filhos menores, comunhão parcial, 1 imóvel, partilha consensual. Incluir: qualificação, declaração de vontade, partilha de bens, uso do nome, ITBI (se houver).\n\n**Flashcards:** Criar 3 clozes | **Questões:** Nenhuma | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 243,
            "discipline": "DISSERTATIVA",
            "title": "Dissertativa 06 — Tema Livre (escolha do candidato)",
            "link": "",
            "description": "**Material:** Provas anteriores — escolher o tema que mais causa insegurança\n\n**Lei Seca Obrigatória:** Artigos conforme tema escolhido\n\n**Foco:** 90 minutos cronometrados. Desafiar-se no tema mais fraco.\n\n**Flashcards:** Criar 3 clozes | **Questões:** Nenhuma | **Tempo:** 1h30min + 30min análise"
          },
          {
            "id": 244,
            "discipline": "REVISÃO",
            "title": "Lei 6.015/73 — Dúvida Registral (Art. 198-204) — Revisão Final",
            "link": "",
            "description": "**Material:** Vade Mecum + material de estudo regular\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Arts. 198-204\n\n**Foco:** Procedimento de dúvida: suscitação, prazos, recursos, efeitos. Tema frequente.\n\n**Flashcards:** Revisar 8 clozes | **Questões:** 10 (sobre dúvida registral) | **Tempo:** 1h00min"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 245,
            "discipline": "REVISÃO",
            "title": "Lei 9.492/97 — Protesto de Títulos (Revisão Final)",
            "link": "",
            "description": "**Material:** Vade Mecum + flashcards\n\n**Lei Seca Obrigatória:** Lei 9.492/97 (íntegra)\n\n**Foco:** Revisão integral. Procedimento de protesto, intimação, pagamento, sustação, cancelamento.\n\n**Flashcards:** Revisar 15 clozes | **Questões:** 10 | **Tempo:** 1h30min"
          },
          {
            "id": 246,
            "discipline": "REVISÃO",
            "title": "Usucapião Extrajudicial (Art. 216-A LRP) — Revisão Final",
            "link": "",
            "description": "**Material:** Vade Mecum + material de estudo regular\n\n**Lei Seca Obrigatória:** Lei 6.015/73, Art. 216-A; Provimento 65/2017 CNJ\n\n**Foco:** Procedimento completo: requerimento, documentos, notificação, silêncio como concordância, impugnação, remessa ao juiz.\n\n**Flashcards:** Revisar 10 clozes | **Questões:** 8 | **Tempo:** 1h00min"
          }
        ]
      },
      {
        "dayLabel": "Dia 04",
        "tasks": [
          {
            "id": 247,
            "discipline": "REVISÃO",
            "title": "Resumo Semanal — Consolidação Semana 30",
            "link": "",
            "description": "**Material:** Flashcards da semana\n\n**Lei Seca Obrigatória:** Todos os cards novos + revisão de erros do Simulado 12\n\n**Foco:** Preparar mente para as 2 últimas semanas.\n\n**Flashcards:** Revisar 50 clozes | **Questões:** Nenhuma | **Tempo:** 1h00min"
          }
        ]
      }
    ]
  },
  {
    "id": "31",
    "title": "Ciclo 31 — Simulado Diagnóstico Final + Revisão Cirúrgica",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 248,
            "discipline": "SIMULADO",
            "title": "Simulado 13 (Diagnóstico Final) — 100 questões cronometrado",
            "link": "",
            "description": "**Material:** Prova montada com distribuição ENAC exata (última simulação formal)\n\n**Lei Seca Obrigatória:** —\n\n**Foco:** Última simulação real. Resultado = projeção para a prova. Meta: 70+.\n\n**Flashcards:** Criar 5 clozes dos erros (apenas os mais críticos) | **Questões:** 100 | **Tempo:** 2h45min + 1h análise"
          },
          {
            "id": 249,
            "discipline": "REVISÃO CIRÚRGICA",
            "title": "Análise Final de Erros — O Que Ainda Cai?",
            "link": "",
            "description": "**Material:** Análise de todos os simulados\n\n**Lei Seca Obrigatória:** —\n\n**Foco:** Dos erros do Simulado 13, quais são erros novos? Quais são erros que se repetem? Para os repetidos: revisão profunda do dispositivo. Para os novos: verificar se é tema marginal (ignorar) ou central (revisar agora).\n\n**Flashcards:** Criar/revisar 10 clozes finais | **Questões:** 10 (dos erros repetidos) | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 250,
            "discipline": "REVISÃO",
            "title": "Top 50 Flashcards Mais Difíceis — Revisão Intensiva",
            "link": "",
            "description": "**Material:** RemNote — filtrar pelos cards com menor taxa de acerto\n\n**Lei Seca Obrigatória:** —\n\n**Foco:** Revisar os 50 flashcards que mais erraram ao longo de todo o plano. Se não acertar 80%+, reescrever o card.\n\n**Flashcards:** Revisar 50 clozes | **Questões:** Nenhuma | **Tempo:** 1h30min"
          },
          {
            "id": 251,
            "discipline": "REVISÃO",
            "title": "Revisão de Legislação — Leis Nucleares (Última Passada)",
            "link": "",
            "description": "**Material:** Vade Mecum\n\n**Lei Seca Obrigatória:** Lei 6.015/73 (Arts. 167, 176, 186, 195, 198, 216-A), Lei 8.935/94 (Arts. 1-5, 14-16, 22-24, 28-35), Lei 10.169/2000 (Arts. 1-7), Art. 236 CF\n\n**Foco:** Última passada nos artigos-chave. Leitura rápida, conferindo com flashcards.\n\n**Flashcards:** Revisar 30 clozes | **Questões:** Nenhuma | **Tempo:** 1h30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 252,
            "discipline": "REVISÃO",
            "title": "Princípios Registrais — Revisão de Fixação",
            "link": "",
            "description": "**Material:** Flashcards + Vade Mecum\n\n**Lei Seca Obrigatória:** LRP Arts. 1º, 167, 176, 186, 195; Lei 8.935 Art. 1º\n\n**Foco:** Publicidade, autenticidade, segurança, eficácia, inscrição, prioridade, especialidade, continuidade, legalidade, instância, tipicidade. Recitar de memória com artigo correspondente.\n\n**Flashcards:** Revisar 12 clozes (1 por princípio) | **Questões:** 10 (sobre princípios) | **Tempo:** 1h00min"
          },
          {
            "id": 253,
            "discipline": "REVISÃO LEVE",
            "title": "Temas Confortáveis — Reforço de Confiança",
            "link": "",
            "description": "**Material:** Resumos e flashcards dos temas que mais domina\n\n**Lei Seca Obrigatória:** —\n\n**Foco:** Revisar apenas temas que domina bem. Objetivo psicológico: reforçar confiança, lembrar que sabe muito.\n\n**Flashcards:** Revisar 30 clozes (temas fortes) | **Questões:** Nenhuma | **Tempo:** 45min"
          }
        ]
      }
    ]
  },
  {
    "id": "32",
    "title": "Ciclo 32 — PRÉ-PROVA | Revisão Final + Descanso",
    "days": [
      {
        "dayLabel": "Dia 01",
        "tasks": [
          {
            "id": 254,
            "discipline": "REVISÃO",
            "title": "Revisão Final — Art. 167 LRP + Art. 236 CF + Art. 1.245 CC",
            "link": "",
            "description": "**Material:** Vade Mecum\n\n**Lei Seca Obrigatória:** Os 3 artigos mais importantes da prova\n\n**Foco:** Leitura lenta, palavra por palavra. Esses 3 artigos sozinhos cobrem ~15% da prova.\n\n**Flashcards:** Revisar 10 clozes | **Questões:** Nenhuma | **Tempo:** 30min"
          },
          {
            "id": 255,
            "discipline": "REVISÃO",
            "title": "Flashcards — Maratona Final (Top 80)",
            "link": "",
            "description": "**Material:** RemNote — todos os flashcards\n\n**Lei Seca Obrigatória:** Última revisão geral\n\n**Foco:** Revisar 80 flashcards priorizados por taxa de erro e importância.\n\n**Flashcards:** Revisar 80 clozes | **Questões:** Nenhuma | **Tempo:** 2h00min"
          }
        ]
      },
      {
        "dayLabel": "Dia 02",
        "tasks": [
          {
            "id": 256,
            "discipline": "REVISÃO LEVE",
            "title": "Temas Críticos — Última Passada Rápida",
            "link": "",
            "description": "**Material:** Resumos pessoais\n\n**Lei Seca Obrigatória:** CC arts. regime de bens + CF art. 236 + Lei 8.935 arts. 22-24\n\n**Foco:** Rápida passada nos temas que mais causaram dúvida. Não é novo aprendizado.\n\n**Flashcards:** Revisar 20 clozes | **Questões:** Nenhuma | **Tempo:** 45min"
          },
          {
            "id": 257,
            "discipline": "REVISÃO",
            "title": "Relaxamento Estratégico — Leitura Leve + Visualização",
            "link": "",
            "description": "**Material:** Resumos criados (não legislação bruta)\n\n**Lei Seca Obrigatória:** Leve — apenas temas confortáveis\n\n**Foco:** Manter confiança, evitar ansiedade, relaxar mente. Não é aprendizado.\n\n**Flashcards:** Revisar 20 clozes (temas que domina) | **Questões:** Nenhuma | **Tempo:** 30min"
          }
        ]
      },
      {
        "dayLabel": "Dia 03",
        "tasks": [
          {
            "id": 258,
            "discipline": "DESCANSO ATIVO",
            "title": "Análise Final — Qual Era Meu Erro Mais Comum?",
            "link": "",
            "description": "**Material:** Todos os simulados\n\n**Lei Seca Obrigatória:** Padrão de erro ao longo de toda a preparação\n\n**Foco:** Identificar o único erro que se repetiu mais. Treinar aquele específico. Ganhar confiança.\n\n**Flashcards:** Criar 5 clozes com seu erro mais comum (mentalização final) | **Questões:** 5 (do seu erro mais comum) | **Tempo:** 45min"
          },
          {
            "id": 259,
            "discipline": "DESCANSO PRÉ-PROVA",
            "title": "Repouso Total + Preparação Emocional",
            "link": "",
            "description": "**Material:** Nenhum\n\n**Lei Seca Obrigatória:** Nenhuma\n\n**Foco:** Descansar. Dormir bem. Confiar no aprendizado acumulado. Mentalização positiva.\n\n**Flashcards:** Nenhuma | **Questões:** Nenhuma | **Tempo:** Atividade de descanso (não estudo)"
          }
        ]
      }
    ]
  }
];
