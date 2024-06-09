import styles from './Skills.module.css';
import { SkillLogo } from "./utils/SkillLogo.ts";

function Card({ title, flex, logoList }: { title: string, flex: number, logoList: SkillLogo[] }) {
    const startPath = 'logos/';

    return (
        <div className={styles.card} style={{width: flex == 1 ? '60%' : '100%'}} >
            <div className={styles.card_top}>
                <h2 style={{ alignContent: 'top', textAlign: 'center', padding: '1rem', margin: 0 }}>{title}</h2>
            </div>

            <div className={styles.container_logo_list} style={{ gridTemplateColumns: flex == 1 ? '1fr' : '1fr 1fr' }}>
                {
                    logoList.map((logo) =>
                        <div key={logo.name} className={styles.container_img_with_tooltip}>
                            <span className={styles.tooltip_text}>{logo.name}</span>

                            <div className={styles.container_img}>
                                <img className={styles.logo_img} src={startPath + '/' + logo.asset} alt={logo.name} />
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}
export default Card;