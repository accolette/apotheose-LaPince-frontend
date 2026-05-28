import { PublicFooter } from "@/components/layout/PublicFooter";
import { PublicHeader } from "@/components/layout/PublicHeader";

export function LegalsPage() {
	return (
		<div className="min-h-screen w-full">
			<PublicHeader />

			<main>
				<section className="mx-auto w-full max-w-3xl px-10 py-20 text-center sm:px-6 lg:px-8">
					<h2 className="text-3xl font-semibold tracking-tight">
						Politique de confidentialité
					</h2>
					<p className="mt-1 text-sm text-muted-foreground">
						Dernière mise à jour : 28/05/2026
					</p>
					<article className="text-justify">
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							1. Introduction
						</h3>
						<p>
							Bienvenue sur <b>La Pince</b>.
						</p>
						<p>
							La protection de vos données personnelles est importante pour
							nous. Cette politique de confidentialité explique quelles données
							sont collectées, pourquoi elles le sont, comment elles sont
							utilisées et quels sont vos droits. En utilisant l’application,
							vous acceptez les pratiques décrites dans cette politique.
						</p>
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							2. Responsable du traitement
						</h3>
						<p>
							Le responsable du traitement des données est : <b>La Pince</b>
						</p>
						<p>
							Projet pédagogique réalisé dans le cadre de la formation CDA de
							O’clock.
						</p>
						<p>Contact : [EMAIL_DE_CONTACT] </p>
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							3. Données collectées
						</h3>
						<p>
							Nous collectons uniquement les données nécessaires au
							fonctionnement de l’application.
						</p>
						<h4 className="font-semibold tracking-tight py-2 px-2">
							Données de compte
						</h4>
						<p>Lors de l’inscription :</p>
						<ul className="list-disc px-4">
							<li> Nom ou pseudo </li>
							<li> Adresse email</li>
							<li> Mot de passe chiffré</li>
						</ul>
						<p className="pt-2">
							Les mots de passe ne sont jamais stockés en clair.
						</p>
						<h4 className="font-semibold tracking-tight py-2 px-2">
							Données liées à l’utilisation de l’application
						</h4>
						<p>Dans le cadre du fonctionnement des projets et dépenses :</p>
						<ul className="list-disc px-4">
							<li> Projets créés </li>
							<li> Participants</li>
							<li> Opérations financières </li>
							<li> Budgets</li>
							<li> Alertes </li>
							<li> Catégories utilisées</li>
						</ul>
						<h4 className="font-semibold tracking-tight py-2 px-2">
							Données techniques
						</h4>
						<p>
							Certaines données techniques peuvent être enregistrées
							automatiquement :
						</p>
						<ul className="list-disc px-4">
							<li> Logs techniques </li>
							<li> Erreurs serveur </li>
							<li> Date et heure de connexion </li>
							<li> Adresse IP temporairement dans les logs de sécurité </li>
						</ul>
						<p className="pt-2">Ces données servent uniquement à : </p>
						<ul className="list-disc px-4">
							<li> Sécuriser l’application </li>
							<li> Prévenir les abus </li>
							<li> Diagnostiquer les erreurs techniques </li>
						</ul>
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							4. Finalités du traitement
						</h3>
						<p>Vos données sont utilisées uniquement pour :</p>
						<ul className="list-disc px-4">
							<li> Créer et gérer votre compte</li>
							<li> Permettre l’utilisation de l’application</li>
							<li> Calculer les répartitions de dépenses </li>
							<li> Générer des alertes budgétaires</li>
							<li> Sécuriser l’API et prévenir les abus</li>
							<li> Améliorer la stabilité et la maintenance du service</li>
						</ul>
						<p className="pt-2">
							Aucune donnée n’est vendue ni utilisée à des fins publicitaires.
						</p>
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							5. Base légale du traitement
						</h3>
						<p>Le traitement des données repose sur : </p>
						<ul className="list-disc px-4">
							<li> L’exécution du service</li>
							demandé par l’utilisateur
							<li>
								L’intérêt légitime lié à la sécurité et à la maintenance de
								l’application
							</li>
						</ul>
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							6. Durée de conservation
						</h3>
						<p>Les données sont conservées :</p>
						<ul className="list-disc px-4">
							<li> Tant que le compte utilisateur est actif</li>
							<li> Jusqu’à suppression du compte par l’utilisateur </li>
							<li>
								Ou pendant une durée raisonnable nécessaire à des obligations
								techniques ou légales
							</li>
						</ul>
						<p className="pt-2">
							Les logs techniques sont conservés temporairement et supprimés
							régulièrement.
						</p>
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							7. Sécurité des données
						</h3>
						Nous mettons en place plusieurs mesures de sécurité : * mots de
						passe hachés avec Argon2 * authentification JWT * limitation du
						nombre de requêtes (rate limiting) * protection XSS * sécurisation
						des headers HTTP * validation des données entrantes * accès sécurisé
						à la base de données Malgré nos efforts, aucun système n’est
						totalement invulnérable.
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							8. Partage des données
						</h3>
						Les données ne sont partagées avec aucun tiers commercial. Certaines
						données peuvent transiter via des services techniques nécessaires au
						fonctionnement du projet : * hébergement * base de données * outils
						de développement et de déploiement
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							9. Vos droits
						</h3>
						Conformément au RGPD, vous disposez des droits suivants : * droit
						d’accès * droit de rectification * droit de suppression * droit à la
						limitation du traitement * droit d’opposition * droit à la
						portabilité des données Vous pouvez exercer ces droits à l’adresse
						suivante : 📧 [EMAIL_DE_CONTACT]
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							10. Suppression du compte
						</h3>
						Vous pouvez demander la suppression de votre compte et de vos
						données associées. Certaines données techniques ou obligations
						légales peuvent nécessiter une conservation limitée temporaire.
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							11. Cookies
						</h3>
						Actuellement, l’application n’utilise pas de cookies publicitaires
						ni de suivi marketing. Des cookies techniques ou de session peuvent
						être utilisés pour le fonctionnement de l’authentification.
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							12. Modification de la politique
						</h3>
						Cette politique peut être modifiée afin de refléter les évolutions
						techniques, légales ou fonctionnelles du projet. La date de mise à
						jour sera indiquée en haut de cette page.
						<h3 className="text-2xl text-center font-semibold tracking-tight py-6">
							13. Contact
						</h3>
						Pour toute question concernant cette politique ou vos données
						personnelles : 📧 [EMAIL_DE_CONTACT]
					</article>
				</section>
			</main>

			<PublicFooter />
		</div>
	);
}
