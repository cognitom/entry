<field-companions>

  <style>
    field-companions {
      display: block;
      padding: .2em 1em;
    }
    field-companions > div {
      display: inline-block;
      vertical-align: middle;
    }
    field-companions > div > * {
      line-height: 3em;
      border-bottom: 1px dashed #ccc;
    }
    field-companions > div > *:last-child { border: none; }
    field-companions > div > span { display: block; }
    field-companions fa[icon="plus-circle"] {
      cursor: pointer;
      color: #999;
      font-size: 120%;
    }
    field-companions fa[icon="check-circle"] {
      color: #2FC46D;
      vertical-align: middle;
      font-size: 150%;
      margin-right: .2em;
    }
    field-companions fa.invalid { color: rgba(0,0,0,.15) }
  </style>

  <fa icon="check-circle" class={ invalid: !ok } />
  <label>{ label }</label>
  <div>
    <field-companions-item each={ item, i in value } key={ i } value={ item }
                           action={ parent.remove } />
    <span if={ value.length < 4 } class="item">
      <fa icon="plus-circle" onclick={ add }></fa>
    </span>
  </div>

  <script>
    var VALIDATION = function (v) { return v.reduce(function (p, c) { return p && c }, true) }

    this.key   = opts.key
    this.value = opts.value || [{ grade: '', lang: '' }]
    this.facts = []
    this.ok    = false
    this.label = opts.label

    add (e) {
      this.value.push({ grade: '', lang: '' })
      this.facts.push(false)
      this.send()
    }

    remove (key) {
      this.value.splice(key, 1)
      this.facts.splice(key, 1)
      this.send()
    }

    sync () {
      this.ok = VALIDATION(this.facts)
    }

    send () {
      this.sync()
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }

    receive (key, val, ok) {
      this.value[key] = val
      this.facts[key] = ok
      this.send()
    }
  </script>

</field-companions>
