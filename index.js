const btnPremiumAnnuel = document.getElementById('btnPremiumAnnuel');
const premiumAnnuel = document.getElementById('premiumAnnuel');

btnPremiumAnnuel.addEventListener('click', (e) => {
    if (e.target.id === "btnPremiumAnnuel") {
        premiumAnnuel.classList.add('offre');
        premiumAnnuel.classList.add('premium-annuel');
        premiumAnnuel.innerHTML = `
        <h2>deezer <strong>Premium Annuel</strong></h2>
        <p>Tous les avantages de Deezer Premium à l'année, pour un prix réduit.</p>
        <button class="button-offre">Commencer l'essai de 2 mois</button>
        <h2>-25% chaque année</h2>
        <p>131,88 €/an 98,90 €/an</p>
        <p>Engagement sur 1 an</p>
        <a href="">En savoir plus</a>
        `
        e.target.remove();
    }
});

const btnEtudiant = document.getElementById('btnEtudiant');
const etudiant = document.getElementById('etudiant');

btnEtudiant.addEventListener('click', (e) => {
    if (e.target.id === "btnEtudiant") {
        etudiant.classList.add('offre');
        etudiant.classList.add('etudiant');
        etudiant.innerHTML = `<h2>deezer <strong>Étudiant</strong></h2>
        <p>Tous les avantages de Deezer Premium pour la moitié du prix. Profite à fond de ta vie étudiante.</p>
        <p>Profite du son Haute Fidélité sur tous tes appareils.</p>
        <button class="button-offre">Essayer gratuitement</button>
        <h2>2 mois offerts</h2>
        <p>puis 5,99 €/mois.</p>
        <p>Sans engagement, résilie à tout moment.</p>
        <a href="">En savoir plus</a>`
        e.target.remove();
    }
});

const btnFamilleAnnuel = document.getElementById('btnFamilleAnnuel');
const familleAnnuel = document.getElementById('familleAnnuel');

btnFamilleAnnuel.addEventListener('click', (e) => {
    if (e.target.id === "btnFamilleAnnuel") {
        familleAnnuel.classList.add('offre');
        familleAnnuel.classList.add('famille-annuel');
        familleAnnuel.innerHTML = `<h2>deezer <strong>Famille Annuel</strong></h2>
        <p>Tous les avantages de Deezer Famille à l'année, pour un prix réduit.</p>
        <button class="button-offre">Commencer l'essai de 2 mois</button>
        <h2>-8% chaque année</h2>
        <p>215,88 €/an 196,99 €/an</p>
        <p>Engagement sur 1 an</p>
        <a href="">En savoir plus</a>`

        e.target.remove();
    }
})


