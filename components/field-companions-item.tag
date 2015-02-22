<field-companions-item>

  <style>
    field-companions-item { display: block }
    field-companions-item > * { vertical-align: middle }
    field-companions-item fa[icon="male"] {
      font-size: 150%;
      margin-right: .2em;
    }
    field-companions fa[icon="minus-circle"] {
      cursor: pointer;
      color: #999;
      font-size: 120%;
    }
  </style>

  <fa icon="male"></fa>
  <select name="grade" value={ value.grade } onchange={ send }>
    <option value="" disabled="disabled">School Grade</option>
    <option each={ name, i in grades } >{ name }</option>
  </select>
  <select name="lang" value={ value.lang } onchange={ send }>
    <option value="" disabled="disabled">Prog Language</option>
    <option each={ name, i in langs } >{ name }</option>
  </select>
  <fa icon="minus-circle" onclick={ removeMe }></fa>

  <script>
    var VALIDATION = function (v) { return !!v.grade && !!v.lang }

    this.key   = opts.key
    this.value = opts.value || { grade: '', lang: '' }
    this.ok    = false

    this.grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
    this.langs  = ['Beginner!', 'Scratch', 'JavaScript', 'HTML/CSS', 'PHP', 'Ruby', 'Other']

    removeMe () {
      if (p = this.findReceiver()) p.remove(this.key)
    }

    sync () {
      this.value = { grade: this.grade.value, lang: this.lang.value }
      this.ok = VALIDATION(this.value)
    }

    send () {
      this.sync()
      if (p = this.findReceiver()) p.receive(this.key, this.value, this.ok)
    }

    findReceiver () {
      node = this.parent
      while (node && !node.receive) node = node.parent
      return node
    }
  </script>

</field-companions-item>
