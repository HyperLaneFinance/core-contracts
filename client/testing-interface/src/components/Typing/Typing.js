import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Typing.module.css';
import Typed from 'typed.js';

export default function Typing() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      // strings that will be rendered for typewriter effect
      strings: ['Hyperlane'],
      startDelay: 1000,
      typeSpeed: 50, // typeing speed will be 50ms
      backSpeed: 10, // typing backSpeed will be 10ms
      loop: false,
    };

    // elRef refers to the <h1 /> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  // Create reference to store the DOM element containing the animation
  const el2 = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed2 = React.useRef(null);

  React.useEffect(() => {
    const options = {
      // strings that will be rendered for typewriter effect
      strings: [
        'Hyperlane is a decentralized \nfinancial platform that offers \nunder-collateralized\nloans to users worldwide.',
      ],
      typeSpeed: 30, // typeing speed will be 50ms
      startDelay: 1500,
      backSpeed: 10, // typing backSpeed will be 10ms
      loop: false,
    };

    // elRef refers to the <h1 /> rendered below
    typed2.current = new Typed(el2.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed2.current.destroy();
    };
  }, []);

  // Create reference to store the DOM element containing the animation
  const el3 = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed3 = React.useRef(null);

  React.useEffect(() => {
    const options = {
      // strings that will be rendered for typewriter effect
      strings: ['Less limits, more capital.'],
      startDelay: 7000,
      typeSpeed: 40, // typeing speed will be 50ms
      backSpeed: 10, // typing backSpeed will be 10ms
      loop: false,
    };

    // elRef refers to the <h1 /> rendered below
    typed3.current = new Typed(el3.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed3.current.destroy();
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.typeContiner}>
        <h1 ref={el} className={styles.wrapper} />
      </div>
      <div className={styles.typeContiner}>
        <h1 ref={el2} className={styles.description} />
      </div>
      <div className={styles.typeContiner}>
        <h1 ref={el3} className={styles.descriptionBold} />
      </div>
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Hyperlane')
            .callFunction(() => {})
            .pauseFor(2500)
            .callFunction(() => {})
            .start();
        }}
        options={{
          wrapperClassName: styles.wrapper,
        }}
      />
      <div className={styles.separator}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2500)
              .typeString(
                'Hyperlane is a decentralized financial platform that offers'
              )
              .callFunction(() => {})
              .callFunction(() => {})
              .start();
          }}
          options={{
            wrapperClassName: styles.description,
            delay: 40,
          }}
        />
      </div>
      <div className={styles.separator}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2500)
              .typeString('under-collateralized loans to users worldwide.')
              .callFunction(() => {})
              .callFunction(() => {})
              .start();
          }}
          options={{
            wrapperClassName: styles.description,
            delay: 40,
          }}
        />
      </div>
      <div className={styles.separator}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(8000)
              .typeString('Less limits, more capital.')
              .callFunction(() => {})
              .callFunction(() => {})
              .start();
          }}
          options={{
            wrapperClassName: styles.description,
            delay: 40,
          }}
        /> */}
      {/* </div> */}
    </div>
  );
}
