import { Vendeur } from "./vendeur.model";

export class Produit
{
    nom?:String;
    vendeur?:Vendeur;
    description?:String;
    prix?:number;
    image?:Object;
    dateLimite?:String;
    etat?:boolean;
    intervalle_Tollerance?:[min?:number,max?:number]
}