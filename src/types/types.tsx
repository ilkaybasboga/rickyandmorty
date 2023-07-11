export interface Character {
    name: string;
    image: string;
    status: string;
    species: string;
    grey:string;
  
    location:{
      name:string
    }
    Item:{
      gender:string;
      type:string;
      origin:{
        name:string
      }
      
    }
    
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
  }