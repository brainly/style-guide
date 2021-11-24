// @flow strict

const color = {
  fullColorPalette: [
    {
      name: 'black',
      variable: '$black',
      hex: '000000',
    },
    {
      name: 'white',
      variable: '$white',
      hex: 'ffffff',
    },
    {
      name: 'blue-70',
      variable: '$blue-70',
      hex: '002238',
    },
    {
      name: 'blue-60',
      variable: '$blue-60',
      hex: '014A82',
    },
    {
      name: 'blue-50',
      variable: '$blue-50',
      hex: '0089E3',
    },
    {
      name: 'blue-40',
      variable: '$blue-40',
      hex: '4FB3F6',
    },
    {
      name: 'blue-30',
      variable: '$blue-30',
      hex: 'B9E2FE',
    },
    {
      name: 'blue-20',
      variable: '$blue-20',
      hex: 'D9F0FF',
    },
    {
      name: 'blue-10',
      variable: '$blue-10',
      hex: 'EDF8FF',
    },
    {
      name: 'green-70',
      variable: '$green-70',
      hex: '002E13',
    },
    {
      name: 'green-60',
      variable: '$green-60',
      hex: '00672E',
    },
    {
      name: 'green-50',
      variable: '$green-50',
      hex: '24A865',
    },
    {
      name: 'green-40',
      variable: '$green-40',
      hex: '60D399',
    },
    {
      name: 'green-30',
      variable: '$green-30',
      hex: '9CE8C2',
    },
    {
      name: 'green-20',
      variable: '$green-20',
      hex: 'E3F7ED',
    },
    {
      name: 'green-10',
      variable: '$green-10',
      hex: 'F0FAF5',
    },
    {
      name: 'indigo-70',
      variable: '$indigo-70',
      hex: '0C114D',
    },
    {
      name: 'indigo-60',
      variable: '$indigo-60',
      hex: '133191',
    },
    {
      name: 'indigo-50',
      variable: '$indigo-50',
      hex: '163BF3',
    },
    {
      name: 'indigo-40',
      variable: '$indigo-40',
      hex: '6D83F3',
    },
    {
      name: 'indigo-30',
      variable: '$indigo-30',
      hex: 'BDC7FB',
    },
    {
      name: 'indigo-20',
      variable: '$indigo-20',
      hex: 'EBEEFF',
    },
    {
      name: 'indigo-10',
      variable: '$indigo-10',
      hex: 'F2F4FF',
    },
    {
      name: 'red-70',
      variable: '$red-70',
      hex: '8D1A00',
    },
    {
      name: 'red-60',
      variable: '$red-60',
      hex: 'CF1D00',
    },
    {
      name: 'red-50',
      variable: '$red-50',
      hex: 'FF341A',
    },
    {
      name: 'red-40',
      variable: '$red-40',
      hex: 'FF7968',
    },
    {
      name: 'red-30',
      variable: '$red-30',
      hex: 'FFC7BF',
    },
    {
      name: 'red-20',
      variable: '$red-20',
      hex: 'FFE8E5',
    },
    {
      name: 'red-10',
      variable: '$red-10',
      hex: 'FFF1F0',
    },
    {
      name: 'yellow-70',
      variable: '$yellow-70',
      hex: '5B3100',
    },
    {
      name: 'yellow-60',
      variable: '$yellow-60',
      hex: '935000',
    },
    {
      name: 'yellow-50',
      variable: '$yellow-50',
      hex: 'C98600',
    },
    {
      name: 'yellow-40',
      variable: '$yellow-40',
      hex: 'FBBE2E',
    },
    {
      name: 'yellow-30',
      variable: '$yellow-30',
      hex: 'FEDD8E',
    },
    {
      name: 'yellow-20',
      variable: '$yellow-20',
      hex: 'FFF3D6',
    },
    {
      name: 'yellow-10',
      variable: '$yellow-10',
      hex: 'FFFAF0',
    },
    {
      name: 'gray-70',
      variable: '$gray-70',
      hex: '323C45',
    },
    {
      name: 'gray-60',
      variable: '$gray-60',
      hex: '46535F',
    },
    {
      name: 'gray-50',
      variable: '$gray-50',
      hex: '687B8C',
    },
    {
      name: 'gray-40',
      variable: '$gray-40',
      hex: 'C3D1DD',
    },
    {
      name: 'gray-30',
      variable: '$gray-30',
      hex: 'E1EAF1',
    },
    {
      name: 'gray-20',
      variable: '$gray-20',
      hex: 'EBF2F7',
    },
    {
      name: 'gray-10',
      variable: '$gray-10',
      hex: 'F5F8FA',
    },
  ],
  text: [
    {
      name: 'text-black',
      variable: '$text-black',
      hex: '000000',
    },
    {
      name: 'text-white',
      variable: '$text-white',
      hex: 'ffffff',
    },
    {
      name: 'text-blue-60',
      variable: '$text-blue-60',
      hex: '014A82',
    },
    {
      name: 'text-blue-40',
      variable: '$text-blue-40',
      hex: '4FB3F6',
    },
    {
      name: 'text-green-60',
      variable: 'text-$green-60',
      hex: '00672E',
    },
    {
      name: 'text-green-40',
      variable: '$text-green-40',
      hex: '60D399',
    },
    {
      name: 'text-indigo-60',
      variable: '$text-indigo-60',
      hex: '133191',
    },
    {
      name: 'text-indigo-40',
      variable: '$text-indigo-40',
      hex: '6D83F3',
    },
    {
      name: 'text-red-60',
      variable: '$text-red-60',
      hex: 'CF1D00',
    },
    {
      name: 'text-red-40',
      variable: '$text-red-40',
      hex: 'FF7968',
    },
    {
      name: 'text-yellow-60',
      variable: '$text-yellow-60',
      hex: '935000',
    },
    {
      name: 'text-yellow-40',
      variable: '$text-yellow-40',
      hex: 'FBBE2E',
    },
    {
      name: 'text-gray-70',
      variable: '$text-gray-70',
      hex: '323C45',
    },
    {
      name: 'text-gray-60',
      variable: '$text-gray-60',
      hex: '46535F',
    },
    {
      name: 'text-gray-40',
      variable: '$text-gray-40',
      hex: 'C3D1DD',
    },
  ],
  icon: [
    {
      name: 'icon-black',
      variable: '$icon-black',
      hex: '000000',
    },
    {
      name: 'icon-white',
      variable: '$icon-white',
      hex: 'ffffff',
    },
    {
      name: 'icon-blue-50',
      variable: '$icon-blue-50',
      hex: '0089E3',
    },
    {
      name: 'icon-green-50',
      variable: '$icon-green-50',
      hex: '24A865',
    },
    {
      name: 'icon-indigo-50',
      variable: '$icon-indigo-50',
      hex: '163BF3',
    },
    {
      name: 'icon-red-50',
      variable: '$icon-red-50',
      hex: 'FF341A',
    },
    {
      name: 'icon-yellow-50',
      variable: '$icon-yellow-50',
      hex: 'C98600',
    },
    {
      name: 'icon-gray-60',
      variable: '$icon-gray-60',
      hex: '46535F',
    },
    {
      name: 'icon-gray-50',
      variable: '$icon-gray-50',
      hex: '687B8C',
    },
    {
      name: 'icon-gray-40',
      variable: '$icon-gray-40',
      hex: 'C3D1DD',
    },
  ],
};

module.exports = color;
