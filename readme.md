Traccia:

- Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:

- Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Bonus 2:

- Aggiungiamo la possibilita' di modificare in tempo reale con un input sia l'h1 che l'url dell'immagine!

Bonus Special:

- Al click sull'immagine facciamo succedere qualcosa di creativo!

Svolgimento:

- Inseriamo in html il collegamento `<script> a Vue js`
- Copiamo il global build di vue nel nostro file js
- In html al tag desiderato inseriamo l'id app
- Nel tag h1 inserire la proprietà v-model "message" tra le graffe (detto tra i moustache)
- Nel tag image inserire le proprieta v-model in src per vedere l'immagine nell'oggetto
- Inserire in html i tag input di tipo testo per modificare l'immagine e h1 nel dom
- Creare nella parte methods le funzioni per riscrivere il testo e sostituire l'immagine 
- Nei tag di input inserire le proprieta v-model e @input per sostituire il testo e l'immagine