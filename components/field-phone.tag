<field-phone>

  <style scoped>
    :scope {
      display: block;
      padding: .6em 1em;
    }
    input {
      width: 3em;
      font-size: 120%;
    }
    fa {
      color: #2FC46D;
      vertical-align: middle;
      font-size: 150%;
      margin-right: .2em;
    }
    fa.invalid { color: rgba(0,0,0,.15) }
  </style>

  <fa icon="check-circle" class={ invalid: !ok } />
  <label>{ label }</label>
  <input name="first" placeholder="090" class={ invalid: !ok }
         value={ value.split('-')[0] } onkeyup={ sync } onchange={ send }> -
  <input name="second" placeholder="1234" class={ invalid: !ok }
         value={ value.split('-')[1] } onkeyup={ sync } onchange={ send }> -
  <input name="third" placeholder="5678" class={ invalid: !ok }
         value={ value.split('-')[2] } onkeyup={ sync } onchange={ send }>

  <script>
    var PHONE      = /^[0-9]{2,4}-[0-9]{2,4}-[0-9]{4}$/
    var VALIDATION = function (v) { return PHONE.test(v) }

    this.key   = opts.key
    this.value = opts.value || '--'
    this.ok    = false
    this.label = opts.label

    sync (e) {
      this.value = this.first.value + '-' + this.second.value + '-' + this.third.value
      this.ok = VALIDATION(this.value)
    }

    send (e) {
      this.sync(e)
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }
  </script>

</field-phone>
