class Api::V1::MappingController < ApplicationController

  RESPONSE_TO_DOMAINS = {
    # Question 1
    "Je regarde autour de moi, je cherche un signe, un indice, un détail qui m’inspire." => ["UX/UI Designer", "Photographe indépendant", "Product Manager"],
    "Je note ce que je ressens dans un carnet, j’ai besoin de poser mes idées." => ["Écrivain / Auteur", "Coach de vie", "Copywriter / Rédacteur web"],
    "Je me lance. Je préfère avancer et comprendre en marchant." => ["Indie Maker / No-code builder", "Développeur Web", "Coach sportif / Préparateur mental"],
    "Je fais une pause. Je veux prendre le temps de sentir si c’est le bon moment." => ["Coach de vie", "Facilitateur d’ateliers", "Coach sportif / Préparateur mental"],

    # Question 2
    "Je me plonge dans un projet perso : écrire, dessiner, coder, créer quelque chose à moi." => ["Graphiste freelance", "UX/UI Designer", "Développeur Web"],
    "Je pars voir des gens, j’ai besoin d’échanger, de rire, de partager." => ["Animateur socio-culturel", "Coach de vie", "Community Manager"],
    "Je m’évade, je marche, je laisse mon esprit vagabonder sans but précis." => ["Photographe indépendant", "Écrivain / Auteur", "Céramiste / Artisan d’art"],
    "Je me pose avec un bon livre, un podcast ou une vidéo, j’adore apprendre tranquille." => ["Développeur IA / Data analyst junior", "Formateur en ligne", "Facilitateur d’ateliers"],

    # Question 3
    "J’observe. J’aime écouter avant de m’exprimer." => ["Photographe indépendant", "Développeur IA / Data analyst junior", "Coach de vie"],
    "Je pose des questions, je cherche à comprendre les points de vue." => ["Formateur en ligne", "Facilitateur d’ateliers", "Chargé de projet associatif"],
    "Je donne mon avis franchement, j’adore débattre." => ["Créateur de contenu", "Community Manager", "Product Manager"],
    "Je reformule ce que j’entends, j’essaie d’aider à clarifier." => ["Coach de vie", "Facilitateur d’ateliers", "Coach sportif / Préparateur mental"],

    # Question 4
    "Je la note tout de suite, je veux la garder précieusement." => ["Copywriter / Rédacteur web", "UX/UI Designer", "Développeur Web"],
    "Je la partage à un proche, j’ai besoin de feedback." => ["Community Manager", "Formateur en ligne", "Coach de vie"],
    "Je commence à la mettre en œuvre, même un petit bout." => ["Développeur Web", "Indie Maker / No-code builder", "Graphiste freelance"],
    "Je laisse mûrir, je veux voir si elle me parle encore demain." => ["Écrivain / Auteur", "Photographe indépendant", "Céramiste / Artisan d’art"],

    # Question 5
    "Je cherche des exemples concrets, des cas réels." => ["Product Manager", "UX/UI Designer", "Développeur IA / Data analyst junior"],
    "Je lis ou regarde des contenus pour comprendre les bases." => ["Formateur en ligne", "Coach de vie", "Chargé de projet associatif"],
    "Je teste directement, j’apprends en faisant." => ["Indie Maker / No-code builder", "Développeur Web", "Coach sportif / Préparateur mental"],
    "Je discute avec des gens qui connaissent déjà ce domaine." => ["Animateur socio-culturel", "Facilitateur d’ateliers", "Community Manager"],

    # Question 6
    "Créer quelque chose de nouveau ou original." => ["Graphiste freelance", "UX/UI Designer", "Créateur de contenu"],
    "Comprendre un sujet en profondeur." => ["Développeur IA / Data analyst junior", "Formateur en ligne", "Chef de projet digital"],
    "Partager un moment ou une émotion avec quelqu’un." => ["Coach de vie", "Animateur socio-culturel", "Coach sportif / Préparateur mental"],
    "Me sentir libre de faire à mon rythme, sans pression." => ["Céramiste / Artisan d’art", "Indie Maker / No-code builder", "Photographe indépendant"],

    # Question 7
    "Pouvoir exprimer qui je suis dans ce que je fais." => ["Graphiste freelance", "Coach de vie", "Écrivain / Auteur"],
    "Continuer d’apprendre et évoluer constamment." => ["Développeur Web", "Formateur en ligne", "Développeur IA / Data analyst junior"],
    "Avoir un impact positif autour de moi." => ["Responsable RSE / transition écologique", "Facilitateur d’ateliers", "Chargé de projet associatif"],
    "Trouver un équilibre et me sentir bien dans ma vie." => ["Coach de vie", "Coach sportif / Préparateur mental", "Céramiste / Artisan d’art"],

    # Question 8
    "Je suis en train de créer ou d’inventer quelque chose." => ["Développeur Web", "Graphiste freelance", "Indie Maker / No-code builder"],
    "Je suis en train de découvrir ou comprendre un truc passionnant." => ["Formateur en ligne", "Développeur IA / Data analyst junior", "Product Manager"],
    "Je suis connecté aux autres, en train de vivre un moment fort." => ["Community Manager", "Coach sportif / Préparateur mental", "Animateur socio-culturel"],
    "Je suis en pleine nature, ou dans un moment de calme profond." => ["Photographe indépendant", "Céramiste / Artisan d’art", "Écrivain / Auteur"],

    # Question 9
    "Je me mets sur un projet créatif ou perso." => ["Graphiste freelance", "Développeur Web", "Créateur de contenu"],
    "J’appelle quelqu’un ou je lance une discussion." => ["Community Manager", "Coach de vie", "Animateur socio-culturel"],
    "Je prends du temps pour moi, je me recentre." => ["Céramiste / Artisan d’art", "Coach sportif / Préparateur mental", "Facilitateur d’ateliers"],
    "Je vais chercher à apprendre ou découvrir quelque chose." => ["Développeur IA / Data analyst junior", "Formateur en ligne", "Product Manager"],

    # Question 10
    "Créer, imaginer, produire quelque chose de personnel." => ["UX/UI Designer", "Écrivain / Auteur", "Photographe indépendant"],
    "Comprendre, apprendre, explorer des idées." => ["Développeur IA / Data analyst junior", "Formateur en ligne", "Coach de vie"],
    "Partager, échanger, aider les autres." => ["Coach de vie", "Facilitateur d’ateliers", "Community Manager"],
    "Ralentir, réfléchir, prendre soin de moi." => ["Céramiste / Artisan d’art", "Coach sportif / Préparateur mental", "Écrivain / Auteur"]
  }


def create
  user_answers = params[:user_answers] # => tableau de strings

  scores = Hash.new(0)

  # Calcule les scores métier à partir des réponses
  user_answers.each do |answer|
    RESPONSE_TO_DOMAINS[answer]&.each do |domain_name|
      scores[domain_name] += 1
    end
  end

  # Trie les métiers du + au - pertinent
  top_domains = scores.sort_by { |_, score| -score }.first(3).map(&:first)

  # Va chercher les vrais objets Domain correspondants
  matched_domains = Domain.where(name: top_domains)


  # Envoie au front
  render json: {
    personality_summary: personality_summary,
    matched_domains: matched_domains
  }, status: :ok
  end
end
