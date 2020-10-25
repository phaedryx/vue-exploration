const InPlaceEdit = {
  name: 'InPlaceEdit',
  setup() {
    function log() {
      console.log('logged ' + new Date())
    }

    return { log }
  }
}

export default InPlaceEdit
