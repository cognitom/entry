<field-mail>

  <style>
    field-mail {
      display: block;
      padding: .6em 1em;
    }
    field-mail input {
      width: 20em;
    }
    field-mail fa {
      color: #2FC46D;
      vertical-align: middle;
      font-size: 150%;
      margin-right: .2em;
    }
    field-mail fa.invalid { color: rgba(0,0,0,.15) }
  </style>

  <fa icon="check-circle" class={ invalid: !ok } />
  <label>{ label }</label>
  <input placeholder="name@domain.com" class={ invalid: !ok }
         value={ value } onkeyup={ sync } onchange={ send }
         spellcheck="false">

  <script>
    var MAIL_ADDRESS = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i
    var VALIDATION   = function (v) { return MAIL_ADDRESS.test(v) }

    this.key   = opts.key
    this.value = opts.value
    this.ok    = false
    this.label = opts.label

    sync (e) {
      this.value = e.target.value
      this.ok = VALIDATION(this.value)
    }

    send (e) {
      this.sync(e)
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }
  </script>

</field-mail>
