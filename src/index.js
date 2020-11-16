/**
 * Export JSON
 */
export function exportJSON(data = {}, filename) {
  let link = document.createElement('a')
  if (!filename) {
    filename = `${Date.now()}.json`
  }
  if (!/\.json$/.test(filename)) {
    filename += '.json'
  }
  link.download = filename
  link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data))
  link.click()
  link = null
}

/**
 * Import JSON
 */
export function importJSON() {
  return new Promise((resolve, reject) => {
    let input = document.createElement('input')
    input.type = 'file'
    input.onchange = (event) => {
      let files = event.target.files
      if (!files || !files.length) {
        input = null
        reject(new Error('No files'))
      }

      // if (files[0].type !== 'application/json') {
      //   reject(new Error('It is not a json file'))
      // }

      let reader = new FileReader()
      reader.onload = (event) => {
        try {
          let config = JSON.parse(event.target.result)
          resolve(config)
        } catch (e) {
          reject(e)
        }
        input = null
      }
      reader.readAsText(files[0])
    }

    input.click()
  })
}

export default {
  exportJSON,
  importJSON,
}
