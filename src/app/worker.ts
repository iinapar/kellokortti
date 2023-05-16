// Tietokannan työntekijän tyypitys.
export interface worker {
  id: number;
  etunimi: string;
  sukunimi: string;
  tunnus: string;
  kirjautumiset: [
    {
      sisaan: string;
      ulos: string;
      taukoAlku: string;
      taukoLoppu: string;
    }
  ];
}
