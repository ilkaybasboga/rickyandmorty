export interface Character {
  id:number;
  name: string;
  image: string;
  status: string;
  species: string;
  type:string;
  gender:string;
  origin: {
    name: string;
    url: string;
    },

  location: {
    name: string;
  };
}
export interface RootState {
  get: {
    character: Character[];
    loading: boolean;
    filter: {
      payload: string;
    };
    filterLoc: {
      payload: string;
    };
    charDetails: any;
  };
}
export interface Item {
  name: string;
  image: string;
  origin: {
    name: string;
  };
  type: string;
  gender: string;
  species:string
}
export interface Image {
  url: string;
  width: number;
  uid: string;
  height: number;
}