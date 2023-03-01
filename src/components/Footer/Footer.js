import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<p>
				{t('footer')}{' '}
				<strong>
					<a className={styles.contact} href="https://instagram.com/prakashravichandrann">
						Prakash
					</a>
				</strong>{' '}
				| Copyright © 2023
			</p>
		</footer>
	);
}
