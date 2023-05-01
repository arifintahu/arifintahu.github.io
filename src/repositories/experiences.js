import experiences from '../data/experiences.json';

export function getExperiences() {
  return experiences.filter((item) => item.isShow);
}
