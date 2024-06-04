import Card from "./Card";
import { SkillLogo } from "./utils/SkillLogo.ts";
import styles from './Skills.module.css';
import appStyles from '../App/App.module.css';
function Skills() {

    const backend: SkillLogo[] = [
        new SkillLogo('Node.js', 'nodejs.png'),
        new SkillLogo('Nest.js', 'nestjs.png'),
        new SkillLogo('MongoDB', 'mongodb.png'),
        new SkillLogo('GraphQL', 'graphql.png'),
    ];
    const frontend: SkillLogo[] = [
        new SkillLogo('React', 'react.png'),
        new SkillLogo('JavaScript', 'js.png'),
        new SkillLogo('TypeScript', 'typescript.png'),
        new SkillLogo('HTML', 'html.png'),
        new SkillLogo('CSS', 'css.png'),
    ];
    const mobile: SkillLogo[] = [
        new SkillLogo('Dart', 'dart.png'),
        new SkillLogo('Flutter', 'flutter.png'),
        new SkillLogo('Kotlin', 'kotlin.png'),
        new SkillLogo('Compose', 'compose.png'),
        new SkillLogo('Swift', 'swift.png'),
        new SkillLogo('SwiftUI', 'swiftui.png'),
        new SkillLogo('App Store', 'appstore.png'),
        new SkillLogo('Google Play', 'googleplay.png'),
        new SkillLogo('Firebase', 'firebase.png'),
        new SkillLogo('AdMob', 'admob.svg'),
        new SkillLogo('Apple', 'apple.webp'),
        new SkillLogo('Android', 'android.png'),
    ];

    const vr: SkillLogo[] = [
        new SkillLogo('RealityKit', 'realitykit.png'),
        new SkillLogo('Composer Pro', 'composerpro.png'),
        new SkillLogo('Xcode', 'xcode.png'),
        new SkillLogo('Blender', 'blender.png'),
    ];

    const other: SkillLogo[] = [
        new SkillLogo('C', 'ce.png'),
        new SkillLogo('C++', 'cpp.png'),
        new SkillLogo('VS Code', 'vscode.png'),
        new SkillLogo('Android Studio', 'androidstudio.webp'),
    ];

    return (
        <section id={styles.skills}>
            <h2 className={appStyles.heading}>Skills</h2>
            <div className={styles.container_cards}>
                <Card title="Backend" flex={1} logoList={backend} />
                <Card title="Frontend" flex={1} logoList={frontend} />
                <Card title="Mobile" flex={1.5} logoList={mobile} />
                <Card title="VR" flex={1} logoList={vr} />
                <Card title="Other" flex={1} logoList={other} />
            </div>
        </section>
    );
}
export default Skills;