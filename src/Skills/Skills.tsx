import Card from "./Card";
import { SkillLogo } from "./utils/SkillLogo.ts";
import styles from './Skills.module.css';
import appStyles from '../App/App.module.css';
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { gsap } from 'gsap';

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

    const skillsRef = useRef(null);
    const cardsRef = useRef(null);
    const headingRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: skillsRef.current,
                start: "top center",
            }
        });
        tl.from(headingRef.current, { y: 10, opacity: 0, duration: 0.5 })
        tl.from(cardsRef.current, { y: 10, opacity: 0, duration: 0.5 })
    }, { scope: skillsRef })

    return (
        <section ref={skillsRef} id="skills" className={styles.skills}>
            <h2 ref={headingRef} className={appStyles.heading}>Skills</h2>
            <div ref={cardsRef} className={styles.container_cards}>
                <Card key={'backend'} title="Backend" flex={1} logoList={backend} />
                <Card key={'frontend'} title="Frontend" flex={1} logoList={frontend} />
                <Card key={'mobile'} title="Mobile" flex={1.5} logoList={mobile} />
                <Card key={'vr'} title="VR" flex={1} logoList={vr} />
                <Card key={'other'} title="Other" flex={1} logoList={other} />
            </div>
        </section>
    );
}
export default Skills;
