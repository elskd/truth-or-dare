const cards=[
["truth",1,"Какое было твоё первое впечатление о партнёре?"],
["truth",1,"Что в партнёре ты заметил(а) первым?"],
["truth",1,"Когда ты впервые понял(а), что начинаешь влюбляться?"],
["truth",1,"Какая привычка партнёра тебя особенно умиляет?"],
["truth",1,"Какая фраза партнёра тебе особенно запомнилась?"],
["truth",1,"Что в партнёре оказалось совсем не таким, как ты ожидал(а)?"],
["truth",1,"Какой ваш момент ты вспоминаешь чаще всего?"],
["truth",1,"В какой момент с партнёром тебе было особенно весело?"],
["truth",1,"Что в партнёре кажется тебе самым милым?"],
["truth",1,"Какой ваш совместный вечер ты бы повторил(а)?"],
["truth",1,"Какая фотография партнёра тебе нравится больше всего?"],
["truth",1,"Что ты думал(а) о ваших отношениях после первой встречи?"],
["truth",1,"Что тебе в партнёре сначала было непонятно или непривычно?"],
["truth",1,"В какой момент ты понял(а), что между вами уже что-то серьёзное?"],
["truth",1,"Что ты хотел(а) сказать партнёру раньше, но не сказал(а)?"],
["dare",1,"Обними партнёра на 20 секунд."],
["dare",1,"Сделай партнёру комплимент, который никогда раньше не говорил(а)."],
["truth",1,"Что в ваших отношениях тебе сейчас кажется самым лёгким и приятным?"],
["truth",1,"Какой момент начала ваших отношений тебе хочется пережить ещё раз?"],
["truth",1,"Что тебе особенно нравится в том, как вы проводите время вместе?"],

["truth",2,"Что ты больше всего ценишь в ваших отношениях?"],
["truth",2,"Чего тебе сейчас не хватает в отношениях?"],
["truth",2,"В чём вы с партнёром больше всего похожи?"],
["truth",2,"В чём вы максимально разные?"],
["truth",2,"Что ты боишься потерять в ваших отношениях?"],
["truth",2,"Когда рядом с партнёром ты чувствуешь себя наиболее спокойно?"],
["truth",2,"Что партнёр делает такого, из-за чего ты чувствуешь себя любимым(ой)?"],
["truth",2,"Что тебе сложно говорить партнёру напрямую?"],
["truth",2,"Как ты понимаешь, что человек действительно тебя любит?"],
["truth",2,"Что ты хотел(а) бы изменить в ваших отношениях?"],
["truth",2,"Какая черта партнёра тебе нравится больше всего?"],
["truth",2,"За что ты особенно благодарен(на) партнёру?"],
["truth",2,"Что тебе хочется делать вместе чаще?"],
["truth",2,"Что ты хочешь, чтобы стало лучше в ваших отношениях в ближайший год?"],
["truth",2,"Что для тебя является настоящим проявлением верности?"],
["truth",2,"Что тебе важнее получать от партнёра: внимание, заботу или свободу? Почему?"],
["truth",2,"Что помогает тебе чувствовать себя желанным(ой) в отношениях?"],
["truth",2,"Какой совместный опыт ты больше всего хочешь попробовать в будущем?"],
["dare",2,"Скажи партнёру три вещи, за которые ты его/её ценишь."],
["dare",2,"Обними партнёра так, будто вы не виделись месяц."],

["truth",3,"Что в ваших отношениях тебя сейчас беспокоит, но тебе сложно об этом заговорить?"],
["truth",3,"Есть ли что-то, о чём ты боишься сказать партнёру из-за его/её реакции?"],
["truth",3,"В какой момент ваших отношений ты чувствовал(а) себя наиболее неуверенно?"],
["truth",3,"Есть ли у тебя страх насчёт ваших отношений, который ты обычно не показываешь?"],
["truth",3,"Что ты хотел(а) бы изменить в том, как вы общаетесь во время конфликтов?"],
["truth",3,"Есть ли что-то после истории с изменой, что ты до сих пор переживаешь или о чём тебе сложно говорить?"],
["truth",3,"Что тебе нужно от партнёра, чтобы чувствовать больше доверия и спокойствия?"],
["truth",3,"Есть ли что-то, за что ты до сих пор злишься на партнёра, хотя внешне всё нормально?"],
["truth",3,"Что ты хотел(а) бы, чтобы партнёр лучше понимал о твоих чувствах?"],
["truth",3,"Что ты сам(а) хотел(а) бы делать по-другому в этих отношениях?"],
["truth",3,"Что для тебя является самым болезненным в ссорах?"],
["truth",3,"Когда ты чувствуешь, что партнёр действительно слышит тебя?"],
["truth",3,"Что тебе сложнее всего попросить у партнёра?"],
["truth",3,"Как ты понимаешь, что снова можешь полностью доверять человеку после боли?"],
["truth",3,"Есть ли тема, которую ты давно хочешь обсудить, но всё откладываешь?"],
["truth",3,"Что тебе хотелось бы услышать от партнёра после серьёзной ссоры?"],
["truth",3,"Что ты никогда не хочешь потерять между вами, даже если отношения будут меняться?"],
["dare",3,"Обними партнёра и скажи одну вещь, которую ты хочешь сохранить между вами."],
["dare",3,"Смотри партнёру в глаза 30 секунд и ничего не говори."],
["truth",3,"Что во внешности или поведении партнёра сильнее всего тебя притягивает?"],

["truth",4,"Какое твоё сильное желание в отношениях ты пока не решался(лась) озвучить?"],
["truth",4,"Есть ли что-то, чего тебе хочется от партнёра больше, но ты боишься показаться требовательным(ой)?"],
["truth",4,"Что тебе хочется получать от партнёра чаще?"],
["truth",4,"Что тебе хочется давать партнёру чаще?"],
["truth",4,"Как ты понимаешь, что действительно доверяешь человеку?"],
["truth",4,"Есть ли у тебя фантазия, которую ты никогда никому не рассказывал(а)?"],
["truth",4,"Что тебе хотелось бы попробовать с партнёром, но ты не знаешь, как предложить?"],
["truth",4,"Что для тебя означает идеальная интимная близость?"],
["truth",4,"Какой формат интимной близости тебе хочется попробовать вместе?"],
["truth",4,"Какой жест, взгляд или прикосновение партнёра сильнее всего тебя привлекает?"],
["truth",4,"Что помогает тебе полностью расслабиться рядом с партнёром?"],
["truth",4,"Что для тебя важнее во время близости: чувствовать себя желанным(ой) или любимым(ой)?"],
["truth",4,"Что может моментально усилить твоё желание?"],
["truth",4,"Что, наоборот, моментально его убивает?"],
["truth",4,"Как тебе проще всего показать партнёру, что ты его/её хочешь?"],
["truth",4,"Что тебе хотелось бы чаще слышать от партнёра во время флирта?"],
["dare",4,"Назови три вещи в партнёре, которые сильнее всего тебя привлекают."],
["dare",4,"Скажи партнёру на ухо комплимент, который давно хотел(а) сказать."],
["dare",4,"Поцелуй партнёра так, как тебе хочется прямо сейчас."],
["dare",4,"Выбери одно нежное прикосновение, которое хочешь получить прямо сейчас."],

["truth",5,"Расскажи о своём самом сокровенном сексуальном желании, которым готов(а) поделиться."],
["truth",5,"Какой момент между вами сильнее всего тебя возбуждал?"],
["truth",5,"Какой формат интимной близости тебе больше всего хочется попробовать вместе?"],
["truth",5,"Что ты больше всего хочешь получать от партнёра во время интимной близости?"],
["truth",5,"Назови три вещи, которые сильнее всего тебя возбуждают в партнёре."],
["truth",5,"Какая часть прелюдии тебе нравится больше всего?"],
["truth",5,"Какую свою фантазию ты был(а) бы готов(а) однажды воплотить вместе?"],
["truth",5,"Что партнёр может сделать, чтобы ты моментально почувствовал(а) себя желанным(ой)?"],
["truth",5,"Какой поцелуй или вид прикосновения тебе хочется получить прямо сейчас?"],
["truth",5,"Что тебе хотелось бы попробовать этой ночью, если оба этого захотите?"],
["dare",5,"Закрой глаза и позволь партнёру выбрать одно нежное прикосновение."],
["dare",5,"Партнёр выбирает место, куда хочет получить от тебя поцелуй."],
["dare",5,"Скажи партнёру одну вещь, которую очень хочешь попробовать вместе."],
["dare",5,"Поцелуй партнёра так, как тебе хочется прямо сейчас."],
["dare",5,"Скажи партнёру на ухо одну сексуальную мысль, которая когда-либо приходила тебе в голову о нём/ней."],
["dare",5,"Опиши словами свою идеальную интимную сцену с партнёром."],
["dare",5,"Назови одну вещь, которую хочешь сделать партнёру прямо сейчас."],
["dare",5,"Выбери: долгий поцелуй или объятие. Сделайте выбранное."],
["dare",5,"Скажи партнёру то, чего тебе хочется от него/неё прямо сейчас."],
["dare",5,"Финал: если бы сегодня можно было исполнить одно взаимное желание, что бы ты выбрал(а)?"],

["wild",5,"Скажи честно, чего тебе сейчас больше всего хочется от партнёра."],
["wild",5,"Скажи одну сексуальную мысль, которая когда-либо приходила тебе в голову о партнёре."],
["wild",5,"Опиши словами свою идеальную интимную сцену с партнёром."],
["wild",5,"Партнёр выбирает: поцелуй или объятие."],
["wild",5,"Назови три вещи, которые сильнее всего тебя возбуждают в партнёре."],
["wild",5,"Партнёр называет место, куда хочет получить поцелуй."],
["wild",5,"В течение следующего раунда партнёр выбирает ваше романтическое или интимное действие."],
["wild",5,"Скажи то, чего тебе хочется от партнёра прямо сейчас."],
["wild",5,"Закрой глаза и позволь партнёру выбрать одно нежное прикосновение."],
["wild",5,"Финал: если бы сегодня можно было исполнить одно желание между вами, что бы ты выбрал(а)?"]
];

const state={view:"home",players:["Эля","Никита"],playerGenders:["female","male"],mode:"classic",count:20,turn:0,played:0,deck:[],current:null};

const $=id=>document.getElementById(id);
const modeNames={classic:"Микс",spicy:"Романтика",wild:"Флирт",inferno:"Страсть"};

function show(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  state.view=id.replace("View","");
}

function renderPlayers(){
  const list=$("playersList");
  list.innerHTML="";
  state.players.forEach((name,i)=>{
    if(!state.playerGenders[i])state.playerGenders[i]="female";
    const row=document.createElement("div");
    row.className="player-row";
    row.innerHTML=
      '<span class="player-number">'+(i+1)+'.</span>'+
      '<input class="name-input" type="text" maxlength="24" autocomplete="off" value="'+String(name).replace(/"/g,"&quot;")+'" placeholder="ИМЯ ИГРОКА">'+
      '<select class="gender-select" aria-label="Пол игрока">'+
        '<option value="female" '+(state.playerGenders[i]==="female"?"selected":"")+'>Девушка</option>'+
        '<option value="male" '+(state.playerGenders[i]==="male"?"selected":"")+'>Парень</option>'+
      '</select>'+
      (i>1?'<button class="remove-player" aria-label="Удалить">×</button>':'');
    row.querySelector(".name-input").addEventListener("input",e=>{
      state.players[i]=e.target.value;
    });
    row.querySelector(".gender-select").addEventListener("change",e=>{
      state.playerGenders[i]=e.target.value;
    });
    const remove=row.querySelector(".remove-player");
    if(remove)remove.onclick=()=>{
      state.players.splice(i,1);
      state.playerGenders.splice(i,1);
      renderPlayers();
    };
    list.appendChild(row);
  });
  $("playerCount").textContent=state.players.length;
}

function setupDeck(){
  // Берём только наши основные 100 карточек; дикие карты остаются отдельным дополнительным пулом.
  const main=cards.filter(c=>c[0]!=="wild");
  state.deck=main.slice(0,100).map(c=>[c[0],c[1],c[2],false]);
  state.played=0;
  state.turn=0;
  state.current=null;
}

function validPlayers(){
  return state.players.length>=2 && state.players.every(p=>p.trim());
}

function openTurn(){
  if(state.played>=state.count){finish();return}
  show("turnView");
  $("turnPlayer").textContent=state.players[state.turn%state.players.length];
  $("turnNumber").textContent=String(state.played+1);
}

function pick(choice){
  const remaining=state.deck.filter(c=>!c[4]);
  if(!remaining.length){finish();return}

  let options=remaining;
  if(choice==="truth")options=remaining.filter(c=>c[0]==="truth");
  if(choice==="dare")options=remaining.filter(c=>c[0]==="dare");
  if(!options.length)options=remaining;

  const c=options[Math.floor(Math.random()*options.length)];
  c[3]=true;
  state.current=c;

  $("questionPlayer").textContent=state.players[state.turn%state.players.length];
  $("questionProgress").textContent=String(state.played+1).padStart(2,"0")+" / "+state.count;
  $("questionLevel").textContent=c[0]==="wild"?"ДИКАЯ КАРТА":"УРОВЕНЬ "+c[1];
  $("questionType").textContent=c[0]==="truth"?"ПРАВДА":c[0]==="dare"?"ДЕЙСТВИЕ":"ДИКАЯ КАРТА";
  $("questionText").textContent=c[2];
  show("questionView");
}

function nextQuestion(){
  state.played++;
  state.turn++;
  if(state.played>=state.count){finish();return}
  openTurn();
}

function replaceQuestion(){
  if(state.current)state.current[4]=false;
  pick("random");
}

function finish(){
  show("finishView");
  $("finishText").textContent=modeNames[state.mode]+" · "+state.count+" вопросов";
}

$("startSetup").onclick=()=>{
  if(!validPlayers()){
    const firstEmpty=state.players.findIndex(p=>!p.trim());
    if(firstEmpty>=0){
      const input=$("playersList").querySelectorAll(".name-input")[firstEmpty];
      input.focus();
    }
    return;
  }
  show("setupView");
};

$("settingsTop").onclick=()=>show("settingsView");
$("settingsBack").onclick=()=>show("homeView");
$("setupBack").onclick=()=>show("homeView");
$("turnBack").onclick=()=>show("setupView");
$("questionBack").onclick=()=>openTurn();

const launchGameButton=$("launchGame");
if(launchGameButton){
  launchGameButton.onclick=()=>{
    if(!validPlayers())return;
    const activeMode=document.querySelector(".mode-card.active");
    const activeCount=document.querySelector(".count-btn.active");
    if(activeMode)state.mode=activeMode.dataset.mode;
    if(activeCount)state.count=Number(activeCount.dataset.count);
    setupDeck();
    openTurn();
  };
}

if(document.querySelectorAll(".mode-card").length)document.querySelectorAll(".mode-card").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".mode-card").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
});

if(document.querySelectorAll(".count-btn").length)document.querySelectorAll(".count-btn").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".count-btn").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
});

document.querySelectorAll(".choice-card").forEach(b=>b.onclick=()=>pick(b.dataset.choice));
$("nextQuestion").onclick=nextQuestion;
$("replaceBtn").onclick=replaceQuestion;
$("againBtn").onclick=()=>{setupDeck();openTurn()};
$("addPlayer").onclick=()=>{
  if(state.players.length<4){
    state.players.push("");
    state.playerGenders.push("female");
    renderPlayers();
    const inputs=$("playersList").querySelectorAll(".name-input");
    inputs[inputs.length-1].focus();
  }
};

renderPlayers();

setTimeout(()=>{
  $("loader").classList.add("hidden");
  show("homeView");
},1500);

/* QUESTION BANK + ADMIN */
const QUESTION_BANK_KEY="truthDareQuestionBanksV1";
const ADMIN_MODES=[
  ["classic","Микс"],["spicy","Романтика"],["wild","Флирт"],["inferno","Страсть"]
];
let adminMode="classic";
let adminLevel=1;

function makeDefaultBanks(){
  const base=cards.map((c,i)=>({
    id:i,
    type:c[0],
    level:Number(c[1]),
    gender:"both",
    text:c[2]
  }));
  const result={};
  ADMIN_MODES.forEach(([mode])=>{
    result[mode]=base.map(q=>({...q}));
  });
  return result;
}
function loadQuestionBanks(){
  try{
    const saved=JSON.parse(localStorage.getItem(QUESTION_BANK_KEY)||"null");
    if(saved && ADMIN_MODES.every(([m])=>Array.isArray(saved[m]))){
      ADMIN_MODES.forEach(([m])=>saved[m]=saved[m].map(q=>({...q,gender:q.gender||"both"})));
      return saved;
    }
  }catch(e){}
  return makeDefaultBanks();
}
let questionBanks=loadQuestionBanks();

function saveQuestionBanks(){
  localStorage.setItem(QUESTION_BANK_KEY,JSON.stringify(questionBanks));
}

function getActiveQuestions(){
  return questionBanks[state.mode]||makeDefaultBanks().classic;
}

function setupDeck(){
  state.deck=getActiveQuestions()
    .filter(q=>q.text.trim())
    .map(q=>[q.type,q.level,q.text,q.gender||"both",false])
    .sort((a,b)=>a[1]-b[1]);
  state.played=0;
  state.turn=0;
  state.current=null;
  state.currentLevel=1;
}

function pick(choice){
  const remaining=state.deck.filter(c=>!c[3]);
  if(!remaining.length){finish();return;}

  const minLevel=state.currentLevel||1;
  const playerGender=state.playerGenders[state.turn%state.players.length]||"female";
  let pool=remaining.filter(c=>c[1]>=minLevel && (c[3]==="both" || c[3]===playerGender));
  if(!pool.length){finish();return;}

  if(choice==="truth" || choice==="dare"){
    const typed=pool.filter(c=>c[0]===choice);
    if(typed.length) pool=typed;
    else{
      const next=remaining.filter(c=>c[1]>=minLevel && (c[3]==="both" || c[3]===playerGender) && c[0]===choice);
      if(next.length) pool=next;
      else pool=remaining.filter(c=>c[1]>=minLevel && (c[3]==="both" || c[3]===playerGender));
    }
  }

  const next=pool[0];
  next[4]=true;
  state.current=next;
  state.currentLevel=next[1];

  $("questionPlayer").textContent=state.players[state.turn%state.players.length];
  $("questionProgress").textContent=String(state.played+1).padStart(2,"0")+" / "+state.count;
  $("questionLevel").textContent=next[0]==="wild"?"ДИКАЯ КАРТА":"УРОВЕНЬ "+next[1];
  $("questionType").textContent=next[0]==="truth"?"ПРАВДА":next[0]==="dare"?"ДЕЙСТВИЕ":"ДИКАЯ КАРТА";
  $("questionText").textContent=next[2];
  show("questionView");
}

function renderAdmin(){
  const modeGrid=$("adminModeGrid");
  const levelGrid=$("adminLevelGrid");
  const list=$("adminList");

  modeGrid.innerHTML=ADMIN_MODES.map(([id,name])=>
    '<button class="admin-tab '+(id===adminMode?"active":"")+'" data-admin-mode="'+id+'">'+name+'</button>'
  ).join("");

  levelGrid.innerHTML=[1,2,3,4,5].map(level=>
    '<button class="admin-tab '+(level===adminLevel?"active":"")+'" data-admin-level="'+level+'">Уровень '+level+'</button>'
  ).join("");

  const addModeOptions=ADMIN_MODES.map(([id,name])=>
    '<option value="'+id+'" '+(id===adminMode?"selected":"")+'>'+name+'</option>'
  ).join("");

  list.innerHTML=
    '<div class="admin-add">'+
      '<div class="admin-add-title">Добавить вопрос</div>'+
      '<select id="adminAddMode" class="admin-select">'+addModeOptions+'</select>'+
      '<select id="adminAddLevel" class="admin-select">'+
        [1,2,3,4,5].map(level=>'<option value="'+level+'" '+(level===adminLevel?"selected":"")+'>Уровень '+level+'</option>').join("")+
      '</select>'+
      '<select id="adminAddType" class="admin-select">'+
        '<option value="truth">Правда</option>'+
        '<option value="dare">Действие</option>'+
      '</select>'+
      '<select id="adminAddGender" class="admin-select">'+
        '<option value="both" selected>Для обоих</option>'+
        '<option value="female">Для девушек</option>'+
        '<option value="male">Для парней</option>'+
      '</select>'+
      '<textarea id="adminNewQuestion" class="admin-new-text" placeholder="Напиши новый вопрос..."></textarea>'+
      '<button class="admin-save admin-add-btn" id="adminAddQuestion">Добавить вопрос</button>'+
    '</div>';

  const questions=(questionBanks[adminMode]||[])
    .filter(q=>q.level===adminLevel)
    .sort((a,b)=>{
      const typeOrder={truth:0,dare:1,wild:2};
      return (typeOrder[a.type]??9)-(typeOrder[b.type]??9);
    });

  list.innerHTML+=questions.map((q,index)=>
    '<div class="admin-card">'+
      '<div class="admin-card-head"><span class="admin-card-num">Вопрос '+(index+1)+'</span><span class="admin-card-type">'+
      (q.type==="truth"?"Правда":q.type==="dare"?"Действие":"Дикая карта")+
      '</span></div>'+
      '<select class="admin-select admin-question-gender" data-gender-id="'+q.id+'">'+
        '<option value="both" '+((q.gender||"both")==="both"?"selected":"")+'>Для обоих</option>'+
        '<option value="female" '+(q.gender==="female"?"selected":"")+'>Для девушек</option>'+
        '<option value="male" '+(q.gender==="male"?"selected":"")+'>Для парней</option>'+
      '</select>'+
      '<textarea data-question-id="'+q.id+'">'+escapeHtml(q.text)+'</textarea>'+
      '<button class="admin-save" data-save-id="'+q.id+'">Сохранить</button>'+
    '</div>'
  ).join("") || '<div class="admin-note">В этом уровне пока нет вопросов.</div>';

  modeGrid.querySelectorAll("[data-admin-mode]").forEach(b=>b.onclick=()=>{
    adminMode=b.dataset.adminMode;
    renderAdmin();
  });

  levelGrid.querySelectorAll("[data-admin-level]").forEach(b=>b.onclick=()=>{
    adminLevel=Number(b.dataset.adminLevel);
    renderAdmin();
  });

  $("adminAddQuestion").onclick=()=>{
    const text=$("adminNewQuestion").value.trim();
    const mode=$("adminAddMode").value;
    const level=Number($("adminAddLevel").value);
    const type=$("adminAddType").value;
    const gender=$("adminAddGender").value;

    if(!text){
      $("adminNewQuestion").focus();
      return;
    }

    const allQuestions=ADMIN_MODES.flatMap(([id])=>questionBanks[id]||[]);
    const nextId=allQuestions.reduce((max,q)=>Math.max(max,Number(q.id)||0),-1)+1;

    if(!questionBanks[mode])questionBanks[mode]=[];
    questionBanks[mode].push({
      id:nextId,
      type,
      level,
      gender,
      text
    });

    saveQuestionBanks();
    adminMode=mode;
    adminLevel=level;
    renderAdmin();
  };

  list.querySelectorAll("[data-save-id]").forEach(b=>b.onclick=()=>{
    const id=Number(b.dataset.saveId);
    const area=list.querySelector('textarea[data-question-id="'+id+'"]');
    const q=(questionBanks[adminMode]||[]).find(x=>x.id===id);
    const genderSelect=list.querySelector('[data-gender-id="'+id+'"]');

    if(q && area){
      q.text=area.value.trim();
      q.gender=genderSelect?genderSelect.value:"both";
      saveQuestionBanks();
      b.textContent="Сохранено";
      setTimeout(()=>{b.textContent="Сохранить"},900);
    }
  });
}
function escapeHtml(value){
  return String(value)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

const initAdminNavigation=()=>{
  const entry=$("adminEntry");
  const back=$("adminBack");
  if(entry){
    entry.onclick=null;
    entry.addEventListener("click",()=>{
      renderAdmin();
      show("adminView");
    });
  }
  if(back){
    back.onclick=null;
    back.addEventListener("click",()=>show("settingsView"));
  }
};
initAdminNavigation();
