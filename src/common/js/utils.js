/* eslint-disable */
export const RestoreAction = (playbackcm, obj) => {
  for (var i = 0; i < obj.text.length; i++) {
    /* 设置鼠标行标示 */
    // playbackcm.setMarker(obj.from.line + i, '<span class="text-primary glyphicon glyphicon-pencil"></span>');

    /* 设置鼠标输入指针 */
    playbackcm.setCursor({ line: obj.from.line + i, ch: obj.from.ch });
    //以下代码处理其他
    if (obj.text.length === 3 && obj.text[1] !== '' && i === 1) {
      playbackcm.setSelection({ line: obj.from.line + i, ch: 0 });
    } else if (obj.text.length === 3 && obj.text[2] !== '' && i === 2) {
      playbackcm.setSelection({ line: obj.from.line + i, ch: 0 });
    //以下代码处理文字块选择并回车的问题 
    } else if (obj.text.length === 2 && obj.text[i] === '' && i === 1) {
      playbackcm.setSelection({ line: obj.from.line + i, ch: 0 });
    //以下处理块选择并且粘贴多行问题
    } else {
      if (i == 0) {
        playbackcm.setSelection({ line: obj.from.line + i, ch: obj.from.ch }, { line: obj.to.line + i, ch: obj.to.ch });
      } else {
        playbackcm.setSelection({ line: obj.from.line + i, ch: 0 }, { line: obj.from.line + i, ch: 0 });
      }
    }
    if (i !== obj.text.length - 1) {
        playbackcm.replaceSelection(obj.text[i] + '\n');
    } else {
        playbackcm.replaceSelection(obj.text[i]);
    }
  }
  if (obj.next) {
    RestoreAction(playbackcm, obj.next);
  }
}


export const launchFullScreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
export const exitFullscreen = (element) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozExitFullScreen) {
        document.mozExitFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

export const isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone", "iPod", "iPad"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

export const insertLibrary = (index, editor) => {
  if (index == 0) {
        editor.replaceSelection('<img src="http://www.igeekbar.com/igeekbar/laitu/300x200&text=hello world/222222/ffffff" alt="占位图片">\n', 'end')
      } else if (index == 1) { 
        editor.replaceSelection('<script src="https:\/\/cdn.bootcss.com\/jquery\/3.2.1\/jquery.min.js"><\/script>\n', 'end')
      } else if (index == 2) {
        editor.replaceSelection('<script src="https:\/\/cdn.bootcss.com\/bootstrap\/3.3.7\/js\/bootstrap.min.js"><\/script>\n', 'end')
      } else if (index == 3) {
        editor.replaceSelection('<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">\n', 'end')
      } else if (index == 4) {
        editor.replaceSelection('<!doctype html>\n' +
                                '<html>\n' +
                                '<head>\n' +
                                '  <meta charset="UTF-8">\n' +
                                '  <title>Document</title>\n' +
                                '</head>\n' +
                                '<body>\n' +
                                '  \n' +
                                '</body>\n' +
                                '</html>', 'end')
      }
}

export const showWebView = (iframe, code) => {
  var doc

  if(iframe.contentDocument){
    doc = iframe.contentDocument
  }else if(iframe.contentWindow){
    doc = iframe.contentWindow.document
  }else{
    doc = iframe.document
  }

  doc.open()
  doc.writeln(code)
  doc.close()
}



