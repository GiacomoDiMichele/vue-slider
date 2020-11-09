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

               },
            //subito dopo per quella precedente
               immagine_precedente() {

               }
           }
    }
);
