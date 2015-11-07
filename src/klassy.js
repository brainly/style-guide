import bem from 'react-bem-helper';

export default function klassy (packageJSON, override) {
  let name = packageJSON;
  if (typeof packageJSON === 'object') {
    name = packageJSON.name;
  }

  const options = Object.assign({ name }, override);

  return bem(options);
}
