import React from 'react';
import { Linkedin, Mail, User, Briefcase, GraduationCap, Code, Languages, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête / Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Elias SMAIL</h1>
            <p className="text-xl md:text-2xl mb-8">Recherche de stage de fin d’études en UX Design, Développement Web à partir d'avril 2025 </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/elias-smail-" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sm.elias1402@gmail.com" className="p-2 hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* À Propos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <User className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">À Propos</h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Je suis Elias Smail, étudiant en troisième année de Licence MIASHS – MIAGE à l'Université de Lorraine. 
                Passionné par l'UX/UI design, le développement web, les bases de données et la gestion de projet, 
                je m'efforce de créer des expériences numériques innovantes qui allient ergonomie et performance. 
                Mon approche combine créativité technique et sensibilité utilisateur pour concevoir des solutions 
                digitales intuitives et efficaces.
              </p>
              <p>
                Mon parcours académique et mes projets personnels m'ont permis de développer une expertise solide 
                en UX research, en design d'interfaces et en analyse de données. Cette combinaison unique de 
                compétences techniques et créatives me permet d'aborder les défis numériques de manière holistique, 
                en plaçant toujours l'utilisateur au centre de la réflexion.
              </p>
              <p>
                Je suis actuellement à la recherche d'un stage qui me permettra de mettre en pratique mes 
                connaissances dans un environnement professionnel dynamique. Motivé par l'apprentissage continu 
                et l'innovation, je souhaite contribuer à des projets ambitieux tout en enrichissant mes compétences 
                au contact d'équipes expérimentées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Code className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Compétences</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Développement Web</h3>
                <p className="text-gray-600">HTML, CSS, JavaScript</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Bases de Données</h3>
                <p className="text-gray-600">SQL, MySQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Programmation</h3>
                <p className="text-gray-600">Java</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">UX/UI Design</h3>
                <p className="text-gray-600">Figma, heuristiques d'utilisabilité, tests utilisateurs</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Gestion de projet</h3>
                <p className="text-gray-600">Notion, Scrum, Agile</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Économie & Marketing</h3>
                <p className="text-gray-600">Économie appliquée, stratégies marketing</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Soft Skills</h3>
                <p className="text-gray-600">Esprit analytique, Travail en équipe, Adaptabilité et autonomie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Langues */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Languages className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Langues</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="font-semibold">Français</p>
                <p className="text-gray-600">Courant</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="font-semibold">Arabe</p>
                <p className="text-gray-600">Courant</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="font-semibold">Anglais</p>
                <p className="text-gray-600">Intermédiaire (A2/B1)</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="font-semibold">Chinois</p>
                <p className="text-gray-600">Débutant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Briefcase className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Expérience</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">RGIS (VILLERS LES NANCY)</h3>
                <p className="text-gray-500">Depuis 2024</p>
                <p className="font-medium">Enqueteur vacataire</p>
                <ul className="text-gray-600 mt-2 list-disc list-inside space-y-1">
                  <li>Vérification et comptage précis des marchandises</li>
                  <li>Contrôle de l'exactitude des données d'inventaire</li>
                  <li>Travail en équipe pour respecter les délais d'inventaire corrigé</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">EQUIPIER POLYVALENT - Supermarché de proximité (DAY TO DAY)</h3>
                <p className="text-gray-500">Juin 2021 - Septembre 2021</p>
                <p className="text-gray-600 mt-2">Algérie</p>
                <ul className="text-gray-600 mt-2 list-disc list-inside space-y-1">
                  <li>Accueil et conseil client pour optimiser l'expérience d'achat</li>
                  <li>Gestion des stocks et réassort des rayons en autonomie</li>
                  <li>Encaissement et suivi des transactions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <GraduationCap className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Formation</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">UNIVERSITÉ DE LORRAINE</h3>
                <p className="text-gray-700">Licence MIASHS, parcours MIAGE</p>
                <p className="text-gray-600 mt-2">
                  Formation alliant informatique, mathématiques et gestion pour concevoir des systèmes 
                  d'information et accompagner la transformation numérique des entreprises.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">UNIVERSITÉ M'HAMED BOUGARA</h3>
                <p className="text-gray-700">Sciences et Technologies - Algérie</p>
                <p className="text-gray-600 mt-2">
                  Formation pluridisciplinaire en mathématiques, physique et informatique, posant les 
                  bases de l'ingénierie et des sciences appliquées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Code className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Projets</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">Redesign du site LingsCars</h3>
                <p className="text-gray-600 mt-2">
                  Amélioration de l'expérience utilisateur du site LingsCars via un test heuristique, 
                  un test de 5 secondes et la création d'un prototype interactif sur Figma en utilisant Useberry.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold">Application EuroPark</h3>
                <p className="text-gray-600 mt-2">
                  Développement d'une application web en TypeScript (framework Hono, back-end Bun) avec 
                  architecture MVC, base de données SQLite et tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loisirs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <Heart className="text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Loisirs</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Sport</h3>
                <p className="text-gray-600">Football, Jiu-Jitsu brésilien, Tennis, Musculation</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Musique</h3>
                <p className="text-gray-600">Rap, pop, variété, musique classique</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Lecture</h3>
                <p className="text-gray-600">Mangas, autobiographies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Elias SMAIL. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/elias-smail-" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sm.elias1402@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;