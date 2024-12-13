import React, { useState, useEffect } from 'react';

const Quotes = () => {
  useEffect(() => {
    const quotes = [

    "L’istruzione è il ponte tra il caos dell’ignoranza e l’armonia della conoscenza. - ChatGPT",
    "Ogni grande progresso nasce dal coraggio di mettere in dubbio ciò che appare evidente. - ChatGPT",
    "La scienza non è un tempio da venerare, ma una bussola per esplorare l'infinito. - ChatGPT",
    "Capire il mondo non significa conquistarne i segreti, ma accettarne la complessità. - ChatGPT",
    "Studiare è risvegliare in sé una scintilla che attendeva il giusto combustibile. - ChatGPT",
    "La mente si affina nell’attrito delle domande, non nel peso delle risposte. - ChatGPT",
    "Un intellettuale non possiede certezze, ma coltiva il dubbio come suo più prezioso alleato. - ChatGPT",
    "Il progresso è la ribellione contro l’idea che ciò che esiste sia già abbastanza. - ChatGPT",
    "La tecnica è il linguaggio dell’immaginazione che prende forma. - ChatGPT",
    "La psicologia non cerca di cambiare la mente, ma di ascoltarne i silenzi. - ChatGPT",
    "Siamo il risultato di storie che non abbiamo mai raccontato. - ChatGPT",
    "Non c’è libertà più grande di chi sa abbracciare l’incertezza senza paura. - ChatGPT",
    "La scienza non risolve il mistero, lo espande verso nuove frontiere. - ChatGPT",
    "Ogni libro è una finestra sul mondo, ma va aperto con mani che non temano il vento. - ChatGPT",
    "Il sapere non è un peso, ma un orizzonte che si allarga passo dopo passo. - ChatGPT",
    "Un vero intellettuale costruisce ponti di pensiero, non torri d’avorio. - ChatGPT",
    "L’istruzione non insegna cosa vedere, ma come guardare con occhi liberi. - ChatGPT",
    "Le verità più grandi si trovano nel silenzio tra una certezza e un’altra. - ChatGPT",
    "Studiare è un atto di ribellione contro la superficialità. - ChatGPT",
    "La tecnica non è mai neutrale: è il riflesso del nostro desiderio di superare i limiti. - ChatGPT",
    "Il progresso non è lineare: è il frutto di coraggio, fallimenti e immaginazione. - ChatGPT",
    "Il cervello cresce nella sfida, si atrofizza nella comodità. - ChatGPT",
    "La scienza è l’arte di errare con precisione. - ChatGPT",
    "La psicologia non offre soluzioni, ma insegna a convivere con l’umano. - ChatGPT",
    "Un intellettuale non teme l’impopolarità, ma l’assenza di domande. - ChatGPT",
    "L’istruzione è l’unico bene che cresce quanto più lo si condivide. - ChatGPT",
    "La scienza vive del coraggio di chi osa porre le domande giuste. - ChatGPT",
    "Chi non dubita mai, non ha mai davvero pensato. - ChatGPT",
    "Il progresso è un cammino che inizia dove finisce la paura di cambiare. - ChatGPT",
    "La tecnica dà forma ai sogni, ma non può crearli. - ChatGPT",
    "Il sapere è una luce che cresce con ogni passo verso l’ignoto. - ChatGPT",
    "La psicologia esplora non per giudicare, ma per capire il mistero dell’animo umano. - ChatGPT",
    "Le idee più profonde nascono dove il pensiero si ferma e inizia l’intuizione. - ChatGPT",
    "L’istruzione non cambia il mondo, ma prepara chi lo cambierà. - ChatGPT",
    "La scienza è un dialogo infinito tra l’universo e l’intelligenza umana. - ChatGPT",
    "La tecnica è un’estensione della nostra volontà di plasmare il futuro. - ChatGPT",
    "Il progresso è la manifestazione visibile della nostra inquietudine creativa. - ChatGPT",
    "Studiare non è accumulare conoscenza, ma affinare la capacità di vedere. - ChatGPT",
    "La psicologia è una lanterna che illumina i corridoi più bui della mente. - ChatGPT",
    "Un vero intellettuale non teme di sfidare il consenso. - ChatGPT",
    "Il sapere è un filo che collega passato, presente e futuro. - ChatGPT",
    "La scienza non distrugge il mistero, lo trasforma in meraviglia. - ChatGPT",
    "La tecnica non è mai fine a sé stessa: riflette chi siamo e chi vogliamo diventare. - ChatGPT",
    "Il progresso nasce da menti che non accettano limiti come definitivi. - ChatGPT",
    "Un libro è un dialogo senza tempo che aspetta di essere ascoltato. - ChatGPT",
    "La psicologia non guarisce le ferite, ma insegna a dar loro un significato. - ChatGPT",
    "Studiare la mente è come esplorare un universo nascosto. - ChatGPT",
    "Ogni passo verso la conoscenza è un passo verso noi stessi. - ChatGPT",
    "L’istruzione è l’arte di coltivare libertà interiori. - ChatGPT",
    "Il sapere è infinito perché l’uomo è fatto di desideri che non conoscono confini. - ChatGPT"
  ];

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  changeQuote(); // Mostra un aforisma immediatamente
  const interval = setInterval(changeQuote, 12000); // Cambia ogni 12 secondi

  return () => clearInterval(interval); // Pulisce l'intervallo quando il componente si smonta
}, []); // Usa un array vuoto come dipendenza

const [currentQuote, setCurrentQuote] = useState("");

return <p className="text-xl italic">"{currentQuote}"</p>;
};

export default Quotes;
