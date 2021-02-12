export default function objectSample() {
  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };
  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('Object object sample 1:', capitals);
}
