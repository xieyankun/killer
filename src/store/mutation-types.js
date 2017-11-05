// 获取editor内容
export let loadFile = () => {
  let dataStr = localStorage.getItem('editorContent')
  try {
    return dataStr
  } catch (e) {
    localStorage.setItem('editorContent', '')
    return dataStr
  }
}

// 添加代码
export let addCode = (code) => {
  let data = code
  localStorage.setItem('editorContent', data)
  return data
}

export let clearCode = () => {
  let data = ''
  localStorage.setItem('editorContent', data)
  return data
}