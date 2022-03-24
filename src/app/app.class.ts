export class IntestazioneVerbaleDto {
  nomeSocieta: string;
  calottina: string;
  risultato: number;
  note: string;
  categoria: string;
  data: Date;
  impianto: string;
  Hinizio: Date;
  Hfine: Date;
  Rt1: number;
  Rt2: number;
  Rt3: number;
  Rt4: number;
  RT: number;
}

export class RigaVerbaleDto {
  nomeGiocatore: string;
  cognomeGiocatore: string;
  numeroGiocatore: number;
  numeroTessera: string;
}

export class VerbaleGiocatori {
  intestazione: IntestazioneVerbaleDto;
  riga: RigaVerbaleDto;
}

export class tesseratiEmpireDto {
  nomeGiocatore: string;
  cognomeGiocatore: string;
  numeroGiocatore: number;
  numeroTessera: string;
  rilascioTessera: Date;
  dataNascita: Date;
  luogoNascita: string;
  codFiscale: string;
  ruolo: string;
  catU14: boolean;
  catU16: boolean;
  catU18: boolean;
}
export class impiantiCSENDto {
  nome: string;
  società: string;
  primario: boolean;
  secondario: boolean;
  indirizzo: string;
  città: string;
}
