import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";

export const Route = createFileRoute("/fr/terms")({
  head: () => ({
    meta: buildMeta({
      title: "Conditions d'utilisation - AI Guide",
      description:
        "Lisez les conditions d'utilisation d'AI Guide. En utilisant AI Guide, vous acceptez ces conditions régissant votre utilisation de l'application et du site web.",
      path: "/fr/terms",
    }),
    links: buildLinks("/fr/terms"),
  }),
  component: TermsPageFr,
});

function TermsPageFr() {
  return (
    <SiteLayout dir="ltr">
      <PageHero
        eyebrow="Légal"
        title="Conditions d'utilisation"
        description="Dernière mise à jour : 19 mai 2026"
      />
      <Section className="!pt-0">
        <article className="max-w-3xl mx-auto space-y-8 text-sm leading-7">

          <div className="glass rounded-2xl p-6 space-y-3 text-muted-foreground">
            <p><span className="text-white font-medium">Nom de l'application :</span> AI Guide</p>
            <p><span className="text-white font-medium">Site web :</span> aiguidia.com</p>
            <p><span className="text-white font-medium">Propriétaire :</span> itkeys.net</p>
            <p><span className="text-white font-medium">Contact :</span> contact@itkeys.net</p>
          </div>

          <S title="1. Acceptation des conditions">
            <p>En téléchargeant, accédant ou utilisant AI Guide, vous acceptez les présentes Conditions d'utilisation.</p>
            <p>Si vous n'acceptez pas ces Conditions, vous ne devez pas utiliser l'application.</p>
          </S>

          <S title="2. À propos d'AI Guide">
            <p>AI Guide est une application éducative qui aide les utilisateurs à apprendre à utiliser les outils d'intelligence artificielle grâce à des guides, des leçons, des comparaisons, des quiz et du contenu pédagogique.</p>
            <p>L'application peut inclure :</p>
            <ul>
              <li>des guides sur les outils d'IA ;</li>
              <li>des parcours d'apprentissage ;</li>
              <li>des quiz ;</li>
              <li>du contenu de comparaison ;</li>
              <li>des actualités ou contenus informatifs ;</li>
              <li>des publicités ;</li>
              <li>des fonctionnalités de compte et de suivi de progression.</li>
            </ul>
          </S>

          <S title="3. Connexion Internet requise">
            <p>AI Guide nécessite une connexion Internet active.</p>
            <p>L'application peut cesser de fonctionner, limiter l'accès ou afficher un message hors ligne lorsqu'aucune connexion Internet n'est disponible. Cela est nécessaire pour charger le contenu, authentifier les utilisateurs, synchroniser la progression et afficher les publicités.</p>
            <p>Vous êtes responsable de votre propre connexion Internet ainsi que des éventuels frais de données facturés par votre opérateur mobile ou fournisseur d'accès Internet.</p>
          </S>

          <S title="4. Comptes">
            <p>Certaines fonctionnalités peuvent nécessiter un compte, notamment le suivi de progression, les favoris, les séries d'apprentissage, les fonctionnalités de profil et la synchronisation entre appareils.</p>
            <p>Vous acceptez de :</p>
            <ul>
              <li>fournir des informations de compte exactes ;</li>
              <li>garder vos identifiants de connexion sécurisés ;</li>
              <li>ne pas partager votre compte avec des utilisateurs non autorisés ;</li>
              <li>nous informer si vous pensez que votre compte a été consulté sans autorisation.</li>
            </ul>
            <p>Nous pouvons suspendre ou supprimer les comptes qui enfreignent ces Conditions ou utilisent l'application de manière abusive.</p>
          </S>

          <S title="5. Usage éducatif uniquement">
            <p>AI Guide est fournie uniquement à des fins éducatives et informatives.</p>
            <p>L'application ne fournit pas de conseils professionnels, juridiques, financiers, médicaux ou commerciaux. Vous ne devez pas utiliser l'application comme seule source d'information pour prendre des décisions importantes.</p>
          </S>

          <S title="6. Clause de non-responsabilité concernant le contenu des cours">
            <p>Les leçons et guides d'AI Guide sont préparés à partir de sources accessibles au public, principalement les documentations officielles et sites web officiels des outils et entreprises d'IA lorsque ces sources sont disponibles.</p>
            <p>Cependant, les outils d'IA peuvent changer rapidement. Les fonctionnalités, prix, limites, conditions, comportements des modèles et documentations peuvent changer à tout moment.</p>
            <p>Nous faisons de notre mieux pour garder le contenu exact et utile, mais nous ne garantissons pas que toutes les informations soient toujours complètes, actuelles ou exemptes d'erreurs.</p>
            <p>Vous devez toujours consulter le site web officiel ou la documentation officielle de chaque outil d'IA avant de vous fier aux informations.</p>
          </S>

          <S title="7. Absence d'affiliation officielle">
            <p>AI Guide peut mentionner des outils, plateformes, produits, logos ou noms d'entreprises tiers à des fins éducatives.</p>
            <p>Toutes les marques, logos et noms commerciaux appartiennent à leurs propriétaires respectifs.</p>
            <p>AI Guide n'est pas affilié, approuvé, sponsorisé ou officiellement lié à OpenAI, Anthropic, Perplexity, Meta, DeepSeek, Notion ou toute autre entreprise tierce, sauf indication claire contraire.</p>
          </S>

          <S title="8. Services tiers">
            <p>AI Guide utilise des services tiers, notamment :</p>
            <ul>
              <li>Supabase pour la connexion, l'authentification, le stockage en base de données, le contenu des cours et le suivi de progression ;</li>
              <li>Google AdMob pour la publicité.</li>
            </ul>
            <p>Votre utilisation de l'application peut également être soumise aux politiques de confidentialité et conditions d'utilisation de ces services tiers.</p>
            <p>Nous ne sommes pas responsables du contenu, des politiques, des actions ou de la disponibilité des services tiers.</p>
          </S>

          <S title="9. Publicités">
            <p>AI Guide peut afficher des publicités via Google AdMob.</p>
            <p>Les publicités aident à soutenir l'application et à maintenir le contenu disponible. Nous ne garantissons pas l'exactitude, la qualité ou l'adéquation des produits ou services affichés dans les publicités.</p>
            <p>Toute interaction avec une publicité se fait entre vous et l'annonceur.</p>
          </S>

          <S title="10. Comportement de l'utilisateur">
            <p>Vous acceptez de ne pas :</p>
            <ul>
              <li>utiliser l'application à des fins illégales ;</li>
              <li>tenter de pirater, endommager, surcharger ou perturber l'application ;</li>
              <li>copier, extraire ou utiliser abusivement le contenu de l'application sans autorisation ;</li>
              <li>faire de l'ingénierie inverse ou tenter d'extraire le code source ;</li>
              <li>créer de faux comptes ou usurper l'identité d'une autre personne ;</li>
              <li>utiliser l'application d'une manière qui nuit aux autres utilisateurs ou au service.</li>
            </ul>
          </S>

          <S title="11. Propriété intellectuelle">
            <p>Tout le contenu original, la conception, la mise en page, les textes, les éléments graphiques et les fonctionnalités créés par AI Guide appartiennent à itkeys.net ou sont utilisés sous licence.</p>
            <p>Vous pouvez utiliser l'application uniquement à des fins d'apprentissage personnel.</p>
            <p>Vous ne pouvez pas copier, revendre, redistribuer ou reproduire notre contenu sans autorisation écrite, sauf lorsque la loi l'autorise.</p>
          </S>

          <S title="12. Contenu et marques de tiers">
            <p>Certains contenus peuvent faire référence à des produits, services, documentations, noms ou marques de tiers.</p>
            <p>Ces éléments restent la propriété de leurs propriétaires respectifs. Leur mention dans AI Guide n'implique aucune approbation, partenariat ou autorisation officielle.</p>
          </S>

          <S title="13. Disponibilité de l'application">
            <p>Nous pouvons mettre à jour, modifier, suspendre ou interrompre toute partie de l'application à tout moment.</p>
            <p>Nous ne garantissons pas que l'application sera toujours disponible, ininterrompue, sécurisée ou exempte d'erreurs.</p>
          </S>

          <S title="14. Limitation de responsabilité">
            <p>Dans la mesure maximale autorisée par la loi, AI Guide et son propriétaire ne seront pas responsables :</p>
            <ul>
              <li>des dommages indirects ou accidentels ;</li>
              <li>de la perte de données ;</li>
              <li>de la perte de progression ;</li>
              <li>du contenu éducatif incorrect ou obsolète ;</li>
              <li>des problèmes causés par des services tiers ;</li>
              <li>des problèmes causés par une absence de connexion Internet ;</li>
              <li>des décisions prises sur la base du contenu de l'application.</li>
            </ul>
            <p>Vous utilisez l'application à vos propres risques.</p>
          </S>

          <S title="15. Suspension ou résiliation du compte">
            <p>Nous pouvons suspendre ou résilier l'accès à l'application si vous violez ces Conditions, utilisez l'application de manière abusive, créez un risque pour d'autres utilisateurs ou enfreignez les lois applicables.</p>
            <p>Vous pouvez cesser d'utiliser l'application à tout moment.</p>
          </S>

          <S title="16. Modifications des Conditions">
            <p>Nous pouvons mettre à jour ces Conditions d'utilisation de temps à autre.</p>
            <p>Lorsque nous les mettons à jour, nous modifions la date de "Dernière mise à jour" ci-dessus. La poursuite de l'utilisation de l'application après ces modifications signifie que vous acceptez les Conditions mises à jour.</p>
          </S>

          <S title="17. Droit applicable">
            <p>Ces Conditions sont régies par les lois applicables. Les lois de protection des consommateurs de votre pays peuvent également s'appliquer.</p>
          </S>

          <S title="18. Nous contacter">
            <p>Pour toute question concernant ces Conditions, contactez-nous à :</p>
            <div className="mt-3 space-y-1">
              <p><span className="text-white font-medium">itkeys.net</span></p>
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
