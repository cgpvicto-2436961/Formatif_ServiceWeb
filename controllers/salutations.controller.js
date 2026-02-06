import { json } from "express";
import { getsalutations, ajoutSalutation, getSalutationsLangue } from "../models/salutations.model.js";

export const Salut = (req, res) => {


}

export const salutationsAfficher = async (req, res) => {

    

        try {
        // Appel à la fonction getProfesseur dans le modèle
        const salutation = await getsalutations(req.params.id);

        if (salutation == null) {
            res.status(400).send(JSON.stringify({"message" : "Aucune salutations ont ete trouve"}))
        }

        // OK - on retourne l'objet professeur
        res.send(salutation);

    } catch (erreur) {
        // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car 
        //  c'est du serveur que provient l'erreur.
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Erreur lors de la récupération de la salutation avec l'id " + req.params.id
        });
    };
}



export const createSalutation = (req, res) => {
    if (!req.body) {
        return res.status(400).send("pas de corps")
    }

const {code_langue, langue, message} = req.body;

if (code_langue == null || langue == null || message == null) {
return res.status(400).send(JSON.stringify({"message" : "Erreur, les paramètres code_langue, langue et message sont obligatoires"}));
}

ajoutSalutation(code_langue, langue, message);
res.status(201).send(JSON.stringify({"message": "Salutation ajoutee", "salutation": message}));

};

export const salutationsAfficherLangue = async (req, res) => {
const params = req.params;
    
    if (params.langue == null) {

        res.status(400).send(JSON.stringify({"message": "Veuillez inscrire une Langue "}))
    }
else if (!["fr", "en", "es", "de"].includes(params.langue)) {

res.status(400).send(JSON.stringify({"message": "Veuillez inscrire une langue disponible "}))

}
    else {

        try {
        // Appel à la fonction getProfesseur dans le modèle
        const salutation = await getSalutationsLangue(req.params.langue);

        if (salutation == null) {
            res.status(400).send(JSON.stringify({"message" : "Aucune salutations ont ete trouve"}))
        }

        // OK - on retourne l'objet professeur
        res.send(salutation);

    } catch (erreur) {
        // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car 
        //  c'est du serveur que provient l'erreur.
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Erreur lors de la récupération de la salutation avec l'id " + req.params.id
        });
    }
    };
}
