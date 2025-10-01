/* 
===========================================
   📘 JavaScript - Les Variables
   WebAcademy
===========================================

Une variable en JavaScript est comme une “boîte” 
dans laquelle on peut stocker une valeur.

Ces valeurs peuvent être :
1. Valeurs primitives :
   - number → nombres (ex : 101, 3.14)
   - string → chaînes de caractères (ex : "Hello")
   - boolean → vrai ou faux (true, false)
   - null → valeur vide volontaire
   - undefined → absence de valeur

2. Objets :
   - objets littéraux {}
   - fonctions
   - classes
   - tableaux, etc.

Une variable sert donc à retenir une information 
temporairement pour l’utiliser plus tard : 
en entrée, en traitement ou en sortie.
*/

// ===========================================
// 1. Différence entre const et let
// ===========================================

// const → variable constante (ne peut pas changer)
const pi = 3.14159;
// pi = 3.14 ❌ → ceci provoquerait une erreur

// let → variable modifiable
let compteur = 0;
compteur = compteur + 1; // ✅ OK
console.log("Compteur avec let :", compteur);


// ===========================================
// 2. Type String
// ===========================================

// Un string est une suite de caractères entourée de guillemets
let message = "Bienvenue à WebAcademy";
console.log(message);


// ===========================================
// 3. Identifier les types
// ===========================================

// "101" → string
// 101 → number
// true → boolean
// null → null
// undefined → undefined
let valeur1 = "101";
let valeur2 = 101;
let valeur3 = true;
let valeur4 = null;
let valeur5; // undefined par défaut

console.log(typeof valeur1, valeur1);
console.log(typeof valeur2, valeur2);
console.log(typeof valeur3, valeur3);
console.log(typeof valeur4, valeur4);
console.log(typeof valeur5, valeur5);


// ===========================================
// 4. Guillemets possibles
// ===========================================

// On peut utiliser ' ' ou " " ou ` ` (backticks)
let texte1 = 'Bonjour';
let texte2 = "Bonsoir";
let texte3 = `Salut`;

console.log(texte1, texte2, texte3);


// ===========================================
// 5. Template literal
// ===========================================

// Les backticks `` permettent d'insérer des variables directement
let nom = "Jiresse";
let phrase = `Bonjour ${nom}, bienvenue !`;
console.log(phrase);


// ===========================================
// 6. Commentaires en JavaScript
// ===========================================

// Commentaire sur une seule ligne

/* 
   Commentaire sur
   plusieurs lignes
*/


// ===========================================
// ✅ Exemples pratiques combinés
// ===========================================

// Stocker une valeur constante
const site = "WebAcademy";
console.log(`Bienvenue sur ${site}`);

// Stocker une valeur qui change
let score = 0;
score++;
console.log(`Score actuel : ${score}`);

// Différents types dans un même log
let age = 25;           // number
let prenom = "Alex";    // string
let estConnecte = true; // boolean
let vide = null;        // null
let indefini;           // undefined
console.log(age, prenom, estConnecte, vide, indefini);

// Utiliser un template literal
let cours = "JavaScript";
let intro = `Aujourd'hui nous apprenons les variables en ${cours}`;
console.log(intro);

// Exemple avec incrémentation
let nombre = 10; // valeur initiale
nombre += 5;     // on ajoute 5
console.log("Résultat après ajout :", nombre);
