<app-form>

  <style>
    app-form {
      display: block;
      text-align: center;
    }
    app-form form {
      width: 500px;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      border: 2px solid rgba(0,0,0,.1);
      border-radius: 4px;
    }
    app-form form > *:nth-child(odd) {
      background: rgba(0,0,0,.05);
    }
    app-form form > footer:last-child {
      padding: 1em;
      text-align: center;
      background: #1B9CB7;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    app-form button {
      background: none;
      color: white;
      border-color: white;
    }
    app-form button:hover {
      background: rgba(255,255,255,.2);
    }
  </style>

  <form onsubmit={ submit }>
    <field-name key="name" label="Name" value={ value.name } />
    <field-mail key="mail" label="Mail" value={ value.mail } />
    <field-phone key="tel" label="Tel" value={ value.tel } />
    <field-companions key="children" label="Children" value={ value.children } />
    <footer><button onclick={ submit }>RSVP</button></footer>
  </form>

  <script>
    var VALIDATION = function (o) { for (var k in o) if (!o[k]) return false; return true }

    this.value = opts.value || {}
    this.facts = { name: false, mail: false, tel: false, children: false }
    this.ok    = false

    submit (e) {
      //TODO: 
    }

    sync () {
      this.ok = VALIDATION(this.facts)
    }

    receive (key, val, ok) {
      this.value[key] = val
      this.facts[key] = ok
      this.sync()
      this.update()
    }
  </script>

</app-form>
