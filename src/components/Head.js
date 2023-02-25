import { Helmet } from 'react-helmet';

function Head() {
  return (
    <Helmet>
      <title>Little Lemon | Restaurant with healthy dishes</title>

      <meta
        name="description"
        content="Little Lemon is a restaurant with healthy dishes. We serve breakfast, lunch and dinner."
      />
      <meta name="author" content="Michael Doubek" />

      {/* OpenGraph */}
      <meta property="og:title" content="Little Lemon | Restaurant with healthy dishes" />
      <meta
        property="og:description"
        content="Little Lemon is a restaurant with healthy dishes. We serve breakfast, lunch and dinner."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://littlelemon.exampledomain" />
      <meta property="og:image" content="https://littlelemon.exampledomain/og-image.jpg" />
    </Helmet>
  );
}
export default Head;
