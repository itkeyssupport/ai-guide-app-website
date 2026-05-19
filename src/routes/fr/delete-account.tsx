import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { buildMeta, buildLinks } from "@/components/site/seo";
import { Trash2, SmartphoneIcon, Mail, ShieldCheck, AlertTriangle } from "lucide-react";
import { SITE } from "@/config/site";

export const Route = createFileRoute("/fr/delete-account")({
  head: () => ({
    meta: buildMeta({
      title: "Supprimer votre compte - AI Guide",
      description:
        "Apprenez comment supprimer votre compte AI Guide. Vous pouvez supprimer votre compte directement depuis la section Profil de l'application, ou nous contacter pour obtenir de l'aide.",
      path: "/fr/delete-account",
    }),
    links: buildLinks("/fr/delete-account"),
  }),
  component: DeleteAccountPageFr,
});

function DeleteAccountPageFr() {
  return (
    <SiteLayout dir="ltr">
      <PageHero
        eyebrow="Compte"
        title="Supprimer votre compte"
        description="Vous avez le contrôle total sur votre compte. Voici comment le supprimer et ce qui arrive à vos données."
      />

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="glass rounded-2xl p-5 border border-orange-500/20 bg-orange-500/5" data-reveal>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Cette action est permanente</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  La suppression de votre compte entraînera la suppression définitive de votre profil, de votre progression enregistrée, de vos favoris et de toutes les données associées. Cette action est irréversible.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="100">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 text-[#16D9F5]">
                <SmartphoneIcon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Option 1 : Supprimer depuis l'application</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-5">
              La façon la plus simple de supprimer votre compte est directement depuis l'application AI Guide. Suivez ces étapes :
            </p>
            <ol className="space-y-3">
              {[
                "Ouvrez l'application AI Guide sur votre appareil.",
                "Appuyez sur l'icône Profil en bas de l'écran.",
                "Accédez aux Paramètres ou aux paramètres du compte.",
                'Appuyez sur "Supprimer le compte".',
                "Confirmez la suppression lorsqu'on vous le demande.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16D9F5]/15 text-[#16D9F5] text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="200">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A4DFF]/15 border border-white/10 text-[#D9B8FF]">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Option 2 : Nous contacter directement</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Si vous ne pouvez pas accéder à l'application ou préférez demander la suppression par e-mail, envoyez-nous un message et nous traiterons votre demande.
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Veuillez envoyer votre demande depuis l'adresse e-mail associée à votre compte afin que nous puissions l'identifier.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Demande de suppression de compte`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-[#07112F] hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              Nous écrire à {SITE.email}
            </a>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8" data-reveal data-delay="300">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#16D9F5]/10 border border-white/10 text-[#16D9F5]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Ce qui se passe après la suppression</h2>
            </div>
            <ul className="space-y-2.5">
              {[
                "Votre compte et vos identifiants de connexion sont définitivement supprimés.",
                "Votre progression d'apprentissage, vos séries et vos résultats de quiz sont supprimés.",
                "Vos favoris enregistrés et vos préférences sont supprimés.",
                "Vos données de profil sont retirées de nos systèmes.",
                "Certaines données anonymisées ou agrégées peuvent être conservées conformément à la loi.",
                "Vous pouvez créer un nouveau compte à tout moment.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Trash2 className="h-4 w-4 text-[#16D9F5] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-muted-foreground text-center" data-reveal data-delay="400">
            Vous avez des questions ?{" "}
            <Link to="/fr/contact" className="text-[#16D9F5] hover:text-white transition-colors">
              Contactez notre équipe support
            </Link>
            {" "}et nous vous aiderons.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
