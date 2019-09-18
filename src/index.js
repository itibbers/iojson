class IO {
  constructor() {}

  exportJSON(data = {}, filename) {
    let link = document.createElement('a')
    if (!filename) {
      filename = `${Date.now()}.json`
    }
    if (!/\.json$/.test(filename)) {
      filename += '.json'
    }
    link.download = filename
    link.href = 'data:text/plain,' + JSON.stringify(data)
    link.click()
    link = null
  }

  importJSON() {
    return new Promise((resolve, reject) => {
      let file = document.createElement('input')
      file.type = 'file'
      file.onchange = (event) => {
        let files = event.target.files
        if (!files || !files.length) {
          file = null
          reject({
            errno: -1,
            msg: 'No files'
          })
        }

        let reader = new FileReader()
        reader.onload = (event) => {
          try {
            let config = JSON.parse(event.target.result)
            resolve(config)
          } catch (e) {
            reject(e)
          }
          file = null
        }
        reader.readAsText(files[0])
      }

      file.click()
    })
  }
}

export default new IO()
