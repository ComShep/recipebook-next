import Link from "next/link";
import { IconFacebook, IconInst, IconLogoFooter, IconTikTok, IconYoutube } from "@/components/ui/icons/Icons";
import styles from './Footer.module.css'

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.top}>
				<Link href="/">
					<div className={styles.logo}>
						<IconLogoFooter />
						<div>Cooks <br /> Delight</div>
					</div>
				</Link>
				<nav className={styles.menu}>
					<Link href="/">HOME</Link>
					<Link href="/recipes">RESIPES</Link>
					<Link href="/cooking-tips">cooking tips</Link>
					<Link href="/about">ABOUT US</Link>
				</nav>
				<div className={styles.social}>
					<a href="#"><IconTikTok /></a>
					<a href="#"><IconFacebook /></a>
					<a href="#"><IconInst /></a>
					<a href="#"><IconYoutube /></a>
				</div>
			</div>
			<div className={styles.bottom}>
				<p>Copyright: © {year} Cooks Delight.</p>
			</div>
		</footer>
	)
}
