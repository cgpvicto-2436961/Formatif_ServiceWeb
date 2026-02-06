import pool from "../src/config/db.js";


const getsalutations = async () => {

    const requete = `SELECT * FROM salutations`;

    try {
        const [resultats] = await pool.query(requete);
        return resultats;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
};

const getSalutationsLangue = async (langue) => {

    const requete = `SELECT * FROM salutations WHERE langue = ?`;
    const params = [langue];
    try {
        const [resultats] = await pool.query(requete, params);
        return resultats;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
};






 const ajoutSalutation = async (code_langue, langue, message) => {

    const requete = `INSERT INTO salutations (code_langue, langue, message) VALUES (?, ?, ?)`;

    const params = [code_langue, langue, message];

    try {
const [resultats] = await pool.query(requete, params);
    }
catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
 };


export { 
    getsalutations,
    ajoutSalutation,
    getSalutationsLangue
};