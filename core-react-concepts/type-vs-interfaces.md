# Type:
    => it describes the various data types supported by the language, it is divided into 3 major sections: 
    Any Type, Built-In Type, and User-Defined Type.
    Exampl:
      type Geeks = {
        name: string;
        age: number;
      }

      type MoreGeeks = {
      email : string;
      }

      type CombinedGeeks = Geeks & MoreGeeks;

      const gfg: CombinedGeeks= {
        name: "ankush"
      }
