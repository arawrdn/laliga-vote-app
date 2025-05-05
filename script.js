let barcelonaVotes = 0;
let realmadridVotes = 0;

function vote(team) {
  if (team === 'barcelona') {
    barcelonaVotes++;
    document.getElementById('barcelonaVotes').innerText = `Barcelona: ${barcelonaVotes}`;
  } else if (team === 'realmadrid') {
    realmadridVotes++;
    document.getElementById('realmadridVotes').innerText = `Real Madrid: ${realmadridVotes}`;
  }
}
