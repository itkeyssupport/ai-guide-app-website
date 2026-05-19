import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/privacy-policy")({
  head: () => ({
    meta: buildMeta({
      title: "Politique de confidentialité - AI Guide",
      description:
        "Lisez la politique de confidentialité d'AI Guide. Découvrez comment nous collectons, utilisons et protégeons vos informations.",
      path: "/fr/privacy-policy",
    }),
    links: buildLinks("/fr/privacy-policy"),
  }),
  component: PrivacyPageFr,
});

function PrivacyPageFr() {
  return (
    <SiteLayout dir="ltr">
      <PageHero
        eyebrow="Légal"
        title="Politique de confidentialité"
        description="Dernière mise à jour : 19 mai 2026"
      />
      <Section className="!pt-0">
        <article className="max-w-3xl mx-auto space-y-8 text-sm leading-7">

          <div className="glass rounded-2xl p-6 space-y-3 text-muted-foreground">
            <p><span className="text-white font-medium">Nom de l'application :</span> AI Guide</p>
            <p><span className="text-white font-medium">Site web :</span> aiguidia.com</p>
            <p><span className="text-white font-medium">Propriétaire :</span> itkeys</p>
            <p><span className="text-white font-medium">Contact :</span> contact@itkeys.net</p>
          </div>

          <S title="1. Introduction">
            <p>La présente Politique de confidentialité explique comment AI Guide collecte, utilise, stocke et protège les informations lorsque vous utilisez notre application mobile et notre site web associé.</p>
            <p>AI Guide est une application éducative qui aide les utilisateurs à apprendre à utiliser les outils d'intelligence artificielle grâce à des guides, des leçons, des comparaisons, des quiz et du contenu pédagogique.</p>
            <p>En utilisant AI Guide, vous acceptez les pratiques décrites dans cette Politique de confidentialité.</p>
          </S>

          <S title="2. Connexion Internet requise">
            <p>AI Guide nécessite une connexion Internet pour fonctionner correctement. Nous utilisons l'autorisation d'accès à Internet afin de :</p>
            <ul>
              <li>charger les leçons, guides, informations sur les outils d'IA et contenus de cours ;</li>
              <li>permettre aux utilisateurs de se connecter ou de créer un compte ;</li>
              <li>sauvegarder et synchroniser la progression d'apprentissage ;</li>
              <li>afficher des publicités ;</li>
              <li>vérifier l'état de la connexion et empêcher l'utilisation de l'application lorsqu'aucune connexion Internet n'est disponible.</li>
            </ul>
            <p>Si votre appareil est hors ligne, certaines parties ou l'ensemble de l'application peuvent ne pas être disponibles jusqu'au rétablissement de la connexion.</p>
          </S>

          <S title="3. Informations que nous collectons">
            <p>Nous pouvons collecter les types d'informations suivants selon votre utilisation de l'application.</p>
            <h3 className="text-white font-semibold mt-4">Informations de compte</h3>
            <p>Lorsque vous créez un compte ou vous vous connectez, nous pouvons collecter :</p>
            <ul>
              <li>votre adresse e-mail ;</li>
              <li>votre identifiant d'authentification ;</li>
              <li>votre nom d'affichage, si fourni ;</li>
              <li>vos informations de profil, si fournies ;</li>
              <li>les informations liées à la connexion et à l'état du compte.</li>
            </ul>
            <p>L'authentification est gérée via Supabase.</p>
            <h3 className="text-white font-semibold mt-4">Données d'apprentissage et de progression</h3>
            <p>Afin de fournir les fonctionnalités d'apprentissage, nous pouvons stocker :</p>
            <ul>
              <li>les leçons ou guides que vous ouvrez ;</li>
              <li>les leçons ou pages terminées ;</li>
              <li>la progression et les résultats des quiz ;</li>
              <li>les favoris ou contenus enregistrés ;</li>
              <li>les séries d'apprentissage et l'activité d'apprentissage ;</li>
              <li>les préférences de l'application liées à votre expérience d'apprentissage.</li>
            </ul>
            <p>Ces informations sont utilisées pour sauvegarder votre progression et la synchroniser sur plusieurs appareils lorsque vous êtes connecté.</p>
            <h3 className="text-white font-semibold mt-4">Informations techniques et relatives à l'appareil</h3>
            <p>Nous et nos fournisseurs de services tiers pouvons traiter des informations techniques telles que :</p>
            <ul>
              <li>le type d'appareil ;</li>
              <li>le système d'exploitation ;</li>
              <li>la version de l'application ;</li>
              <li>les informations de diagnostic ou de plantage ;</li>
              <li>l'adresse IP ;</li>
              <li>les identifiants publicitaires, le cas échéant ;</li>
              <li>les données d'interaction liées aux publicités ou à l'utilisation de l'application.</li>
            </ul>
          </S>

          <S title="4. Utilisation des informations">
            <p>Nous utilisons les informations pour :</p>
            <ul>
              <li>fournir et améliorer l'application ;</li>
              <li>créer et gérer les comptes utilisateurs ;</li>
              <li>sauvegarder la progression d'apprentissage ;</li>
              <li>synchroniser les leçons, séries, favoris et données de profil ;</li>
              <li>charger le contenu des cours depuis notre base de données ;</li>
              <li>afficher des publicités ;</li>
              <li>améliorer les performances de l'application et corriger les erreurs ;</li>
              <li>prévenir la fraude, les abus ou les accès non autorisés ;</li>
              <li>respecter nos obligations légales.</li>
            </ul>
          </S>

          <S title="5. Services tiers utilisés">
            <p>AI Guide utilise des services tiers pour fonctionner.</p>
            <h3 className="text-white font-semibold mt-4">Supabase</h3>
            <p>Nous utilisons Supabase pour :</p>
            <ul>
              <li>l'authentification des utilisateurs ;</li>
              <li>la gestion des comptes ;</li>
              <li>le stockage du contenu des cours ;</li>
              <li>le stockage de la progression des utilisateurs ;</li>
              <li>le stockage des données liées au profil ;</li>
              <li>la synchronisation des données entre appareils.</li>
            </ul>
            <h3 className="text-white font-semibold mt-4">Google AdMob</h3>
            <p>Nous utilisons Google AdMob pour afficher des publicités dans l'application. AdMob peut collecter ou traiter des informations telles que les identifiants publicitaires, l'adresse IP, les informations de l'appareil, les interactions avec les publicités et les données de diagnostic.</p>
            <p>Google peut utiliser ces informations pour fournir des publicités, mesurer leurs performances, prévenir la fraude et améliorer ses services publicitaires.</p>
          </S>

          <S title="6. Publicités">
            <p>AI Guide peut afficher des bannières publicitaires, des publicités natives, des publicités interstitielles ou d'autres formats publicitaires via Google AdMob.</p>
            <p>Les publicités peuvent être personnalisées ou non personnalisées selon votre localisation, vos choix de consentement, les paramètres de votre appareil et la législation applicable.</p>
            <p>Nous ne contrôlons pas toutes les publicités affichées par Google AdMob, mais nous cherchons à utiliser la publicité d'une manière qui ne perturbe pas l'expérience principale d'apprentissage.</p>
          </S>

          <S title="7. Clause de non-responsabilité concernant le contenu des cours">
            <p>Le contenu éducatif d'AI Guide est créé à des fins d'information et d'apprentissage.</p>
            <p>Les sources utilisées pour préparer les leçons, guides et descriptions sont principalement les documentations officielles, les sites web officiels et les ressources publiques des outils et entreprises d'intelligence artificielle concernés, lorsque ces sources sont disponibles.</p>
            <p>Cependant :</p>
            <ul>
              <li>les outils et services d'IA changent fréquemment ;</li>
              <li>les documentations officielles peuvent être mises à jour après la publication de notre contenu ;</li>
              <li>certaines informations peuvent devenir obsolètes ;</li>
              <li>AI Guide n'est pas l'application officielle d'une entreprise tierce d'IA, sauf indication claire contraire.</li>
            </ul>
            <p>Les utilisateurs doivent toujours consulter le site web officiel ou la documentation officielle de chaque outil d'IA pour obtenir les informations les plus récentes et les plus fiables.</p>
          </S>

          <S title="8. Absence d'affiliation avec les entreprises d'IA">
            <p>AI Guide peut mentionner des outils, produits, services ou noms d'entreprises tiers liés à l'intelligence artificielle à des fins éducatives.</p>
            <p>Les noms tels que ChatGPT, Claude, Perplexity, Meta AI, DeepSeek, Notion AI et autres noms d'outils appartiennent à leurs propriétaires respectifs.</p>
            <p>AI Guide n'est pas affilié, approuvé, sponsorisé ou officiellement lié à ces entreprises, sauf indication claire contraire.</p>
          </S>

          <S title="9. Partage des données">
            <p>Nous ne vendons pas directement vos informations personnelles.</p>
            <p>Nous pouvons partager ou traiter certaines informations avec des fournisseurs de services de confiance uniquement lorsque cela est nécessaire au fonctionnement de l'application, notamment :</p>
            <ul>
              <li>Supabase pour l'authentification, la base de données et le stockage ;</li>
              <li>Google AdMob pour la publicité ;</li>
              <li>des fournisseurs d'analyse, d'hébergement ou de sécurité si ces services sont ajoutés à l'avenir ;</li>
              <li>les autorités légales si la loi l'exige.</li>
            </ul>
          </S>

          <S title="10. Conservation des données">
            <p>Nous conservons vos informations uniquement aussi longtemps que nécessaire pour fournir l'application, gérer votre compte, respecter nos obligations légales, résoudre des litiges ou améliorer nos services.</p>
            <p>Si vous supprimez votre compte, nous supprimerons ou anonymiserons les informations personnelles liées à votre compte, sauf si nous sommes tenus de conserver certaines informations pour des raisons légales, de sécurité ou de prévention de la fraude.</p>
          </S>

          <S title="11. Suppression du compte">
            <p>Vous pouvez demander la suppression de votre compte et des données personnelles associées :</p>
            <ul>
              <li>en utilisant l'option de suppression de compte dans l'application, disponible dans votre Profil ; ou</li>
              <li>en nous contactant à contact@itkeys.net.</li>
            </ul>
            <p>Après la suppression, votre progression enregistrée, vos données de profil et les informations liées à votre compte peuvent ne plus être récupérables.</p>
          </S>

          <S title="12. Sécurité">
            <p>Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger vos informations.</p>
            <p>Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. Nous ne pouvons donc pas garantir une sécurité absolue.</p>
          </S>

          <S title="13. Enfants et adolescents">
            <p>AI Guide est destinée aux utilisateurs âgés de 13 ans et plus.</p>
            <p>Si vous avez moins de 13 ans, vous ne devez pas utiliser l'application ni créer de compte.</p>
            <p>Si vous avez entre 13 et 17 ans, vous devez utiliser l'application avec l'autorisation d'un parent ou d'un tuteur légal.</p>
            <p>Si nous découvrons que nous avons collecté des informations personnelles auprès d'un enfant de moins de 13 ans sans consentement approprié, nous prendrons des mesures raisonnables pour supprimer ces informations.</p>
          </S>

          <S title="14. Vos droits">
            <p>Selon votre localisation, vous pouvez avoir le droit de :</p>
            <ul>
              <li>accéder à vos informations personnelles ;</li>
              <li>corriger des informations inexactes ;</li>
              <li>supprimer vos informations personnelles ;</li>
              <li>vous opposer à certains traitements ;</li>
              <li>retirer votre consentement lorsque le traitement est fondé sur le consentement ;</li>
              <li>demander une copie de vos données.</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à contact@itkeys.net.</p>
          </S>

          <S title="15. Modifications de cette Politique de confidentialité">
            <p>Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre.</p>
            <p>Lorsque nous la mettons à jour, nous modifions la date de "Dernière mise à jour" ci-dessus. La poursuite de l'utilisation de l'application après ces modifications signifie que vous acceptez la Politique mise à jour.</p>
          </S>

          <S title="16. Nous contacter">
            <p>Pour toute question concernant cette Politique de confidentialité, contactez-nous à :</p>
            <div className="mt-3 space-y-1">
              <p><span className="text-white font-medium">itkeys</span></p>
              <p>E-mail : <a href="mailto:contact@itkeys.net" className="text-[#16D9F5] hover:text-white transition-colors">contact@itkeys.net</a></p>
              <p>Site web : <a href="https://aiguidia.com" target="_blank" rel="noopener noreferrer" className="text-[#16D9F5] hover:text-white transition-colors">aiguidia.com</a></p>
            </div>
          </S>

        </article>
      </Section>
    </SiteLayout>
  );
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6 space-y-3">
      <h2 className="text-white text-base font-bold">{title}</h2>
      <div className="text-muted-foreground space-y-3 [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-4 [&_li]:list-disc [&_li]:marker:text-[#16D9F5]">
        {children}
      </div>
    </div>
  );
}
