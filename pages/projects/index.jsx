import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navigation from "../../components/Navigation/pageNav";
import { projectList } from "../../data/listOfProjects";

import styles from "./projects.module.scss";

const index = () => {
  const router = useRouter();

  const routeHandler = (route) => {
    router.push(route);
  };

  return (
    <>
      <Navigation />
      <div className={styles.project_content}>
        <h1>Projects</h1>
        <div className={styles.cards}>
          {projectList.map((project, k) => {
            return (
              <div
                className={styles.card}
                onClick={() => routeHandler(project.route)}
                key={k}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  className={styles.img}
                  layout="fill"                 
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;