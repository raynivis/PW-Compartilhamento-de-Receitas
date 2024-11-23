import { Livro } from "./livro.model";
import { Receita } from "./receita.model";

export interface LivroReceita{
  book: Livro;
  recipe: Receita;
  notes: string;
  id: number;
  dateCreated: string;  //em $date-time
  lastUpdated: string; //em $date-time
}
