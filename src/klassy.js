import bem from 'react-bem-helper';

export default function klassy (packageJSON, override) {
  const name = packageJSON.name;
  const options = Object.assign({ name }, override);

  return bem(options);
}
