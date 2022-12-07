export interface ISong {
  id: string;
  albumName: string;
  artistName: string;
  songDescription: string;
  songName: string;
}

export interface ISingers {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IRecording {
  id: string;
  nameRecording: string;
  typeOfMelody: string;
  numberOfCabins: number;
  owner: string;
}

export interface IConcert {
  id: string;
  nameConcert: string;
  valueEntry: number;
  costConcert: number;
  dateConcert: Date | string;
}
