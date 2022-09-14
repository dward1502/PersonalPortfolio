import React from "react";
import Navigation from "../../components/Navigation/pageNav";

import { projects } from "../../data/projects";

const SpecificProjectPage = ({ projectInfo }) => {
  return (
    <>
      <Navigation />
      <h1>Specific Project</h1>
      <p>{projectInfo.title}</p>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const project = projects.filter((p) => p.id === params.id);

  return {
    props: {
      projectInfo: project[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));
  return { paths, fallback: false };
};

// export async function getStaticProps(context) {
//   const projectID = context.params.slug;
//   console.log(projectID);

//   console.log(`This is json in static props ${JSON.stringify(projects)}`);

//   return {
//     props: {
//       projectInfo: projects,
//     },
//   };
// }

// export function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: false,
//   };
// }

export default SpecificProjectPage;
