import { Component, OnInit } from '@angular/core';
import { tesseratiEmpireDto } from '../app.class';
import moment from 'moment';

@Component({
  selector: 'app-tesserati-empire',
  templateUrl: './tesserati-empire.component.html',
  styleUrls: ['./tesserati-empire.component.css'],
})
export class TesseratiEmpireComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  tesseratiEmpire: tesseratiEmpireDto[] = [
    {
      nomeGiocatore: 'GIOVANNI',
      cognomeGiocatore: 'VINGELLI',
      numeroGiocatore: 1,
      numeroTessera: '1.050.130',
      rilascioTessera: moment('2022/02/04').toDate(),
      dataNascita: moment('2008/03/04').toDate(),
      luogoNascita: 'ROMA',
      codFiscale: 'VNGGNN08C04H501Q',
      ruolo: 'atleta',
      catU14: true,
      catU16: true,
      catU18: true,
    },
    {
      nomeGiocatore: 'FILIPPO',
      cognomeGiocatore: "D'ANTONI",
      numeroGiocatore: 2,
      numeroTessera: '1.049.530',
      rilascioTessera: moment('2022/02/02').toDate(),
      dataNascita: moment('2008/05/28').toDate(),
      luogoNascita: 'ROMA',
      codFiscale: 'DNTFPP08E25H501G',
      ruolo: 'atleta',
      catU14: true,
      catU16: true,
      catU18: true,
    },
    {
      nomeGiocatore: 'AMEDEO ALESSANDRO',
      cognomeGiocatore: 'CERVI',
      numeroGiocatore: 3,
      numeroTessera: '1.049.459',
      rilascioTessera: moment(
        '2022/02/02 00:00.00',
        'YYYY,MM,DD HH:mm.ss'
      ).toDate(),
      dataNascita: moment('2008/02/01').toDate(),
      luogoNascita: 'NAPOLI',
      codFiscale: 'CRVMLS08B01F839T',
      ruolo: 'atleta',
      catU14: true,
      catU16: true,
      catU18: true,
    },
    {
      nomeGiocatore: 'FRANCESCO',
      cognomeGiocatore: 'DI MARIO',
      numeroGiocatore: 4,
      numeroTessera: '1.050.314',
      rilascioTessera: moment('2022/02/05').toDate(),
      dataNascita: moment('2012/08/22').toDate(),
      luogoNascita: 'ROMA',
      codFiscale: 'DMRFNC12M22H501X',
      ruolo: 'atleta',
      catU14: true,
      catU16: false,
      catU18: false,
    },
    {
      nomeGiocatore: 'FEDERICO',
      cognomeGiocatore: 'DIVELLA',
      numeroGiocatore: 5,
      numeroTessera: '1.049.662',
      rilascioTessera: moment('2022/02/02').toDate(),
      dataNascita: moment('2009/07/16').toDate(),
      luogoNascita: 'ROMA',
      codFiscale: 'DVLFRC09L16H501T',
      ruolo: 'atleta',
      catU14: true,
      catU16: true,
      catU18: false,
    },
  ];
}

/*
  <!-- Lista Giocatori-->
<!--
COGNOME NOME                    TESSERA     N   Luogo di Nascita Cod.Fiscale Assicur. Data di nascita Qualifica Att.Sportiva Data Rilascio

U14

CERVI AMEDEO ALESSANDRO         1.049.459       NAPOLI  CRVMLS08B01F839T Tessera base 01/02/2008 ATLETA DD005 02/02/2022
D'ANTONI FILIPPO                1.049.530       ROMA    DNTFPP08E25H501G Tessera base 28/05/2008 ATLETA DD005 02/02/2022
DI MARIO FRANCESCO              1.050.314       ROMA    DMRFNC12M22H501X Tessera base 22/08/2012 ATLETA DD005 05/02/2022
DIVELLA FEDERICO                1.049.662       ROMA    DVLFRC09L16H501T Tessera base 16/07/2009 ATLETA DD005 02/02/2022
MAZZUCA NERI                    1.049.669       ROMA    MZZNRE10E26H501H Tessera base 26/05/2010 ATLETA DD005 02/02/2022
MICHELETTI GIAMPAOLO            1.049.535       ROMA    MCHGPL09D06H501F Tessera base 06/04/2009 ATLETA DD005 02/02/2022
MICHELETTI PIETRO               1.049.647       ROMA    MCHPTR10H21H501S Tessera base 21/06/2010 ATLETA DD005 02/02/2022
MORETTI MAURIZIO                1.049.670       ROMA    MRTMRZ08B02H501Y Tessera base 02/02/2008 ATLETA DD005 02/02/2022
ONORATI AURELIO                 1.049.653       ROMA    NRTRLA11C09H501P Tessera base 09/03/2011 ATLETA DD005 02/02/2022
PUIA LORENZO                    1.050.125       ROMA    PUILNZ09E16H501X Tessera base 16/05/2009 ATLETA DD005 04/02/2022
RUSSO MANUEL                    1.049.656       ROMA    RSSMNL09E12H501W Tessera base 01/05/2009 ATLETA DD005 02/02/2022
SCOTTO IVAN                     1.049.659       ROMA    SCTVNI09P19H501C Tessera base 19/09/2009 ATLETA DD005 02/02/2022
VINGELLI GIOVANNI               1.050.130       ROMA    VNGGNN08C04H501Q Tessera base 04/03/2008 ATLETA DD005 04/02/2022

U18

<td class="nome">CERVI AMEDEO ALESSANDRO</td><td>1.049.459</td>       NAPOLI  CRVMLS08B01F839T Tessera base 01/02/2008 ATLETA DD005 02/02/2022
<td class="nome">CHIARAVELLI LEONARDO</td><td>1.049.460       ROMA    CHVLRD06M05H501Y Tessera base 05/08/2006 ATLETA DD005 02/02/2022
<td class="nome">CHIPANA NINAPAYTA DAVIDE</td><td>1.053.391       ROMA    CHPDVD04R22H501T Tessera base 22/12/2004 ATLETA DD005 25/02/2022
<td class="nome">D'ANGELIS MATTEO</td><td>1.049.462       ROMA    DNGMTT06T20H501U Tessera base 20/12/2006 ATLETA DD005 02/02/2022
<td class="nome">D'ANTONI FILIPPO</td><td>1.049.530       ROMA    DNTFPP08E25H501G Tessera base 28/05/2008 ATLETA DD005 02/02/2022
<td class="nome">IAZZETTA FABIO</td><td>1.049.644       ROMA    ZZTFBA06R08H501R Tessera base 08/10/2006 ATLETA DD005 02/02/2022
<td class="nome">MARONGIU EMILIANO</td><td>1.049.666       ROMA    MRNMLN05E17H501H Tessera base 17/05/2005 ATLETA DD005 02/02/2022
<td class="nome">MICHELETTI GIAMPAOLO</td><td>1.049.535       ROMA    MCHGPL09D06H501F Tessera base 06/04/2009 ATLETA DD005 02/02/2022
<td class="nome">PIEROBON LEONARDO</td><td>1.049.655       ROMA    PRBLRD04M28H501C Tessera base 24/08/2004 ATLETA DD005 02/02/2022
<td class="nome">PIOMPONI EDOARDO</td><td>1.050.123       ROMA    PMPDRD04L12H501P Tessera base 12/07/2004 ATLETA DD005 04/02/2022
<td class="nome">RIGHI CRISTIAN</td><td>1.054.276       ROMA    RGHCST05E25H501K Tessera base 25/05/2005 ATLETA DD005 03/03/2022
<td class="nome">SAVI EMANUELE</td><td>1.050.127   6     ROMA    SVAMNL04A09H501U Tessera base 09/01/2004 ATLETA DD005 04/02/2022
<td class="nome">SEMERARO ANDREA</td><td>1.050.128   9     ROMA    SMRNDR03T10H501F Tessera base 10/12/2003 ATLETA DD005 04/02/2022
<td class="nome">VINGELLI GIOVANNI</td><td>1.050.130   1     ROMA    VNGGNN08C04H501Q Tessera base 04/03/2008 ATLETA DD005 04/02/2022
<td class="nome">ZOFFOLI LIVIO</td><td>1.053.389   13    ROMA    ZFFLVI04P21H501W Tessera base 21/09/2004 ATLETA DD005 25/02/2022

U20

MARANO ALESSANDRO MATTIA        1.049.651       MILANO  MRNLSN01M13F205M Tessera base 13/08/2001 ATLETA DD005 02/02/2022

ALLENATORI

1.050.132       FUSCO DANIELE ROMA FSCDNL01M03H501N Tessera base 03/08/2001 ATLETA DD005 04/02/2022
1.050.133       GIGLI DAMIANO ROMA GGLDMN88S22H501V Tessera base 22/11/1988 ATLETA DD005 04/02/2022
1.054.277       DE LUCA CRISTIANO ROMA DLCCST90T01H501H Tessera base 01/12/1990 ATLETA DD005 03/03/2022
1.043.820       TARUGGI MARCO ROMA TRGMRC73D12H501R Tessera base 12/04/1973 ATLETA DD005 08/12/2021
-->
*/
