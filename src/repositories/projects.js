import projects from '../data/projects.json';

export function getProjects() {
  return projects.filter((item) => item.isShow);
}
