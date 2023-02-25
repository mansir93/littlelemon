import styles from './Main.module.css';
import ButtonLink from './ButtonLink';
import SpecialCard from './SpecialCard';
import TestimonialCard from './TestimonialCard';
import greekSalad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import marioAndAdrianA from '../assets/mario-and-adrian-a.jpg';
import marioAndAdrianB from '../assets/mario-and-adrian-b.jpg';

function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.highlights}>
        <h3>This weeks specials</h3>
        <ButtonLink href="menu">Online menu</ButtonLink>

        <SpecialCard
          image={greekSalad}
          title="Greek Salad"
          price="12.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl."
          href="menu"
        />

        <SpecialCard
          image={bruchetta}
          title="Bruchetta"
          price="9.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl."
          href="menu"
        />

        <SpecialCard
          image={lemonDessert}
          title="Lemon Dessert"
          price="9.99"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl."
          href="menu"
        />
      </section>

      <section className={styles.testimonials}>
        <h3>Testimonials</h3>

        <TestimonialCard
          rating={5}
          avatar="https://api.dicebear.com/5.x/avataaars/svg?seed=Luna"
          name="Luna"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl."
        />

        <TestimonialCard
          rating={4}
          avatar="https://api.dicebear.com/5.x/avataaars/svg?seed=Harley"
          name="Harley"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl."
        />

        <TestimonialCard
          rating={4}
          avatar="https://api.dicebear.com/5.x/avataaars/svg?seed=Leo"
          name="Leo"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nunc vel nisl."
        />
      </section>

      <section className={styles.about}>
        <article>
          <h3>Little Lemon</h3>
          <h4>Chicago</h4>

          <p>
            Eius elit quo tota interesset suspendisse nonumy velit perpetua. Moderatius debet veri ullamcorper utamur
            causae expetenda graeco esse. Tortor quot graeco oratio vis minim. Vituperata iaculis nihil non duis errem
            neglegentur usu. Interesset mentitum dicat nonumes dolorem voluptaria.
          </p>

          <p>
            Luptatum placerat facilis singulis ludus verterem potenti. Orci at definitiones dolore homero salutatus
            tempus efficitur graeci scelerisque.
          </p>
        </article>

        <aside>
          <img src={marioAndAdrianA} alt="about" />
          <img src={marioAndAdrianB} alt="about" />
        </aside>
      </section>
    </main>
  );
}

export default Main;
