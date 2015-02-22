<field-name>

  <style>
    field-name {
      display: block;
      padding: .6em 1em;
    }
    field-name input {
      width: 8em;
    }
    field-name fa {
      color: #2FC46D;
      vertical-align: middle;
      font-size: 150%;
      margin-right: .2em;
    }
    field-name fa.invalid { color: rgba(0,0,0,.15) }
  </style>

  <fa icon="check-circle" class={ invalid: !ok } />
  <label>{ label }</label>
  <input name="last" placeholder="Last"
         class={ invalid: !ok } value={ value.last } onkeyup={ sync } onchange={ send }>
  <input name="first" placeholder="First"
         class={ invalid: !ok } value={ value.first } onkeyup={ sync } onchange={ send }>

  <script>
    var VALIDATION = function (v) { return !!v.last && !!v.first }

    this.key   = opts.key
    this.value = opts.value || { last: '', first: '' }
    this.ok    = false
    this.label = opts.label

    sync (e) {
      this.value = { last: this.last.value, first: this.first.value }
      this.ok = VALIDATION(this.value)
    }

    send (e) {
      this.sync(e)
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }
  </script>

</field-name>
