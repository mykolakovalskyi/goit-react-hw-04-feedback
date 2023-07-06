import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={css.section}>
      {title}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired,
};
