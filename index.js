const _0x426766=_0x5a30;function _0x2d42(){const _0x31d1c7=['trim','util','352375dmyewC','readMessages','9496700IEynif','Connecting\x20Umar\x20MD...','participant','UMAR','user','UD\x20Bot\x20connected\x20to\x20WhatsApp\x20✅','fromURL','forEach','reactionMessage','length','text','connection.update','writeFile','body','caption','sendMessage','AUTO_READ_STATUS','inbox','extendedTextMessage','image','startsWith','open','react','🤴\x20Installing','readdirSync','subject','https://mega.nz/file/','messages','groups','creds.update','Server\x20is\x20running\x20on\x20port:\x20','Session\x20downloaded\x20✅','toLowerCase','alias','pushName','key','./config','ephemeralMessage','get','3309306qIZkWr','includes','fromMe','split','commands','10WKWCyb','express','UD-MD\x20BOT\x20connected\x20successfully\x20😇✅\x0a\x0aPREFIX:\x20','function','groupMetadata','SESSION_ID','Umar\x20MD\x20is\x20running...','download','output','@s.whatsapp.net','stickerMessage','Firefox','923165123719','pino','PORT','send','messages.upsert','/auth_info_baileys/','MODE','37178724UILRdc','3852594EFLjVp','photo','private','shift','63MNypei','.js','./lib/msg','./command','pattern','Plugins\x20installed\x20successfully\x20✅','10400248jzmLCg','./plugins/','quotedMessage','listen','@g.us','conversation','videoMessage','qrcode-terminal','endsWith','message','slice','type','join','remoteJid','macOS','9obCPbl','92668zHziac','status@broadcast','5XVcWRb','imageMessage','find','log','stringify','contextInfo'];_0x2d42=function(){return _0x31d1c7;};return _0x2d42();}(function(_0x3a708b,_0xe9b0d5){const _0x27e462=_0x5a30,_0x8e150c=_0x3a708b();while(!![]){try{const _0x4feca0=parseInt(_0x27e462(0x156))/0x1*(parseInt(_0x27e462(0x184))/0x2)+-parseInt(_0x27e462(0x19c))/0x3*(-parseInt(_0x27e462(0x14c))/0x4)+-parseInt(_0x27e462(0x14e))/0x5*(parseInt(_0x27e462(0x198))/0x6)+parseInt(_0x27e462(0x17f))/0x7+-parseInt(_0x27e462(0x13c))/0x8*(-parseInt(_0x27e462(0x14b))/0x9)+parseInt(_0x27e462(0x158))/0xa+-parseInt(_0x27e462(0x197))/0xb;if(_0x4feca0===_0xe9b0d5)break;else _0x8e150c['push'](_0x8e150c['shift']());}catch(_0x141436){_0x8e150c['push'](_0x8e150c['shift']());}}}(_0x2d42,0xe7a7a));function _0x5a30(_0x4f65ae,_0x115ec1){const _0x2d42c6=_0x2d42();return _0x5a30=function(_0x5a309d,_0x4e1f01){_0x5a309d=_0x5a309d-0x138;let _0x1437b4=_0x2d42c6[_0x5a309d];return _0x1437b4;},_0x5a30(_0x4f65ae,_0x115ec1);}const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require('@whiskeysockets/baileys'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('./lib/functions'),fs=require('fs'),P=require(_0x426766(0x191)),config=require(_0x426766(0x17c)),qrcode=require(_0x426766(0x143)),util=require(_0x426766(0x155)),{sms,downloadMediaMessage}=require(_0x426766(0x138)),axios=require('axios'),prefix='.',express=require(_0x426766(0x185)),app=express(),port=process['env'][_0x426766(0x192)]||0x1f40,l=console[_0x426766(0x151)],ownerNumber=[_0x426766(0x190)];if(!fs['existsSync'](__dirname+'/auth_info_baileys/creds.json')){if(!config['SESSION_ID'])return console['log']('Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!');const sessdata=config[_0x426766(0x189)],filer=File[_0x426766(0x15e)](_0x426766(0x172)+sessdata);filer[_0x426766(0x18b)]((_0x56b3f9,_0x414978)=>{const _0x530f6c=_0x426766;if(_0x56b3f9)throw _0x56b3f9;fs[_0x530f6c(0x164)](__dirname+'/auth_info_baileys/creds.json',_0x414978,()=>{const _0x59d6ef=_0x530f6c;console[_0x59d6ef(0x151)](_0x59d6ef(0x177));});});}async function connectToWA(){const _0x2d826a=_0x426766;console[_0x2d826a(0x151)](_0x2d826a(0x159));const {state:_0x4600e1,saveCreds:_0x29c8ee}=await useMultiFileAuthState(__dirname+_0x2d826a(0x195)),{version:_0x452239}=await fetchLatestBaileysVersion(),_0x171f7b=makeWASocket({'logger':P({'level':'silent'}),'printQRInTerminal':!![],'browser':Browsers[_0x2d826a(0x14a)](_0x2d826a(0x18f)),'syncFullHistory':!![],'auth':_0x4600e1,'version':_0x452239});_0x171f7b['ev']['on'](_0x2d826a(0x163),_0x483eda=>{const _0x385225=_0x2d826a,{connection:_0x11c855,lastDisconnect:_0x3eac24}=_0x483eda;if(_0x11c855==='close')_0x3eac24['error'][_0x385225(0x18c)]['statusCode']!==DisconnectReason['loggedOut']&&connectToWA();else{if(_0x11c855===_0x385225(0x16d)){console[_0x385225(0x151)](_0x385225(0x16f));const _0x5e2745=require('path');fs[_0x385225(0x170)](_0x385225(0x13d))[_0x385225(0x15f)](_0x3f37e2=>{const _0x420feb=_0x385225;_0x5e2745['extname'](_0x3f37e2)[_0x420feb(0x178)]()===_0x420feb(0x19d)&&require('./plugins/'+_0x3f37e2);}),console[_0x385225(0x151)](_0x385225(0x13b)),console[_0x385225(0x151)](_0x385225(0x15d));let _0x11f759=_0x385225(0x186)+prefix;_0x171f7b[_0x385225(0x167)](ownerNumber[0x0]+_0x385225(0x18d),{'image':{'url':'https://i.imgur.com/0nx8ogb.jpeg'},'caption':_0x11f759});}}}),_0x171f7b['ev']['on'](_0x2d826a(0x175),_0x29c8ee),_0x171f7b['ev']['on'](_0x2d826a(0x194),async _0x417b97=>{const _0x495f89=_0x2d826a;_0x417b97=_0x417b97[_0x495f89(0x173)][0x0];if(!_0x417b97[_0x495f89(0x145)])return;_0x417b97[_0x495f89(0x145)]=getContentType(_0x417b97[_0x495f89(0x145)])===_0x495f89(0x17d)?_0x417b97[_0x495f89(0x145)][_0x495f89(0x17d)]['message']:_0x417b97[_0x495f89(0x145)];_0x417b97[_0x495f89(0x17b)]&&_0x417b97[_0x495f89(0x17b)][_0x495f89(0x149)]===_0x495f89(0x14d)&&config[_0x495f89(0x168)]==='true'&&await _0x171f7b[_0x495f89(0x157)]([_0x417b97[_0x495f89(0x17b)]]);const _0x2365f7=sms(_0x171f7b,_0x417b97),_0x125d8e=getContentType(_0x417b97['message']),_0x533bf8=JSON[_0x495f89(0x152)](_0x417b97[_0x495f89(0x145)]),_0x525670=_0x417b97[_0x495f89(0x17b)]['remoteJid'],_0x18d276=_0x125d8e===_0x495f89(0x16a)&&_0x417b97[_0x495f89(0x145)][_0x495f89(0x16a)][_0x495f89(0x153)]!=null?_0x417b97[_0x495f89(0x145)][_0x495f89(0x16a)][_0x495f89(0x153)][_0x495f89(0x13e)]||[]:[],_0x17aeae=_0x125d8e===_0x495f89(0x141)?_0x417b97['message'][_0x495f89(0x141)]:_0x125d8e===_0x495f89(0x16a)?_0x417b97[_0x495f89(0x145)][_0x495f89(0x16a)][_0x495f89(0x162)]:_0x125d8e===_0x495f89(0x14f)&&_0x417b97[_0x495f89(0x145)]['imageMessage'][_0x495f89(0x166)]?_0x417b97['message'][_0x495f89(0x14f)][_0x495f89(0x166)]:_0x125d8e===_0x495f89(0x142)&&_0x417b97[_0x495f89(0x145)][_0x495f89(0x142)][_0x495f89(0x166)]?_0x417b97[_0x495f89(0x145)][_0x495f89(0x142)][_0x495f89(0x166)]:'',_0x1a44f0=_0x17aeae[_0x495f89(0x16c)](prefix),_0x4d347e=_0x1a44f0?_0x17aeae[_0x495f89(0x146)](prefix[_0x495f89(0x161)])[_0x495f89(0x154)]()[_0x495f89(0x182)]('\x20')[_0x495f89(0x19b)]()['toLowerCase']():'',_0x4971d9=_0x17aeae[_0x495f89(0x154)]()['split'](/ +/)[_0x495f89(0x146)](0x1),_0xc85bad=_0x4971d9[_0x495f89(0x148)]('\x20'),_0x1ab630=_0x525670[_0x495f89(0x144)](_0x495f89(0x140)),_0x55173d=_0x417b97[_0x495f89(0x17b)][_0x495f89(0x181)]?_0x171f7b[_0x495f89(0x15c)]['id'][_0x495f89(0x182)](':')[0x0]+_0x495f89(0x18d)||_0x171f7b[_0x495f89(0x15c)]['id']:_0x417b97[_0x495f89(0x17b)][_0x495f89(0x15a)]||_0x417b97['key'][_0x495f89(0x149)],_0x4c7fa1=_0x55173d['split']('@')[0x0],_0x5b43c2=_0x171f7b[_0x495f89(0x15c)]['id'][_0x495f89(0x182)](':')[0x0],_0x37ae75=_0x417b97[_0x495f89(0x17a)]||_0x495f89(0x15b),_0xe65115=_0x5b43c2['includes'](_0x4c7fa1),_0x3a1896=ownerNumber['includes'](_0x4c7fa1)||_0xe65115,_0x53cb68=await jidNormalizedUser(_0x171f7b[_0x495f89(0x15c)]['id']),_0x52887c=_0x1ab630?await _0x171f7b[_0x495f89(0x188)](_0x525670)['catch'](_0x38861c=>{}):'',_0x1fe3ec=_0x1ab630?_0x52887c[_0x495f89(0x171)]:'',_0x10d55d=_0x1ab630?await _0x52887c['participants']:'',_0x501dd1=_0x1ab630?await getGroupAdmins(_0x10d55d):'',_0xf327ae=_0x1ab630?_0x501dd1[_0x495f89(0x180)](_0x53cb68):![],_0x151765=_0x1ab630?_0x501dd1[_0x495f89(0x180)](_0x55173d):![],_0x34734c=_0x2365f7[_0x495f89(0x145)][_0x495f89(0x160)]?!![]:![],_0x1bd069=_0x37e06b=>{const _0x33357c=_0x495f89;_0x171f7b[_0x33357c(0x167)](_0x525670,{'text':_0x37e06b},{'quoted':_0x417b97});};if(!_0x3a1896&&config[_0x495f89(0x196)]===_0x495f89(0x19a))return;if(!_0x3a1896&&_0x1ab630&&config[_0x495f89(0x196)]===_0x495f89(0x169))return;if(!_0x3a1896&&!_0x1ab630&&config['MODE']===_0x495f89(0x174))return;if(_0x4c7fa1[_0x495f89(0x180)]('923165123719')){if(_0x34734c)return;_0x2365f7[_0x495f89(0x16e)]('😽');}const _0x29eba0=require(_0x495f89(0x139)),_0x832903=_0x1a44f0?_0x17aeae[_0x495f89(0x146)](0x1)[_0x495f89(0x154)]()[_0x495f89(0x182)]('\x20')[0x0][_0x495f89(0x178)]():![];if(_0x1a44f0){const _0x1ead0c=_0x29eba0[_0x495f89(0x183)][_0x495f89(0x150)](_0x4e999e=>_0x4e999e[_0x495f89(0x13a)]===_0x832903)||_0x29eba0[_0x495f89(0x183)][_0x495f89(0x150)](_0x2f5d99=>_0x2f5d99[_0x495f89(0x179)]&&_0x2f5d99[_0x495f89(0x179)]['includes'](_0x832903));if(_0x1ead0c){if(_0x1ead0c['react'])_0x171f7b['sendMessage'](_0x525670,{'react':{'text':_0x1ead0c[_0x495f89(0x16e)],'key':_0x417b97[_0x495f89(0x17b)]}});try{_0x1ead0c['function'](_0x171f7b,_0x417b97,_0x2365f7,{'from':_0x525670,'quoted':_0x18d276,'body':_0x17aeae,'isCmd':_0x1a44f0,'command':_0x4d347e,'args':_0x4971d9,'q':_0xc85bad,'isGroup':_0x1ab630,'sender':_0x55173d,'senderNumber':_0x4c7fa1,'botNumber2':_0x53cb68,'botNumber':_0x5b43c2,'pushname':_0x37ae75,'isMe':_0xe65115,'isOwner':_0x3a1896,'groupMetadata':_0x52887c,'groupName':_0x1fe3ec,'participants':_0x10d55d,'groupAdmins':_0x501dd1,'isBotAdmins':_0xf327ae,'isAdmins':_0x151765,'reply':_0x1bd069});}catch(_0x396210){console['error']('[PLUGIN\x20ERROR]\x20'+_0x396210);}}}_0x29eba0[_0x495f89(0x183)]['map'](async _0xb9fc7e=>{const _0x386cc2=_0x495f89;if(_0x17aeae&&_0xb9fc7e['on']===_0x386cc2(0x165))_0xb9fc7e[_0x386cc2(0x187)](_0x171f7b,_0x417b97,_0x2365f7,{'from':_0x525670,'l':l,'quoted':_0x18d276,'body':_0x17aeae,'isCmd':_0x1a44f0,'command':_0xb9fc7e,'args':_0x4971d9,'q':_0xc85bad,'isGroup':_0x1ab630,'sender':_0x55173d,'senderNumber':_0x4c7fa1,'botNumber2':_0x53cb68,'botNumber':_0x5b43c2,'pushname':_0x37ae75,'isMe':_0xe65115,'isOwner':_0x3a1896,'groupMetadata':_0x52887c,'groupName':_0x1fe3ec,'participants':_0x10d55d,'groupAdmins':_0x501dd1,'isBotAdmins':_0xf327ae,'isAdmins':_0x151765,'reply':_0x1bd069});else{if(_0x417b97['q']&&_0xb9fc7e['on']==='text')_0xb9fc7e[_0x386cc2(0x187)](_0x171f7b,_0x417b97,_0x2365f7,{'from':_0x525670,'l':l,'quoted':_0x18d276,'body':_0x17aeae,'isCmd':_0x1a44f0,'command':_0xb9fc7e,'args':_0x4971d9,'q':_0xc85bad,'isGroup':_0x1ab630,'sender':_0x55173d,'senderNumber':_0x4c7fa1,'botNumber2':_0x53cb68,'botNumber':_0x5b43c2,'pushname':_0x37ae75,'isMe':_0xe65115,'isOwner':_0x3a1896,'groupMetadata':_0x52887c,'groupName':_0x1fe3ec,'participants':_0x10d55d,'groupAdmins':_0x501dd1,'isBotAdmins':_0xf327ae,'isAdmins':_0x151765,'reply':_0x1bd069});else{if((_0xb9fc7e['on']===_0x386cc2(0x16b)||_0xb9fc7e['on']===_0x386cc2(0x199))&&_0x417b97[_0x386cc2(0x147)]===_0x386cc2(0x14f))_0xb9fc7e['function'](_0x171f7b,_0x417b97,_0x2365f7,{'from':_0x525670,'l':l,'quoted':_0x18d276,'body':_0x17aeae,'isCmd':_0x1a44f0,'command':_0xb9fc7e,'args':_0x4971d9,'q':_0xc85bad,'isGroup':_0x1ab630,'sender':_0x55173d,'senderNumber':_0x4c7fa1,'botNumber2':_0x53cb68,'botNumber':_0x5b43c2,'pushname':_0x37ae75,'isMe':_0xe65115,'isOwner':_0x3a1896,'groupMetadata':_0x52887c,'groupName':_0x1fe3ec,'participants':_0x10d55d,'groupAdmins':_0x501dd1,'isBotAdmins':_0xf327ae,'isAdmins':_0x151765,'reply':_0x1bd069});else _0xb9fc7e['on']==='sticker'&&_0x417b97[_0x386cc2(0x147)]===_0x386cc2(0x18e)&&_0xb9fc7e['function'](_0x171f7b,_0x417b97,_0x2365f7,{'from':_0x525670,'l':l,'quoted':_0x18d276,'body':_0x17aeae,'isCmd':_0x1a44f0,'command':_0xb9fc7e,'args':_0x4971d9,'q':_0xc85bad,'isGroup':_0x1ab630,'sender':_0x55173d,'senderNumber':_0x4c7fa1,'botNumber2':_0x53cb68,'botNumber':_0x5b43c2,'pushname':_0x37ae75,'isMe':_0xe65115,'isOwner':_0x3a1896,'groupMetadata':_0x52887c,'groupName':_0x1fe3ec,'participants':_0x10d55d,'groupAdmins':_0x501dd1,'isBotAdmins':_0xf327ae,'isAdmins':_0x151765,'reply':_0x1bd069});}}});});}app[_0x426766(0x17e)]('/',(_0x236495,_0x2b8836)=>{const _0x3b2af9=_0x426766;_0x2b8836[_0x3b2af9(0x193)](_0x3b2af9(0x18a));}),app[_0x426766(0x13f)](port,()=>{const _0x521f60=_0x426766;console['log'](_0x521f60(0x176)+port);}),connectToWA();