import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css'
import Markup from './Markup'
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuClick, setMenuClick] = useState(false);
    const sectionRef = useRef(null);
    const onMenuMobileClick = () => setMenuClick(false);
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            let fromTop = window.scrollY;
            if (sectionRef.current) {
                const rect = (sectionRef.current as HTMLElement).getBoundingClientRect();
                let top = rect.height - 100
                if (fromTop >= top) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [setIsVisible]);


    return (
        <header id='header' ref={sectionRef} >
            <nav className={[styles.navigation, isVisible ? styles.sticky : null, isMenuClick ? styles.nav_list_active : null].join(' ')}>
                <ul className={[styles.navigation_list, styles.nav_list_active].join(' ')}>
                    <li key='header'><a className={styles.navigation_item} onClick={onMenuMobileClick} href='#'>{t('Home')}</a></li>
                    <li key='about'><a className={styles.navigation_item} onClick={onMenuMobileClick} href='#about'>{t('About')}</a></li>
                    <li key='skills'><a className={styles.navigation_item} onClick={onMenuMobileClick} href="#skills">{t('Skills')}</a></li>
                    <li key='experience'><a className={styles.navigation_item} onClick={onMenuMobileClick} href="#experience">{t('Experience')}</a></li>
                    <li key='projects'><a className={styles.navigation_item} onClick={onMenuMobileClick} href="#projects">{t('Projects')}</a></li>
                    <li key='contact'><a className={styles.navigation_item} onClick={onMenuMobileClick} href="#contact">{t('Contact')}</a></li>
                </ul>
            </nav>

            <div className={styles.menu_btn_container} ><div className={styles.menu_btn} onClick={() => setMenuClick(!isMenuClick)}></div></div>
            {isMobile ? null : <div style={{ paddingTop: isVisible ? '4rem' : '0' }}></div>}
            <div className={styles.header_row}>
                <div className={styles.header_column}>
                    <h1 className={styles.header_title}>{t('Hello')}
                        <h2 className={styles.header_description}>
                            {t('HeaderDescriptionOne')}
                            <span className={styles.header_description_primary}>
                                {t('HeaderDescriptionTwo')}
                            </span>
                        </h2>
                    </h1>

                </div>
                <Markup />


            </div>

        </header>

    )
}

export default Header