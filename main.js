//creo il collegamento di vue
var app = new Vue (
    {
        el: '#root',
        data: {
            //creo la chiave per assegnare la base di partenza delle immagini nello slider, ad ogni click cambierà valore
            posizione_immagine: 0,
            //creo una chiave per inserire le immagini, questa volta tramite un array per contenere più elementi dello stesso tipo
            immagine: [
                'https://cameranation.it/wp-content/uploads/2019/06/beach-1761410_1280-800x448.jpg',
                'https://www.raiplayradio.it/cropgd/853x480/dl/img/2018/04/26/1524742758393_paesaggio.jpg',
                'https://www.pixtury.com/photos/167AE4119C2-8957337235C14087944DFC/1.jpg'
            ]
        },
            //inserisco l'oggetto methods per creare due funzioni che mi facciano cambiare dinamicamente l'immagine al click
           methods: {
               //prima per la successiva
               immagine_successiva() {
                   //ad ogni interazione incremento l'indice pari al suo valore + 1
                   this.posizione_immagine += 1;
                   //se la posizione dell'immagine è maggiore della lunghezza dell'array
                   if (this.posizione_immagine > this.immagine.length - 1) {
                       //riassegno il valore di partenza, ovvero della posizione della prima immagine
                       this.posizione_immagine = 0;
                   }
               },
            //subito dopo per quella precedente
               immagine_precedente() {
                   //decremento di 1 l'indice ad ogni interazione
                   this.posizione_immagine -= 1;
                   //se la posizione dell'immagine è minore di 0, quindi -1(che non può esistere) gli riassegno il valore dell'ultima posizione nell'array di immagini
                   if (this.posizione_immagine < 0) {
                       this.posizione_immagine = this.immagine.length - 1;
                   }
               }
           }
    }
);
