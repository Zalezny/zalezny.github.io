import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Markup({ headerRef }: { headerRef: React.MutableRefObject<null> }) {
    const slashRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const allRef = useRef(null);
    useGSAP(() => {
        // Pierwsza animacja
        const tl = gsap.timeline();
        tl.from(slashRef.current, { y: -600, duration: 0.8 })
            .from(leftRef.current, { x: -400, opacity: 0, duration: 0.8 })
            .from(rightRef.current, { x: 400, opacity: 0, duration: 0.8 })

        // Druga animacja
        const tl2 = gsap.timeline({ repeat: -1, repeatRefresh: false });
        tl2.to(allRef.current, { y: 20, duration: 3 })
        tl2.to(allRef.current, { y: -20, duration: 3 })
        tl2.to(allRef.current, { y: 0, duration: 1 });
    });

    return (
        <div>
            <svg ref={allRef} style={{ height: '60rem', fill: 'rgb(1, 97, 239)', zIndex: '1' }} width="523" height="523" viewBox="0 0 523 523" xmlns="http://www.w3.org/2000/svg">
                <path ref={slashRef} id="slash" d="M284.102 193.852L277.9 192.152C277.102 191.886 276.315 191.969 275.551 192.402C274.784 192.836 274.266 193.486 273.999 194.353L236.699 323.454C236.433 324.321 236.516 325.139 236.949 325.905C237.382 326.672 238.032 327.188 238.899 327.454L245.099 329.155C245.899 329.424 246.683 329.34 247.45 328.906C248.217 328.471 248.734 327.822 249 326.957L286.301 197.853C286.567 196.987 286.484 196.169 286.05 195.402C285.617 194.635 284.969 194.118 284.102 193.852Z" />
                <path ref={leftRef} id="left" d="M228.202 219.054C228.202 218.188 227.868 217.42 227.201 216.754L222.201 211.754C221.534 211.087 220.767 210.753 219.901 210.753C219.034 210.753 218.267 211.087 217.6 211.754L171 258.354C170.333 259.02 170 259.787 170 260.654C170 261.52 170.334 262.287 171 262.954L217.6 309.554C218.266 310.221 219.032 310.553 219.9 310.553C220.768 310.553 221.534 310.22 222.2 309.554L227.201 304.556C227.868 303.89 228.201 303.123 228.201 302.255C228.201 301.39 227.868 300.622 227.201 299.956L187.901 260.654L227.201 221.354C227.869 220.688 228.202 219.921 228.202 219.054Z" />
                <path ref={rightRef} id="right" d="M352 258.353L305.399 211.753C304.733 211.086 303.966 210.752 303.1 210.752C302.233 210.752 301.468 211.086 300.799 211.753L295.801 216.753C295.135 217.419 294.802 218.185 294.802 219.053C294.802 219.92 295.134 220.687 295.801 221.353L335.102 260.654L295.801 299.956C295.135 300.623 294.802 301.39 294.802 302.255C294.802 303.123 295.134 303.89 295.801 304.556L300.799 309.554C301.468 310.221 302.233 310.553 303.1 310.553C303.966 310.553 304.733 310.22 305.399 309.554L352 262.954C352.667 262.288 353 261.519 353 260.653C353 259.786 352.667 259.019 352 258.353Z" />
            </svg>
        </div>
    );
}

export default Markup;