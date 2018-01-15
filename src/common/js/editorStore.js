export const ADD_TO_CART = 'ADD_TO_CART'
export const COMPILE = 'COMPILE'

const FILE_KEY = 'FILE'

const initFileData = [
  {
    name: 'index.html',
    code: 'index.html',
    children: []
  },
  {
    name: 'mian.css',
    code: 'mian.css',
    children: []
  },
  {
    name: 'main.js',
    code: 'main.js',
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