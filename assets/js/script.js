//*--------------problema---------------------------------------------------------------------------------
/*Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Nota 2:
Le milestone vanno seguite in ordine. Non passate alla richiesta della m2 se non avete prima completato la m1.*/

// prima fase: preparazione
/*let kilometer
let age
let total
let total_around
let message
let price_km
let final_price

//seconda fase: raccolta dati
price_km = 0.21
kilometer = 10
age = 20
kilometer = Number(kilometer)
age = Number(age)

//terza fase: elaborazione
final_price = kilometer * price_km
if (age < 18) {
	total = final_price - (final_price * 20) / 100
	message = 'comprensivo del 20% di sconto'
} else if (age > 65) {
	total = final_price - (final_price * 40) / 100
	message = 'comprensivo del 40% di sconto'
} else {
	total = final_price
	message = 'e non hai diritto a sconti'
}
total_around = Number(total.toFixed(2))

//quarta fase: output
console.log(`Il totale che pagherai è € ${total_around} ${message}`)
*/

const nameEl = document.getElementById('textname')
const kilometerEl = document.getElementById('numberkilometer')
const ageEl = document.getElementById('age')
const FormEl = document.querySelector('form')
console.log(nameEl, kilometerEl, ageEl)

const BigliettoEl = document.querySelector('.biglietto')

FormEl.addEventListener('submit', function (e) {
	e.preventDefault()
	const name = nameEl.value
	const kilometer = Number(kilometerEl.value)
	const age = Number(ageEl.value)
	let price_km = 0.21
	console.log(name, kilometer, age)
	let message
	let total
	let total_around

	const final_price = kilometer * price_km
	if (age < 18) {
		total = final_price - (final_price * 20) / 100
		message = 'comprensivo del 20% di sconto'
	} else if (age > 65) {
		total = final_price - (final_price * 40) / 100
		message = 'comprensivo del 40% di sconto'
	} else {
		total = final_price
		message = 'e non hai diritto a sconti'
	}
	total_around = Number(total.toFixed(2))

	console.log(`Il totale che pagherai è € ${total_around} ${message}`)

	const ticketEl = `
    <h1 class="biglietto text-center py-3 text-white">Il tuo biglietto</h1>
    <div class="container bg-white py-4 text-center">
				<div class="card row">
                    <h2>Nome passeggero</h2>
					<h3 id="name">${name}</h3>
					<h2>Costo biglietto</h2>
					<h3 id="cost">€ ${total_around}</h3>
					<h2>Offerta</h2>
					<h3 id="message">${message}</h3></div>
`
	BigliettoEl.insertAdjacentHTML('beforeend', ticketEl)
})
