/**
 * E Porque trabalhar com Tipagens?
 * Como vimos anteriormente, se você precisar colocar no subscrie da sua requisição data[0].nome,
 *  o mesmo vai impedir que você coloque data[0].nom (errado), além de tipar os dados conforme a regra.
 * Neste caso, muito igual Vue com Stores
**/
export interface Photo{
  id:number;
  postDate:Date;
  url:string;
  description:string;
  allowComments:boolean;
  likes:number;
  comments:number;
  userId:number
}
