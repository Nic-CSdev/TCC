
const alimentosPorMacronutriente = {
    carboidratos: [
        {
            nome: "Arroz integral",
            quantidade: "1 xícara (185 g)",
            carboidratos: "45 g (15%)"
        },
        {
            nome: "Batata-doce",
            quantidade: "1 média (180 g)",
            carboidratos: "41 g (14%)"
        },
        {
            nome: "Grão-de-bico",
            quantidade: "1/2 xícara cozida (82 g)",
            carboidratos: "23 g (8%)"
        },
        {
            nome: "Lentilhas",
            quantidade: "1 xícara cozida (180 g)",
            carboidratos: "41 g (14%)"
        },
        {
            nome: "Banana",
            quantidade: "1 média (118 g)",
            carboidratos: "27 g (9%)"
        },
        {
            nome: "Manga",
            quantidade: "1/2 xícara cortada (82.5 g)",
            carboidratos: "25 g (8%)"
        },
        {
            nome: "Cevada",
            quantidade: "1/2 cozida (78.5 g)",
            carboidratos: "22 g (7.5%)"
        },
        {
            nome: "Amido de milho",
            quantidade: "1/4 xícara (32 g)",
            carboidratos: "30.5 g (10%)"
        },
        {
            nome: "Massa de Trigo Integral",
            quantidade: "1/2 xícara cozida (96 g)",
            carboidratos: "18.5 g (6%)"
        },
        {
            nome: "Quinoa",
            quantidade: "1/2 xícara cozida (92.5 g)",
            carboidratos: "19.5 g (7%)"
        },
        {
            nome: "Beterraba",
            quantidade: "1 xícara cozida (170 g)",
            carboidratos: "13 g (4%)"
        },
        {
            nome: "Ervilhas",
            quantidade: "1 xícara cozida (160 g)",
            carboidratos: "25 g (8%)"
        },
        {
            nome: "Pão de Trigo Integral",
            quantidade: "2 fatias (64 g)",
            carboidratos: "24 g (8%)"
        },
        {
            nome: "Aveia",
            quantidade: "1 xícara cozida (234 g)",
            carboidratos: "27 g (9%)"
        },
        {
            nome: "Brócolis",
            quantidade: "1 xícara cozida (156 g)",
            carboidratos: "11 g (4%)"
        },
        {
            nome: "Abóbora",
            quantidade: "1 xícara cozida (245 g)",
            carboidratos: "12 g (4%)"
        },
        {
            nome: "Feijão Preto",
            quantidade: "1/2 xícara cozida (130 g)",
            carboidratos: "20 g (7%)"
        },
        {
            nome: "Tofu",
            quantidade: "1 xícara cozida (252 g)",
            carboidratos: "6 g (2%)"
        },
        {
            nome: "Maçã",
            quantidade: "1 média (182 g)",
            carboidratos: "25 g (8%)"
        },
        {
            nome: "Cenoura",
            quantidade: "1 xícara ralada (110 g)",
            carboidratos: "12 g (4%)"
        },

    ],
    proteinas: [
        {
            nome: "Feijão",
            quantidade: "1 xícara (230 g)",
            proteinas: "15 g (30%)"
        },
        {
            nome: "Ervilhas Verdes",
            quantidade: "1 xícara (160 g)",
            proteinas: "6 g (12%)"
        },
        {
            nome: "Amêndoas",
            quantidade: "1 oz (28.35 g)",
            proteinas: "6 g (12%)"
        },
        {
            nome: "Espinafre",
            quantidade: "1 xícara cozida (180 g)",
            proteinas: "6 g (12%)"
        },
        {
            nome: "Semente de Chia",
            quantidade: "2 colheres de sopa (28 g)",
            proteinas: "4 g (8%)"
        },
        {
            nome: "Feijão Azuki",
            quantidade: "1 xícara cozida (230 g)",
            proteinas: "17 g (34%)"
        },
        {
            nome: "Semente de Abóbora",
            quantidade: "1 oz (28.35 g)",
            proteinas: "5 g (10%)"
        },
        {
            nome: "Cânhamo (sementes)",
            quantidade: "3 colheres de sopa (30 g)",
            proteinas: "10 g (20%)"
        },
        {
            nome: "Pasta de Amendoim (sem açúcar)",
            quantidade: "2 colheres de sopa (32 g)",
            proteinas: "8 g (16%)"
        },
        {
            nome: "Brócolis",
            quantidade: "1 xícara cozida (156 g)",
            proteinas: "5 g (10%)"
        },
        {
            nome: "Semente de Girassol",
            quantidade: "1 oz (28.35 g)",
            proteinas: "6 g (12%)"
        },
        {
            nome: "Cuzcuz Integral",
            quantidade: "1 xícara cozida (157 g)",
            proteinas: "6 g (12%)"
        },
        {
            nome: "Batata Doce",
            quantidade: "1 média (150 g)",
            proteinas: "2 g (4%)"
        },
        {
            nome: "Abacate",
            quantidade: "1/2 abacate médio (100 g)",
            proteinas: "2 g (4%)"
        },
        {
            nome: "Tempeh",
            quantidade: "1 xícara (166 g)",
            proteinas: "31 g (62%)"
        },
        {
            nome: "Grão-de-bico",
            quantidade: "1 xícara (164 g)",
            proteinas: "15 g (30%)"
        },
        {
            nome: "Tofu",
            quantidade: "1 xícara (252 g)",
            proteinas: "20 g (40%)"
        },
        {
            nome: "Quinoa",
            quantidade: "1 xícara cozida (185 g)",
            proteinas: "8 g (16%)"
        },
        {
            nome: "Feijão Preto",
            quantidade: "1 xícara cozida (172 g)",
            proteinas: "15 g (30%)"
        },
        {
            nome: "Lentilhas",
            quantidade: "1 xícara (198 g)",
            proteinas: "18 g (36%)"
        },
    ],
    gorduras: [
        {
            nome: "Abacate",
            quantidade: "1 unidade média (200 g)",
            gorduras: "30 g (46%)"
        },
        {
            nome: "Amêndoas",
            quantidade: "1 oz (28.35 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Nozes",
            quantidade: "1 oz (28.35 g)",
            gorduras: "18 g (28%)"
        },
        {
            nome: "Sementes de Chia",
            quantidade: "2 colheres de sopa (28 g)",
            gorduras: "9 g (14%)"
        },
        {
            nome: "Óleo de Coco",
            quantidade: "1 colher de sopa (14 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Óleo de Abacate",
            quantidade: "1 colher de sopa (14 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Tahini (pasta de gergelim)",
            quantidade: "2 colheres de sopa (30 g)",
            gorduras: "16 g (25%)"
        },
        {
            nome: "Azeitonas",
            quantidade: "10 azeitonas verdes (50 g)",
            gorduras: "4 g (6%)"
        },
        {
            nome: "Coco Ralado",
            quantidade: "1 oz (28.35 g)",
            gorduras: "18 g (28%)"
        },
        {
            nome: "Semente de Girassol",
            quantidade: "1 oz (28.35 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Macadâmias",
            quantidade: "1 oz (28.35 g)",
            gorduras: "21 g (33%)"
        },
        {
            nome: "Pasta de Amendoim (sem açúcar)",
            quantidade: "2 colheres de sopa (32 g)",
            gorduras: "16 g (25%)"
        },
        {
            nome: "Óleo de Linhaça",
            quantidade: "1 colher de sopa (14 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Amendoim",
            quantidade: "1 oz (28.35 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Chocolate Amargo (70-85% de cacau)",
            quantidade: "1 oz (28.35 g)",
            gorduras: "16 g (25%)"
        },
        {
            nome: "Semente de Abóbora",
            quantidade: "1 oz (28.35 g)",
            gorduras: "13 g (20%)"
        },
        {
            nome: "Semente de Chânhamo",
            quantidade: "3 colheres de sopa (30 g)",
            gorduras: "13 g (20%)"
        },
        {
            nome: "Óleo de Noz",
            quantidade: "1 colher de sopa (14 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Óleo de Semente de Uva",
            quantidade: "1 colher de sopa (14 g)",
            gorduras: "14 g (22%)"
        },
        {
            nome: "Pistaches",
            quantidade: "1 oz (28.35 g)",
            gorduras: "13 g (20%)"
        },
        
    ]
};

export default alimentosPorMacronutriente;

