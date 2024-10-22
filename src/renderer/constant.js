const TYPES = {

  web_url: 'web_url',
  tools: 'tools'

}

export const MainFnConfig = [
  {
    name: 'Search',
    id: 'search',
    icon: 'icon-pm-search',
    contents: [
      { name: 'POE', id: 'poe' },
      { name: 'Google', id: 'google' }
    ]
  },
  {
    name: 'DOC',
    id: 'doc',
    icon: 'icon-pm-doc',
    contents: [
      { name: 'MDN', id: 'mdn', type: TYPES.web_url, url: "" },
      { name: "Linux命令", id: 'linux_cmd' }
    ],
  },
  {
    name: 'Tools',
    id: 'tools',
    icon: 'icon-pm-tools',
    contents: [
      { name: '图片压缩', id: 'png_tiny', type: TYPES.web_url, url: "" },
      { name: '上传OSS', id: 'png_to_oss', type: TYPES.tools },
      { name: '图片压缩&上传OSS', id: 'png_tiny_oss', type: TYPES.tools },
      { name: 'Color', id: 'color', type: TYPES.tools, url: "" },

    ]
  }

]