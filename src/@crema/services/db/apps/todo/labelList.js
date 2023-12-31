export const labelList = [
  {
    id: 211,
    name: 'Html',
    alias: 'html',
    label: 'Html',
    value: 'Html',
    color: '#dc3545',
  },
  {
    id: 212,
    name: 'CSS',
    alias: 'css',
    label: 'CSS',
    value: 'CSS',
    color: '#0d6efd',
  },
  {
    id: 213,
    name: 'JQuery',
    alias: 'jquery',
    label: 'JQuery',
    value: 'JQuery',
    color: '#198754',
  },
  {
    id: 214,
    name: 'Node.js',
    alias: 'node',
    label: 'Node.js',
    value: 'Node.js',
    color: '#495057',
  },
];

export const onGetLabel = (labelId) => {
  return labelList.find((label) => label.id === labelId);
};
