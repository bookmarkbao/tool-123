export default [{
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "options",
    description: 'help'
  },{
    name: 'gen',
    alias: 'g',
    type: String,
    group: "options",
    description: 'generate all spec-tpl-js files with folder',
    defaultOption: true
  },
  {
    name: 'single',
    alias: 's',
    type: String,
    group: "options",
    description: 'generate spec js  single file'
  },
    {
    name: 'folder',
    alias: 'f',
    type: Boolean,
    group: "options",
    description: 'generate spec js  single file inside new folder'
  },
  {
    name: 'postfix',
    type: String,
    group: "options",
    description: 'create postfix in file name'
  },{
    name: 'spec',
    type: String,
    group: "options",
    description: 'set the default spec language'
  }

]
