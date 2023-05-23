problema: Dato un array contenente una lista di cinque immagini, creare un carosello.


1- Creo la struttura base html.
    1.1- creao un primo contenitore per centrare le immagini al centro della pagina web
    1.2- creo un div interno dove contenere le immagini
    1.3- creo delle classi per i contenitori e le immagini in modo che abbiano altezza e larghezza del 100%
    1.4- inserisco tutte le immagini e succesivamente assegno alla prima una classe che la renda visibile e una classe le altre
    1.4- creo e posiziono i pulsanti che saranno usati successivamente per lo scorrimento delle immagini.
2- Inizo il lavoro sul file js.
    2.1- Elimino le immagini statiche dall'html e creo un array contenente le immagini per il carosello.
    2.2- Creo un ciclo for che per la lunghezza dell'array delle foto ad ogni giro mostri un div con all'interno l'img presa dall'array
    2.3- Assegno alla prima immagine una classe che la renda visibile a schermo (usare la funzione .classlist.add)
3- lavoro sull'interazione con i pulsanti.
    3.1- Assegno ad ogni pulsante una variabile in modo da recuperare l'elemento dall'html
    3.2- creo l'interazione con il primo pulsante usando la funzione .addEventListener
        3.2.1-al click del pulsante aggiungero (++) al valore dell'img visualizzata per spostarmi di posizione nell'array delle foto
        3.2.2- al click dovrò inserire l'istruzione par la rimozione della classe active e solo succesivamente la sua aggiunta dopo lo spostamento nell'array.
        NB. inseire una condizione per cui l'interazione funzioni solo per < array.length +1
    3.3- creo l'interazione con il primo pulsante usando la funzione .addEventListener
        3.3.1-al click del pulsante sottrarrò (--) al valore dell'img visualizzata per spostarmi di posizione nell'array delle foto
        3.3.2- al click dovrò inserire l'istruzione par la rimozione della classe active e solo succesivamente la sua aggiunta dopo lo spostamento nell'array.
        NB. inseire una condizione per cui l'interazione funzioni solo per > 0
