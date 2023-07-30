window.onload = function () {
    const form = document.querySelector('form');
    const rentAmountInput = document.getElementById('rent_amount');
    const purchaseAmountInput = document.getElementById('property_purchase_amount');
    const appreciationRateInput = document.getElementById('property_appreciation_rate');
    const rentalRateInput = document.getElementById('rental_interest_rate');
    const investmentRateInput = document.getElementById('investment_interest_rate');
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('result_text');
    const resultTable = document.getElementById('result_table');
    const newCalculationBtn = document.getElementById('new_calculation_btn');
  
    // Função para limpar a tabela e ocultar a área de resultado
    const clearResult = () => {
      resultText.textContent = '';
      resultTable.innerHTML = `
        <tr>
          <th>Ano</th>
          <th>Valor do Imóvel</th>
          <th>Aluguel</th>
          <th>Investimento</th>
        </tr>
      `;
      resultDiv.classList.remove('show'); // Remove a classe 'show' para ocultar a área de resultado
    };
  
    // Função para exibir o resultado com animação e preencher a tabela
    const showResult = (result, tableData) => {
      resultText.textContent = result;
  
      // Preencher a tabela com os dados passados por parâmetro
      resultTable.innerHTML = `
        <tr>
          <th>Ano</th>
          <th>Valor do Imóvel</th>
          <th>Aluguel</th>
          <th>Investimento</th>
        </tr>
        ${tableData
          .map(
            (rowData) =>
              `<tr>
                <td>${rowData.year}</td>
                <td>R$ ${rowData.propertyValue.toFixed(2)}</td>
                <td>R$ ${rowData.rentValue.toFixed(2)}</td>
                <td>R$ ${rowData.investmentValue.toFixed(2)}</td>
              </tr>`
          )
          .join('')}
      `;
  
      resultDiv.classList.add('show'); // Adiciona a classe 'show' para exibir o resultado com animação
    };
  
    // Função para realizar o cálculo de rentabilidade do imóvel
    const calculateRentability = () => {
      const rentAmount = parseFloat(rentAmountInput.value);
      const purchaseAmount = parseFloat(purchaseAmountInput.value);
      const appreciationRate = parseFloat(appreciationRateInput.value);
      const rentalRate = parseFloat(rentalRateInput.value);
      const investmentRate = parseFloat(investmentRateInput.value);
  
      if (
        isNaN(rentAmount) ||
        isNaN(purchaseAmount) ||
        isNaN(appreciationRate) ||
        isNaN(rentalRate) ||
        isNaN(investmentRate)
      ) {
        alert('Por favor, preencha todos os campos com valores numéricos válidos.');
        return;
      }
    
      // Exemplo: mostrando resultado fictício e preenchendo a tabela com dados fictícios
      const result = 'Ao final de 20 anos, alugar é mais rentável.';
      const tableData = [
        { year: 1, propertyValue: 150000, rentValue: 12000, investmentValue: 10000 },
        { year: 5, propertyValue: 180000, rentValue: 15000, investmentValue: 13000 },
        { year: 10, propertyValue: 200000, rentValue: 18000, investmentValue: 18000 },
        { year: 15, propertyValue: 230000, rentValue: 22000, investmentValue: 21000 },
        { year: 20, propertyValue: 250000, rentValue: 26000, investmentValue: 24000 },
      ];
  
      showResult(result, tableData);
    };
  
    // Evento de envio do formulário
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      calculateRentability();
    });
  
    // Evento de clique no botão "Novo Cálculo"
    newCalculationBtn.addEventListener('click', clearResult);
  };
  