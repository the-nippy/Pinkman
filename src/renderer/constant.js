const TYPES = {
  web_url: 'web_url',
  tools: 'tools'
}

export const MainFnConfig = [{
  name: 'Search',
  id: 'search',
  icon: 'icon-pm-search',
  contents: [{
    name: 'POE-AI问答聚合工具',
    id: 'poe',
    icon: 'https://psc2.cf2.poecdn.net/assets/_next/static/media/poeFullMultibot.aa56caf5.svg',
    desc: ''
  },
  {
    name: 'Google',
    id: 'google',
    icon: 'icon-pm-google-line',
    icon_color: '#a00'
  }
  ]
},
{
  name: 'DOC',
  id: 'doc',
  icon: 'icon-pm-doc',
  contents: [{
    name: '打开MDN文档',
    id: 'mdn',
    type: TYPES.web_url,
    url: "",
    icon: 'icon-pm-a-FrontEnd',
    desc: '',
    icon_color: '#a00'
  },
  {
    name: "打开Linux命令速查",
    id: 'linux_cmd',
    icon: 'icon-pm-linux',
    desc: '',
    icon_color: "#222"
  }
  ],
},
{
  name: 'Tools',
  id: 'tools',
  icon: 'icon-pm-tools',
  contents: [{
    name: 'tiny-png压缩图片',
    id: 'png_tiny',
    type: TYPES.web_url,
    url: "",
    icon: 'icon-pm-tupian',
    desc: '',
    icon_color: "rgb(15 112 45)"
  },
  {
    name: '图片上传OSS',
    id: 'png_to_oss',
    type: TYPES.tools,
    icon: 'icon-pm-yunduanshangchuan',
    desc: '',
    icon_color: "rgb(205 118 10)"
  },
  {
    name: '压缩图片并上传OSS',
    id: 'png_tiny_oss',
    type: TYPES.tools,
    icon: 'icon-pm-shangchuantupian',
    desc: '',
    icon_color: "rgb(8 28 159)"
  },
  {
    name: '颜色工具',
    id: 'color',
    type: TYPES.tools,
    url: "",
    icon: 'icon-pm-color',
    desc: '',
    icon_color: "rgb(221 6 181)"
  },

  ]
}

]