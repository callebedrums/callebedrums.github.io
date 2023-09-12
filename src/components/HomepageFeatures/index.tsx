import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: "Professional" }),
    link: "/professional",
    Svg: require("@site/static/img/software-developer.svg").default,
    description: (
      <Translate>
        Learn about my professional carrear, how I did started, how I
        progressed, and where I am right now.
      </Translate>
    ),
  },
  {
    title: translate({ message: "Briography" }),
    link: "/biography",
    Svg: require("@site/static/img/bio.svg").default,
    description: (
      <Translate>
        Get to know a little bit about me, my history, my hobbies, family and
        friends.
      </Translate>
    ),
  },
  {
    title: translate({ message: "Faith" }),
    link: "/faith",
    Svg: require("@site/static/img/cross.svg").default,
    description: (
      <Translate>
        Jesus Christ is my Lord and Savior. I submit to Him and follow Him. By
        His Grace, through faith, I was made righteous before God.
      </Translate>
    ),
  },
];

function Feature({ title, link, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
