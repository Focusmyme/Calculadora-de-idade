function calcular() {
    const inputDia = document.getElementById('dia').value;
    const inputMes = document.getElementById('mes').value;
    const inputAno = document.getElementById('ano').value;
  
    const nascimento = new Date(inputAno, inputMes - 1, inputDia);
    const hoje = new Date();
  
    let anos = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth();
    let dias = hoje.getDate() - nascimento.getDate();
  
    if (dias < 0) {
      meses--;
      dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }
  
    if (meses < 0) {
      anos--;
      meses += 12;
    }
  
    document.getElementById('item1').innerText = anos;
    document.getElementById('item2').innerText = meses;
    document.getElementById('item3').innerText = dias;
  }
  