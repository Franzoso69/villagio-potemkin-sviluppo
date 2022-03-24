import { Component, VERSION } from '@angular/core';
import { RigaVerbaleDto } from './app.class';
import {impiantiCSENDto} from './app.class';
import moment from 'moment';

const sq_A = 'Empire Aquatica';
const sq_B = 'Valcanneto';
const Rt1_A = 5;
const Rt2_A = 7;
const Rt3_A = 0;
const Rt4_A = 0;
const Rt1_B = 6;
const Rt2_B = 3;
const Rt3_B = 0;
const Rt4_B = 0;
const RT_A = Rt1_A + Rt2_A + Rt3_A + Rt4_A;
const RT_B = Rt1_B + Rt2_B + Rt3_B + Rt4_B;
const Cat = 'categoria';
const dataP = '20/03/2022';
const stadio= 'Empire Sport & Resort';
const Hinizio = '17:00';
const Hfine= '18.20';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  stampaData(data: Date) {
    return moment(data).format('DD-MM-YYYY');
  };
  const={
    cat: Cat,
    dataPartita: dataP,
    stadio: stadio,
    Hinizio:Hinizio,
    Hfine:Hfine,

  };

  datiA = {
    nomeSocieta: sq_A,
    calottina: 'B',
    Rt1: Rt1_A,
    Rt2: Rt2_A,
    Rt3: Rt3_A,
    Rt4: Rt4_A,
    RT: RT_A,
  };

  datiB = {
    nomeSocieta: sq_B,
    calottina: 'N',
    Rt1: Rt1_B,
    Rt2: Rt2_B,
    Rt3: Rt3_B,
    Rt4: Rt4_B,
    RT: RT_B,
  };

  giocatoriA: RigaVerbaleDto[] = [
    {
      nomeGiocatore: '',
      cognomeGiocatore: '',
      numeroGiocatore: 0,
      numeroTessera: '',
    },
  ];

  giocatoriB: RigaVerbaleDto[] = [
    {
      nomeGiocatore: '',
      cognomeGiocatore: '',
      numeroGiocatore: 0,
      numeroTessera: '',
    },
  ];

  tabelle = [
    { dati: this.datiA, righe: this.giocatoriA },
    { dati: this.datiB, righe: this.giocatoriB },
  ];

  impianti: impiantiCSENDto[] = [
    {nome: 'Empire Sport & Resort',
    società: 'Empire Aquatica',
    primario: true,
    secondario: false,
    indirizzo: 'via degli Aldobrandeschi 79',
    città: 'Roma',}

    
  ]
}
