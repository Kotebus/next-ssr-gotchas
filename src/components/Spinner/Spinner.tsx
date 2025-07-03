import {Loader} from 'react-feather';

import styles from './Spinner.module.css';
import {CSSProperties} from "react";

function Spinner({
                     color = 'black',
                     size = 24,
                     opacity = 0.5,
                     speed = 1200,
                 }) {
    return (
        <span
            className={styles.wrapper}
            style={{
                opacity,
                '--speed': `${speed}ms`,
                width: size,
                height: size,
            } as CSSProperties}
        >
      <Loader color={color} size={size}/>
    </span>
    );
}

export default Spinner;
