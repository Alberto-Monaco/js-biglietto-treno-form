//*--------------problema---------------------------------------------------------------------------------
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (price_km € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//

// prima fase: preparazione
let kilometer
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
