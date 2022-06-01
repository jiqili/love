const keys =  {q: '1-', w: '1', e: '1+', r: '2-', t: '2', y: '2+', u: '3-', i: '3', o: '3+', p: '4-', a: '4', s: '4+',d: '5-', f: '5', g: '5+', h: '6-', j: '6', k: '6+', l: '7-', z: '7', x: '7+', c: '1-', v: '1', b: '1+', n: '2-', m: '2', comma: '2+', period: '3-'}
const words = ['<p>数不完的阴晴换圆缺</p><p>半生风雪...</p>',
'<p>嗨，你好啊，我心爱的女孩。</p>',
'<p>秋天的落叶在地上翻滚了几圈， 两只手在空中晃着晃着就牵在了一起。</p>',
'<p>该怎样表述爱意呢，用那些老掉牙的情话还是热烈的吻。</p>',
'<p>我本来就是一个极其普通的男孩，也无甚才气，只因为喜欢你才平添了一些特别。</p>',
'<p>出于浪漫，我应该说我会永远爱你，但基于现实，我只能说在这一刻，没有人能比我更爱你。</p>',
'<p>艺术家和诗人能将蓬勃的情感抽象化，为人歌颂，艳绝千古。我憋了三天的心事，最后落笔只会写我喜欢你。</p>',
'<p>我见过很多好看的女生，她们像清风似烈火，但都没有让我如此强烈地思念。你什么都没有做，只是坐在那里笑着和别人说话，我便忍不住偷看。</p>',
'<p>我好苦恼，我该怎么讨你欢心呢，我敏感自卑患得患失，这样子会吓跑你吗。</p>',
'<p>我含蓄吗，可我的喜欢明明已经直白地暴露在太阳下，教人一眼就瞧了出来。</p>',
'<p>智者不如爱河，而我终究还是占得了这人间的一味愚。笨拙如我只好把琐碎絮叨给你听。</p>',
'<p>我有时候也会累，会有些消极，不想和别人说话，但看到你就好了，会莫名地欣喜。</p>',
'<p>我想在薄雾的清晨为你热好豆浆叫你起床，想在霭霭的暮色里牵起你的手去散步。</p>',
'<p>我还是很喜欢你呀，像风走了八千里，不问归期，后半句是你教我的，你一定忘记了，这些相处中的片段我都刻骨铭心哈哈。</p>',
'<p>如果我们二十五岁在一起，我会向所有人告诉我有多喜欢你。</p>',
'<p>如果我们二十六岁还在一起，我会去你家见你的爸爸妈妈姐姐弟弟。</p>',
'<p>如果我们二十七岁还在一起，我会穿上最帅的西服捧着最香艳的玫瑰去迎接你。</p>',
'<p>所以，亲爱的你要不要和我在一起呢？</p>',]
function pianoVideo(name) {
  let x = document.createElement("audio");
  x.setAttribute("src", `./video/${name}.mp4`);
  x.setAttribute("autoplay","autoplay");
  if(x.paused) {
    x.paused = false
    x.play()
  }
}
function pianoInputHandle(command, index) {
  let word = document.getElementById('word')
  word.innerHTML = words[index]
  if(command !== '' && command.charCodeAt()) {
    pianoVideo(command)
  }
}
function pianoInput() {
  let value = document.getElementById('input').value
  value = value.toLowerCase()
  if(value === '') pianoInputHandle('', 0)
  else if(value === 'l') pianoInputHandle('6', 1)
  else if(value === 'li') pianoInputHandle('5', 2)
  else if(value === 'lip') pianoInputHandle('6', 3)
  else if(value === 'lipi') pianoInputHandle('1+', 4)
  else if(value === 'lipin') pianoInputHandle('2+', 5)
  else if(value === 'liping') pianoInputHandle('3+', 6)
  else if(value === 'lipingl') pianoInputHandle('2+', 7)
  else if(value === 'lipingli') pianoInputHandle('5', 8)
  else if(value === 'lipinglip') pianoInputHandle('6', 9)
  else if(value === 'lipinglipi') pianoInputHandle('3-', 10)
  else if(value === 'lipinglipin') pianoInputHandle('6-', 11)
  else if(value === 'lipingliping') pianoInputHandle('7-', 12)
  else if(value === 'lipingliping,') pianoInputHandle('1', 13)
  else if(value === 'lipingliping,w') pianoInputHandle('3+', 14)
  else if(value === 'lipingliping,wx') pianoInputHandle('5+', 15)
  else if(value === 'lipingliping,wxh') pianoInputHandle('3+', 16)
  else if(value === 'lipingliping,wxhn') pianoInputHandle('5', 17)
  else if(value === 'lipingliping,wxhn.') {
    pianoVideo('6')
    setTimeout(()=>{
      window.location.href = './huiyi.html'
      // pianoVideo('bsx')
    },1000)
  }
  else {
    let ch = value.charAt(value.length-1)
    let ch_code = ch.charCodeAt(0)
    if(!(ch_code>=97 && ch_code<=122)) return
    if(ch === ',') ch='comma'
    else if(ch === '.') ch='period'
    pianoVideo(keys[ch])
  }
}