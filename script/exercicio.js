/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */
   
   //# Dados de entrada
   preco_cafe = 8.50
   qtd_cafe = 42

   preco_bolo = 12.00
   qtd_bolo = 18

   taxa_operacional = 15.00
   clientes_atendidos = 30

   total_cookies = 125
   capacidade_caixa = 6

   //#  Cálculos
   faturamento_bruto = (preco_cafe * qtd_cafe) + (preco_bolo * qtd_bolo)
   faturamento_liquido = faturamento_bruto - taxa_operacional
   ticket_medio = faturamento_bruto / clientes_atendidos
   sobra_cookies = total_cookies % capacidade_caixa

   //# Exibição no console
   console.log("Faturamento Bruto: R$" + faturamento_bruto)
   console.log("Faturamento Liquido: R$"+ faturamento_liquido)
   console.log("Ticket Médio: R$"+ ticket_medio)
   console.log("Sobra de cookies: "+ sobra_cookies + " unidades")


/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado difere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */
   //  # Dados de entrada
   const idadeInformada = 17;
   const codigoDigitado = "100"; // texto (string)
   const codigoBanco = 100;      // número (number)
   const saldoDisponivel = 250.00;
   //const valorCompra = 250.00;

    //# Exibição no console
   console.log("1. Maioridade civil:"+ idadeInformada >= 18); // false
   console.log("2. Código confere (apenas valor):"+ codigoDigitado == codigoBanco); // true
   console.log("3. Código confere (valor e tipo):"+ codigoDigitado === codigoBanco); // false
   console.log("4. Tipo difere:"+ typeof codigoDigitado !== typeof codigoBanco); // true
   //console.log("5. Saldo cobre a compra:"+ saldoDisponivel >= valorCompra); // true




/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */

   // Dados de entrada
   const valorCompra = 220;
   const assinantePremium = false;
   const possuiCupom = true;
   const restricaoEntrega = false;
   const estudante = true;
   const idade = 22;
   const freteGratis = (valorCompra >= 200 || assinantePremium) && !restricaoEntrega;
   const descontoUniversitario = estudante && idade <= 29;
   const acessoVip = assinantePremium || (valorCompra >= 300 && possuiCupom);
   console.log("Frete grátis:", freteGratis);
   console.log("Desconto universitário:", descontoUniversitario);
   console.log("Acesso à área VIP:", acessoVip);




