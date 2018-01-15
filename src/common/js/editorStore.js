export const ADD_TO_CART = 'ADD_TO_CART'
export const COMPILE = 'COMPILE'

const FILE_KEY = 'FILE'

const initFileData = [
  {
    path: '/index.html',
    name: 'index.html',
    type: 'text/html',
    code: '',
    children: []
  },
  {
    path: '/mian.css',
    name: 'mian.css',
    type: 'text/css',
    code: '',
    children: []
  },
  {
    path: '/main.js',
    name: 'main.js',
    type: 'text/javascript',
    code: '',
    children: []
  }
]

// 获取文件
export let loadFileData = function () {
  let fileDataStr = localStorage.getItem(FILE_KEY)
  try {
    return JSON.parse(fileDataStr) || initFileData
  } catch (e) {
    console.error(e)
    return initFileData
  }
}

// 获取选中的文件数据
export let loadOptData = () => {
  let data = {}
  return data
}

let saveLocalData = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

// 添加代码
export let addCode = function (data) {
  let fileData = loadFileData()
  let {index, code} = data
  console.log('fileData', data)
  fileData[index].code = code
  saveLocalData(FILE_KEY, fileData)
  return fileData
}

export let clearCode = () => {
  let data = ''
  localStorage.setItem('editorContent', data)
  return data
}