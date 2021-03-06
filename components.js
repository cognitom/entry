riot.tag('app-footer', '<p>{ opts.copyrights }</p>', 'app-footer { display: block; text-align: center; color: #999; font-size: 90%; }', function(opts) {


});

riot.tag('app-form', '<form onsubmit="{ submit }"> <field-name key="name" label="Name" value="{ value.name }"></field-name> <field-mail key="mail" label="Mail" value="{ value.mail }"></field-mail> <field-phone key="tel" label="Tel" value="{ value.tel }"></field-phone> <field-companions key="children" label="Children" value="{ value.children }"></field-companions> <footer><button onclick="{ submit }">RSVP</button></footer> </form>', 'app-form { display: block; text-align: center; } app-form form { width: 500px; margin-left: auto; margin-right: auto; text-align: left; border: 2px solid rgba(0,0,0,.1); border-radius: 4px; } app-form form > *:nth-child(odd) { background: rgba(0,0,0,.05); } app-form form > footer:last-child { padding: 1em; text-align: center; background: #1B9CB7; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; } app-form button { background: none; color: white; border-color: white; } app-form button:hover { background: rgba(255,255,255,.2); }', function(opts) {
    var VALIDATION = function (o) { for (var k in o) if (!o[k]) return false; return true }

    this.value = opts.value || {}
    this.facts = { name: false, mail: false, tel: false, children: false }
    this.ok    = false

    this.submit = function(e) {

    }.bind(this);

    this.sync = function() {
      this.ok = VALIDATION(this.facts)
    }.bind(this);

    this.receive = function(key, val, ok) {
      this.value[key] = val
      this.facts[key] = ok
      this.sync()
      this.update()
    }.bind(this);
  
});

riot.tag('app-header', '<h1>{ opts.title }</h1>', 'app-header { display: block; text-align: center; padding: 2em; } app-header h1 { color: #666; margin: 0; }', function(opts) {


});

riot.tag('app', '<app-header title="CoderDojo"></app-header> <app-form value="{ opts.value }"></app-form> <app-footer copyrights="CoderDojo Tokyo"></app-footer>', function(opts) {


});

riot.tag('fa', '', '@font-face { font-family: \'FontAwesome\'; src: url(\'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0\') format(\'woff\'), url(\'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular\') format(\'svg\'); font-weight: normal; font-style: normal; } fa { display: inline-block; font: normal normal normal 14px/1 FontAwesome; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; transform: translate(0, 0); }', function(opts) {
    GLYPHS = {
      'glass': 'f000',
      'music': 'f001',
      'search': 'f002',
      'envelope-o': 'f003',
      'heart': 'f004',
      'star': 'f005',
      'star-o': 'f006',
      'user': 'f007',
      'film': 'f008',
      'th-large': 'f009',
      'th': 'f00a',
      'th-list': 'f00b',
      'check': 'f00c',
      'remove': 'f00d',
      'close': 'f00d',
      'times': 'f00d',
      'search-plus': 'f00e',
      'search-minus': 'f010',
      'power-off': 'f011',
      'signal': 'f012',
      'gear': 'f013',
      'cog': 'f013',
      'trash-o': 'f014',
      'home': 'f015',
      'file-o': 'f016',
      'clock-o': 'f017',
      'road': 'f018',
      'download': 'f019',
      'arrow-circle-o-down': 'f01a',
      'arrow-circle-o-up': 'f01b',
      'inbox': 'f01c',
      'play-circle-o': 'f01d',
      'rotate-right': 'f013',
      'repeat': 'f01e',
      'refresh': 'f021',
      'list-alt': 'f022',
      'lock': 'f023',
      'flag': 'f024',
      'headphones': 'f025',
      'volume-off': 'f026',
      'volume-down': 'f027',
      'volume-up': 'f028',
      'qrcode': 'f029',
      'barcode': 'f02a',
      'tag': 'f02b',
      'tags': 'f02c',
      'book': 'f02d',
      'bookmark': 'f02e',
      'print': 'f02f',
      'camera': 'f030',
      'font': 'f031',
      'bold': 'f032',
      'italic': 'f033',
      'text-height': 'f034',
      'text-width': 'f035',
      'align-left': 'f036',
      'align-center': 'f037',
      'align-right': 'f038',
      'align-justify': 'f039',
      'list': 'f03a',
      'dedent': 'f03b',
      'outdent': 'f03b',
      'indent': 'f03c',
      'video-camera': 'f03d',
      'photo': 'f03e',
      'image': 'f03e',
      'picture-o': 'f03e',
      'pencil': 'f040',
      'map-marker': 'f041',
      'adjust': 'f042',
      'tint': 'f043',
      'edit': 'f044',
      'pencil-square-o': 'f044',
      'share-square-o': 'f045',
      'check-square-o': 'f046',
      'arrows': 'f047',
      'step-backward': 'f048',
      'fast-backward': 'f049',
      'backward': 'f04a',
      'play': 'f04b',
      'pause': 'f04c',
      'stop': 'f04d',
      'forward': 'f04e',
      'fast-forward': 'f050',
      'step-forward': 'f051',
      'eject': 'f052',
      'chevron-left': 'f053',
      'chevron-right': 'f054',
      'plus-circle': 'f055',
      'minus-circle': 'f056',
      'times-circle': 'f057',
      'check-circle': 'f058',
      'question-circle': 'f059',
      'info-circle': 'f05a',
      'crosshairs': 'f05b',
      'times-circle-o': 'f05c',
      'check-circle-o': 'f05d',
      'ban': 'f05e',
      'arrow-left': 'f060',
      'arrow-right': 'f061',
      'arrow-up': 'f062',
      'arrow-down': 'f063',
      'mail-forward': 'f064',
      'share': 'f064',
      'expand': 'f065',
      'compress': 'f066',
      'plus': 'f067',
      'minus': 'f068',
      'asterisk': 'f069',
      'exclamation-circle': 'f06a',
      'gift': 'f06b',
      'leaf': 'f06c',
      'fire': 'f06d',
      'eye': 'f06e',
      'eye-slash': 'f070',
      'warning': 'f071',
      'exclamation-triangle': 'f071',
      'plane': 'f072',
      'calendar': 'f073',
      'random': 'f074',
      'comment': 'f075',
      'magnet': 'f076',
      'chevron-up': 'f077',
      'chevron-down': 'f078',
      'retweet': 'f079',
      'shopping-cart': 'f07a',
      'folder': 'f07b',
      'folder-open': 'f07c',
      'arrows-v': 'f07d',
      'arrows-h': 'f07e',
      'bar-chart-o': 'f080',
      'bar-chart': 'f080',
      'twitter-square': 'f081',
      'facebook-square': 'f082',
      'camera-retro': 'f083',
      'key': 'f084',
      'gears': 'f085',
      'cogs': 'f085',
      'comments': 'f086',
      'thumbs-o-up': 'f087',
      'thumbs-o-down': 'f088',
      'star-half': 'f089',
      'heart-o': 'f08a',
      'sign-out': 'f08b',
      'linkedin-square': 'f08c',
      'thumb-tack': 'f08d',
      'external-link': 'f08e',
      'sign-in': 'f090',
      'trophy': 'f091',
      'github-square': 'f092',
      'upload': 'f093',
      'lemon-o': 'f094',
      'phone': 'f095',
      'square-o': 'f096',
      'bookmark-o': 'f097',
      'phone-square': 'f098',
      'twitter': 'f099',
      'facebook-f': 'f09a',
      'facebook': 'f09a',
      'github': 'f09b',
      'unlock': 'f09c',
      'credit-card': 'f09d',
      'rss': 'f09e',
      'hdd-o': 'f0a0',
      'bullhorn': 'f0a1',
      'bell': 'f0f3',
      'certificate': 'f0a3',
      'hand-o-right': 'f0a4',
      'hand-o-left': 'f0a5',
      'hand-o-up': 'f0a6',
      'hand-o-down': 'f0a7',
      'arrow-circle-left': 'f0a8',
      'arrow-circle-right': 'f0a9',
      'arrow-circle-up': 'f0aa',
      'arrow-circle-down': 'f0ab',
      'globe': 'f0ac',
      'wrench': 'f0ad',
      'tasks': 'f0ae',
      'filter': 'f0b0',
      'briefcase': 'f0b1',
      'arrows-alt': 'f0b2',
      'group': 'f0c0',
      'users': 'f0c0',
      'chain': 'f0c1',
      'link': 'f0c1',
      'cloud': 'f0c2',
      'flask': 'f0c3',
      'cut': 'f0c4',
      'scissors': 'f0c4',
      'copy': 'f0c5',
      'files-o': 'f0c5',
      'paperclip': 'f0c6',
      'save': 'f0c7',
      'floppy-o': 'f0c7',
      'square': 'f0c8',
      'navicon': 'f0c9',
      'reorder': 'f0c9',
      'bars': 'f0c9',
      'list-ul': 'f0ca',
      'list-ol': 'f0cb',
      'strikethrough': 'f0cc',
      'underline': 'f0cd',
      'table': 'f0ce',
      'magic': 'f0d0',
      'truck': 'f0d1',
      'pinterest': 'f0d2',
      'pinterest-square': 'f0d3',
      'google-plus-square': 'f0d4',
      'google-plus': 'f0d5',
      'money': 'f0d6',
      'caret-down': 'f0d7',
      'caret-up': 'f0d8',
      'caret-left': 'f0d9',
      'caret-right': 'f0da',
      'columns': 'f0db',
      'unsorted': 'f0dc',
      'sort': 'f0dc',
      'sort-down': 'f0dd',
      'sort-desc': 'f0dd',
      'sort-up': 'f0de',
      'sort-asc': 'f0de',
      'envelope': 'f0e0',
      'linkedin': 'f0e1',
      'rotate-left': 'f0e2',
      'undo': 'f0e2',
      'legal': 'f0e3',
      'gavel': 'f0e3',
      'dashboard': 'f0e4',
      'tachometer': 'f0e4',
      'comment-o': 'f0e5',
      'comments-o': 'f0e6',
      'flash': 'f0e7',
      'bolt': 'f0e7',
      'sitemap': 'f0e8',
      'umbrella': 'f0e9',
      'paste': 'f0ea',
      'clipboard': 'f0ea',
      'lightbulb-o': 'f0eb',
      'exchange': 'f0ec',
      'cloud-download': 'f0ed',
      'cloud-upload': 'f0ee',
      'user-md': 'f0f0',
      'stethoscope': 'f0f1',
      'suitcase': 'f0f2',
      'bell-o': 'f0a2',
      'coffee': 'f0f4',
      'cutlery': 'f0f5',
      'file-text-o': 'f0f6',
      'building-o': 'f0f7',
      'hospital-o': 'f0f8',
      'ambulance': 'f0f9',
      'medkit': 'f0fa',
      'fighter-jet': 'f0fb',
      'beer': 'f0fc',
      'h-square': 'f0fd',
      'plus-square': 'f0fe',
      'angle-double-left': 'f100',
      'angle-double-right': 'f101',
      'angle-double-up': 'f102',
      'angle-double-down': 'f103',
      'angle-left': 'f104',
      'angle-right': 'f105',
      'angle-up': 'f106',
      'angle-down': 'f107',
      'desktop': 'f108',
      'laptop': 'f109',
      'tablet': 'f10a',
      'mobile-phone': 'f10b',
      'mobile': 'f10b',
      'circle-o': 'f10c',
      'quote-left': 'f10d',
      'quote-right': 'f10e',
      'spinner': 'f110',
      'circle': 'f111',
      'mail-reply': 'f112',
      'reply': 'f112',
      'github-alt': 'f113',
      'folder-o': 'f114',
      'folder-open-o': 'f115',
      'smile-o': 'f118',
      'frown-o': 'f119',
      'meh-o': 'f11a',
      'gamepad': 'f11b',
      'keyboard-o': 'f11c',
      'flag-o': 'f11d',
      'flag-checkered': 'f11e',
      'terminal': 'f120',
      'code': 'f121',
      'mail-reply-all': 'f122',
      'reply-all': 'f122',
      'star-half-empty': 'f123',
      'star-half-full': 'f123',
      'star-half-o': 'f123',
      'location-arrow': 'f124',
      'crop': 'f125',
      'code-fork': 'f126',
      'unlink': 'f127',
      'chain-broken': 'f127',
      'question': 'f128',
      'info': 'f129',
      'exclamation': 'f12a',
      'superscript': 'f12b',
      'subscript': 'f12c',
      'eraser': 'f12d',
      'puzzle-piece': 'f12e',
      'microphone': 'f130',
      'microphone-slash': 'f131',
      'shield': 'f132',
      'calendar-o': 'f133',
      'fire-extinguisher': 'f134',
      'rocket': 'f135',
      'maxcdn': 'f136',
      'chevron-circle-left': 'f137',
      'chevron-circle-right': 'f138',
      'chevron-circle-up': 'f139',
      'chevron-circle-down': 'f13a',
      'html5': 'f13b',
      'css3': 'f13c',
      'anchor': 'f13d',
      'unlock-alt': 'f13e',
      'bullseye': 'f140',
      'ellipsis-h': 'f141',
      'ellipsis-v': 'f142',
      'rss-square': 'f143',
      'play-circle': 'f144',
      'ticket': 'f145',
      'minus-square': 'f146',
      'minus-square-o': 'f147',
      'level-up': 'f148',
      'level-down': 'f149',
      'check-square': 'f14a',
      'pencil-square': 'f14b',
      'external-link-square': 'f14c',
      'share-square': 'f14d',
      'compass': 'f14e',
      'toggle-down': 'f150',
      'caret-square-o-down': 'f150',
      'toggle-up': 'f151',
      'caret-square-o-up': 'f151',
      'toggle-right': 'f152',
      'caret-square-o-right': 'f152',
      'euro': 'f153',
      'eur': 'f153',
      'gbp': 'f154',
      'dollar': 'f155',
      'usd': 'f155',
      'rupee': 'f156',
      'inr': 'f156',
      'cny': 'f157',
      'rmb': 'f157',
      'yen': 'f157',
      'jpy': 'f157',
      'ruble': 'f158',
      'rouble': 'f158',
      'rub': 'f158',
      'won': 'f159',
      'krw': 'f159',
      'bitcoin': 'f15a',
      'btc': 'f15a',
      'file': 'f15b',
      'file-text': 'f15c',
      'sort-alpha-asc': 'f15d',
      'sort-alpha-desc': 'f15e',
      'sort-amount-asc': 'f160',
      'sort-amount-desc': 'f161',
      'sort-numeric-asc': 'f162',
      'sort-numeric-desc': 'f163',
      'thumbs-up': 'f164',
      'thumbs-down': 'f165',
      'youtube-square': 'f166',
      'youtube': 'f167',
      'xing': 'f168',
      'xing-square': 'f169',
      'youtube-play': 'f16a',
      'dropbox': 'f16b',
      'stack-overflow': 'f16c',
      'instagram': 'f16d',
      'flickr': 'f16e',
      'adn': 'f170',
      'bitbucket': 'f171',
      'bitbucket-square': 'f172',
      'tumblr': 'f173',
      'tumblr-square': 'f174',
      'long-arrow-down': 'f175',
      'long-arrow-up': 'f176',
      'long-arrow-left': 'f177',
      'long-arrow-right': 'f178',
      'apple': 'f179',
      'windows': 'f17a',
      'android': 'f17b',
      'linux': 'f17c',
      'dribbble': 'f17d',
      'skype': 'f17e',
      'foursquare': 'f180',
      'trello': 'f181',
      'female': 'f182',
      'male': 'f183',
      'gittip': 'f184',
      'gratipay': 'f184',
      'sun-o': 'f185',
      'moon-o': 'f186',
      'archive': 'f187',
      'bug': 'f188',
      'vk': 'f189',
      'weibo': 'f18a',
      'renren': 'f18b',
      'pagelines': 'f18c',
      'stack-exchange': 'f18d',
      'arrow-circle-o-right': 'f18e',
      'arrow-circle-o-left': 'f190',
      'toggle-left': 'f191',
      'caret-square-o-left': 'f191',
      'dot-circle-o': 'f192',
      'wheelchair': 'f193',
      'vimeo-square': 'f194',
      'turkish-lira': 'f195',
      'try': 'f195',
      'plus-square-o': 'f196',
      'space-shuttle': 'f197',
      'slack': 'f198',
      'envelope-square': 'f199',
      'wordpress': 'f19a',
      'openid': 'f19b',
      'institution': 'f19c',
      'bank': 'f19c',
      'university': 'f19c',
      'mortar-board': 'f19d',
      'graduation-cap': 'f19d',
      'yahoo': 'f19e',
      'google': 'f1a0',
      'reddit': 'f1a1',
      'reddit-square': 'f1a2',
      'stumbleupon-circle': 'f1a3',
      'stumbleupon': 'f1a4',
      'delicious': 'f1a5',
      'digg': 'f1a6',
      'pied-piper': 'f1a7',
      'pied-piper-alt': 'f1a8',
      'drupal': 'f1a9',
      'joomla': 'f1aa',
      'language': 'f1ab',
      'fax': 'f1ac',
      'building': 'f1ad',
      'child': 'f1ae',
      'paw': 'f1b0',
      'spoon': 'f1b1',
      'cube': 'f1b2',
      'cubes': 'f1b3',
      'behance': 'f1b4',
      'behance-square': 'f1b5',
      'steam': 'f1b6',
      'steam-square': 'f1b7',
      'recycle': 'f1b8',
      'automobile': 'f1b9',
      'car': 'f1b9',
      'cab': 'f1ba',
      'taxi': 'f1ba',
      'tree': 'f1bb',
      'spotify': 'f1bc',
      'deviantart': 'f1bd',
      'soundcloud': 'f1be',
      'database': 'f1c0',
      'file-pdf-o': 'f1c1',
      'file-word-o': 'f1c2',
      'file-excel-o': 'f1c3',
      'file-powerpoint-o': 'f1c4',
      'file-photo-o': 'f1c5',
      'file-picture-o': 'f1c5',
      'file-image-o': 'f1c5',
      'file-zip-o': 'f1c6',
      'file-archive-o': 'f1c6',
      'file-sound-o': 'f1c7',
      'file-audio-o': 'f1c7',
      'file-movie-o': 'f1c8',
      'file-video-o': 'f1c8',
      'file-code-o': 'f1c9',
      'vine': 'f1ca',
      'codepen': 'f1cb',
      'jsfiddle': 'f1cc',
      'life-bouy': 'f1cd',
      'life-buoy': 'f1cd',
      'life-saver': 'f1cd',
      'support': 'f1cd',
      'life-ring': 'f1cd',
      'circle-o-notch': 'f1ce',
      'ra': 'f1d0',
      'rebel': 'f1d0',
      'ge': 'f1d1',
      'empire': 'f1d1',
      'git-square': 'f1d2',
      'git': 'f1d3',
      'hacker-news': 'f1d4',
      'tencent-weibo': 'f1d5',
      'qq': 'f1d6',
      'wechat': 'f1d7',
      'weixin': 'f1d7',
      'send': 'f1d8',
      'paper-plane': 'f1d8',
      'send-o': 'f1d9',
      'paper-plane-o': 'f1d9',
      'history': 'f1da',
      'genderless': 'f1db',
      'circle-thin': 'f1db',
      'header': 'f1dc',
      'paragraph': 'f1dd',
      'sliders': 'f1de',
      'share-alt': 'f1e0',
      'share-alt-square': 'f1e1',
      'bomb': 'f1e2',
      'soccer-ball-o': 'f1e3',
      'futbol-o': 'f1e3',
      'tty': 'f1e4',
      'binoculars': 'f1e5',
      'plug': 'f1e6',
      'slideshare': 'f1e7',
      'twitch': 'f1e8',
      'yelp': 'f1e9',
      'newspaper-o': 'f1ea',
      'wifi': 'f1eb',
      'calculator': 'f1ec',
      'paypal': 'f1ed',
      'google-wallet': 'f1ee',
      'cc-visa': 'f1f0',
      'cc-mastercard': 'f1f1',
      'cc-discover': 'f1f2',
      'cc-amex': 'f1f3',
      'cc-paypal': 'f1f4',
      'cc-stripe': 'f1f5',
      'bell-slash': 'f1f6',
      'bell-slash-o': 'f1f7',
      'trash': 'f1f8',
      'copyright': 'f1f9',
      'at': 'f1fa',
      'eyedropper': 'f1fb',
      'paint-brush': 'f1fc',
      'birthday-cake': 'f1fd',
      'area-chart': 'f1fe',
      'pie-chart': 'f200',
      'line-chart': 'f201',
      'lastfm': 'f202',
      'lastfm-square': 'f203',
      'toggle-off': 'f204',
      'toggle-on': 'f205',
      'bicycle': 'f206',
      'bus': 'f207',
      'ioxhost': 'f208',
      'angellist': 'f209',
      'cc': 'f20a',
      'shekel': 'f20b',
      'sheqel': 'f20b',
      'ils': 'f20b',
      'meanpath': 'f20c',
      'buysellads': 'f20d',
      'connectdevelop': 'f20e',
      'dashcube': 'f210',
      'forumbee': 'f211',
      'leanpub': 'f212',
      'sellsy': 'f213',
      'shirtsinbulk': 'f214',
      'simplybuilt': 'f215',
      'skyatlas': 'f216',
      'cart-plus': 'f217',
      'cart-arrow-down': 'f218',
      'diamond': 'f219',
      'ship': 'f21a',
      'user-secret': 'f21b',
      'motorcycle': 'f21c',
      'street-view': 'f21d',
      'heartbeat': 'f21e',
      'venus': 'f221',
      'mars': 'f222',
      'mercury': 'f223',
      'transgender': 'f224',
      'transgender-alt': 'f225',
      'venus-double': 'f226',
      'mars-double': 'f227',
      'venus-mars': 'f228',
      'mars-stroke': 'f229',
      'mars-stroke-v': 'f22a',
      'mars-stroke-h': 'f22b',
      'neuter': 'f22c',
      'facebook-official': 'f230',
      'pinterest-p': 'f231',
      'whatsapp': 'f232',
      'server': 'f233',
      'user-plus': 'f234',
      'user-times': 'f235',
      'hotel': 'f236',
      'bed': 'f236',
      'viacoin': 'f237',
      'train': 'f238',
      'subway': 'f239',
      'medium': 'f23a'
    }

    this.root.innerHTML = '&#x' + GLYPHS[opts.icon] + ';'
  
});

riot.tag('field-companions-item', '<fa icon="male"></fa> <select name="grade" value="{ value.grade }" onchange="{ send }"> <option value="" disabled="disabled">School Grade</option> <option each="{ name, i in grades }" >{ name }</option> </select> <select name="lang" value="{ value.lang }" onchange="{ send }"> <option value="" disabled="disabled">Prog Language</option> <option each="{ name, i in langs }" >{ name }</option> </select> <fa icon="minus-circle" onclick="{ removeMe }"></fa>', 'field-companions-item { display: block } field-companions-item > * { vertical-align: middle } field-companions-item fa[icon="male"] { font-size: 150%; margin-right: .2em; } field-companions-item fa[icon="minus-circle"] { cursor: pointer; color: #999; font-size: 120%; }', function(opts) {
    var VALIDATION = function (v) { return !!v.grade && !!v.lang }

    this.key   = opts.key
    this.value = opts.value || { grade: '', lang: '' }
    this.ok    = false

    this.grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
    this.langs  = ['Beginner!', 'Scratch', 'JavaScript', 'HTML/CSS', 'PHP', 'Ruby', 'Other']

    this.removeMe = function() {
      if (p = this.findReceiver()) p.remove(this.key)
    }.bind(this);

    this.sync = function() {
      this.value = { grade: this.grade.value, lang: this.lang.value }
      this.ok = VALIDATION(this.value)
    }.bind(this);

    this.send = function() {
      this.sync()
      if (p = this.findReceiver()) p.receive(this.key, this.value, this.ok)
    }.bind(this);

    this.findReceiver = function() {
      node = this.parent
      while (node && !node.receive) node = node.parent
      return node
    }.bind(this);
  
});

riot.tag('field-companions', '<fa icon="check-circle" class="{ invalid: !ok }"></fa> <label>{ label }</label> <div> <field-companions-item each="{ item, i in value }" key="{ i }" value="{ item }" action="{ parent.remove }"></field-companions-item> <span if="{ value.length < 4 }" class="item"> <fa icon="plus-circle" onclick="{ add }"></fa> </span> </div>', 'field-companions { display: block; padding: .2em 1em; } field-companions > div { display: inline-block; vertical-align: middle; } field-companions > div > * { line-height: 3em; border-bottom: 1px dashed #ccc; } field-companions > div > *:last-child { border: none; } field-companions > div > span { display: block; } field-companions fa[icon="plus-circle"] { cursor: pointer; color: #999; font-size: 120%; } field-companions fa[icon="check-circle"] { color: #2FC46D; vertical-align: middle; font-size: 150%; margin-right: .2em; } field-companions fa.invalid { color: rgba(0,0,0,.15) }', function(opts) {
    var VALIDATION = function (v) { return v.reduce(function (p, c) { return p && c }, true) }

    this.key   = opts.key
    this.value = opts.value || [{ grade: '', lang: '' }]
    this.facts = []
    this.ok    = false
    this.label = opts.label

    this.add = function(e) {
      this.value.push({ grade: '', lang: '' })
      this.facts.push(false)
      this.send()
    }.bind(this);

    this.remove = function(key) {
      this.value.splice(key, 1)
      this.facts.splice(key, 1)
      this.send()
    }.bind(this);

    this.sync = function() {
      this.ok = VALIDATION(this.facts)
    }.bind(this);

    this.send = function() {
      this.sync()
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }.bind(this);

    this.receive = function(key, val, ok) {
      this.value[key] = val
      this.facts[key] = ok
      this.send()
    }.bind(this);
  
});

riot.tag('field-mail', '<fa icon="check-circle" class="{ invalid: !ok }"></fa> <label>{ label }</label> <input placeholder="name@domain.com" class="{ invalid: !ok }" value="{ value }" onkeyup="{ sync }" onchange="{ send }" spellcheck="false">', 'field-mail { display: block; padding: .6em 1em; } field-mail input { width: 20em; } field-mail fa { color: #2FC46D; vertical-align: middle; font-size: 150%; margin-right: .2em; } field-mail fa.invalid { color: rgba(0,0,0,.15) }', function(opts) {
    var MAIL_ADDRESS = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i
    var VALIDATION   = function (v) { return MAIL_ADDRESS.test(v) }

    this.key   = opts.key
    this.value = opts.value
    this.ok    = false
    this.label = opts.label

    this.sync = function(e) {
      this.value = e.target.value
      this.ok = VALIDATION(this.value)
    }.bind(this);

    this.send = function(e) {
      this.sync(e)
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }.bind(this);
  
});

riot.tag('field-name', '<fa icon="check-circle" class="{ invalid: !ok }"></fa> <label>{ label }</label> <input name="last" placeholder="Last" class="{ invalid: !ok }" value="{ value.last }" onkeyup="{ sync }" onchange="{ send }"> <input name="first" placeholder="First" class="{ invalid: !ok }" value="{ value.first }" onkeyup="{ sync }" onchange="{ send }">', 'field-name { display: block; padding: .6em 1em; } field-name input { width: 8em; } field-name fa { color: #2FC46D; vertical-align: middle; font-size: 150%; margin-right: .2em; } field-name fa.invalid { color: rgba(0,0,0,.15) }', function(opts) {
    var VALIDATION = function (v) { return !!v.last && !!v.first }

    this.key   = opts.key
    this.value = opts.value || { last: '', first: '' }
    this.ok    = false
    this.label = opts.label

    this.sync = function(e) {
      this.value = { last: this.last.value, first: this.first.value }
      this.ok = VALIDATION(this.value)
    }.bind(this);

    this.send = function(e) {
      this.sync(e)
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }.bind(this);
  
});

riot.tag('field-phone', '<fa icon="check-circle" class="{ invalid: !ok }"></fa> <label>{ label }</label> <input name="first" placeholder="090" class="{ invalid: !ok }" value="{ value.split("-\')[0] }" onkeyup="{ sync }" onchange="{ send }"> - <input name="second" placeholder="1234" class="{ invalid: !ok }" value="{ value.split("-\')[1] }" onkeyup="{ sync }" onchange="{ send }"> - <input name="third" placeholder="5678" class="{ invalid: !ok }" value="{ value.split("-\')[2] }" onkeyup="{ sync }" onchange="{ send }">', 'field-phone { display: block; padding: .6em 1em; } field-phone input { width: 3em; font-size: 120%; } field-phone fa { color: #2FC46D; vertical-align: middle; font-size: 150%; margin-right: .2em; } field-phone fa.invalid { color: rgba(0,0,0,.15) }', function(opts) {
    var PHONE      = /^[0-9]{2,4}-[0-9]{2,4}-[0-9]{4}$/
    var VALIDATION = function (v) { return PHONE.test(v) }

    this.key   = opts.key
    this.value = opts.value || '--'
    this.ok    = false
    this.label = opts.label

    this.sync = function(e) {
      this.value = this.first.value + '-' + this.second.value + '-' + this.third.value
      this.ok = VALIDATION(this.value)
    }.bind(this);

    this.send = function(e) {
      this.sync(e)
      if (this.parent) this.parent.receive(this.key, this.value, this.ok)
    }.bind(this);
  
});
