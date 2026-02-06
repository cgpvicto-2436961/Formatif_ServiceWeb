import { json } from "express";
import { salutations, salutationsAjout } from "../models/salutations.model.js";

export const Salut = (req, res) => {


}

export const salutationsAfficher = (req, res) => {

    res.json(salutations);
}

export const salutationsRng = (req, res) => {

    const code_langue = req.query.langue;
    if (code_langue == null) {

        return res.status(400).send("Parametres Langue requis");
    }
    if (!['fr', 'en', 'es', 'de'].includes(code_langue)) {

        return res.status(400).send("Parametres Langue invalide");
    }
    const salutationsFiltrees = salutations.filter(s => s.code_langue === code_langue)
    if (salutationsFiltrees.length === 0 ) {
        return res.status(404).send("Aucune salutation trouve pour cette langue");

    }
    const indexRng = Math.floor(Math.random() * salutationsFiltrees.length);
    const salutationRng = salutationsFiltrees[indexRng];
    res.send(salutationRng);
};

export const createSalutation = (req, res) => {
    if (!req.body) {
        return res.status(400).send("pas de corps")
    }

const {code_langue, langue, message} = req.body;

if (code_langue == null || langue == null || message == null) {
return res.status(400).send(JSON.stringify({"message" : "Erreur, les paramètres code_langue, langue et message sont obligatoires"}));
}

salutationsAjout(code_langue, langue, message);
res.status(201).send(JSON.stringify({"message": "Salutation ajoutee", "salutation": message}));

};
