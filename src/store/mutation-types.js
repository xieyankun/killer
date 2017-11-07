const FILE_KEY = 'FILE'

const initFileData = [
  {
    name: '项目文件',
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

let saveLocalData = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

// 添加代码
export let addCode = function (data) {
  let fileData = loadFileData()
  let {index, code} = data
  fileData[index].code = code
  console.log(fileData)
  saveLocalData(FILE_KEY, fileData)
  return fileData
}

export let clearCode = () => {
  let data = ''
  localStorage.setItem('editorContent', data)
  return data
}