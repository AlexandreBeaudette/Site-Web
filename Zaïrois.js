(function(){
  const btnOui = document.getElementById('btn-oui');
  const btnNon = document.getElementById('btn-non');
  const result = document.getElementById('answer-result');

  if (!btnOui || !btnNon || !result) return;

  function setResult(choice){
    if(choice === 'Oui'){
      result.textContent = 'Réponse :En effet,il est un champion !';
    } else {
      result.textContent = 'Réponse : Mauvaise réponse, il en est très capable .';
    }
  }

  btnOui.addEventListener('click', function(){
    setResult('Oui');
    btnOui.classList.add('selected');
    btnNon.classList.remove('selected');
  });

  btnNon.addEventListener('click', function(){
    setResult('Non');
    btnNon.classList.add('selected');
    btnOui.classList.remove('selected');
  });
})();
